let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset");
let newgame = document.querySelector("#new-gm");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
     [0, 1, 2],
     [0, 3, 6],
     [0, 4, 8],
     [1, 4, 7],
     [2, 5, 8],
     [2, 4, 6],
     [3, 4, 5],
     [6, 7, 8]
];
const resetgame = () => {
     enableBoxes();
     msgcontainer.classList.add("hide");
     turnO = true;
 
}

boxes.forEach((box) => {
     box.addEventListener("click", () => {
        if(turnO) {
          box.innerHTML = "O";
          turnO = false;
        }
        else {
          box.innerHTML = "X";
          turnO = true;
        }
        box.disabled = true;

        checkWinner();
     });
 })
 const disableBoxes = () => {
     for (let box of boxes){
          box.disabled = true;
     }
 } 
 const enableBoxes = () => {
     for (let box of boxes){
          box.disabled = false;
          box.innerHTML = "";
     }
 } 
 const showWinner = (winner) => {
     msg.innerHTML = `Congratulations!, Winner is ${winner}`;
     msgcontainer.classList.remove("hide");
     disableBoxes();
 }
 const checkWinner = () =>{
     for(let pattern of winPatterns) {
          let pos1 = boxes[pattern[0]].innerHTML;
          let pos2 = boxes[pattern[1]].innerHTML;
          let pos3 = boxes[pattern[2]].innerHTML;
          if(pos1 != "" && pos2 != "" && pos3 != ""){
               if(pos1 === pos2 && pos2 === pos3) {
                  console.log("winner",pos1);
                  showWinner(pos1);
               }
          }
     }

 }

 newgame.addEventListener("click", resetgame);
 resetBtn.addEventListener("click", resetgame);
