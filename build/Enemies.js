import AnimatedDrawable from './AnimatedDrawable.js';
export default class Enemies extends AnimatedDrawable {
    moveNumbers;
    ammountOfMovement;
    timeToNextMove;
    moveAgain;
    timeCounter;
    enemyFacingLeft = [];
    enemyFacingRight = [];
    constructor(row, column, time) {
        super();
        this.row = row;
        this.column = column;
        this.timeCounter = time;
        this.moveAgain = false;
        this.timeToNextMove = this.timeCounter;
        this.timeToNextChange = 100;
        this.setTimeToNextChangeBack = 100;
        this.row = row;
        this.column = column;
    }
    update(elapsed) {
        this.animation(elapsed);
        this.timeToNextMove -= elapsed;
        this.posX = 100 + this.column * 32;
        this.posY = 100 + this.row * 32;
        if (this.timeToNextMove < 0) {
            if (this.moveAgain) {
                this.column += this.ammountOfMovement;
                this.moveAgain = false;
            }
            else {
                this.column -= this.ammountOfMovement;
                this.moveAgain = true;
            }
            this.timeToNextMove = this.timeCounter;
        }
    }
}
//# sourceMappingURL=Enemies.js.map