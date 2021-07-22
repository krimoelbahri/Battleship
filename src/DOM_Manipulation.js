const htmlCreate= function(htmlElement,id,_class,dataRow,dataColumn){
	let element= document.createElement(htmlElement);
	if(id){element.setAttribute("id",id);}
	if(_class){
		_class.forEach((cls) => {
			element.classList.add(cls);
		});
	} 
	element.setAttribute("data-row",dataRow);
	element.setAttribute("data-column",dataColumn);

	return element;
};
const showHideElement= function(id,_class){
	let element=document.getElementById(id);
	element.classList.toggle(_class);
};

export {htmlCreate};
export {showHideElement};