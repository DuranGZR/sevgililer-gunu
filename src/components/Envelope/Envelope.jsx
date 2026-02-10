import { motion } from 'framer-motion'
import styles from './Envelope.module.css'

const Envelope = ({ isOpen, onClick }) => {
    return (
        <motion.div
            className={styles.envelopeWrapper}
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -100 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className={`${styles.envelope} ${isOpen ? styles.open : ''}`}>
                {/* Envelope back */}
                <div className={styles.envelopeBack}></div>

                {/* Envelope front bottom */}
                <div className={styles.envelopeFront}>
                    <div className={styles.triangleBottom}></div>
                </div>

                {/* Envelope flap (top triangle) */}
                <div className={`${styles.envelopeFlap} ${isOpen ? styles.flapOpen : ''}`}>
                    <div className={styles.triangleTop}></div>
                </div>

                {/* Heart seal */}
                <motion.div
                    className={styles.heartSeal}
                    animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </motion.div>

                {/* Decorative hearts */}
                <div className={styles.decorativeHearts}>
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className={styles.miniHeart} style={{
                            '--delay': `${i * 0.1}s`,
                            '--x': `${Math.random() * 100}%`,
                            '--y': `${Math.random() * 100}%`
                        }}>❤</span>
                    ))}
                </div>
            </div>

            {/* Glow effect */}
            <div className={styles.glow}></div>
        </motion.div>
    )
}

export default Envelope
