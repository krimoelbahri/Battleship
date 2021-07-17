/* eslint-disable no-undef */
import { Player } from "../player";
let karim=Player();
let computer= Player();

test("attack hits ship ", () => {
	expect(karim.attackEnemy(computer,2,2)).toBe("hit");
});
test("attack hits ship ", () => {
	expect(karim.attackEnemy(computer,2,1)).toBe("hit");
});
test("attack hits ship ", () => {
	expect(karim.attackEnemy(computer,4,0)).toBe("hit");
});
test("attack hits ship ", () => {
	expect(karim.attackEnemy(computer,0,6)).toBe("hit");
});
test("attack hits ship ", () => {
	expect(karim.attackEnemy(computer,1,4)).toBe("hit");
});
test("ships are not sunk ", () => {
	expect(karim.gameBoard.isAllShipsSunk(karim.ships)).toBe(false);
});
