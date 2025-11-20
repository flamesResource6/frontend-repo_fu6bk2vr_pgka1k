const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export async function postContact({ name, email, message }) {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(text || `Request failed with ${res.status}`)
  }
  return res.json()
}
