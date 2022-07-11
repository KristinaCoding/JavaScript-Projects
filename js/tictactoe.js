//This variable keeps track who`s turn it is
let activePlayer="X";
//this array stores an array of moves 
let selectedSquares=[];

//placing x or o in a square
function placeXOrO(squareNumber) {
    //this condition ensures a square has not been selected already
    //this .some() method check each element of selected square array
    //to see if it contains the square number clicked onnnnn
    if (!selectedSquares.some(element=>element.includes(squareNumber))) {
        //this variable retrieves the html element that was clicked
        let select= document.getElementById(squareNumber);
        //this condition checks who turn it is 
        if  (activePlayer==="X") {
            //if activePlayer is equal to X, the x.png is placed
            select.style.backgroundImage=`url("images/x-goldpx.png")`;
            //active player can only be X or O,so if not X then O
        } else {
            //if activePlayer is equal to O,the o.png is placed
            select.style.backgroundImage=`url("images/o-goldpx.png")`;
        }
        //squareNumber and activePlayer are conctenated together and added to array
        selectedSquares.push(squareNumber+activePlayer);
        //this calls a funciton to check for any win conditions
        checkWinConditions();
        //this condition is for changing the active player
        if (activePlayer==="X") {
            //if activePlayer is X change it to O
            activePlayer="O";
            //if active player is anything other than X 
        }else{
            //change active player toX
            activePlayer="X";
        }  
        //this function plays placement sounds
        audio("media/gameclick.wav");
        //this condition see if it is computer turn.
        if (activePlayer==="O"){
            //this function disables clicking for computer choice
            disableClick();
            //this function waits 1s before placing the image and enable click
            setTimeout(function(){computersTurn();}, 1000); 
        }
        //returning true is needed for our computer`s turn funtion to work
        return true;
    } 
    //This function results in random square being selected
    function computersTurn(){
        //this boolean is needed for my while loop
        let success=false;
        //this variable stores random number 0-8
        let pickASquare;
        //this condition allow for a while loop to keep trying if 
        //a square is selected
        while(!success){
            //a random number between 0-8 is selected
            pickASquare=String(Math.floor(Math.random()*9));
            //if the random number evalueates returns trueeee,the square has not been selected
            if (placeXOrO(pickASquare)){
                //this line calls the function 
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success=true;
            };
        }

    } 
}

//this function parses the selectedSqaures array to search for win Conditions
//drawLine function is called to draw line if condition is met
function checkWinConditions(){
    //X 0,1,2,3 condition
    if (arrayIncludes("0X","1X","2X")) {drawWinLine(50,100,558,100);}
    //X 3,4,5 condition
    else if (arrayIncludes("3X","4X","5X")) {drawWinLine(50,304,558,304);}

    //X 6,7,8 condition
    else if (arrayIncludes("6X","7X","8X")) {drawWinLine(50,508,558,508);}
    //X 0,3,6 condition
    else if (arrayIncludes("0X","3X","6X")) {drawWinLine(100, 50, 100, 558);}

    //X 1,4,7 condition
    else if (arrayIncludes("1X","4X","7X")) {drawWinLine(304,50,304,558);}
    //X 2,5,8 condition
    else if (arrayIncludes("2X","5X","8X")) {drawWinLine(508, 50, 508, 558);}

    //X 6,4,2 condition
    else if (arrayIncludes("6X","4X","2X")) {drawWinLine(100, 508,  510, 90);}
    //X 0,4,8 condition
    else if (arrayIncludes("0X","4X","8X")) {drawWinLine(100, 100, 520, 520);}

    //O 0,1,2 condition
    else if (arrayIncludes("0O","1O","2O")) {drawWinLine(50,508,558,508);}
    //O 3,4,5 condition
    else if (arrayIncludes("3O","4O","5O")) {drawWinLine(100, 100, 520, 520);}

     //O 6,7,8 condition
     else if (arrayIncludes("6O","7O","8O")) {drawWinLine(50,508,558,508);}
     //O 0,3,6 condition
     else if (arrayIncludes("0O","3O","6O")) {drawWinLine(100, 100, 520, 520);}

    //O 1,4,7 condition
    else if (arrayIncludes("1O","4O","7O")) {drawWinLine(50,508,558,508);}
    //O 2,5,8 condition
    else if (arrayIncludes("2O","5O","8O")) {drawWinLine(100, 100, 520, 520);}

    //O 6,4,2 condition
    else if (arrayIncludes("6O","4O","2O")) {drawWinLine(50,508,558,508);}
    //O 0,4,8 condition
    else if (arrayIncludes("0O","4O","8O")) {drawWinLine(100, 100, 520, 520);}

    //This condition checks for tie. If non of the above condition register
    //and 9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //this function plays the time game sound
        audio("./media/game.wav");
        //this function set a .3s function timer before the reset game is called
        setTimeout(function() {resetGame(); }, 1000);
    }
    //this function check is an array includes three strings 
    //it is used to check for each win condition.
    function arrayIncludes(squareA,squareB,squareC) {
        //variables that check for 3 in a row
        const a=selectedSquares.includes(squareA);
        const b=selectedSquares.includes(squareB);
        const c=selectedSquares.includes(squareC)

        //if the three variables I pass are all included in the array true
        //is returned and our else if condition executes the drawLine function
        if(a===true && b===true && c===true) {return true;}
    }
}

