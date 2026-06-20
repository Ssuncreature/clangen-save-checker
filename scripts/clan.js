import "scripts/schema.js";
import "stable_checker.html";
import "dev_checker.html";

function stableClan() {
  var input = document.getElementById("clanstable").value;
  if (input.includes("save_id")) {
    
  } else {
    document.getElementById('clanresults').innerHTML = "somethings wrong with your save_id!"
  }
}