const GameBoard= function(){
	const gameBoardArray=[
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
		if(gameBoardArray[row][column]===""){
			gameBoardArray[row][column]="missed";
			return ("missed");
		}
		if(gameBoardArray[row][column].hit([row,column])){
			gameBoardArray[row][column]="hit";
			return ("hit");}
	};
	const checkGB= function(ship,position,start){
		if(position==="horizontal"&& ship.length+start.column >10 
		|| position==="vertical"&& ship.length+start.row>10) {
			return false;
		}

		if(position==="horizontal"&& ship.length+start.column<=10) {
			for(let i=0;i<ship.length;i++){ 
				if(gameBoardArray[start.row][start.column+i]!==""){
					return false;
				}
			}
		}
		if(position==="vertical"&& ship.length+start.row<=10) {
			for(let i=0;i<ship.length;i++){ 
				if(gameBoardArray[start.row+i][start.column]!==""){
					return false;
				}
			}
		}
		return true;
	};
	const arrangeShips = function(ship,position,start){
		if(!checkGB(ship,position,start)){return false;}
		if(position==="horizontal") {
			for(let i=0;i<ship.length;i++){ 
				ship.position.push([start.row,start.column+i]);
				this.gameBoardArray[start.row][start.column+i]=ship;
			}
		}
		if(position==="vertical") {
			for(let i=0;i<ship.length;i++){ 
				ship.position.push([start.row+i,start.column]);
				this.gameBoardArray[start.row+i][start.column]=ship;
			}
		}
		return true;
	};
	const isAllShipsSunk = function(array){
		let sunkenShips= array.filter((ship)=>ship.isSunk());
		if(sunkenShips.length === array.length){return true;}
		return false;
	};
	
	return{gameBoardArray,receiveAttack,arrangeShips,isAllShipsSunk};
};
export {GameBoard};