/* eslint-disable no-undef */
import { Ship } from "../ships";

let battleship1= Ship(5);
battleship1.position= [[4,6],[5,6],[6,6],[7,6],[8,6]];
	
test("battleship1 is hit 1 ", () => {
	expect(battleship1.hit([4,6])).toBe(true);
});
test("battleship1 is hit 2 ", () => {
	expect(battleship1.hit([5,6])).toBe(true);
});
test("battleship1 is hit 3 ", () => {
	expect(battleship1.hit([6,6])).toBe(true);
});
test("battleship1 is hit 4 ", () => {
	expect(battleship1.hit([7,6])).toBe(true);
});
test("battleship1 is hit 5 ", () => {
	expect(battleship1.hit([8,6])).toBe(true);
});
test("ship is sunk ", () => {
	expect(battleship1.isSunk()).toBe(true);
});
