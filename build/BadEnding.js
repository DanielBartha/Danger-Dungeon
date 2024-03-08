import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';
export default class BadEnding extends Scene {
    starting;
    img;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.starting = false;
        this.img = CanvasUtil.loadNewImage('./assets/Game_Over_Background.png');
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_S)) {
            this.starting = true;
        }
    }
    update(elapsed) {
        if (this.starting === true) {
            return new SceneStart(this.maxX, this.maxY);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.img, 100, 100);
    }
}
//# sourceMappingURL=BadEnding.js.map