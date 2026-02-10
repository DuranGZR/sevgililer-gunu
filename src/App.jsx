import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Card from './components/Card/Card'
import HeartRain from './components/HeartRain/HeartRain'
import Confetti from './components/Confetti/Confetti'
import './App.css'

function App() {
    const [step, setStep] = useState(0)
    // 0 = envelope, 1 = opening, 2 = letter visible

    const handleClick = () => {
        if (step === 0) {
            setStep(1)
            setTimeout(() => setStep(2), 1200)
        }
    }

    return (
        <div className="app">
            <HeartRain />

            {step === 1 && <Confetti />}

            <AnimatePresence mode="wait">
                {step < 2 ? (
                    <motion.div
                        key="envelope-page"
                        className="envelope-page"
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    >
                        {/* Decorative roses */}
                        <div className="rose rose-left">🌹</div>
                        <div className="rose rose-right">🌹</div>

                        {/* Title */}
                        <div className="envelope-title">
                            <h1>Minnaka</h1>
                        </div>

                        {/* Envelope */}
                        <div className="envelope" onClick={handleClick}>
                            {/* Back part */}
                            <div className="env-back"></div>

                            {/* Front flap (bottom triangle) */}
                            <div className="env-front"></div>

                            {/* Top flap */}
                            <motion.div
                                className="env-flap"
                                animate={{ rotateX: step >= 1 ? 180 : 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            ></motion.div>

                            {/* Wax Seal */}
                            <AnimatePresence>
                                {step === 0 && (
                                    <motion.div
                                        className="wax-seal"
                                        exit={{
                                            opacity: 0,
                                            filter: 'blur(2px)',
                                        }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="seal-inner">
                                            <span>❤</span>
                                        </div>
                                    </motion.div>
                                )}
                                {step >= 1 && (
                                    <>
                                        <motion.div
                                            className="seal-piece piece-1"
                                            initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                                            animate={{ x: -30, y: -20, opacity: 0, rotate: -45 }}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                        />
                                        <motion.div
                                            className="seal-piece piece-2"
                                            initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                                            animate={{ x: 25, y: -15, opacity: 0, rotate: 30 }}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                        />
                                        <motion.div
                                            className="seal-piece piece-3"
                                            initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                                            animate={{ x: -15, y: 25, opacity: 0, rotate: -20 }}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                        />
                                        <motion.div
                                            className="seal-piece piece-4"
                                            initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                                            animate={{ x: 20, y: 20, opacity: 0, rotate: 40 }}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                        />
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Tap hint - animated chevrons */}
                        <div className="tap-hint">
                            <span className="chevron">‹</span>
                            <span className="chevron-center">❤</span>
                            <span className="chevron">›</span>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Card />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default App
