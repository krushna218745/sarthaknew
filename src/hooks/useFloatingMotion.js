import { useState, useEffect, useRef, useCallback } from 'react';

const SAFE_PADDING = 120;
const MIN_DISTANCE_BETWEEN = 200;

// Easing function for smooth motion
const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function useFloatingMotion(characterId, otherPosition) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [action, setAction] = useState('idle');
    const [isVisible, setIsVisible] = useState(true);
    
    const animationRef = useRef(null);
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });
    const progressRef = useRef(0);
    const durationRef = useRef(3000);
    const startTimeRef = useRef(null);
    const startPosRef = useRef({ x: 0, y: 0 });

    // Check for reduced motion preference and mobile
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const mobileQuery = window.matchMedia('(max-width: 767px)');
        
        const checkVisibility = () => {
            setIsVisible(!mediaQuery.matches && !mobileQuery.matches);
        };
        
        checkVisibility();
        mediaQuery.addEventListener('change', checkVisibility);
        mobileQuery.addEventListener('change', checkVisibility);
        
        return () => {
            mediaQuery.removeEventListener('change', checkVisibility);
            mobileQuery.removeEventListener('change', checkVisibility);
        };
    }, []);

    // Get random position within safe bounds
    const getRandomPosition = useCallback(() => {
        const maxX = window.innerWidth - SAFE_PADDING * 2 - 100;
        const maxY = window.innerHeight - SAFE_PADDING * 2 - 100;
        
        let x = SAFE_PADDING + Math.random() * maxX;
        let y = SAFE_PADDING + Math.random() * maxY;
        
        // Avoid other character
        if (otherPosition) {
            const dx = x - otherPosition.x;
            const dy = y - otherPosition.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < MIN_DISTANCE_BETWEEN) {
                // Push away from other character
                const angle = Math.atan2(dy, dx);
                x = otherPosition.x + Math.cos(angle) * MIN_DISTANCE_BETWEEN;
                y = otherPosition.y + Math.sin(angle) * MIN_DISTANCE_BETWEEN;
                
                // Clamp to bounds
                x = Math.max(SAFE_PADDING, Math.min(window.innerWidth - SAFE_PADDING - 100, x));
                y = Math.max(SAFE_PADDING, Math.min(window.innerHeight - SAFE_PADDING - 100, y));
            }
        }
        
        return { x, y };
    }, [otherPosition]);

    // Initialize position
    useEffect(() => {
        const initialX = characterId === 1 
            ? SAFE_PADDING + Math.random() * 200 
            : window.innerWidth - SAFE_PADDING - 200 - Math.random() * 200;
        const initialY = window.innerHeight / 2 + (Math.random() - 0.5) * 200;
        
        currentRef.current = { x: initialX, y: initialY };
        targetRef.current = { x: initialX, y: initialY };
        setPosition({ x: initialX, y: initialY });
    }, [characterId]);

    // Animation loop
    useEffect(() => {
        if (!isVisible) return;

        let mounted = true;

        const animate = (timestamp) => {
            if (!mounted) return;

            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
                startPosRef.current = { ...currentRef.current };
            }

            const elapsed = timestamp - startTimeRef.current;
            const progress = Math.min(elapsed / durationRef.current, 1);
            const easedProgress = easeInOutCubic(progress);

            currentRef.current = {
                x: startPosRef.current.x + (targetRef.current.x - startPosRef.current.x) * easedProgress,
                y: startPosRef.current.y + (targetRef.current.y - startPosRef.current.y) * easedProgress,
            };

            setPosition({ ...currentRef.current });

            if (progress >= 1) {
                // Pick new target
                const newTarget = getRandomPosition();
                targetRef.current = newTarget;
                startPosRef.current = { ...currentRef.current };
                startTimeRef.current = null;
                durationRef.current = 4000 + Math.random() * 4000; // 4-8 seconds
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            mounted = false;
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isVisible, getRandomPosition]);

    // Random playful actions
    useEffect(() => {
        if (!isVisible) return;

        const actions = ['wave', 'jump', 'tilt', 'idle'];
        
        const doAction = () => {
            const randomAction = actions[Math.floor(Math.random() * actions.length)];
            setAction(randomAction);
            
            // Reset to idle after action completes
            setTimeout(() => {
                setAction('idle');
            }, 600);
        };

        // Random interval between 2-5 seconds
        const scheduleAction = () => {
            const delay = 2000 + Math.random() * 3000;
            return setTimeout(() => {
                doAction();
                scheduleAction();
            }, delay);
        };

        const timeoutId = scheduleAction();

        return () => clearTimeout(timeoutId);
    }, [isVisible]);

    return { position, action, isVisible };
}
