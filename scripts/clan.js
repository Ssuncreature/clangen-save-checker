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
      document.getElementById("clanresults").textContent="No save id!";
    }
  }
}