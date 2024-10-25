//-CONSTANTS
const SQUARE_WIDTH = 10;
const SQUARE_HEIGHT = 10;
const SQUARE_MARGIN = 0;
const CONTAINER_WIDTH = 240;
const CONTAINER_HEIGHT = 240;
const CONTAINER_PADDING = 8;
const MAX_BOX_HORIZONTAL_ELEMENTS = 16;
//-CONSTANTS


const container = document.querySelector("#container");
container.setAttribute("style", `width: ${CONTAINER_WIDTH}px; height: ${CONTAINER_HEIGHT}px; padding: ${CONTAINER_PADDING}px`)

function createSquareDiv(){
   const squareDiv = document.createElement("div");
   squareDiv.setAttribute("class", "square_div")
   squareDiv.setAttribute("style", `width: ${SQUARE_WIDTH}px; height: ${SQUARE_HEIGHT}px; margin: ${SQUARE_MARGIN}px;`)

   squareDiv.addEventListener('mouseover', ()=>{
      squareDiv.style["background-color"] = "rgb(50 50 50)";
      console.log("hovering...");
   })
   container.appendChild(squareDiv);
}

function generateNSquareDivs(n){
   
   for (let i=0; i<n; i++){
      createSquareDiv();
   }
}

function fillContainer(){
   /**The container has a height H and wide W, and each individual square has
    * a height h and width w, with added margin m on both sides 
    * total area of the individual square is "(h+2m)*(w+2m)"
    * Total area of the contianer is "HW", thus 
    * the padding isn't added as that area cannot be used
   */
   let individualSquareArea = (SQUARE_HEIGHT + (2*SQUARE_MARGIN)) * (SQUARE_WIDTH + (2*SQUARE_MARGIN));
   let containerArea = CONTAINER_HEIGHT * CONTAINER_WIDTH;
   let TotalNumberOfSquaresNeed = containerArea / individualSquareArea;

   generateNSquareDivs(TotalNumberOfSquaresNeed)
}


const createSquaresButton = document.querySelector("#CreateSquaresButton")
createSquaresButton.addEventListener('click', ()=>{
   console.log("CreateSquaresButton");
   generateNSquareDivs(1);
});

const fillContainerButton = document.querySelector("#FillContainer");
fillContainerButton.addEventListener('click', ()=>{
   fillContainer();
});
