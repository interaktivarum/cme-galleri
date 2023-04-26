// Skapa JSON-data med alla inlägg (posts) i galleriet

const websiteData = {
  "profileImage": "imagepath",
  "intro_text": "Martins galleri",
  "posts": [
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg",
      "title": "En lokal katt",
      "description": "Det här är min jättefina katt."
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg",
      "title": "Min lokala favoritblomma",
      "description": "Det här är min jättegula solros."
    }
  ]
}

// const posts =
//   [
//     {
//       "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg",
//       "title": "En lokal katt",
//       "description": "Det här är min jättefina katt."
//     },
//     {
//       "image": "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg",
//       "title": "Min lokala favoritblomma",
//       "description": "Det här är min jättegula solros."
//     }
//   ]

/**
 * Funktion för att ladda lokal JSON-data 
 */
async function loadJSON() {
  console.log("Laddar lokal JSON-data")
  console.log("Laddad data", posts)
  return posts;
}