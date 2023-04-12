// Skapa JSON-data med alla inlägg (posts) i galleriet
const posts =
  [
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg",
      "title": "En lokal katt"
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg",
      "title": "Min lokala favoritblomma"
    }
  ]

// Funktion för att hämta JSON-data
async function loadJSON() {
  console.log("Laddar lokal JSON-data")
  console.log("Laddad data", posts)
  return posts;
}