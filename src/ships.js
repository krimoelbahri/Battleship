const Ship=function(length){
	let position=[];
	const hitArray=[];
	const hit= function(coordinates){
		for(let i=0;i< this.position.length;i++){
			if(this.position[i].includes(coordinates[0]) && this.position[i].includes(coordinates[1])){
				hitArray.push(coordinates);
				return true;
			} 
		}
	};
	const isSunk= function(){
		if(hitArray.length===length){return true;}
		return false; 
	};
	return{length,hitArray,position,hit,isSunk};
};
export {Ship};