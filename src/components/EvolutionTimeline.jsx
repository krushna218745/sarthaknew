import { motion } from 'framer-motion';
import './EvolutionTimeline.css';

const evolutionStages = [
    {
        year: '2006',
        age: 'Baby Era',
        title: 'The Beginning 👶',
        description: 'A wild creature was born. The world was not prepared.',
        image: null, // Replace with actual image path
        emoji: '🍼',
        funFact: 'Probably cried more than he does now. Probably.',
    },
    {
        year: '2010',
        age: 'Toddler Era',
        title: 'Chaos Unlocked 🚶',
        description: 'Started walking, started talking, started annoying everyone.',
        image: null,
        emoji: '👣',
        funFact: 'Already had main character energy.',
    },
    {
        year: '2014',
        age: 'Kid Era',
        title: 'The Menace Phase 😈',
        description: 'Peak mischief. Teachers feared this child.',
        image: null,
        emoji: '🎒',
        funFact: 'Homework? Never heard of her.',
    },
    {
        year: '2018',
        age: 'Teen Era',
        title: 'The Awkward Years 🤓',
        description: 'Voice cracking, questionable haircuts, zero game.',
        image: null,
        emoji: '📱',
        funFact: 'Thought he was cool. He was not.',
    },
    {
        year: '2022',
        age: 'Young Adult Era',
        title: 'The Glow Up? 💅',
        description: 'Still figuring life out but now with more coffee.',
        image: null,
        emoji: '☕',
        funFact: 'Sleep schedule: Does not exist.',
    },
    {
        year: '2026',
        age: 'Present Day',
        title: 'THE LEGEND 👑',
        description: 'Officially 20! Same chaos, just legally allowed to do more stuff.',
        image: null,
        emoji: '🎂',
        funFact: 'Still the same dude. Just older.',
    },
];

export default function EvolutionTimeline() {
    return (
        <section className="evolution-section">
            <motion.h2
                className="section-title evolution-title"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                🧬 EVOLUTION OF THIS CREATURE 🧬
            </motion.h2>

            <motion.p
                className="evolution-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                From a tiny human to this absolute legend (debatable)
            </motion.p>

            <div className="timeline-container">
                <div className="timeline-line" />
                
                {evolutionStages.map((stage, index) => (
                    <motion.div
                        key={index}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, type: 'spring', stiffness: 80 }}
                    >
                        <motion.div
                            className="timeline-card"
                            whileHover={{ 
                                scale: 1.05, 
                                rotate: index % 2 === 0 ? 2 : -2,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="timeline-year-badge">{stage.year}</div>
                            
                            <div className="timeline-image-container">
                                {stage.image ? (
                                    <img src={stage.image} alt={stage.title} className="timeline-image" />
                                ) : (
                                    <div className="timeline-image-placeholder">
                                        <span className="placeholder-emoji">{stage.emoji}</span>
                                        <span className="placeholder-text">📸 Add Photo</span>
                                    </div>
                                )}
                            </div>

                            <div className="timeline-content">
                                <span className="timeline-age">{stage.age}</span>
                                <h3 className="timeline-card-title">{stage.title}</h3>
                                <p className="timeline-description">{stage.description}</p>
                                
                                <div className="timeline-funfact">
                                    <span className="funfact-label">💭 Fun Fact:</span>
                                    <span className="funfact-text">{stage.funFact}</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="timeline-dot"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                            whileHover={{ scale: 1.5 }}
                        >
                            {stage.emoji}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="evolution-footer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
            >
                <p>🎬 What a journey. What a creature. What a legend. 🎬</p>
            </motion.div>
        </section>
    );
}
