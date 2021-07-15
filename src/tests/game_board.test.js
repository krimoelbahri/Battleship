/* eslint-disable no-undef */
import { Ship } from "../ships";
import { GameBoard } from "../game_board";

let battleShip1= Ship(5);
let cruiser= Ship(3);
let cruiser2= Ship(3);
let carrier= Ship(2);
let playerGB= GameBoard();

playerGB.arrangeShips(battleShip1,"vertical",{row:4,column:2});
test("cruiser Not arranged 1  ", () => {
	expect(playerGB.arrangeShips(cruiser,"vertical",{row:4,column:2})).toBe(false);
});
test("cruiser Not arranged 2 ", () => {
	expect(playerGB.arrangeShips(cruiser,"vertical",{row:2,column:2})).toBe(false);
});
test("cruiser Not arranged 3 ", () => {
	expect(playerGB.arrangeShips(cruiser,"horizontal",{row:5,column:0})).toBe(false);
});
test("cruiser Not arranged 4 ", () => {
	expect(playerGB.arrangeShips(cruiser,"horizontal",{row:6,column:0})).toBe(false);
});
test("cruiser arranged  ", () => {
	expect(playerGB.arrangeShips(cruiser,"horizontal",{row:5,column:3})).toBe(true);
});
test("carrier arranged  ", () => {
	expect(playerGB.arrangeShips(carrier,"horizontal",{row:8,column:8})).toBe(true);
});
test("battleShip1 hit 1 ", () => {
	expect(playerGB.receiveAttack(5,2)).toBe("hit");
});
test("battleShip1 hit 2 ", () => {
	expect(playerGB.receiveAttack(6,2)).toBe("hit");
});
test("battleShip1 hit 3 ", () => {
	expect(playerGB.receiveAttack(4,2)).toBe("hit");
});
test("battleShip1 hit 4 ", () => {
	expect(playerGB.receiveAttack(7,2)).toBe("hit");
});
test("battleShip1 hit 5 ", () => {
	expect(playerGB.receiveAttack(8,2)).toBe("hit");
});
test("cruiser hit 1 ", () => {
	expect(playerGB.receiveAttack(5,3)).toBe("hit");
});
test("cruiser hit 2 ", () => {
	expect(playerGB.receiveAttack(5,4)).toBe("hit");
});
test("cruiser hit 3 ", () => {
	expect(playerGB.receiveAttack(5,5)).toBe("hit");
});
test("battleShip1 Not hit 1 ", () => {
	expect(playerGB.receiveAttack(9,2)).toBe("missed");
});
test("all ships are sunk ", () => {
	expect(playerGB.isAllShipsSunk([battleShip1,cruiser])).toBe(true);
});
test("Not all ships are sunk ", () => {
	expect(playerGB.isAllShipsSunk([battleShip1,cruiser,cruiser2,carrier])).toBe(false);
});

