const line = 10;
const column = 10;
const maxRectangle = line*column;
var limitCt = 0;
window.onload = function() {
  setInterval("sprinkle()", 1000);

  let k = 1;
  for (let i = 1; i <= line; i++) {
    for (let j = 1; j <= column; j++) {
      // selectChangeCt = Math.floor(Math.random()*10)+1
      const div = document.createElement('div');
      div.id='black_rectangele_' + k;
      div.classList.add('box');
      div.classList.add('flex');
      // div.classList.add('change_ct_' + selectChangeCt);
      document.body.appendChild(div);
      k++;
    }
    const div2 = document.createElement('div');
    document.body.appendChild(div2);
  }
  sprinkle();
}

function sprinkle(){
  ct = 1;
  // console.log(ct);
  // console.log(colorString);
  let colorString = setColor();
  while(ct <= maxRectangle){
    let colorString = setColor();
    // randomNum = Math.random();
    // if (randomNum < 0.5){
      let attr = document.getElementById("black_rectangele_" + ct);
      // if (!attr.classList.contains('box_disappear')) {
        attr.style.background = colorString;
        console.log(colorString);
      // } else {
      //   attr.classList.remove("box_disappear");
      // }
    // }
    ct++;
  };
}

function setColor(){

  let colorString = "#";

  for (let i = 0;i < 6; i++){
    colornum = Math.floor(Math.random()*16);
    colorString += colornum.toString(16);
    // console.log(colorString);
  }

  return colorString;
}
