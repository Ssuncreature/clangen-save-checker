function IDcompare(){
  event.preventDefault()
  const clanInput = document.getElementById('clan.json')
  const catInput = document.getElementById('clan_cats')
  // make sure there's actually info 
  if (clanInput.files.length === 0) {
  document.getElementById("missingid").textContent="No clan.json uploaded!";
  }
  else if (catInput.files.length === 0) {
  document.getElementById("missingid").textContent="No clan_cats.json uploaded!";
  }
  else {
  const clan = JSON.parse(clanInput)
  const cat = JSON.parse(catInput)
  }
}