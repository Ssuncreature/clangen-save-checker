function IDcompare(){
  var clan = document.getElementById("clan.json");
  var clancats = document.getElementById("clan_cats");
  if ('files' in clan) {
    if (clan.files.length == 0) {
      txt = "Select your clan.json!";
    } else {
      if ('files' in clancats) {
        if (clancats.files.length == 0) {
          txt = "Select your clan_cats.json!";
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
      txt += "Select one or more files!";
    }
  }
}