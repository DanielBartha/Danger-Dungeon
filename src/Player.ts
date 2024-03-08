import AnimatedDrawable from './AnimatedDrawable.js';
import CanvasUtil from './CanvasUtil.js';
import Enemies from './Enemies.js';
import FloorSpikes from './FloorSpikes.js';

export default class Player extends AnimatedDrawable {
  private playerIdle: HTMLImageElement[] = [];

  private playerRunningRight: HTMLImageElement[] = [];

  private playerRunningLeft: HTMLImageElement[] = [];

  public constructor(row:number, column:number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/player/knight_idle_anim_f0.png');

    this.animationImages.push(CanvasUtil.loadNewImage('./assets/player/knight_idle_anim_f0.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/player/knight_idle_anim_f1.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/player/knight_idle_anim_f2.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/player/knight_idle_anim_f3.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/player/knight_idle_anim_f4.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/player/knight_idle_anim_f5.png'));

    this.playerIdle.push(CanvasUtil.loadNewImage('./assets/player/knight_idle_anim_f0.png'));
    this.playerIdle.push(CanvasUtil.loadNewImage('./assets/player/knight_idle_anim_f1.png'));
    this.playerIdle.push(CanvasUtil.loadNewImage('./assets/player/knight_idle_anim_f2.png'));
    this.playerIdle.push(CanvasUtil.loadNewImage('./assets/player/knight_idle_anim_f3.png'));
    this.playerIdle.push(CanvasUtil.loadNewImage('./assets/player/knight_idle_anim_f4.png'));
    this.playerIdle.push(CanvasUtil.loadNewImage('./assets/player/knight_idle_anim_f5.png'));

    this.playerRunningRight.push(CanvasUtil.loadNewImage('./assets/player/knight_run_anim_f0.png'));
    this.playerRunningRight.push(CanvasUtil.loadNewImage('./assets/player/knight_run_anim_f1.png'));
    this.playerRunningRight.push(CanvasUtil.loadNewImage('./assets/player/knight_run_anim_f2.png'));
    this.playerRunningRight.push(CanvasUtil.loadNewImage('./assets/player/knight_run_anim_f3.png'));
    this.playerRunningRight.push(CanvasUtil.loadNewImage('./assets/player/knight_run_anim_f4.png'));
    this.playerRunningRight.push(CanvasUtil.loadNewImage('./assets/player/knight_run_anim_f5.png'));

    this.playerRunningLeft.push(CanvasUtil.loadNewImage('./assets/player/knight_run_left_anim_f0.png'));
    this.playerRunningLeft.push(CanvasUtil.loadNewImage('./assets/player/knight_run_left_anim_f1.png'));
    this.playerRunningLeft.push(CanvasUtil.loadNewImage('./assets/player/knight_run_left_anim_f2.png'));
    this.playerRunningLeft.push(CanvasUtil.loadNewImage('./assets/player/knight_run_left_anim_f3.png'));
    this.playerRunningLeft.push(CanvasUtil.loadNewImage('./assets/player/knight_run_left_anim_f4.png'));
    this.playerRunningLeft.push(CanvasUtil.loadNewImage('./assets/player/knight_run_left_anim_f5.png'));

    this.setNumberOfSprites(6);

    this.row = row;
    this.column = column;

    this.posX = 100 + this.column * 32;
    this.posY = 100 + this.row * 32;

    this.timeToNextChange = 120;
    this.setTimeToNextChangeBack = 120;
  }

  public setPlayerIdle(): void {
    this.animationImages = this.playerIdle;
  }

  public setPlayerRunningRight(): void {
    this.animationImages = this.playerRunningRight;
  }

  public setPlayerRunningLeft(): void {
    this.animationImages = this.playerRunningLeft;
  }

  /**
   * check if player is idle
   *
   * @returns true or false
   */
  public checkIfIdle(): boolean {
    if (this.animationImages === this.playerIdle) {
      return true;
    }
    return false;
  }

  /**
   *
   * @param enemies
   * @param enemy
   */
  public playerCollidesWithEnemies(enemy: Enemies): boolean {
    if (
      enemy.getPosX() + enemy.getWidth() > this.posX
        && this.posX + this.getWidth() > enemy.getPosX()
        && this.posY + this.getHeight() > enemy.getPosY()
        && enemy.getPosY() + enemy.getHeight() > this.posY
    ) {
      return true;
    }
    return false;
  }

  /**
   *
   * @param enemies
   * @param spikes
   */
  public playerCollidesWithSpikes(spikes: FloorSpikes): boolean {
    if (
      spikes.getPosX() + spikes.getWidth() > this.posX
          && this.posX + this.getWidth() > spikes.getPosX()
          && this.posY + this.getHeight() > spikes.getPosY()
          && spikes.getPosY() + spikes.getHeight() > this.posY
      && spikes.shouldDamagePlayer()) {
      return true;
    }
    return false;
  }

  /**
   *
   * @param elapsed
   */
  public update(elapsed: number): any {
    this.posX = 100 + this.column * 32;
    this.posY = 100 + this.row * 32;

    this.timeToNextChange -= elapsed;
    if (this.timeToNextChange < 0) {
      this.imageNumber += 1;
      if (this.imageNumber > this.numberOfSprites) this.imageNumber = 0;
      this.image = this.animationImages[this.imageNumber];
      this.timeToNextChange = this.setTimeToNextChangeBack;
    }
  }

  /**
   *
   * @param canvas
   */
  public override render(canvas:HTMLCanvasElement):void {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
