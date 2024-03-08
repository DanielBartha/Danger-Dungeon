import CanvasUtil from './CanvasUtil.js';
import ChestItems from './ChestItems.js';
export default class GreenSlashAbility extends ChestItems {
    constructor(row, column) {
        super(row, column);
        this.image = CanvasUtil.loadNewImage('./assets/chest/green_slash.png');
    }
}
//# sourceMappingURL=GreenSlashAbility.js.map