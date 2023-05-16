let parent_div = document.querySelector(".display");
let slider = document.getElementById("myRange");
let slider_val = document.getElementById("slider_val");
let reset_test = document.querySelector(".reset");
let color_picker = document.querySelector("#color_picker");
let clear = document.querySelector(".clear");
let color_choice;
let rgb = document.querySelector(".rainbow");

//event listener to choose colors
rgb.addEventListener("click",()=>{color_choice=1;
addColor();})

color_picker.addEventListener('click',()=>{color_choice = 2;
addColor();});
printGrid(16);

clear.addEventListener("click",clear_board);
//opening and reseting screen
reset_test.addEventListener("click",()=>{
  reset();
  printGrid(16);
  slider.value=16;
  slider_val.innerText=16;
});

//slider msg
slider_val.innerText = slider.value;
slider.oninput = ()=>{
  slider_val.innerText = slider.value;
  a = slider.value;
  reset();
  printGrid(a);
}

function printGrid(value) {
  for (let i = 0; i < value * value; i++) {
    let child_div = document.createElement("div");
    child_div.className = "test";
    parent_div.appendChild(child_div);
  }
  parent_div.setAttribute(
    "style",
    `grid-template-columns: repeat(${value}, 2fr);`
  );
    addColor();
}

//add random and chosen color according to selection
function addColor(){
  let grid_button = document.querySelectorAll(".test");
  grid_button.forEach((element) => {
    if(color_choice === 1){
  element.addEventListener("mouseover", () => {
    let r = Math.floor(Math.random() * 256 + 1);
    let g = Math.floor(Math.random() * 256 + 1);
    let b = Math.floor(Math.random() * 256 + 1);
    element.setAttribute("style", `background-color:rgb(${r},${g},${b}); `)});
  }

  else{
    element.addEventListener("mouseover", () => {element.setAttribute("style",`background-color :${color_picker.value}`)})
  }
  }); 
}

//deletes previous divs before adding new
function reset(){
  let grid_button = document.querySelectorAll(".test");
  grid_button.forEach((element) => {
      element.remove();
    });
}

//changes all color to default
function clear_board(){
  let grid_button = document.querySelectorAll(".test");
  grid_button.forEach((element)=>{
    element.setAttribute("style",'background-color:white;');
  })
}
