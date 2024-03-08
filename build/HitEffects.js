import AnimatedDrawable from './AnimatedDrawable.js';
import CanvasUtil from './CanvasUtil.js';
export default class HitEffects extends AnimatedDrawable {
    shouldRender;
    constructor(row, column) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/hitEffects/hit_effect_anim_f0.png');
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/hitEffects/hit_effect_anim_f0.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/hitEffects/hit_effect_anim_f1.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/hitEffects/hit_effect_anim_f2.png'));
        this.setNumberOfSprites(3);
        this.row = row;
        this.column = column;
        this.timeToNextChange = 200;
        this.setTimeToNextChangeBack = 200;
        this.shouldRender = false;
    }
    getRender() {
        return this.shouldRender;
    }
    setRender(renderThis) {
        this.shouldRender = renderThis;
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
//# sourceMappingURL=HitEffects.js.map