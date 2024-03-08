import CanvasUtil from './CanvasUtil.js';
import Enemies from './Enemies.js';
export default class FlyEnemy extends Enemies {
    constructor(row, column, direction) {
        super(row, column, 1500);
        this.image = CanvasUtil.loadNewImage('./assets/fly/fly_anim_right_f0.png');
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/fly/fly_anim_right_f0.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/fly/fly_anim_right_f1.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/fly/fly_anim_right_f2.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/fly/fly_anim_right_f3.png'));
        this.enemyFacingRight.push(CanvasUtil.loadNewImage('./assets/fly/fly_anim_right_f0.png'));
        this.enemyFacingRight.push(CanvasUtil.loadNewImage('./assets/fly/fly_anim_right_f1.png'));
        this.enemyFacingRight.push(CanvasUtil.loadNewImage('./assets/fly/fly_anim_right_f2.png'));
        this.enemyFacingRight.push(CanvasUtil.loadNewImage('./assets/fly/fly_anim_right_f3.png'));
        this.enemyFacingLeft.push(CanvasUtil.loadNewImage('./assets/fly/fly_anim_left_f0.png'));
        this.enemyFacingLeft.push(CanvasUtil.loadNewImage('./assets/fly/fly_anim_left_f1.png'));
        this.enemyFacingLeft.push(CanvasUtil.loadNewImage('./assets/fly/fly_anim_left_f2.png'));
        this.enemyFacingLeft.push(CanvasUtil.loadNewImage('./assets/fly/fly_anim_left_f3.png'));
        this.setNumberOfSprites(4);
        this.ammountOfMovement = 1;
        this.moveNumbers = direction;
    }
    update(elapsed) {
        this.animation(elapsed);
        this.timeToNextMove -= elapsed;
        this.posX = 100 + this.column * 32;
        this.posY = 100 + this.row * 32;
        if (this.timeToNextMove < 1000) {
            if (this.moveNumbers === 1) {
                this.animationImages = this.enemyFacingRight;
                this.column += this.ammountOfMovement;
                this.row -= this.ammountOfMovement;
                this.moveNumbers = 2;
            }
            else if (this.moveNumbers === 2) {
                this.column += this.ammountOfMovement;
                this.moveNumbers = 3;
            }
            else if (this.moveNumbers === 3) {
                this.animationImages = this.enemyFacingLeft;
                this.column += this.ammountOfMovement;
                this.row += this.ammountOfMovement;
                this.moveNumbers = 4;
            }
            else if (this.moveNumbers === 4) {
                this.column -= this.ammountOfMovement;
                this.row += this.ammountOfMovement;
                this.moveNumbers = 5;
            }
            else if (this.moveNumbers === 5) {
                this.column -= this.ammountOfMovement;
                this.moveNumbers = 6;
            }
            else if (this.moveNumbers === 6) {
                this.row -= this.ammountOfMovement;
                this.column -= this.ammountOfMovement;
                this.moveNumbers = 1;
            }
            this.timeToNextMove = this.timeCounter;
        }
    }
}
//# sourceMappingURL=FlyEnemy.js.map