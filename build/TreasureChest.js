import AnimatedDrawable from './AnimatedDrawable.js';
import AttackChange from './AttackChange.js';
import CanvasUtil from './CanvasUtil.js';
import ChestStayOpen from './ChestStayOpen.js';
import PlayerUI from './playerUI.js';
export default class TreasureChest extends AnimatedDrawable {
    chestOpen = [];
    constructor(row, column, roomNumber = 1) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/chest/chest_closed_anim_f0.png');
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/chest/chest_closed_anim_f0.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/chest/chest_closed_anim_f1.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/chest/chest_closed_anim_f2.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/chest/chest_closed_anim_f3.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/chest/chest_closed_anim_f4.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/chest/chest_closed_anim_f5.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/chest/chest_closed_anim_f6.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/chest/chest_closed_anim_f7.png'));
        this.chestOpen.push(CanvasUtil.loadNewImage('./assets/chest/chest_open.png'));
        this.chestOpen.push(CanvasUtil.loadNewImage('./assets/chest/chest_open.png'));
        this.chestOpen.push(CanvasUtil.loadNewImage('./assets/chest/chest_open.png'));
        this.chestOpen.push(CanvasUtil.loadNewImage('./assets/chest/chest_open.png'));
        this.chestOpen.push(CanvasUtil.loadNewImage('./assets/chest/chest_open.png'));
        this.chestOpen.push(CanvasUtil.loadNewImage('./assets/chest/chest_open.png'));
        this.chestOpen.push(CanvasUtil.loadNewImage('./assets/chest/chest_open.png'));
        this.chestOpen.push(CanvasUtil.loadNewImage('./assets/chest/chest_open.png'));
        this.setNumberOfSprites(8);
        if (roomNumber === 1 && ChestStayOpen.getMapOne()) {
            this.animationImages = this.chestOpen;
        }
        if (roomNumber === 3 && ChestStayOpen.getMapThree()) {
            this.animationImages = this.chestOpen;
        }
        if (roomNumber === 4 && ChestStayOpen.getMapFour()) {
            this.animationImages = this.chestOpen;
        }
        this.row = row;
        this.column = column;
        this.timeToNextChange = 200;
        this.setTimeToNextChangeBack = 200;
    }
    setTreasureChestOpen(number) {
        this.animationImages = this.chestOpen;
        if (number === 1) {
            ChestStayOpen.setMapOne(true);
            AttackChange.setGreenSlash(true);
        }
        if (number === 3) {
            PlayerUI.setState(0);
            ChestStayOpen.setMapThree(true);
        }
        if (number === 4) {
            ChestStayOpen.setMapFour(true);
            AttackChange.setPurpleSlash(true);
        }
    }
    update(elapsed) {
        this.posX = this.column * 32;
        this.posY = this.row * 32;
        this.timeToNextChange -= elapsed;
        if (this.timeToNextChange < 0) {
            this.imageNumber += 1;
            if (this.imageNumber > this.numberOfSprites)
                this.imageNumber = 0;
            this.image = this.animationImages[this.imageNumber];
            this.timeToNextChange = this.setTimeToNextChangeBack;
        }
    }
}
//# sourceMappingURL=TreasureChest.js.map