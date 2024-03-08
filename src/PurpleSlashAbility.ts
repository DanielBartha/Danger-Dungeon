import CanvasUtil from './CanvasUtil.js';
import ChestItems from './ChestItems.js';

export default class PurpleSlashAbility extends ChestItems {
  public constructor(row: number, column: number) {
    super(row, column);
    this.image = CanvasUtil.loadNewImage('./assets/chest/purple_slash.png');
  }
}
