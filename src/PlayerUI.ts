import CanvasUtil from './CanvasUtil.js';

export default class PlayerUI {
  private static healthBarImages: HTMLImageElement[] = [CanvasUtil.loadNewImage('./assets/ui/health_ui_full.png'),
    CanvasUtil.loadNewImage('./assets/ui/health_ui_3.png'),
    CanvasUtil.loadNewImage('./assets/ui/health_ui_2.png'),
    CanvasUtil.loadNewImage('./assets/ui/health_ui_1.png'),
    CanvasUtil.loadNewImage('./assets/ui/health_ui_empty.png')];

  private static state: number = 0;

  public static getState(): number {
    return this.state;
  }

  public static setState(state: number): void {
    this.state = state;
  }

  /**
   *
   * @param canvas
   */
  public static render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.healthBarImages[this.state], 125, 50);
  }

  /**
   *
   * @param ammount
   */
  public static changeHealthBar(ammount: number): void {
    if (this.state < this.healthBarImages.length - 1) {
      this.state += ammount;
    }
  }
}
