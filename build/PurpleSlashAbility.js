import CanvasUtil from './CanvasUtil.js';
import ChestItems from './ChestItems.js';
export default class PurpleSlashAbility extends ChestItems {
    constructor(row, column) {
        super(row, column);
        this.image = CanvasUtil.loadNewImage('./assets/chest/purple_slash.png');
    }
}
//# sourceMappingURL=PurpleSlashAbility.js.map