//This function makes our body element temporarily unclickable
function disableClick() {
    //makes body unclickable
    body.style.pointerEvents =`none`;
    //this makes our body clickable after 1s
    setTimeout(function() {body.style.pointerEvents =`auto`;}, 1000);
}

//this fnction takes a string parameter of the path I set earlier and for
//placement sound 
function audio (audioURL) {
    //create new audio object and pass the path as parameter
    let audio=new Audio (audioURL);
    //Play method plays our audio sound
    audio.play();
}


//this function utilizes html canvas to draw win lines
function drawWinLine(coordX1,coordY1,coordX2,coordY2){
    //this line access my canvas html element
    const canvas = document.getElementById("win-lines");
    //this line gives access to methods and properties to use on canvas
    const c=canvas.getContext("2d");
    //indicates where the start of lines x axis is
    let x1=coordX1,
    //indicates where the start of lines y axis is
    y1=coordY1,
    //indicates where the start of lines x axis is
    x2=coordX2,
    //indicates where the start of lines y axis is
    y2=coordY2,
    //this variable store temporary x axis data we update in html loop
    x=x1,
    //this variable store temporary y axis data we update in html loop
    y=y1;

//this function interacts with the canvas
function animateLineDrawing() {
    //this variable creates the loop for when the game ends it restarts 
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //this method clears content from last loop iteration
    c.clearRect(0,0,608,608);
    //this method starts a new path
    c.beginPath ();
    //method that moves us to a starting point for our line
    c.moveTo(x1,y1);
    //method that indicates the end point of our line
    c.lineTo(x,y);
    //method set the width of our line
    c.lineWidth = 10;
    //method-sets color of line
    c.strokeStyle = "rgba(70, 255, 33, .8)";
    //draws everything that is layout above
    c.stroke();
    //condition that check if we have reached the endpoint
    if (x1 <= x2 && y1 <= y2){
        //this condition adds to the previous end x point
        if (x < x2) {x+=10;}
        //this condition adds 10 to the previous end y point
        if (y < y2) {y +=10;}
        //this condition cancels our animation loop if reach the end points
        if (x >= x2 && y >=y2) {cancelAnimationFrame(animationLoop);}
    }
    //this condition is similar to the one above
    //it is necessary for the 6,4,2 win condition
    if (x1<=x2 && y1 >=y2) {
        if (x < x2) {x+=10;}
        if(y > y2) {y-=10;}
        if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
    }
}
//this function clears the canvas after win line is drawn
function clear(){
    //start our animation loop
    const animationLoop=requestAnimationFrame(clear);
    //clears our canvas
    c.clearRect(0,0,608,608);
    //stop animation loop
    cancelAnimationFrame(animationLoop);
}
//this line disallows clicking while the win sound is playing
disableClick();
//plays the win sound
audio (`./media/win.wav`);
//calls our main animation loop
animateLineDrawing();
//this line waits 1s
//then clears canvas,reset game and allows clicking again
setTimeout(function() {clear();resetGame();},1000);
}

//this function reset the game in  tie or win 
function resetGame() {
    //this loop iterates through each HTML square element
    for (let i=0; i<9; i++) {
    //variable that gets the HTML element of i
    let square=document.getElementById(String(i));
    //this removes our element background image
    square.style.backgroundImage="";
}
//this reset array so it is empty and we can start over
selectedSquares= [];
}
