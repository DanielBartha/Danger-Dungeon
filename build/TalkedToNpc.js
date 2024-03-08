export default class TalkedToNpc {
    static mapOne = false;
    static mapTwo = false;
    static mapThree = false;
    static mapFour = false;
    static currentText = -1;
    static goToNextRoom = false;
    static goToEnding = false;
    static goToLastRoom = false;
    static goToThirdRoom = false;
    static nextDialog(arraylenght) {
        if (this.currentText < arraylenght - 1) {
            this.currentText += 1;
        }
        else {
            this.currentText = 10;
        }
    }
    static resetCurrentText() {
        this.currentText = -1;
    }
    static setGoToNextRoom(go) {
        this.goToNextRoom = go;
    }
    static getGoToNextRoom() {
        return this.goToNextRoom;
    }
    static setGoToThirdRoom(yes) {
        this.goToThirdRoom = yes;
    }
    static getGoToThirdRoom() {
        return this.goToThirdRoom;
    }
    static setGoToLastRoom(ok) {
        this.goToLastRoom = ok;
    }
    static getGoToLastRoom() {
        return this.goToLastRoom;
    }
    static setGoToEnding(nice) {
        this.goToEnding = nice;
    }
    static getGoToEnding() {
        return this.goToEnding;
    }
    static getcurrentText() {
        return this.currentText;
    }
    static setMapOne(one) {
        this.mapOne = one;
    }
    static getMapOne() {
        return this.mapOne;
    }
    static setMapTwo(two) {
        this.mapTwo = two;
    }
    static getMapTwo() {
        return this.mapTwo;
    }
    static setMapThree(three) {
        this.mapThree = three;
    }
    static getMapThree() {
        return this.mapThree;
    }
    static setMapFour(four) {
        this.mapFour = four;
    }
    static getMapFour() {
        return this.mapFour;
    }
}
//# sourceMappingURL=TalkedToNpc.js.map