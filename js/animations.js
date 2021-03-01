const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

timeline.to('.preloader__text', { y: '0%', duration: 1, stagger: 0.25 });
timeline.to('.preloader__slider', { y: '-100%', duration: 2, delay: 0.5 });
timeline.to('.preloader', { y: '-100%', duration: 1 }, '-=1.25');
timeline.fromTo(
  '.hero__content',
  { opacity: 0.3, y: '15%' },
  { opacity: 1, y: '0%', duration: 1 },
  '-=1.5'
);
