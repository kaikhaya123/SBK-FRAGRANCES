// CacheManager removed — provide a harmless stub in case of accidental imports.
export default function CacheManager() {
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn('CacheManager was removed. This stub prevents import errors.');
  }
  return null;
}
