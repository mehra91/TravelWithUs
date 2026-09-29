// Thin fetch wrapper around the Express API. Vite proxies /api to the
// backend in dev (see vite.config.js), so no base URL is needed.
const API_BASE = '/api';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Request failed');
  }
  return res.json();
}

export const getDestinations = () => request('/destinations');
export const getDestination = (slug) => request(`/destinations/${slug}`);
export const getCars = () => request('/cars');
export const createBooking = (data) =>
  request('/bookings', { method: 'POST', body: JSON.stringify(data) });
export const createPackageRequest = (data) =>
  request('/packages', { method: 'POST', body: JSON.stringify(data) });
