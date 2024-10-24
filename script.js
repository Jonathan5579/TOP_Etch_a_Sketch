console.log("hwllo world")
   
const CONTAINER = document.querySelector("#container");
const CreateSquaresButton = document.querySelector("#CreateSquaresButton")

function createSquareDiv(){
   const squareDivs = document.createElement("div");
   squareDivs.setAttribute("class", "square_div")
   //squareDivs.textContent = ".";
   //squareDivs.classList = "square_div";
   CONTAINER.appendChild(squareDivs);
}


CreateSquaresButton.addEventListener('click', ()=>{
   console.log("CreateSquaresButton");
   createSquareDiv()
});