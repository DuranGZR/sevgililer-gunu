import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import photo from '../../assets/photo.png'
import styles from './Card.module.css'

const Card = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [displayedText, setDisplayedText] = useState('')
    const [typingComplete, setTypingComplete] = useState(false)
    const [sparkles, setSparkles] = useState([])

    const message = `	Tanıştığımızdan beri hayatıma huzur ve neşe kattın. Seninle konuşurken, yanındayken daha rahatım. Kendimi kasmadan, olduğum gibi hissedebiliyorum.

	Bu herkesle olan bir şey değil, sende kendiliğinden oluyor. Bana çok iyi geliyorsun.

	Henüz yolun başındayız, bunun farkındayım. Ama şu ana kadar yaşadıklarımız bana şunu gösterdi: seninle geçirdiğim her an benim için çok değerli.

	Bugün sadece şunu bilmeni istedim: iyiki hayatımdasın, seni çok seviyorum ❤️`

    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            if (index < message.length) {
                setDisplayedText(message.slice(0, index + 1))
                index++
            } else {
                clearInterval(timer)
                setTypingComplete(true)
            }
        }, 40)
        return () => clearInterval(timer)
    }, [])

    const handleFlip = () => {
        if (typingComplete) {
            const newSparkles = Array.from({ length: 12 }, (_, i) => ({
                id: Date.now() + i,
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 300,
                scale: 0.4 + Math.random() * 0.8,
                duration: 0.6 + Math.random() * 0.6,
            }))
            setSparkles(newSparkles)
            setTimeout(() => setSparkles([]), 1500)
            setIsFlipped(!isFlipped)
        }
    }

    const hearts = [
        { top: '12px', left: '10px', size: '1.5rem', rotate: '-15deg' },
        { top: '8px', right: '30px', size: '1.1rem', rotate: '10deg' },
        { top: '55px', left: '6px', size: '0.9rem', rotate: '-20deg' },
        { top: '65px', right: '10px', size: '1.3rem', rotate: '15deg' },
        { bottom: '110px', left: '8px', size: '1.2rem', rotate: '-10deg' },
        { bottom: '90px', right: '6px', size: '1rem', rotate: '20deg' },
        { bottom: '35px', left: '25px', size: '0.85rem', rotate: '-25deg' },
        { bottom: '25px', right: '35px', size: '1.1rem', rotate: '5deg' },
    ]

    return (
        <div className={styles.wrapper}>
            {/* Sparkles on flip */}
            <AnimatePresence>
                {sparkles.map((s) => (
                    <motion.span
                        key={s.id}
                        className={styles.sparkle}
                        initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                        animate={{ x: s.x, y: s.y, opacity: 0, scale: s.scale }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: s.duration, ease: 'easeOut' }}
                    >
                        ✦
                    </motion.span>
                ))}
            </AnimatePresence>

            <div
                className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ''}`}
                onClick={handleFlip}
            >
                {/* FRONT SIDE */}
                <div className={styles.cardFront}>
                    <div className={styles.outerBorder}>
                        {hearts.map((h, i) => (
                            <span
                                key={i}
                                className={styles.heart}
                                style={{
                                    top: h.top,
                                    left: h.left,
                                    right: h.right,
                                    bottom: h.bottom,
                                    fontSize: h.size,
                                    transform: `rotate(${h.rotate})`
                                }}
                            >❤</span>
                        ))}

                        <div className={styles.innerArea}>
                            <div className={styles.heartHeader}>
                                <svg viewBox="0 0 100 90" className={styles.heartSvg}>
                                    <path
                                        d="M50 85 C20 55, 0 35, 0 20 C0 5, 15 0, 25 0 C35 0, 45 10, 50 20 C55 10, 65 0, 75 0 C85 0, 100 5, 100 20 C100 35, 80 55, 50 85Z"
                                        fill="none"
                                        stroke="#c9a87c"
                                        strokeWidth="2"
                                    />
                                </svg>
                                <span className={styles.headerText}>Canım Sevgilim,</span>
                            </div>

                            <div className={styles.messageBox}>
                                <p className={styles.message}>
                                    {displayedText}
                                    {!typingComplete && <span className={styles.cursor}>|</span>}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div className={styles.cardBack}>
                    <div className={styles.outerBorder}>
                        {hearts.map((h, i) => (
                            <span
                                key={i}
                                className={styles.heart}
                                style={{
                                    top: h.top,
                                    left: h.left,
                                    right: h.right,
                                    bottom: h.bottom,
                                    fontSize: h.size,
                                    transform: `rotate(${h.rotate})`
                                }}
                            >❤</span>
                        ))}

                        <div className={styles.innerArea}>
                            <div className={styles.photoFrame}>
                                <img src={photo} alt="Bizim fotoğrafımız" className={styles.photo} />
                            </div>
                            <p className={styles.photoCaption}>Sonsuza dek seninle... ❤</p>
                        </div>
                    </div>
                </div>
            </div>

            {typingComplete && !isFlipped && (
                <motion.div
                    className={styles.hint}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <span className={styles.flipIcon}>↻</span>
                </motion.div>
            )}

            {isFlipped && (
                <motion.div
                    className={styles.hint}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <span className={styles.flipIcon}>↺</span>
                </motion.div>
            )}
        </div>
    )
}

export default Card
