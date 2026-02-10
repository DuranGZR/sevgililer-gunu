import { motion } from 'framer-motion'
import styles from './LoadingIntro.module.css'

const LoadingIntro = () => {
    return (
        <motion.div
            className={styles.loadingContainer}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Animated background */}
            <div className={styles.bgGlow}></div>

            {/* Main heart */}
            <motion.div
                className={styles.heartContainer}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2
                }}
            >
                <motion.div
                    className={styles.heart}
                    animate={{
                        scale: [1, 1.15, 1, 1.15, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    💕
                </motion.div>

                {/* Orbiting hearts */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={styles.orbitHeart}
                        style={{ '--index': i }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                    >
                        ❤
                    </motion.div>
                ))}
            </motion.div>

            {/* Text */}
            <motion.div
                className={styles.textContainer}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <h1 className={styles.title}>Sana Özel...</h1>
                <div className={styles.loadingDots}>
                    <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                    >💗</motion.span>
                    <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                    >💗</motion.span>
                    <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                    >💗</motion.span>
                </div>
            </motion.div>

            {/* Sparkles */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className={styles.sparkle}
                    style={{
                        '--x': `${Math.random() * 100}%`,
                        '--y': `${Math.random() * 100}%`,
                        '--delay': `${Math.random() * 2}s`
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                >
                    ✨
                </motion.div>
            ))}
        </motion.div>
    )
}

export default LoadingIntro
