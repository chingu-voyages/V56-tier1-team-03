import { Player } from '@lottiefiles/react-lottie-player'
import animationData from '../data/for_error.json'

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden bg-red-50 text-black text-center p-6">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '600px', width: '600px' }}
      />
    </div>
  )
}