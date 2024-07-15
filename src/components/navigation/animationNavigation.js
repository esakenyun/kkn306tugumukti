const animationNavigation = () => {
  const scrollTo = (targetSelector) => {
    const target = document.querySelector(targetSelector);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 2000; // Durasi dalam milidetik
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      const ease = percentage * (2 - percentage); // ease-in-out
      window.scrollTo(0, startPosition + distance * ease);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return scrollTo;
};

export default animationNavigation;
