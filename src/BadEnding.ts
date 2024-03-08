import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import SceneStart from './SceneStart.js';

export default class BadEnding extends Scene {
  private starting: boolean;

  private img: HTMLImageElement;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.starting = false;
    this.img = CanvasUtil.loadNewImage('./assets/Game_Over_Background.png');
  }

  /**
   * process input
   *
   * @param keyListener for S
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_S)) {
      this.starting = true;
    }
  }

  /**
   * new Scene
   *
   * @param elapsed time
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
