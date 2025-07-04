let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; //playerx, playero
let count=0;    //To Track Draw

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        // playerO
        if(turnO) {  //(turno===true)
            box.innerText="O";
            box.classList.add("o-color");
            turnO = false;
            
        } else{ 
            //playerX
            box.innerText ="x";
            box.classList.add("x-color");
            turnO=true;
        }
        box.disabled = true;
        
        
        //Draw Condition Check
        count++;
        let isWinner = checkWinner();
        if(count == 9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw=() =>{
    msg.innerText=`Game is Draw `;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}




const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");

};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("x-color,o-color");
    }
};

const showwinner=(winner)=>{
    msg.innerText=`congratulation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () =>{
    for(let pattern of winpatterns) {
        let posval1= boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;


        if (posval1!="" && posval2!="" && posval3!=""){
            if(posval1== posval2 && posval2== posval3){
                //console.log("winner" ,posval1);
                showwinner(posval1);    
            } 
        }

    }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
