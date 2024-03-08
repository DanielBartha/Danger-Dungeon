import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';

export default class GoodEnding extends Scene {
  private starting: boolean;

  private img: HTMLImageElement;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.starting = false;
    this.img = CanvasUtil.loadNewImage('./assets/Game_Win_Background.png');
  }

  /**
   *
   * @param keyListener
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_S)) {
      this.starting = true;
    }
  }

  /**
   *
   * @param elapsed
   */
  public update(elapsed: number): Scene {
    if (this.starting === true) {
      return new SceneStart(this.maxX, this.maxY);
    }
    return null;
  }

  /**
   *
   * @param canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.img, 100, 100);
  }
}
