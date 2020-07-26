export function createRegexp(path: string): string {
  const subRoutes = path.split('/');
  let regexp = `/${subRoutes.shift()}`;

  if (subRoutes.length > 0) {
    subRoutes.forEach(subRoute => {
      if (subRoute.startsWith(':')) {
        regexp += '/\\w+';
      } else {
        regexp += `/${subRoute}`;
      }
    });
  }

  return regexp;
}
