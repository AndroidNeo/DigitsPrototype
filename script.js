//
// Ñîçäàíèå ìàòðèöû.
//
function createMatrix()
{
    var matrix = document.getElementById('matrix');
    var n = Nsize * Msize;

    for (var i = 0; i < n; i++)
    {
        var div = document.createElement('div');
        div.className = 'cell';
        div.id = "cell_" + String(Math.floor(i/Msize)) + "_" + String(i % Msize);
        div.style.backgroundColor = "white";
        matrix.appendChild(div);
    }
}

function createSnake (argument) {
    snake = new Object();
    snake.body = new Array(getPoint(5,5));
    snake.imove = 0;
    snake.jmove = 1;

    for (var i = 0; i < snake.body.length; i++) {
        var point = snake.body[i];
        setCell(point.i,point.j,"red");
    };

}

//
// ×òåíèå ÿ÷åéêè ìàòðèöû.
//
function getCell(row, col, color)
{
    // Ôóíêöèÿ ïðèíèìàåò êîîðäèíàòû ÿ÷åéêè
    // äîëæíà âåðíóòü true, åñëè îíà çàêðàøåíà,
    // false, åñëè íå çàêðàøåíà.

    var cell = document.getElementById("cell_" + row + "_" + col);
    return (cell.style.backgroundColor == color);

    //return ($("#cell_" + row + "_" + col).css("backgroundColor") == color);
}

//
// Óñòàíîâêà ÿ÷åéêè ìàòðèöû.
//
function setCell(row, col, color)
{

    // Ôóíêöèÿ ïðèíèìàåò êîîðäèíàòû ÿ÷åéêè
    // åñëè val == true, çàêðàøèâàåò ÿ÷åéêó,
    // èíà÷å óáèðàåò çàêðàñêó.

    color = color || "white";

    $("#cell_" + row + "_" + col).css("backgroundColor",color);



}

function getPoint (i,j) {
    var result = {"i":i, "j":j};
    return result;
}

function nextStep () {
    shiftSnake();


}

function shiftSnake () {

    var headPoint = snake.body[0];
    var newPoint = getPoint(headPoint.i + snake.imove, headPoint.j + snake.jmove);

    if (newPoint.i < 0 || newPoint.j < 0 || newPoint.i >= Nsize || newPoint.j >= Msize) {
        stopGame("out");
    } else if (getCell(newPoint.i,newPoint.j,"red")) {
        stopGame("collision");
    } else if (getCell(newPoint.i,newPoint.j,"green")) {
        snake.body.unshift(newPoint);
        setCell(newPoint.i, newPoint.j, "red");
    } else {
        var poppedPoint = snake.body.pop();
        snake.body.unshift(newPoint);

        setCell(poppedPoint.i,poppedPoint.j,"white");
        setCell(newPoint.i, newPoint.j, "red");
    };



}

function createFruits () {
    fruits = new Object;
    fruits.places = new Array(getPoint(5,12), getPoint(8,4), getPoint(15,15));

    for (var i = 0; i < fruits.places.length; i++) {
        var point = fruits.places[i];
        setCell(point.i,point.j,"green");
    };

}

function stopGame(reason) {

    reason = reason || "out";

    clearInterval(timerID);

    var textAlert = "Game over!";
    if (reason == "out") {
        textAlert = textAlert + " " + "The snake is out of the game field";
    } else if (reason == "collision") {
        textAlert = textAlert + " " + "The snake collaided with self body";
    }

    alert(textAlert);
}

function createTiles() {

    var main_window = document.getElementById('main_window');

    // for (var i = 0; i < n; i++)
    // {
    var div = document.createElement('div');
    div.id = "tile_1";
    div.className = 'tile_play';
    // div.id = "cell_" + String(Math.floor(i/Msize)) + "_" + String(i % Msize);
    div.style.backgroundColor = "yellow";
    main_window.appendChild(div);
    div.style.left = "100px";
    $("#tile_1").bind("mousemove",function(){alert("sdfsf")});

    // var div = document.createElement('div');
    // div.id = "tile_2";
    // div.className = 'tile_play';
    // // div.id = "cell_" + String(Math.floor(i/Msize)) + "_" + String(i % Msize);
    // div.style.backgroundColor = "green";
    // main_window.appendChild(div);
    // div.style.left = "140px";

    // }

}

function mouseMoveOnTile(event) {
    alert("sdfsfd");
}

//
// Òî÷êà âõîäà.
//
window.onload = function()
{
    // Nsize = 20;
    // Msize = 20;

    // createMatrix();
    // createSnake();
    // createFruits();

    // timerID = setInterval(nextStep,300);

    // document.onkeydown = function(event) {
    // 		if (event.keyCode == 37) {
    // 			snake.imove = 0;
    // 			snake.jmove = -1;
    // 		};
    // 		if (event.keyCode == 38) {
    // 			snake.imove = -1;
    // 			snake.jmove = 0;
    // 		};
    // 		if (event.keyCode == 39) {
    // 			snake.imove = 0;
    // 			snake.jmove = 1;
    // 		};
    // 		if (event.keyCode == 40) {
    // 			snake.imove = 1;
    // 			snake.jmove = 0;
    // 		};
    // 	};

    createTiles();
}
