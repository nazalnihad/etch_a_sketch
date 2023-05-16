let parent_div = document.querySelector(".display");
let input = prompt("enter : ");
let a = parseInt(input);

function printGrid(value) {
  for (let i = 0; i < value * value; i++) {
    let child_div = document.createElement("div");
    //   child_div.style.width = `${900 / 100}px`;
    //   child_div.style.height = `${900 / 100}px`;
    child_div.className = "test";
    parent_div.appendChild(child_div);
  }
  parent_div.setAttribute(
    "style",
    `grid-template-columns: repeat(${value}, 2fr);grid-template-rows: repeat(${value}, 2fr);`
  );
}

printGrid(a);

function randomColor() {
  let test_div = document.querySelector(".test");
  test_div.setAttribute("style", `background-color:rgb(${r},${g},${b}); `);
}
// randomColor();

let grid_button = document.querySelectorAll(".test");
grid_button.forEach((element) => {
  element.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 256 + 1);
    let g = Math.floor(Math.random() * 256 + 1);
    let b = Math.floor(Math.random() * 256 + 1);
    element.setAttribute("style", `background-color:rgb(${r},${g},${b}); `);
  });
});

// grid_button.addEventListener("click", () => {
//   let r = Math.floor(Math.random() * 256 + 1);
//   let g = Math.floor(Math.random() * 256 + 1);
//   let b = Math.floor(Math.random() * 256 + 1);
//   grid_button.setAttribute("style", `background-color:rgb(${r},${g},${b}); `);
// });
