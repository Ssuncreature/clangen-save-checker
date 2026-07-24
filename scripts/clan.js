// initialize list of biomes/seasons/temperaments/symbols
const biome = [
  "Forest",
  "Plains",
  "Beach",
  "Mountainous"
]

// Uhh so it doesn't seem to be reading right - check python code for clangen to set values

function stableClan(){
  event.preventDefault()
  const clanInput = document.getElementById('stableclan.json')
  // make sure there's actually info 
  if (clanInput.files.length === 0) {
  document.getElementById("clanresults").textContent="No clan.json uploaded!";
  }
  else {
  const clan = JSON.parse(clanInput)
    if (not (clan.save_id)) {
      document.getElementById("clanresults").textContent+="Missing save id";
    }
    else if (not (typeof clan.save_id === "string")) {
      document.getElementById("clanresults").textContent+="Malformed save id!";
    }
    if (not (clan.displayname)) {
      document.getElementById("clanresults").textContent+="Missing display name";
    }
    else if (not (typeof clan.displayname === "string")) {
      document.getElementById("clanresults").textContent+="Malformed display name!";
    }
    if (not (clan.clanage)) {
      document.getElementById("clanresults").textContent+="Missing clan age";
    }
    else if (typeof clan.clanage === !isNaN()) {
      document.getElementById("clanresults").textContent+="Clan age is not a number!";
    }
    if (not (clan.biome)) {
      document.getElementById("clanresults").textContent+="Missing biome";
    }
    else if (not (typeof clan.biome === "string")) {
      document.getElementById("clanresults").textContent+="Malformed biome!";
    }
    else if (not (biome.includes(clan.biome))) {
      document.getElementById("clanresults").textContent+="'Biome' is not a valid biome";
      }
    if (not (clan.camp_bg)) {
      document.getElementById("clanresults").textContent+="Missing camp background";
    }
  }
}