function IDcompare(){
  var clan = document.getElementById("clan.json");
  var clancats = document.getElementById("clan_cats");
  event.preventDefault(); 
  if ('files' in clan) {
    if (clan.files.length == 0) {
      document.getElementById('missingid').textContent = "Select your clan.json!";
      return
    } else {
      if ('files' in clancats) {
        if (clancats.files.length == 0) {
          document.getElementById('missingid').textContent = "Select your clan_cats.json!";
          return
        } else {
          //TODO: Begin actual check
          //get ids from clan.json
          //get ids from clan_cats.json
          //compare
          //return what isn't there
        }
      }
    }
  }
  else { 
    if (clan.value == "" && clancats.value == "") {
      document.getElementById('missingid').textContent = "Select one or more files!";
      return
    }
  }
}