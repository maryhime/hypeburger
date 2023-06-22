export function getImageUrl(burger) {
  return (
    '/public/images/' +
    burger.imageId +
    '.svg'
  );
}
