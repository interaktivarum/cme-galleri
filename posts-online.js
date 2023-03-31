// npoint id (syns i url:en https://api.npoint.io/f3cd220b748348514780)
// Redigera JSON på url:en https://www.npoint.io/docs/f3cd220b748348514780 (ersätt med ditt id)
const npointId = "f3cd220b748348514780";

// Funktion för att hämta JSON-data från JSON Blob
async function loadJSON() {

  console.log("Laddar JSON-data från npoint, id:", npointId);

  let posts = [];
  await fetch('https://api.npoint.io/'+npointId)
      .then(r => r.json())
      .then(r => { posts = r; console.log("Laddad data", posts); });
    return posts;
}