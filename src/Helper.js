export function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

/* Fit number between min and max */
export function clamp(number, min, max) {
  return number > max ? max : number < min ? min : number;
}

export function startAnimation(
  start,
  stop,
  setter,
  seconds,
  animationCompleteSetter
) {
  let startTime;
  let animationFrame;

  const duration = 1000 * seconds; // <seconds> second animation duration

  const animate = (timestamp) => {
    if (!startTime) {
      startTime = timestamp;
    }

    const timeElapsed = timestamp - startTime;
    const progress = timeElapsed / duration;
    const newValue = lerp(start, stop, progress);

    setter(newValue);

    if (progress < 1) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      animationCompleteSetter(true);
    }
  };

  animationFrame = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(animationFrame);
  };
}
