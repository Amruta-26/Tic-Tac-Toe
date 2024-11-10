let currentPlayer="X";
let tracker=Array(9).fill(null);

const winningPositions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let gameOver=false;
let isGameDraw=false;
const cells=document.querySelectorAll(".cell");

function checkWinner(WP){
    for(i=0;i<WP.length;i++)
    {
        let v0=tracker[WP[i][0]];
        let v1=tracker[WP[i][1]];
        let v2=tracker[WP[i][2]];

        if(v0!=null && v0==v1 && v1==v2){
            showWinner();
            gameOver=true;
        }
    }
}

const showWinner = ()=> {
    document.querySelector("p").innerHTML=`${currentPlayer} is a Winner! <br> Please click Restart button to play again :)`;
    document.querySelector("button").style.display='inline';
};

function handleClick(element){
    const id = Number(element.id);
    if(tracker[id]==null && gameOver==false)
    {
        tracker[id]=currentPlayer;
        element.innerText=currentPlayer;
        checkWinner(winningPositions);
        isDraw();
        currentPlayer = currentPlayer === "X" ? "O" : "X";

    }
    else{
        element.innerText=tracker[id];
    }
}

const isDraw = () => {
    if(!gameOver){
        isGameDraw=true
        cells.forEach((cell) => {
            if(cell.innerHTML===""){
                isGameDraw=false;
            }
        });
    }
    if(isGameDraw)
    {
        document.querySelector("p").innerHTML=`It's a Draw! <br> Please click Restart button to play again :)`;
        document.querySelector("button").style.display='inline';
    }
};
        

    document.querySelector("#restartGame").addEventListener("click", ()=> {
        isGameDraw=false;
        gameOver=false;
        currentPlayer='X';
        cells.forEach((cell)=>{
            cell.innerHTML='';
        });
        document.querySelector("p").innerHTML='';
        tracker.fill(null);
        document.querySelector("button").style.display='none';
    });
// cells.forEach((cell) => {
//     cell.addEventListener("click", () => {
//         console.log(`id is ${cell.getAttribute("id")}`);

//     })
// });

