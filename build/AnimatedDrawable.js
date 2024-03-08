import CanvasUtil from './CanvasUtil.js';
export default class AnimatedDrawable {
    image;
    posX;
    posY;
    row;
    column;
    animationImages = [];
    timeToNextChange;
    imageNumber;
    numberOfSprites;
    setTimeToNextChangeBack;
    constructor() {
        this.numberOfSprites = 0;
        this.imageNumber = 0;
    }
    getWidth() {
        return this.image.width;
    }
    getHeight() {
        return this.image.height;
    }
    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.posY;
    }
    setPosX(posX) {
        this.posX = posX;
    }
    setPosY(posY) {
        this.posY = posY;
    }
    setRow(newRow) {
        this.row = newRow;
    }
    getRow() {
        return this.row;
    }
    setColumn(newColumn) {
        this.column = newColumn;
    }
    getColumn() {
        return this.column;
    }
    getImage() {
        return this.image;
    }
    setNumberOfSprites(numberOfSprites) {
        this.numberOfSprites = numberOfSprites - 1;
    }
    animation(elapsed) {
        this.timeToNextChange -= elapsed;
        if (this.timeToNextChange < 0) {
            this.imageNumber += 1;
            if (this.imageNumber > this.numberOfSprites)
                this.imageNumber = 0;
            this.image = this.animationImages[this.imageNumber];
            this.timeToNextChange = this.setTimeToNextChangeBack;
        }
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
    }
}
//# sourceMappingURL=AnimatedDrawable.js.map