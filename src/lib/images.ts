import type { ImageMetadata } from 'astro';

const photos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/projects/*.jpg', { eager: true });

export const photo = (key: string) => photos[`/src/assets/projects/${key}.jpg`].default;
