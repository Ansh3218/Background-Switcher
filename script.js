let boxe = document.querySelectorAll(".button");
let body = document.querySelector('body');

boxe.forEach((box)=> {
 box.addEventListener('mousemove', (e)=> {
//   console.log(e)
//   console.log(e.target)
  if(e.target.id === "red"){
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === "gray"){
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === "lime"){
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === "blue"){
    body.style.backgroundColor = e.target.id;
  }
 
 })
})