// Skriv ut i webbläsar-konsollen att filen är laddad
console.log("JavaScript-filen index.js är laddad");

// FUNCTIONS

// Skriv ut JSON-objektet som text för att visa innehållet, istället för att visa: [Object object].
function print(json) {
    return JSON.stringify(json);
}

// Hämta det numeriska värdet från query-parametern "id" 
// Exempel: ifall denna funktion kallas från single.html?id=1 returneras värdet 1. 
function getId() {
    // Hämta parametern id
    const id = new Proxy(new URLSearchParams(window.location.search), { get: (searchParams, prop) => searchParams.get(prop) })['item'];

    // Gör om textsträngen till en integer (nummeriskt värde)
    return parseInt(id);
}

/* Lägg till din egen JavaScript här nedanför */