import AnimatedDrawable from './AnimatedDrawable.js';
import CanvasUtil from './CanvasUtil.js';

export default class HintScreen extends AnimatedDrawable {
  private hints: HTMLImageElement[] = [];

  private random : number;

  private randomImage: HTMLImageElement;

  public constructor(random: number) {
    super();
    this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint1.png'));
    this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint2.png'));
    this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint3.png'));
    this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint4.png'));
    this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint5.png'));
    this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint7.png'));
    this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint8.png'));
    this.hints.push(CanvasUtil.loadNewImage('./assets/hints/hint9.png'));
    this.random = Math.floor(Math.random() * (this.hints.length - 1));
    this.randomImage = this.hints[this.random];
  }

  /**
   *
   * @param canvas
   */
  public renderHint(canvas:HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.randomImage, 400, 300);
  }
}
