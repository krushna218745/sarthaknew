import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './RoastSection.css';

const roasts = [
    {
        text: "Sarthak's WiFi password is probably 'password123' and he thinks he's a hacker 💀",
        emoji: '💻',
        reaction: 'https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif',
    },
    {
        text: "Bro googles 'how to be cool' and takes notes 📝",
        emoji: '🤓',
        reaction: 'https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif',
    },
    {
        text: "Sarthak's alarm: 6 AM. Sarthak waking up: 'maybe tomorrow' 😴",
        emoji: '⏰',
        reaction: 'https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif',
    },
    {
        text: "His search history is just 'how to look busy at work' and 'best excuses for being late' 🕵️",
        emoji: '🔍',
        reaction: 'https://media.giphy.com/media/3oEjI67Egb8G9jqs3m/giphy.gif',
    },
    {
        text: "Legend says Sarthak once tried to charge his phone by putting it in the microwave. Legend also says he denied it. 🤫",
        emoji: '📱',
        reaction: 'https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif',
    },
    {
        text: "Bro types 'lol' and sits there with a straight face 😐💀",
        emoji: '😐',
        reaction: 'https://media.giphy.com/media/10JhviFuU2gWD6/giphy.gif',
    },
];

export default function RoastSection() {
    const [currentRoast, setCurrentRoast] = useState(0);
    const [showReaction, setShowReaction] = useState(false);

    const nextRoast = () => {
        setShowReaction(false);
        setTimeout(() => {
            setCurrentRoast((prev) => (prev + 1) % roasts.length);
        }, 100);
    };

    const prevRoast = () => {
        setShowReaction(false);
        setTimeout(() => {
            setCurrentRoast((prev) => (prev - 1 + roasts.length) % roasts.length);
        }, 100);
    };

    return (
        <section className="roast-section">
            <motion.h2
                className="section-title roast-title"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 150 }}
            >
                🔥 ROAST ZONE 🔥
            </motion.h2>

            <motion.p
                className="roast-disclaimer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                ⚠️ ENTER AT YOUR OWN RISK • FEELINGS MAY BE HURT • SKY IS NOT RESPONSIBLE ⚠️
            </motion.p>

            <div className="roast-carousel">
                <button className="roast-nav roast-prev" onClick={prevRoast}>
                    ◀
                </button>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentRoast}
                        className="roast-card"
                        initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                        exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span className="roast-emoji">{roasts[currentRoast].emoji}</span>
                        <p className="roast-text">{roasts[currentRoast].text}</p>

                        <motion.button
                            className="reaction-btn"
                            onClick={() => setShowReaction(!showReaction)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {showReaction ? '🫣 Hide Reaction' : '😂 Show Reaction'}
                        </motion.button>

                        <AnimatePresence>
                            {showReaction && (
                                <motion.img
                                    src={roasts[currentRoast].reaction}
                                    alt="reaction"
                                    className="roast-reaction-gif"
                                    initial={{ opacity: 0, scale: 0, rotate: -20 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ type: 'spring' }}
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>

                <button className="roast-nav roast-next" onClick={nextRoast}>
                    ▶
                </button>
            </div>

            <div className="roast-counter">
                {roasts.map((_, i) => (
                    <span key={i} className={`roast-dot ${i === currentRoast ? 'active' : ''}`} />
                ))}
            </div>
        </section>
    );
}
