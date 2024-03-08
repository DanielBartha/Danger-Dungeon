import AnimatedDrawable from './AnimatedDrawable.js';
import CanvasUtil from './CanvasUtil.js';
import AttackChange from './AttackChange.js';
export default class Sword extends AnimatedDrawable {
    leftAttackImages = [];
    leftAttackPurple = [];
    leftAttackGreen = [];
    rightAttackImages = [];
    rightAttackPurple = [];
    rightAttackGreen = [];
    topAttackImages = [];
    topAttackPurple = [];
    topAttackGreen = [];
    bottomAttackImages = [];
    bottomAttackPurple = [];
    bottomAttackGreen = [];
    constructor(row, column) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/sword/slash_effect_anim_f0.png');
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_anim_f0.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_anim_f1.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_anim_f2.png'));
        this.leftAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_left_anim_f0.png'));
        this.leftAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_left_anim_f1.png'));
        this.leftAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_left_anim_f2.png'));
        this.rightAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_anim_f0.png'));
        this.rightAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_anim_f1.png'));
        this.rightAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_anim_f2.png'));
        this.topAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_top_anim_f0.png'));
        this.topAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_top_anim_f1.png'));
        this.topAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_top_anim_f2.png'));
        this.bottomAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_bottom_anim_f0.png'));
        this.bottomAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_bottom_anim_f1.png'));
        this.bottomAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_bottom_anim_f2.png'));
        this.leftAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_left_anim_f0.png'));
        this.leftAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_left_anim_f1.png'));
        this.leftAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_left_anim_f2.png'));
        this.rightAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_anim_f0.png'));
        this.rightAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_anim_f1.png'));
        this.rightAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_anim_f2.png'));
        this.topAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_top_anim_f0.png'));
        this.topAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_top_anim_f1.png'));
        this.topAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_top_anim_f2.png'));
        this.bottomAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_bottom_anim_f0.png'));
        this.bottomAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_bottom_anim_f1.png'));
        this.bottomAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_bottom_anim_f2.png'));
        this.leftAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_left_anim_f0.png'));
        this.leftAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_left_anim_f1.png'));
        this.leftAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_left_anim_f2.png'));
        this.rightAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_anim_f0.png'));
        this.rightAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_anim_f1.png'));
        this.rightAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_anim_f2.png'));
        this.topAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_top_anim_f0.png'));
        this.topAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_top_anim_f1.png'));
        this.topAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_top_anim_f2.png'));
        this.bottomAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_bottom_anim_f0.png'));
        this.bottomAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_bottom_anim_f1.png'));
        this.bottomAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_bottom_anim_f2.png'));
        this.setGreenSword();
        this.setPurpleSword();
        this.setNumberOfSprites(3);
        this.row = row;
        this.column = column;
        this.timeToNextChange = 90;
        this.setTimeToNextChangeBack = 90;
    }
    setPurpleSword() {
        if (AttackChange.getPurpleSlash()) {
            this.leftAttackImages = this.leftAttackPurple;
            this.rightAttackImages = this.rightAttackPurple;
            this.topAttackImages = this.topAttackPurple;
            this.bottomAttackImages = this.bottomAttackPurple;
        }
    }
    setGreenSword() {
        if (AttackChange.getGreenSlash()) {
            this.leftAttackImages = this.leftAttackGreen;
            this.rightAttackImages = this.rightAttackGreen;
            this.topAttackImages = this.topAttackGreen;
            this.bottomAttackImages = this.bottomAttackGreen;
        }
    }
    setLeftAttack() {
        this.image = this.leftAttackImages[0];
        this.animationImages = this.leftAttackImages;
    }
    setRightAttack() {
        this.image = this.rightAttackImages[0];
        this.animationImages = this.rightAttackImages;
    }
    setTopAttack() {
        this.image = this.topAttackImages[0];
        this.animationImages = this.topAttackImages;
    }
    setBottomAttack() {
        this.image = this.bottomAttackImages[0];
        this.animationImages = this.bottomAttackImages;
    }
    swordCollidesWithSlimes(enemy) {
        if (enemy.getPosX() + enemy.getWidth() > this.posX
            && this.posX + this.getWidth() > enemy.getPosX()
            && this.posY + this.getHeight() > enemy.getPosY()
            && enemy.getPosY() + enemy.getHeight() > this.posY) {
            return true;
        }
        return false;
    }
    swordCollidesWithGoblins(enemy) {
        if (AttackChange.getGreenSlash() || AttackChange.getPurpleSlash()) {
            if (enemy.getPosX() + enemy.getWidth() > this.posX
                && this.posX + this.getWidth() > enemy.getPosX()
                && this.posY + this.getHeight() > enemy.getPosY()
                && enemy.getPosY() + enemy.getHeight() > this.posY) {
                return true;
            }
            return false;
        }
        return false;
    }
    swordCollidesWithFlies(enemy) {
        if (AttackChange.getPurpleSlash()) {
            if (enemy.getPosX() + enemy.getWidth() > this.posX
                && this.posX + this.getWidth() > enemy.getPosX()
                && this.posY + this.getHeight() > enemy.getPosY()
                && enemy.getPosY() + enemy.getHeight() > this.posY) {
                return true;
            }
            return false;
        }
        return false;
    }
    update(elapsed) {
        this.posX = 100 + this.column * 32;
        this.posY = 100 + this.row * 32;
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
//# sourceMappingURL=Sword.js.map