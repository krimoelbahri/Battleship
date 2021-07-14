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
	const checkGB= function(ship,position,start){
		if(position==="horizontal"&& ship.length+start.column<10){
			for(let i=0;i<ship.length;i++){ 
				if(gameBoard[start.row][start.column+i]!==""){return false;}
			}
		}
		if(position==="vertical"&& ship.length+start.row<10){
			for(let i=0;i<ship.length;i++){ 
				if(gameBoard[start.row+i][start.column]!==""){return false;}
			}
		}
		return true;
	};
	
	
	return{gameBoard,receiveAttack,arrangeShips};
};
export {GameBoard};