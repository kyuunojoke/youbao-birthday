declare module "react-lottie" {
  import * as React from "react"

  export interface LottieProps {
    options: {
      loop?: boolean | number
      autoplay?: boolean
      animationData?: unknown
      rendererSettings?: Record<string, unknown>
    }
    height?: string | number
    width?: string | number
    isStopped?: boolean
    isPaused?: boolean
    speed?: number
    eventListeners?: Array<Record<string, unknown>>
    style?: React.CSSProperties
  }

  const Lottie: React.ComponentType<LottieProps>
  export default Lottie
}
