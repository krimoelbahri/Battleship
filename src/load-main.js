import { htmlCreate } from "./DOM_Manipulation";
import airCraftIcon from "./images/Aircraft.jpg";
import battleShipIcon from "./images/Battleship.png";
import cruiserIcon from "./images/cruiser.png";
import destroyerIcon from "./images/Destroyer.gif";
import submarineIcon from "./images/Submarine.png";


const createShips= function(){
	let airCraft=htmlCreate("img","airCraft",["horizontal"],0);
	let battleShip=htmlCreate("img","battleShip",["horizontal"],1);
	let cruiser=htmlCreate("img","cruiser",["horizontal"],2);
	let destroyer1=htmlCreate("img","destroyer1",["horizontal"],3);
	let destroyer2=htmlCreate("img","destroyer2",["horizontal"],4);
	let submarine1=htmlCreate("img","submarine1",["horizontal"],5);
	let submarine2=htmlCreate("img","submarine2",["horizontal"],6);
	airCraft.src=airCraftIcon;
	battleShip.src=battleShipIcon;
	cruiser.src=cruiserIcon;
	destroyer1.src=destroyerIcon;
	destroyer2.src=destroyerIcon;
	submarine1.src=submarineIcon;
	submarine2.src=submarineIcon;

	return [airCraft,battleShip,cruiser,destroyer1,destroyer2,submarine1,submarine2];
};
const shipsContainer= function(){
	let shipsContainer=htmlCreate("div","shipsContainer",["main-shipsContainer"]);
	let ships= createShips();
	shipsContainer.appendChild(ships[0]);
	shipsContainer.appendChild(ships[1]);
	shipsContainer.appendChild(ships[2]);
	shipsContainer.appendChild(ships[3]);
	shipsContainer.appendChild(ships[4]);
	shipsContainer.appendChild(ships[5]);
	shipsContainer.appendChild(ships[6]);
	return shipsContainer;
};
const GBContainer= function(name){
	let GBContainer = htmlCreate("div",`${name}GBContainer`,["main-GBContainer"]);
	return GBContainer;
};
const gameButtonsContainer= function(){
	let gameButtonsContainer= htmlCreate("div","gameButtonsContainer",["button_container"]);
	gameButtonsContainer.innerHTML="<button id='random'>Random</button>";
	return gameButtonsContainer;
};
const playerSide= function(){
	let playerSide= htmlCreate("div","playerSide",["side_container"]);
	playerSide.innerHTML="<div class='fleet player'><P>YOUR FLEET</P></div>";
	playerSide.appendChild(GBContainer("player"));
	playerSide.appendChild(shipsContainer());
	playerSide.appendChild(gameButtonsContainer());
	return playerSide;
};
const computerSide= function(){
	let computerSide= htmlCreate("div","computerSide",["side_container"]);
	let emptyShipContainer= htmlCreate("div","",["main-shipsContainer"]);
	let emptyButtonContainer= htmlCreate("div","",["button_container"]);
	computerSide.innerHTML="<div class='fleet computer'><P> OPPONENT</P></div>";
	computerSide.appendChild(GBContainer("computer"));
	computerSide.appendChild(emptyShipContainer);
	computerSide.appendChild(emptyButtonContainer);
	return computerSide;
};
const loadMain= function(){
	let mainContainer= htmlCreate("div","mainContainer",["main-container"]);
	mainContainer.appendChild(playerSide());
	mainContainer.appendChild(computerSide());
	return mainContainer;
};
export {loadMain};