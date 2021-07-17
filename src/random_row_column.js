const getRandomRowColumn= function(){
	let row=Math.floor(Math.random()*10);
	let column=Math.floor(Math.random()*10);
	return{row:row,column:column};
};
export {getRandomRowColumn};