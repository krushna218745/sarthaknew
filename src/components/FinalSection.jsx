import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import './FinalSection.css';

export default function FinalSection() {
    const handleFinalConfetti = () => {
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 7,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff2d95', '#39ff14', '#fff01f', '#00fff7', '#bf00ff'],
            });
            confetti({
                particleCount: 7,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff2d95', '#39ff14', '#fff01f', '#00fff7', '#bf00ff'],
            });
            if (Date.now() < end) requestAnimationFrame(frame);
        };
        frame();
    };

    return (
        <section className="final-section">
            <div className="final-content">
                <motion.div
                    className="final-emoji-row"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    🎂🎉🥳🎊🎈
                </motion.div>

                <motion.h2
                    className="final-title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    HAPPY BIRTHDAY SARTHAK! 🎉
                </motion.h2>

                <motion.p
                    className="final-message"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    Okay okay, jokes aside...
                </motion.p>

                <motion.div
                    className="final-real-message"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                >
                    <p>
                        You absolute legend. SKY wouldn't be SKY without you and your
                        chaotic energy. Here's to more inside jokes, more late-night
                        conversations, more dumb plans that somehow work out, and more
                        memories that we'll laugh about forever.
                    </p>
                    <p>
                        You're not just a friend, you're the friend who makes every moment
                        10x funnier (even when you're not trying). Keep being you, bro.
                        The world needs more Sarthaks. 🫡
                    </p>
                </motion.div>

                <motion.div
                    className="final-signature"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                >
                    <p>With love and maximum chaos,</p>
                    <p className="signature-name">— Team SKY 🌟</p>
                </motion.div>

                <motion.button
                    className="final-btn"
                    onClick={handleFinalConfetti}
                    whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                >
                    🎉 CLICK FOR FINAL CELEBRATION 🎉
                </motion.button>

                <motion.div
                    className="final-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.8 }}
                >
                    <p>Made with 💀, ☕, and questionable life choices</p>
                    <p className="copyright">© SKY Productions™ — Unauthorized crying is not permitted</p>
                </motion.div>
            </div>
        </section>
    );
}
