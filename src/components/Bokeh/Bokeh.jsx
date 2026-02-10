import { useMemo } from 'react'
import styles from './Bokeh.module.css'

const Bokeh = ({ mousePosition }) => {
    const lights = useMemo(() => {
        return [...Array(15)].map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 150 + 80,
            duration: Math.random() * 10 + 15,
            delay: Math.random() * 10,
            color: ['rgba(255, 107, 138, 0.15)', 'rgba(255, 182, 193, 0.12)', 'rgba(230, 57, 70, 0.1)', 'rgba(255, 215, 0, 0.08)'][Math.floor(Math.random() * 4)]
        }))
    }, [])

    return (
        <div className={styles.bokehContainer}>
            {lights.map((light) => (
                <div
                    key={light.id}
                    className={styles.bokehLight}
                    style={{
                        '--base-left': `${light.left}%`,
                        '--base-top': `${light.top}%`,
                        '--size': `${light.size}px`,
                        '--duration': `${light.duration}s`,
                        '--delay': `${light.delay}s`,
                        '--color': light.color,
                        transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
                    }}
                />
            ))}
        </div>
    )
}

export default Bokeh
