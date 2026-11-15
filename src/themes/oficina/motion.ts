function bindReplay() {
  document.querySelector('[data-replay]')?.addEventListener('click', () => {
    document.querySelector('.ov h1')?.classList.toggle('replay');
    scrollTo({ top: 0 });
  });
}
document.addEventListener('astro:page-load', bindReplay);
