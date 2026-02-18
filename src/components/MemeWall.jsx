import { motion } from 'framer-motion';
import './MemeWall.css';

const memeGifs = [
    {
        url: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
        caption: 'When SKY says "let\'s meet at 7"',
    },
    {
        url: 'https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif',
        caption: 'Sarthak checking his phone at 3 AM',
    },
    {
        url: 'https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif',
        caption: 'When someone calls instead of texting',
    },
    {
        url: 'https://media.giphy.com/media/kyLYXonQYYfwYDIeZl/giphy.gif',
        caption: 'Sarthak pretending to be productive',
    },
    {
        url: 'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif',
        caption: 'Birthday boy realizing he\'s getting old',
    },
    {
        url: 'https://media.giphy.com/media/3oEjI67Egb8G9jqs3m/giphy.gif',
        caption: 'The group chat when Sarthak says something smart',
    },
    {
        url: 'https://media.giphy.com/media/g9582DNuQppxC/giphy.gif',
        caption: 'SKY group celebrating Sarthak\'s birthday',
    },
    {
        url: 'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif',
        caption: 'When the birthday cake arrives',
    },
];

// Placeholder slots for uploading your friend's funny photos
const photoSlots = [
    { caption: '📸 Add your funniest photo of him here!', emoji: '🤪' },
    { caption: '📸 That embarrassing pic goes here', emoji: '😭' },
    { caption: '📸 The "candid" disaster photo', emoji: '💀' },
    { caption: '📸 His most confused face ever', emoji: '🤔' },
];

export default function MemeWall() {
    return (
        <section className="meme-wall-section">
            <motion.h2
                className="section-title meme-title"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                💀 THE MEME WALL OF FAME 💀
            </motion.h2>

            <motion.p
                className="meme-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Every GIF carefully curated to describe Sarthak's life
            </motion.p>

            {/* Upload Your Photos Section */}
            <motion.div
                className="upload-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h3 className="upload-title">📷 HIS FUNNY PHOTOS (Add Your Own!)</h3>
                <div className="photo-slots-grid">
                    {photoSlots.map((slot, index) => (
                        <motion.div
                            key={index}
                            className="photo-slot"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                        >
                            <div className="slot-placeholder">
                                <span className="slot-emoji">{slot.emoji}</span>
                                <span className="slot-text">{slot.caption}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* GIF Meme Grid */}
            <motion.h3
                className="gif-section-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                🎬 REACTION GIFS THAT DESCRIBE HIM
            </motion.h3>

            <div className="meme-grid">
                {memeGifs.map((meme, index) => (
                    <motion.div
                        key={index}
                        className="meme-card"
                        initial={{ opacity: 0, scale: 0.5, rotate: Math.random() * 10 - 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: 'spring', stiffness: 150 }}
                        whileHover={{
                            scale: 1.1,
                            rotate: Math.random() > 0.5 ? 3 : -3,
                            zIndex: 10,
                        }}
                    >
                        <img src={meme.url} alt={meme.caption} className="meme-gif" loading="lazy" />
                        <div className="meme-caption">{meme.caption}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
