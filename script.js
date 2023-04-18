let totalPriceSpan = document.getElementById("totalPrice");
let numberMeet = 0;
let numberEgg = 0;
let numberOnion = 0;
let numberLettuce= 0;


const meetPrice = 5;
const eggPrice = 2;

function addMeet() {
  if(numberMeet < 3){
    numberMeet += 1;
    let meetDiv =  document.getElementById("meetImages");
    let meetImg = document.createElement("img");
    meetImg.src = "./images/meet-removebg-preview.png";
    meetImg.alt = "meet";
    meetDiv.appendChild(meetImg);
    let currentTotalPrice = Number(totalPriceSpan.textContent);
    totalPriceSpan.innerHTML = (currentTotalPrice + meetPrice);
  }
}

function removeMeet() {
  if(numberMeet > 0){
    numberMeet -= 1;
  let meetDiv =  document.getElementById("meetImages");
  if (meetDiv.childElementCount > 0) {
    meetDiv.removeChild(meetDiv.lastElementChild);
    let currentTotalPrice = Number(totalPriceSpan.textContent);
    totalPriceSpan.innerHTML = (currentTotalPrice - meetPrice);
  }
  }
}
  
function addLettuce() {
  if(numberLettuce < 5){
    numberLettuce += 1;
    let lettuceDiv =  document.getElementById("lettuceImages");
    let lettuceImg = document.createElement("img");
    lettuceImg.src = "./images/lettuce-removebg-preview.png";
    lettuceImg.alt = "lettuce";
    lettuceDiv.appendChild(lettuceImg);
  }

}

function removeLettuce() {
  if(numberLettuce > 0){
    numberLettuce -= 1;
  let lettuceDiv =  document.getElementById("lettuceImages");
  if (lettuceDiv.childElementCount > 0) {
    lettuceDiv.removeChild(lettuceDiv.lastElementChild);
  }

}
}

function addEgg() {
  if(numberEgg < 2){
    numberEgg +=1;
    let eggDiv =  document.getElementById("eggImages");
    let eggImg =document.createElement("img");
    eggImg.src = "./images/egg-removebg-preview.png";
    eggImg.alt="egg";
    eggDiv.appendChild(eggImg);
    let currentTotalPrice = Number(totalPriceSpan.textContent);
    totalPriceSpan.innerHTML = (currentTotalPrice + eggPrice);
}
  }

function removeEgg() {
  if(numberEgg > 0){
 numberEgg -= 1;
 document.getElementById("eggImages").removeChild(document.getElementById("eggImages").lastElementChild);
 totalPriceSpan.innerHTML = Number(totalPriceSpan.textContent - eggPrice);
}
}

function addOnion() {
  if(numberOnion < 1){
    numberOnion +=1;
    let onionImg =document.createElement("img");
    onionImg.src = "./images/onion-removebg-preview.png";
    onionImg.alt="onion";
    document.getElementById("onionImages").appendChild(onionImg);
  }
}

function removeOnion() {
  if(numberOnion > 0){
    numberOnion -= 1;
    document.getElementById("onionImages").removeChild(document.getElementById("onionImages").lastElementChild);
  }
}

function PaymentDetails(){
  if(numberMeet > 0){
    document.getElementById("PaymentDetailsId").innerHTML = "Meet  : " + "  " + numberMeet ;
    if(numberLettuce > 0){
      document.getElementById("lettuceId").innerHTML = "Lettuce : " + "  " + numberLettuce;
    }else{
      document.getElementById("lettuceId").innerHTML = "";
    }
    if(numberEgg > 0){
      document.getElementById("eggId").innerHTML = "Egg : " + "  " + numberEgg;
    }else{
      document.getElementById("eggId").innerHTML = "";
    }
    if(numberOnion > 0){
      document.getElementById("onionId").innerHTML = "Onion : " + "  " + numberOnion;
    }else{
      document.getElementById("onionId").innerHTML = "";
    }
  }else{
    document.getElementById("PaymentDetailsId").innerHTML ="Must choose a main ingredient";
    document.getElementById("lettuceId").innerHTML ="";
    document.getElementById("eggId").innerHTML ="";
    document.getElementById("onionId").innerHTML="";
  }
}