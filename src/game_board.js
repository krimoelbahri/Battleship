const GameBoard= function(){
	let gameBoard=[
		["","","","","","","","","",""],
		["","","","","","","","","",""],
		["","","","","","","","","",""],
		["","","","","","","","","",""],
		["","","","","","","","","",""],
		["","","","","","","","","",""],
		["","","","","","","","","",""],
		["","","","","","","","","",""],
		["","","","","","","","","",""],
		["","","","","","","","","",""],
	];

	const receiveAttack = function(row,column){
		if(gameBoard[row][column]===""){return gameBoard[row][column]="missed";}
		if(gameBoard[row][column].hit([row,column])){return gameBoard[row][column]="hit";}
	};
	
	return{gameBoard,receiveAttack,arrangeShips};
};
export {GameBoard};