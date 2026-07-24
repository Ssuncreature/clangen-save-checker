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
    else if (typeof value === !isNaN()) {
      document.getElementById("clanresults").textContent+="Clan age is not a number!";
    }
  }
}