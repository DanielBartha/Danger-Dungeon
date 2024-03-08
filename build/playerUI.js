import CanvasUtil from './CanvasUtil.js';
export default class PlayerUI {
    static healthBarImages = [CanvasUtil.loadNewImage('./assets/ui/health_ui_full.png'),
        CanvasUtil.loadNewImage('./assets/ui/health_ui_3.png'),
        CanvasUtil.loadNewImage('./assets/ui/health_ui_2.png'),
        CanvasUtil.loadNewImage('./assets/ui/health_ui_1.png'),
        CanvasUtil.loadNewImage('./assets/ui/health_ui_empty.png')];
    static state = 0;
    static getState() {
        return this.state;
    }
    static setState(state) {
        this.state = state;
    }
    static render(canvas) {
        CanvasUtil.drawImage(canvas, this.healthBarImages[this.state], 125, 50);
    }
    static changeHealthBar(ammount) {
        if (this.state < this.healthBarImages.length - 1) {
            this.state += ammount;
        }
    }
}
//# sourceMappingURL=playerUI.js.map