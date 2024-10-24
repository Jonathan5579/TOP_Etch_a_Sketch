console.log("hwllo world")
 //-CONSTANTS
const SQUARE_WIDTH = 10;
const SQUARE_HEIGHT = 25;
const SQUARE_MARGIN = 2;
const MAX_BOX_HORIZONTAL_ELEMENTS = 16;
//-CONSTANTS

const container = document.querySelector("#container");
let maxContainerWidth = SQUARE_WIDTH * MAX_BOX_HORIZONTAL_ELEMENTS;
container.setAttribute("style", `max-width: ${maxContainerWidth}px;`)
const createSquaresButton = document.querySelector("#CreateSquaresButton")

function createSquareDiv(){
   const squareDivs = document.createElement("div");
   squareDivs.setAttribute("class", "square_div")
   squareDivs.setAttribute("style", `width: ${SQUARE_WIDTH}px; height: ${SQUARE_HEIGHT}px; margin: ${SQUARE_MARGIN}px;`)
   
   container.appendChild(squareDivs);
}

function generateNSquareDivs(n){
   
   for (let i=0; i<n; i++){
      createSquareDiv();
   }
}

createSquaresButton.addEventListener('click', ()=>{
   console.log("CreateSquaresButton");
   generateNSquareDivs(5);
});