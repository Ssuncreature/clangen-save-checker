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
      
      }
      }
    }
  else {
    if (clan.value == "") and (clancats.value == "") {
      txt += "Select one or more files!";
    }
  }
  }
}