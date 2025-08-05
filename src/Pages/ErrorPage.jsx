import { Player } from '@lottiefiles/react-lottie-player'
import animationData from '../data/for_error.json'

export default function ErrorPage() {
  return (
    <div className="flex h-full w-full items-center justify-center  ">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '780px', width: '600px' }}
      />
    </div>
  )
}