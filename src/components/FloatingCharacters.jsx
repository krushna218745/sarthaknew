import { useState, useCallback, useMemo } from 'react';
import useFloatingMotion from '../hooks/useFloatingMotion';
import '../styles/floatingCharacters.css';

// Import your character images here
// If you have separate images:
// import character1Img from '../assets/character1.png';
// import character2Img from '../assets/character2.png';

// Using the combined image for now - replace with individual if available
import charactersImg from '../assets/duo.png';

function FloatingCharacter({ id, otherPosition, onPositionUpdate, imageSrc, flipImage = false }) {
    const { position, action, isVisible } = useFloatingMotion(id, otherPosition);
    const [isClicked, setIsClicked] = useState(false);

    // Report position to parent for collision avoidance
    useMemo(() => {
        if (onPositionUpdate && position.x !== 0) {
            onPositionUpdate(position);
        }
    }, [position, onPositionUpdate]);

    const handleClick = useCallback(() => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 400);
    }, []);

    if (!isVisible) return null;

    const style = {
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: 0,
        top: 0,
    };

    const className = [
        'floating-character',
        `character-${id}`,
        `action-${action}`,
        isClicked ? 'clicked' : '',
    ].filter(Boolean).join(' ');

    return (
        <div
            className={className}
            style={style}
            onClick={handleClick}
            role="img"
            aria-label={`Floating character ${id}`}
        >
            <img 
                src={imageSrc} 
                alt="" 
                draggable={false}
                style={flipImage ? { transform: 'scaleX(-1)' } : {}}
            />
        </div>
    );
}

export default function FloatingCharacters({ disabled = false }) {
    const [char1Position, setChar1Position] = useState(null);
    const [char2Position, setChar2Position] = useState(null);

    if (disabled) return null;

    return (
        <div className="floating-characters-container" aria-hidden="true">
            <FloatingCharacter
                id={1}
                otherPosition={char2Position}
                onPositionUpdate={setChar1Position}
                imageSrc={charactersImg}
                flipImage={false}
            />
            <FloatingCharacter
                id={2}
                otherPosition={char1Position}
                onPositionUpdate={setChar2Position}
                imageSrc={charactersImg}
                flipImage={true}
            />
        </div>
    );
}
