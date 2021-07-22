import {Ship} from "./ships";
import {GameBoard} from "./game_board";
import {getRandomRowColumn} from "./GBoard_handling";
import {getRandomOrientation} from "./GBoard_handling";


const Player= function(){
	//ships

	let airCraft=Ship(5);let battleShip=Ship(4);let cruiser=Ship(3);
	let destroyer1=Ship(2);let destroyer2=Ship(2);let submarine1=Ship(1);let submarine2=Ship(1);
	//player methods

	const ships=[airCraft,battleShip,cruiser,destroyer1,destroyer2,submarine1,submarine2];
	const gameBoard= GameBoard();
	
	const randomlyArrange= function(){
		let i=0;
		while(i<ships.length){
			let rndRow=getRandomRowColumn().row;
			let rndColumn= getRandomRowColumn().column;
			let orientation= getRandomOrientation();
			if(gameBoard.arrangeShips(ships[i],orientation,{row:rndRow,column:rndColumn})){
				i++;
			}
		}
	};
	
	
	

};
export {Player};