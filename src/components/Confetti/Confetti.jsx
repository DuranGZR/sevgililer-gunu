import { motion } from 'framer-motion'
import styles from './Confetti.module.css'

const Confetti = () => {
    // Elegant sparkles instead of confetti
    const sparkles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 1.5 + Math.random() * 1,
        scale: 0.5 + Math.random() * 0.5,
    }))

    return (
        <div className={styles.container}>
            {sparkles.map((s) => (
                <motion.div
                    key={s.id}
                    className={styles.sparkle}
                    style={{
                        left: `${s.x}%`,
                        transform: `scale(${s.scale})`
                    }}
                    initial={{
                        y: '50vh',
                        opacity: 0,
                        scale: 0
                    }}
                    animate={{
                        y: ['50vh', '30vh', '60vh'],
                        opacity: [0, 1, 0],
                        scale: [0, s.scale, 0]
                    }}
                    transition={{
                        duration: s.duration,
                        delay: s.delay,
                        ease: 'easeOut'
                    }}
                >
                    ✦
                </motion.div>
            ))}
        </div>
    )
}

export default Confetti
