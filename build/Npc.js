import CanvasUtil from './CanvasUtil.js';
import AnimatedDrawable from './AnimatedDrawable.js';
export default class Npc extends AnimatedDrawable {
    constructor(row, column) {
        super();
        this.image = CanvasUtil.loadNewImage('./assets/npc/npc_idle_anim_f0.png');
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/npc/npc_idle_anim_f0.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/npc/npc_idle_anim_f1.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/npc/npc_idle_anim_f2.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/npc/npc_idle_anim_f3.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/npc/npc_idle_anim_f4.png'));
        this.animationImages.push(CanvasUtil.loadNewImage('./assets/npc/npc_idle_anim_f5.png'));
        this.setNumberOfSprites(6);
        this.row = row;
        this.column = column;
        this.timeToNextChange = 200;
        this.setTimeToNextChangeBack = 200;
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
//# sourceMappingURL=Npc.js.map