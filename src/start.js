import { creatGB } from "./GBoard_handling";
import { renderGB } from "./GBoard_handling";
import { renderArrangedShips } from "./GBoard_handling";
import { toggleElementClass } from "./DOM_Manipulation";
import {Game} from "./game";

const initializeGame= function(){
	// initializing Game Boards 
	let playerContainer= document.getElementById("playerGBContainer");
	let computerContainer= document.getElementById("computerGBContainer");
	let shipIndex; let shipOrientation;let shipId; let arrangedShips=0;let random=true;
	playerContainer.innerHTML="";
	computerContainer.innerHTML="";
	playerContainer.appendChild(creatGB("player"));
	computerContainer.appendChild(creatGB("computer"));
	toggleElementClass("computerSide","off");

	// declaring new game
	let newGame= Game();


	//adding methods
	const checkStart= function(i){
		if(i===7){
			toggleElementClass("computerSide","off");
		}
	};
	const handleGBClick= function(e){
		if(!shipIndex){return;}
		let start={
			row:Number(e.target.dataset.row),
			column:Number(e.target.dataset.column),
		};
		if(!newGame.arrangePlayersShips(shipIndex,shipOrientation,start)){
			shipIndex=0;
			return;
		}
		arrangedShips++;
		renderArrangedShips("player",shipIndex,shipOrientation,start);
		document.getElementById(shipId).removeEventListener("click",handleImgClick);
		toggleElementClass(shipId,"off");
		shipIndex=0;
		checkStart(arrangedShips);
	};
	const handleImgClick= function(e){
		if(random){
			document.getElementById("random").classList.toggle("on");
			random=false;
		}
		shipId=e.target.id;
		toggleElementClass(shipId,"horizontal");
		toggleElementClass(shipId,"vertical");
		shipIndex= e.target.dataset.row;
		shipOrientation= e.target.className;
	};
	const randomArrange= function(e){
		newGame.randomlyArrangePlayer();
		document.querySelectorAll("img").forEach(img=>{
			img.classList.toggle("off");
			img.removeEventListener("click",handleImgClick);
		});
		e.target.removeEventListener("click",randomArrange);
		toggleElementClass(e.target.id,"on");
		checkStart(7);
	};

	// game loop logic
	const playRound= function(e){
		let playerAttack=newGame.playerAttack(e);
		renderGB(playerAttack);
		if(newGame.checkWinner()){
			initializeGame();
			return;
		}
		e.target.removeEventListener("click",playRound);
		let computerAttack=newGame.computerAttack();
		setTimeout(renderGB(computerAttack),1000);
		if(newGame.checkWinner()){
			initializeGame();
			return;
		}
	};


	//handling events
	document.querySelectorAll("img").forEach(img=>{
		img.addEventListener("click",handleImgClick);
		img.classList.remove("off");
		img.classList.replace("vertical","horizontal");
	});
	document.querySelectorAll(".computerGBCell").forEach(cell => {
		cell.addEventListener("click",playRound);
	});
	document.querySelectorAll(".playerGBCell").forEach(cell => {
		cell.addEventListener("click",handleGBClick);
	});
	document.getElementById("random").addEventListener("click",randomArrange);
	document.getElementById("random").classList.toggle("on");

};
export{initializeGame};