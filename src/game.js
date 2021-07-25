import { Player } from "./player";
import {getRandomRowColumn} from "./GBoard_handling";

const Game= function(){
	let player1=Player();
	let computer=Player();
	let winner=null;
	computer.randomlyArrange();

	const randomlyArrangePlayer=function(){ player1.randomlyArrange("player");};
	const arrangePlayersShips= function(i, orientation, start){
		if(player1.gameBoard.arrangeShips(player1.ships[i],orientation,start)){
			return (true);
		}
		return false;
	};
	const playerAttack= function(e){
		let name="computer";
		let result=player1.attackEnemy(computer,Number(e.target.dataset.row),Number(e.target.dataset.column));
		let index= {
			row:e.target.dataset.row,
			column:e.target.dataset.column
		};
		return {name,result,index};
	};
	
	const computerAttack= function(){
		let rndRow=getRandomRowColumn().row;
		let rndColumn=getRandomRowColumn().column;
		// making sure computer does a legit move.
		while(player1.gameBoard.gameBoardArray[rndRow][rndColumn]!==""
		&& typeof(player1.gameBoard.gameBoardArray[rndRow][rndColumn])!== "object"){
			rndRow=getRandomRowColumn().row;
			rndColumn=getRandomRowColumn().column;
		}

		let name="player";
		let result=computer.attackEnemy(player1,rndRow,rndColumn);
		let index= {
			row:rndRow,
			column:rndColumn
		};
		return {name,result,index};
	};

	const checkWinner= function(){
		if(player1.gameBoard.isAllShipsSunk(player1.ships)){
			winner="computer";
			return(winner);
		}
		if(computer.gameBoard.isAllShipsSunk(computer.ships)){
			winner="player";
			return(winner);
		}
	};

	return{randomlyArrangePlayer,arrangePlayersShips,playerAttack,computerAttack,checkWinner};
}  ;
export {Game};