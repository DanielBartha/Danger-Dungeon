import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import MapOne from './MapOne.js';
import Scene from './Scene.js';
export default class InstructionScene extends Scene {
    starting;
    img;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.starting = false;
        this.img = CanvasUtil.loadNewImage('./assets/instructions.png');
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_S)) {
            this.starting = true;
        }
    }
    update(elapsed) {
        if (this.starting === true) {
            return new MapOne(this.maxX, this.maxY);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.img, 100, 100);
    }
}
//# sourceMappingURL=InstructionScene.js.map