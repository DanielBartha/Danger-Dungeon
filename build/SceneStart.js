import CanvasUtil from './CanvasUtil.js';
import InstructionScene from './InstructionScene.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
export default class SceneStart extends Scene {
    starting;
    img;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.starting = false;
        this.img = CanvasUtil.loadNewImage('./assets/startscreen.png');
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_S)) {
            this.starting = true;
        }
    }
    update(elapsed) {
        if (this.starting === true) {
            return new InstructionScene(this.maxX, this.maxY);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.img, 100, 100);
    }
}
//# sourceMappingURL=SceneStart.js.map