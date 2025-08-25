// src/lib/api.js
const API_URL = "http://localhost:1337/api"; // or your deployed Strapi URL
const API_TOKEN = "dff566bf75586dbea40de6cf020402d1a9e3c1cea99dbdfc3b9a05f2bc51d0d74146afec14ea04ddcbaa13355c7e0e29857139addcad9396f4600298278dd80838275e2d3ff7503411be506fecf89819859b536b298c3a5229c531b3046bd78ceed3f75b1b7096924d3944c1d0285655da3dcda6a9eedf81c3087f1948fc279b";

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
