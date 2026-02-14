import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import './AwardCeremony.css';

const awards = [
    {
        trophy: '🏆',
        title: 'Most Likely to Reply "K"',
        category: 'Communication Excellence',
        presenter: 'SKY Official Committee',
    },
    {
        trophy: '👑',
        title: 'King of Last-Minute Plans',
        category: 'Time Management',
        presenter: 'Every Friend Ever',
    },
    {
        trophy: '🎭',
        title: 'Best Actor — "I\'m On My Way"',
        category: 'Performing Arts',
        presenter: 'The Group Chat',
    },
    {
        trophy: '🍕',
        title: 'Lifetime Achievement in Eating',
        category: 'Culinary Dedication',
        presenter: 'His Stomach',
    },
    {
        trophy: '📸',
        title: 'Most Unphotogenic Legend',
        category: 'Photography',
        presenter: 'Every Camera Ever',
    },
    {
        trophy: '🛋️',
        title: 'Professional Couch Expert',
        category: 'Sports & Athletics',
        presenter: 'His Couch',
    },
];

export default function AwardCeremony() {
    const handleTrophyClick = () => {
        // Gold confetti for award vibes
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FFD700', '#FFA500', '#FF6347', '#fff01f'],
        });
    };

    return (
        <section className="award-section">
            <motion.div
                className="award-header"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <h2 className="award-main-title">🏅 SKY OFFICIAL AWARDS 🏅</h2>
                <p className="award-subtitle">The Most Prestigious Ceremony in Delhi NCR</p>
                <p className="award-year">— EST. 2024 —</p>
            </motion.div>

            {/* Red Carpet Marquee */}
            <motion.div
                className="marquee-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="marquee">
                    <span className="marquee-text">
                        🌟 AND THE AWARD GOES TO... SARTHAK KHARCHE! 🌟 STANDING OVATION! 🌟 HISTORIC MOMENT! 🌟 THE CROWD GOES WILD! 🌟 SARTHAK! SARTHAK! SARTHAK! 🌟
                    </span>
                    <span className="marquee-text" aria-hidden="true">
                        🌟 AND THE AWARD GOES TO... SARTHAK KHARCHE! 🌟 STANDING OVATION! 🌟 HISTORIC MOMENT! 🌟 THE CROWD GOES WILD! 🌟 SARTHAK! SARTHAK! SARTHAK! 🌟
                    </span>
                </div>
            </motion.div>

            <div className="awards-grid">
                {awards.map((award, index) => (
                    <motion.div
                        key={index}
                        className="award-card"
                        initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: 'spring', stiffness: 120 }}
                        whileHover={{
                            scale: 1.08,
                            rotate: [0, -2, 2, 0],
                            transition: { rotate: { duration: 0.5 } },
                        }}
                        onClick={handleTrophyClick}
                    >
                        <motion.span
                            className="award-trophy"
                            animate={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                        >
                            {award.trophy}
                        </motion.span>
                        <div className="award-category">{award.category}</div>
                        <h3 className="award-name">{award.title}</h3>
                        <div className="award-presenter">
                            <span className="presented-by">Presented by:</span>
                            <span className="presenter-name">{award.presenter}</span>
                        </div>
                        <div className="award-winner">
                            <span className="winner-label">WINNER</span>
                            <span className="winner-name">SARTHAK KHARCHE</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Acceptance Speech */}
            <motion.div
                className="speech-bubble"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <p className="speech-text">
                    "I'd like to thank... nobody. I did this all by myself. Also, SKY group
                    is the best thing that happened to me. But mostly me. Thank you." 🎤⬇️
                </p>
                <span className="speech-author">— Sarthak (probably)</span>
            </motion.div>
        </section>
    );
}
