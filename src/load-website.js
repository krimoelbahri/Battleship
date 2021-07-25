import { htmlCreate } from "./DOM_Manipulation";
import { loadMain } from "./load-main";
const header= function(){
	let header= htmlCreate("div","header",["main-header"]);
	header.innerHTML="<h1>BATTLESHIP</h1>";
	return header;
};
const main= function(){
	let main= htmlCreate("div","main");
	main.appendChild(loadMain());
	return main;
};
const footer= function(){
	let footer= htmlCreate("div","footer",["main-footer"]);
	footer.innerHTML="<p>Copyright © Created by <a href=https://github.com/krimoelbahri> Elbahri </a>. TOP project</p>";
	return footer;
};
const loadWebsite= function(){
	let container= document.getElementById("container");
	container.appendChild(header());
	container.appendChild(main());
	container.appendChild(footer());
};
export {loadWebsite};