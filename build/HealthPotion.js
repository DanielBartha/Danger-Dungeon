import CanvasUtil from './CanvasUtil.js';
import ChestItems from './ChestItems.js';
export default class HealthPotion extends ChestItems {
    constructor(row, column) {
        super(row, column);
        this.image = CanvasUtil.loadNewImage('./assets/chest/health_potion.png');
    }
}
//# sourceMappingURL=HealthPotion.js.map