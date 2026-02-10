import { useMemo } from 'react'
import styles from './HeartRain.module.css'

const HeartRain = () => {
    const hearts = useMemo(() => {
        return [...Array(30)].map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 15 + 8,
            duration: Math.random() * 8 + 6,
            delay: Math.random() * 10,
            opacity: Math.random() * 0.5 + 0.2,
            type: Math.random() > 0.5 ? '❤' : '💕'
        }))
    }, [])

    return (
        <div className={styles.heartRain}>
            {hearts.map((heart) => (
                <span
                    key={heart.id}
                    className={styles.heart}
                    style={{
                        '--left': heart.left,
                        '--size': `${heart.size}px`,
                        '--duration': `${heart.duration}s`,
                        '--delay': `${heart.delay}s`,
                        '--opacity': heart.opacity
                    }}
                >
                    {heart.type}
                </span>
            ))}
        </div>
    )
}

export default HeartRain
