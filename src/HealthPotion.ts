import CanvasUtil from './CanvasUtil.js';
import ChestItems from './ChestItems.js';

export default class HealthPotion extends ChestItems {
  public constructor(row: number, column: number) {
    super(row, column);
    this.image = CanvasUtil.loadNewImage('./assets/chest/health_potion.png');
  }
}
