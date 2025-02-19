//your JS code here. If required.
document.getElementById("submit").addEventListener("click",function(){
	let player1= document.getElementById("player-1").value.trim();
	let player2= ducument.getElementById("player-2").value.trim();
	if(player1 === "" || player2 === ""){
		alert("please enter both player names!")
		return
	}
	document.getElementById("player-form").style.display = "none";
    document.getElementById("game").style.display = "block";

    let currentPlayer = player1;
    let currentSymbol = "X";
    let message = document.querySelector(".message");
    message.textContent = ${currentPlayer}, you're up!;
												   }
											   

    let board = ["", "", "", "", "", "", "", "", ""];
    let cell = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.textContent = "";
        cell.addEventListener("click", function () {
            let cellIndex = parseInt(cell.id) - 1;

            if (board[cellIndex] === "") {
                board[cellIndex] = currentSymbol;
                cell.textContent = currentSymbol;

                if (checkWinner(board, currentSymbol)) {
                    message.textContent = ${currentPlayer}, congratulations! You won!;
                    disableBoard();
                    return;
                }

                if (!board.includes("")) {
                    message.textContent = "It's a draw!";
                    return;
                }

                currentPlayer = currentPlayer === player1 ? player2 : player1;
                currentSymbol = currentSymbol === "X" ? "O" : "X";
                message.textContent = ${currentPlayer}, you're up!;
            }
        });
    });
});

function checkWinner(board, symbol) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winningCombinations.some(combination =>
        combination.every(index => board[index] === symbol)
    );
}

function disableBoard() {
    document.querySelectorAll(".cell").forEach(cell => cell.style.pointerEvents = "none");
}
	
})