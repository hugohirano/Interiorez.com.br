// A slot with several tiles shows one of them, chosen at random on each visit.
function pickTiles() {
  const groups = new Map<string, HTMLElement[]>();
  document.querySelectorAll<HTMLElement>('[data-pick]').forEach((tile) => {
    groups.set(tile.dataset.pick!, [...(groups.get(tile.dataset.pick!) ?? []), tile]);
  });
  groups.forEach((tiles) => {
    const chosen = tiles[Math.floor(Math.random() * tiles.length)];
    tiles.forEach((tile) => { tile.hidden = tile !== chosen; });
  });
}

// Hovering, focusing or pressing an item shows its picture in the group's viewer.
function bindSwaps() {
  document.querySelectorAll<HTMLElement>('[data-swap]').forEach((root) => {
    const items = root.querySelectorAll<HTMLElement>('[data-to]');
    const views = root.querySelectorAll<HTMLElement>('[data-view]');
    const show = (item: HTMLElement) => {
      items.forEach((i) => i.toggleAttribute('data-on', i === item));
      views.forEach((v) => v.toggleAttribute('data-on', v.dataset.view === item.dataset.to));
    };
    items.forEach((item) => {
      item.addEventListener('pointerenter', () => show(item));
      item.addEventListener('focus', () => show(item));
      if (item.tagName === 'BUTTON') item.addEventListener('click', () => show(item));
    });
  });
}

function bindFilter() {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      document.querySelectorAll<HTMLElement>('[data-sector]').forEach((tile) => {
        tile.hidden = button.dataset.filter !== 'all' && tile.dataset.sector !== button.dataset.filter;
      });
    });
  });
}

function bindEnquiry() {
  const form = document.querySelector<HTMLFormElement>('[data-enquiry]');
  if (!form) return;
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const fallback = form.querySelector<HTMLTextAreaElement>('[data-fallback]')!;
  const t = form.dataset;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const city = String(data.get('city') ?? '').trim();
    const missing = !name ? 'name' : !message ? 'message' : null;
    if (missing) {
      status.dataset.state = 'error';
      status.textContent = missing === 'name' ? t.needName! : t.needMessage!;
      form.querySelector<HTMLElement>(`[name="${missing}"]`)?.focus();
      return;
    }
    const text = [
      `${t.greeting} ${name}.`,
      `${t.projectType}: ${data.get('type')}`,
      city ? `${t.cityLine}: ${city}` : '',
      '',
      message,
    ].filter((line, i) => line !== '' || i === 3).join('\n');
    window.open(t.direct, '_blank', 'noopener');
    status.dataset.state = 'ok';
    fallback.hidden = true;
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = t.copied!;
    } catch {
      status.textContent = t.notCopied!;
      fallback.value = text;
      fallback.hidden = false;
      fallback.select();
    }
  });
}

document.addEventListener('astro:page-load', () => {
  pickTiles();
  bindSwaps();
  bindFilter();
  bindEnquiry();
});
