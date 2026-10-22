function e(e) {
  if (!e || typeof e != `string`) return null;
  if (e.includes(`cloudinary.com`)) {
    let t = e.replace(/\.(mp4|webm|mov|mkv|avi|flv|wmv)$/i, `.jpg`);
    return t.includes(`/video/upload/`) && !t.includes(`/so_`) && (t = t.replace(`/video/upload/`, `/video/upload/so_1,w_800,c_fill,q_auto,f_auto/`)), t;
  }
  return null;
}
function t(t) {
  if (!t) return `https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=80`;
  if (t.image && typeof t.image == `string` && t.image.trim().length > 0 && !t.image.includes(`unsplash.com`)) return t.image;
  if (t.gallery && Array.isArray(t.gallery)) {
    let e = t.gallery.find(e => e && typeof e == `string` && e.trim().length > 0 && !e.includes(`unsplash.com`));
    if (e) return e;
  }
  return e(t.videoUrl || (t.mediaType === `video` ? t.image : null)) || (t.image && typeof t.image == `string` && t.image.trim().length > 0 ? t.image : `https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=80`);
}
export { e as n, t };