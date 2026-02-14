import { motion } from 'framer-motion';
import './MemeWall.css';

const memeGifs = [
    {
        url: 'https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif',
        caption: 'When SKY says "let\'s meet at 7"',
    },
    {
        url: 'https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif',
        caption: 'Sarthak checking his phone at 3 AM',
    },
    {
        url: 'https://media.giphy.com/media/3o7TKTDn976rzVgky4/giphy.gif',
        caption: 'When someone calls instead of texting',
    },
    {
        url: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
        caption: 'Sarthak pretending to be productive',
    },
    {
        url: 'https://media.giphy.com/media/GrUhLU9q3nyRG/giphy.gif',
        caption: 'Birthday boy realizing he\'s getting old',
    },
    {
        url: 'https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif',
        caption: 'The group chat when Sarthak says something smart',
    },
    {
        url: 'https://media.giphy.com/media/l0MYJnJQ4EiYLxvQ4/giphy.gif',
        caption: 'SKY group celebrating Sarthak\'s birthday',
    },
    {
        url: 'https://media.giphy.com/media/3o6fJ1BM7R2EBRDnxK/giphy.gif',
        caption: 'When the birthday cake arrives',
    },
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
