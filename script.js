console.log("hwllo world")
 //-CONSTANTS
const SQUARE_WIDTH = 10;
const SQUARE_HEIGHT = 10;
const SQUARE_MARGIN = 0;
const MAX_BOX_HORIZONTAL_ELEMENTS = 16;
//-CONSTANTS

const container = document.querySelector("#container");
let maxContainerWidth = (SQUARE_WIDTH + 2*SQUARE_MARGIN) * MAX_BOX_HORIZONTAL_ELEMENTS;
container.setAttribute("style", `max-width: ${maxContainerWidth}px;`)
const createSquaresButton = document.querySelector("#CreateSquaresButton")

function createSquareDiv(){
   const squareDiv = document.createElement("div");
   squareDiv.setAttribute("class", "square_div")
   squareDiv.setAttribute("style", `width: ${SQUARE_WIDTH}px; height: ${SQUARE_HEIGHT}px; margin: ${SQUARE_MARGIN}px;`)

   squareDiv.addEventListener('mouseover', ()=>{
      squareDiv.style["background-color"] = "rgb(90 47 92)";
      console.log("hovering...");
   })
   container.appendChild(squareDiv);
}

function generateNSquareDivs(n){
   
   for (let i=0; i<n; i++){
      createSquareDiv();
   }
}

createSquaresButton.addEventListener('click', ()=>{
   console.log("CreateSquaresButton");
   generateNSquareDivs(16*16);
});