import {htmlCreate} from "./DOM_Manipulation";
const creatGB= function(name){
	let GBContainer=htmlCreate("div",`${name}GB`,["GBContainer"]);
	for(let i=0;i<10;i++){
		for(let j=0;j<10;j++){
			let GBCell=htmlCreate("div",`${name}GBCell${i}${j}`,[`${name}GBCell`],`${i}`,`${j}`);
			GBContainer.appendChild(GBCell);
		}
	}
	return GBContainer;
};
const renderGB= function(obj){
	let cell=document.getElementById(`${obj.name}GBCell${obj.index.row}${obj.index.column}`);
	if(obj.result==="hit"){
		cell.style.backgroundColor="red";
	}else{
		cell.style.backgroundColor="green";
	}
};
const renderArrangedShips=function(name,index,orientation,start){
	let length;
	switch (index) {
	case "0":
		length=5;
		break;
	case "1":
		length=4;
		break;
	case "2":
		length=3;
		break;
	case "3":
		length=2;
		break;
	case "4":
		length=2;
		break;
	case ("5"):
		length=1;
		break;
	case "6":
		length=1;
		break;
	}

	if(orientation ==="vertical"){
		for(let i=0;i<length;i++){
			let cell=document.getElementById(`${name}GBCell${start.row+i}${start.column}`);
			cell.style.backgroundColor="blue";
		}
	}
	if(orientation ==="horizontal"){
		for(let i=0;i<length;i++){
			let cell=document.getElementById(`${name}GBCell${start.row}${start.column+i}`);
			cell.style.backgroundColor="blue";
		}
	}
};
const getRandomRowColumn= function(){
	let row=Math.floor(Math.random()*10);
	let column=Math.floor(Math.random()*10);
	return{row:row,column:column};
};
const getRandomOrientation= function(){
	let orientation=["vertical","horizontal"];
	let index=Math.floor(Math.random()*2);
	return orientation[index];
};
export {renderArrangedShips};
export {getRandomRowColumn};
export {getRandomOrientation};
export {creatGB};
export {renderGB};