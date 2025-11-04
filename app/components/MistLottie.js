import Lottie from 'lottie-react';
import mistAnimation from './mist.json';

export default function MistLottie() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Lottie
        animationData={mistAnimation}
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
