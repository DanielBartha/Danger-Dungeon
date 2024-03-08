import CanvasUtil from './CanvasUtil.js';
import ChestItems from './ChestItems.js';

export default class GreenSlashAbility extends ChestItems {
  public constructor(row: number, column: number) {
    super(row, column);
    this.image = CanvasUtil.loadNewImage('./assets/chest/green_slash.png');
  }
}
