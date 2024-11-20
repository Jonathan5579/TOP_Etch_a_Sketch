//-CONSTANTS
const SQUARE_WIDTH = 10;
const SQUARE_HEIGHT = 10;
const SQUARE_MARGIN = 0;
const CONTAINER_WIDTH = 500;
const CONTAINER_HEIGHT = 500;
const CONTAINER_PADDING = 8;
const MAX_BOX_HORIZONTAL_ELEMENTS = 16;
//-CONSTANTS


const container = document.querySelector("#container");
container.setAttribute("style", `width: ${CONTAINER_WIDTH}px; height: ${CONTAINER_HEIGHT}px; padding: ${CONTAINER_PADDING}px`)

function createSquareDiv(width = SQUARE_WIDTH, height = SQUARE_HEIGHT){
   const squareDiv = document.createElement("div");
   squareDiv.setAttribute("class", "square_div")

   squareDiv.setAttribute("style", `width: ${width}px; height: ${height}px; margin: ${SQUARE_MARGIN}px;`)
   
   let randomColor = `rgb(${Math.random() * 255} ${Math.random() * 255} ${Math.random() * 255})`
   squareDiv.style["background-color"] = randomColor;
   
   squareDiv.addEventListener('mouseover', ()=>{

      let randomHoverColour = `rgb(${Math.random() * 255} ${Math.random() * 255} ${Math.random() * 255})`
      squareDiv.style["background-color"] = randomHoverColour;
      console.log("hovering...");
   })
   container.appendChild(squareDiv);
}

function fillContainer(){
   /**The container has a height H and wide W, and each individual square has
    * a height h and width w, with added margin m on both sides 
    * total area of the individual square is "(h+2m)*(w+2m)"
    * Total area of the contianer is "HW", thus 
    * the padding isn't added as that area cannot be used
   */
   cleanContainer();
   let individualSquareArea = (SQUARE_HEIGHT + (2*SQUARE_MARGIN)) * (SQUARE_WIDTH + (2*SQUARE_MARGIN));
   let containerArea = CONTAINER_HEIGHT * CONTAINER_WIDTH;
   let TotalNumberOfSquaresNeed = containerArea / individualSquareArea;

   for (let i=0; i<TotalNumberOfSquaresNeed; i++){
      createSquareDiv();
   }
}


const createSquaresButton = document.querySelector("#CreateSquaresButton")
createSquaresButton.addEventListener('click', ()=>{
   console.log("CreateSquaresButton");
   createSquareDiv();
});

const fillContainerButton = document.querySelector("#FillContainer");
fillContainerButton.addEventListener('click', ()=>{
   fillContainer();
});


/** 
 * Filling squares per side section
*/
const squaresPerSideButton = document.querySelector("#SquaresPerSide");
squaresPerSideButton.addEventListener('click', ()=>{
   let squaresPerSide = +prompt("Squares per side?");

   //Regex that validates user input be a number from 1 - 3 digits
   if (!(/^\d{1,3}$/.test(squaresPerSide))){
      alert("Please introduce a 1-3 digit number");
      return
   }
   if (squaresPerSide > 100){
      alert("More than 100 squares per side leads to browser freezing. Try with less.")
      return
   }

   cleanContainer();
   console.log(`adding ${squaresPerSide} squares perside`);
   
   //calculate the new square side:
   let width = CONTAINER_WIDTH/squaresPerSide;
   let height = CONTAINER_HEIGHT/squaresPerSide;
   let totalSquares = squaresPerSide * squaresPerSide

   for (let i=0; i<totalSquares; i++){
      createSquareDiv(width, height);
   }
})

/**Remove and recreate container*/
function cleanContainer(){
   var paras = document.getElementsByClassName('square_div');
   
   //* Removes all the square_div classes
   while(paras[0]) {
      paras[0].parentNode.removeChild(paras[0]);
   }
}
const clearnContainerButton = document.querySelector("#ClearnContainerButton");
clearnContainerButton.addEventListener('click', ()=>{
   //* Query all the elemends with the square_div class
   cleanContainer();
});
