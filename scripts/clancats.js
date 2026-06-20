function stableClanCats() {
    text = document.getElementById("catsstable").value;
    try {
    JSON.parse(text);
    // Add the long if statement collection
  } catch (e) {
      // Do something if it fails
      document.getElementById("catresults").innerText = "Invalid JSON format for clan_cats.json! You probs have an extra comma or bracket somewhere!";
  }
}
function devClanCats() {
    text = document.getElementById("catsdev").value;
    try {
    JSON.parse(text);
    // Add the long if statement collection
  } catch (e) {
      // Do something if it fails
      document.getElementById("catresults").innerText = "Invalid JSON format for clan_cats.json! You probs have an extra comma or bracket somewhere!";
  }
}