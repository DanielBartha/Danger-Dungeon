import CanvasUtil from './CanvasUtil.js';

export default abstract class AnimatedDrawable {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  protected row: number;

  protected column: number;

  protected animationImages: HTMLImageElement[] = [];

  protected timeToNextChange: number;

  protected imageNumber: number;

  protected numberOfSprites: number;

  protected setTimeToNextChangeBack: number;

  public constructor() {
    this.numberOfSprites = 0;
    this.imageNumber = 0;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }

  public getPosX(): number {
    return this.posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public setPosX(posX: number): void {
    this.posX = posX;
  }

  public setPosY(posY: number): void {
    this.posY = posY;
  }

  public setRow(newRow: number): void {
    this.row = newRow;
  }

  public getRow(): number {
    return this.row;
  }

  public setColumn(newColumn: number): void {
    this.column = newColumn;
  }

  public getColumn(): number {
    return this.column;
  }

  public getImage(): HTMLImageElement {
    return this.image;
  }

  public setNumberOfSprites(numberOfSprites: number): void {
    this.numberOfSprites = numberOfSprites - 1;
  }

  /**
   * changes the pngs to create an animation
   *
   * @param elapsed time
   */
  public animation(elapsed: number): void {
    this.timeToNextChange -= elapsed;
    if (this.timeToNextChange < 0) {
      this.imageNumber += 1;
      if (this.imageNumber > this.numberOfSprites) this.imageNumber = 0;
      this.image = this.animationImages[this.imageNumber];
      this.timeToNextChange = this.setTimeToNextChangeBack;
    }
  }

  /**
   * Renders every Drawable sprite to the canvas
   *
   * @param canvas The canvas which the sprites should be rendered to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
