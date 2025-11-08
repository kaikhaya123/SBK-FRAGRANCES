export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const scrollToTop = (duration = 500) => {
  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const scroll = () => {
    const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((currentTime - startTime) / duration));
    
    window.scrollTo(0, Math.ceil((1 - time) * start));
    
    if (time < 1) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};