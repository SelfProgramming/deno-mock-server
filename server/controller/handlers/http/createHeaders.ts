export function createHeaders() {
  const headers = new Headers();
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Methods', '*');
  headers.append('Access-Control-Allow-Headers', '*');
  return headers;
}
