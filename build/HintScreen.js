import AnimatedDrawable from './AnimatedDrawable.js';
import CanvasUtil from './CanvasUtil.js';
export default class HintScreen extends AnimatedDrawable {
    hints = [];
    random;
    randomImage;
    constructor(random) {
        super();
        this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint1.png'));
        this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint2.png'));
        this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint3.png'));
        this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint4.png'));
        this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint5.png'));
        this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint7.png'));
        this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint8.png'));
        this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint9.png'));
        this.random = Math.floor(Math.random() * (this.hints.length - 1));
        this.randomImage = this.hints[this.random];
    }
    renderHint(canvas) {
        CanvasUtil.drawImage(canvas, this.randomImage, 400, 300);
    }
}
//# sourceMappingURL=HintScreen.js.map