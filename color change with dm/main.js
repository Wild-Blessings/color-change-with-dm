console.log('Hello World!');
const newColor = document.getElementById('newColor');
newColor.addEventListener('click',()=>{
  var randomColor = Math.floor(Math.random()*16777215).toString(16);

 document.body.style.backgroundColor= "#" + randomColor

})


let values=[1,2,3,4]

console.log(values.slice(1))




/*
var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
var col = "rgb(" + r + "," + g + "," + b + ")";
parent.childNodes[1].style.color = col

*/



/*

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

genNew.addEventListener("click", setBg);
setBg();

*/