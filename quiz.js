
let frågaN = 1;

function Namn(event) {
  event.preventDefault();
  const input = document.getElementById("inputField").value;
  console.log(input);
  const text = document.getElementById("hälsning");
  const fråga = document.getElementById("fråga");
  
  if (frågaN == 1){
  if (input == "Stockholm") {
    text.innerText = "CORRECT! gå till nästa fråga youaint done yet!";
    frågaN = 2;
    text.innerText = "Vad är Takis ålder?";
  }
  
  else {
    text.innerText = "FEL! försök igen!";
  }
}
  else if (frågaN == 2){
    if (input == "18") {
      text.innerText = "CORRECT! gå till nästa fråga youaint done yet!";
      frågaN = 3;
    text.innerText = "Hur lång är emir??";
    }
     else {
    text.innerText = "FEL! försök igen!";
  }

}
else if (frågaN == 3){
    if (input == "196cm") {
      text.innerText = "CORRECT! DU ÄR FÄRDIG DUMBO!";
      
    }
     else {
    text.innerText = "FEL! försök igen!";
  }

   
}

}

const formulär = document.getElementById("formulär");
formulär.addEventListener("submit", Namn);