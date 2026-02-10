import { useMemo } from 'react'
import styles from './Stars.module.css'

const Stars = () => {
    const stars = useMemo(() => {
        return [...Array(80)].map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.7 + 0.3
        }))
    }, [])

    return (
        <div className={styles.starsContainer}>
            {stars.map((star) => (
                <div
                    key={star.id}
                    className={styles.star}
                    style={{
                        '--left': star.left,
                        '--top': star.top,
                        '--size': `${star.size}px`,
                        '--duration': `${star.duration}s`,
                        '--delay': `${star.delay}s`,
                        '--opacity': star.opacity
                    }}
                />
            ))}

            {/* Shooting stars */}
            {[...Array(3)].map((_, i) => (
                <div
                    key={`shooting-${i}`}
                    className={styles.shootingStar}
                    style={{
                        '--delay': `${i * 4 + Math.random() * 2}s`,
                        '--top': `${10 + i * 25}%`
                    }}
                />
            ))}
        </div>
    )
}

export default Stars
