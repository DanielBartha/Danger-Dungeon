import AnimatedDrawable from './AnimatedDrawable.js';
import CanvasUtil from './CanvasUtil.js';

export default class FloorSpikes extends AnimatedDrawable {
  public constructor(row: number, column: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/spikes/spikes_anim_f0.png');
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/spikes/spikes_anim_f0.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/spikes/spikes_anim_f1.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/spikes/spikes_anim_f2.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/spikes/spikes_anim_f3.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/spikes/spikes_anim_f4.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/spikes/spikes_anim_f5.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/spikes/spikes_anim_f6.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/spikes/spikes_anim_f7.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/spikes/spikes_anim_f8.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/spikes/spikes_anim_f9.png'));

    this.setNumberOfSprites(10);

    this.row = row;
    this.column = column;

    this.posX = 100 + this.column * 32;
    this.posY = 100 + this.row * 32;

    this.timeToNextChange = 1000;
    this.setTimeToNextChangeBack = 1000;
  }

  /**
   * checks if damages
   *
   * @returns true or false
   */
  public shouldDamagePlayer(): boolean {
    return (
      this.imageNumber >= 7
      && this.imageNumber <= 10
    );
  }

  /**
   *
   * @param elapsed
   */
  public update(elapsed: number): void {
    this.animation(elapsed);

    this.timeToNextChange -= elapsed;
    if (this.timeToNextChange < 0) {
      this.imageNumber += 1;
      if (this.imageNumber > this.numberOfSprites) this.imageNumber = 0;
      this.image = this.animationImages[this.imageNumber];
      this.timeToNextChange = 1500;
    }
  }
}
