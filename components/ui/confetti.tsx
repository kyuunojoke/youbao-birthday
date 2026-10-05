import { useEffect, useState } from "react"
import Lottie from "react-lottie"

interface ConfettiProps {
  isActive?: boolean
  duration?: number
  autoPlay?: boolean
  zIndex?: number
  loop?: boolean
}

// Lightweight local Lottie confetti animation using the same component API
// as the supplied component, so the cake can trigger it directly.
const animationData = {
  v: "5.5.8", fr: 30, ip: 0, op: 90, w: 800, h: 800, nm: "Birthday Confetti", ddd: 0,
  assets: [],
  layers: Array.from({ length: 14 }, (_, i) => ({
    ddd: 0, ind: i + 1, ty: 4, nm: `Confetti ${i + 1}`,
    ks: {
      o: { a: 1, k: [{ t: 0, s: [0] }, { t: 8, s: [100] }, { t: 75, s: [100] }, { t: 90, s: [0] }] },
      r: { a: 1, k: [{ t: 0, s: [i * 23] }, { t: 90, s: [i * 23 + 360] }] },
      p: { a: 1, k: [{ t: 0, s: [80 + (i * 173) % 640, -40, 0] }, { t: 90, s: [40 + (i * 149) % 720, 850, 0] }] },
      a: { a: 0, k: [8, 8, 0] }, s: { a: 0, k: [100, 100, 100] }
    },
    shapes: [{ ty: "gr", it: [
      { ty: "rc", d: 1, s: { a: 0, k: [16 + (i % 3) * 4, 24] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 3 }, nm: "Confetti" },
      { ty: "fl", c: { a: 0, k: [[0.99,0.32,0.39,1],[0.10,0.68,1,1],[0.98,0.80,0.22,1],[0,0.91,0.66,1]][i % 4] }, o: { a: 0, k: 100 }, r: 1, nm: "Fill" },
      { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 }, sk: { a: 0, k: 0 }, sa: { a: 0, k: 0 }, nm: "Transform" }
    ], nm: "Confetti Group" }], ip: 0, op: 90, st: 0, bm: 0
  }))
}

const Confetti = ({ isActive: externalIsActive, duration = 6000, autoPlay = false, zIndex = 50, loop = false }: ConfettiProps) => {
  const [isActive, setIsActive] = useState(autoPlay)

  useEffect(() => {
    if (externalIsActive !== undefined) setIsActive(externalIsActive)
  }, [externalIsActive])

  useEffect(() => {
    if (!isActive || loop || duration <= 0) return
    const timeoutId = window.setTimeout(() => setIsActive(false), duration)
    return () => window.clearTimeout(timeoutId)
  }, [isActive, duration, loop])

  if (!isActive) return null

  return (
    <div className="pointer-events-none fixed inset-0" style={{ zIndex }}>
      <Lottie
        options={{ loop, autoplay: true, animationData, rendererSettings: { preserveAspectRatio: "xMidYMid slice" } }}
        height="100%"
        width="100%"
        isStopped={!isActive}
      />
    </div>
  )
}

export default Confetti
