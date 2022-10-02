var screen = document.getElementById('img-main');
var puzzle_screen = document.getElementById('puzzle-main');
var level_screen = document.getElementById('level');
var result_screen = document.getElementById('result');
var comment_text = document.getElementById('comment');
var img_star = document.getElementById('star_img');

const play_btn = document.getElementById("btn1");
const puzzle_btn = document.getElementById('btn2');
const sound = document.getElementById('btn3');
const return_btn = document.getElementById('return_btn');

var play_level1 = document.getElementById('level1');
var play_level2 = document.getElementById('level2');
var play_level3 = document.getElementById('level3');
var play_level4 = document.getElementById('level4');
var play_level5 = document.getElementById('level5');
var play_return = document.getElementById('play_return');

var rows = 3;
var columns = 3;

var currTile;
var otherTile; //blank tile
var turns = 0;

var originalorder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var arr =  ["1", "2", "6", "4", "5", "3", "7", "8", "9"];


let items = [ ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        ["1" ,"3" ,"7", "8", "6", "2", "4" ,"5" , "9"],
        ["8", "6", "2", "3", "1", "4", "5", "7", "9"],
        ["4", "2", "8", "5", "1", "6", "7", "9", "3"],
        ["4", "2", "8", "5", "1", "6", "7", "9", "3"] ];  

// screen.style.display="none";
puzzle_screen.style.display="none";
// puzzle_screen.hidden=true;
level_screen.style.display="none";
result_screen.style.display="none";



const board_start = (index) => {
    level_screen.style.display="none";
    for(let i=0; i<9; i++)
    {
        imgOrder[i]=items[index][i];
        // console.log(imgOrder[i]);
    }
    console.log(imgOrder);

    let update_index=0;
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++)
        {
            //<img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString()+ "-" +c.toString();

            tile.src = `level/lavel_${index}/${imgOrder[update_index]}.jpg`;
            // console.log(`level/lavel_${index}/${imgOrder[update_index]}.png`);
            // tile.src = imgOrder.shift() + ".jpg";
            update_index++;
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", ()=>{dragEnd(index)});      //after drag drop, swap the two tiles
            document.getElementById("puzzle-main").append(tile);
        }
    }

}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    
}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
}

var dragEnd = (index) => {
    if (!otherTile.src.includes(`level/lavel_${index}/9.jpg`)) {
        return;
    }
    let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);
    
    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);
    
    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;
    
    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;
    
    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;
    if (isAdjacent) 
    {
        let x=3*parseInt(currCoords[0])+parseInt(currCoords[1]), y=3*parseInt(otherCoords[0])+parseInt(otherCoords[1]);
        imgOrder[x]=(x+1).toString(); 
        imgOrder[y]=(y+1).toString(); 
        
        // console.log(`${x+1} and ${y+1}`);
        console.log(imgOrder);
        // console.log(imgOrder);
        
        let currImg = currTile.src;
        let otherImg = otherTile.src;
        // console.log(`${currImg}    ${otherImg}`);
        currTile.src = otherImg;
        otherTile.src = currImg;
        
        turns += 1;
        console.log(turns);
        // document.getElementById("turns").innerText = turns;
        if(JSON.stringify(imgOrder)==JSON.stringify(originalorder))
        {
            // console.log("yes");
            if(turns<=5)
            {
                comment_text.innerText="Awesome You Got stars";
                img_star.src="level/3_star.png";
            }
            else if(turns<=10)
            {
                comment_text.innerText="Good luck";
                img_star.src="level/2_star.png";
            }
            else{
                comment_text.innerText="Good But Next time Improve Your Game";
                img_star.src="level/1_star.png";
            }
            result_screen.style.display="block";
            puzzle_screen.style.display="none";
            
            while (puzzle_screen.firstChild) {
                    puzzle_screen.removeChild(puzzle_screen.firstChild);
            }


            // document.getElementById("comment").innerHTML="Congrats solved";
            // document.getElementById("btn").style.display="block";
        }
    }
}
const board = (index)=> {
    screen.style.display="none";
    puzzle_screen.style.display="block";
    board_start(index);
}

const level = (flag) => {
    if(flag)
    {
        result_screen.style.display="none";
        level_screen.style.display="block";
    }
    else
    {
        screen.style.display="none";
        level_screen.style.display="block";
    }
}
const start = () =>{
    // puzzle_screen.style.display="none";
    // puzzle_screen.hidden=true;
    level_screen.style.display="none";
    
}

play_btn.addEventListener("click", ()=>{board(0)});
puzzle_btn.addEventListener("click", ()=>{level(0)} );
play_level1.addEventListener("click",()=>{board(0)} );
play_level2.addEventListener("click",()=>{board(1)} );
play_level3.addEventListener("click",()=>{board(2)} );
play_level4.addEventListener("click",()=>{board(3)} );
play_level5.addEventListener("click",()=>{board(4)} );
return_btn.addEventListener("click",()=>{level(1)} );

