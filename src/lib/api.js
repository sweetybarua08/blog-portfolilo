// src/lib/api.js
const API_URL = "http://localhost:1337/api"; // or your deployed Strapi URL
const API_TOKEN = "53ae69f7f90df10495cec5fb9bfd432c69e4cddf300df264d5a28737b3c8c1201f7698b9000426a93f1b97e7d6ddc3f6ee19fb88417eb8b7855ba350c631db92caa787e9a0ecabc3331163613efc1a14cb2b77d268803d071f5810c9fa3d0bd68c506effcd98a7cf20626aa7f647fb5918d9c4e598fede39e2adca7d76a0bbab";


export async function fetchAPI(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  if (!res.ok) {
    console.error("Failed to fetch:", res.status, res.statusText);
    throw new Error("API fetch error");
  }

  const data = await res.json();
  return data;
}
