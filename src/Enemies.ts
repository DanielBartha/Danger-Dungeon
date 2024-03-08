import AnimatedDrawable from './AnimatedDrawable.js';

export default abstract class Enemies extends AnimatedDrawable {
  protected moveNumbers: number;

  protected ammountOfMovement: number;

  protected timeToNextMove: number;

  protected moveAgain: boolean;

  protected timeCounter: number;

  protected enemyFacingLeft: HTMLImageElement[] = [];

  protected enemyFacingRight: HTMLImageElement[] = [];

  public constructor(row: number, column: number, time: number) {
    super();
    this.row = row;
    this.column = column;
    this.timeCounter = time;
    this.moveAgain = false;
    this.timeToNextMove = this.timeCounter;

    this.timeToNextChange = 100;
    this.setTimeToNextChangeBack = 100;

    this.row = row;
    this.column = column;
  }

  /**
   *
   * @param elapsed
   */
  public update(elapsed: number): void {
    this.animation(elapsed);
    this.timeToNextMove -= elapsed;
    this.posX = 100 + this.column * 32;
    this.posY = 100 + this.row * 32;

    if (this.timeToNextMove < 0) {
      if (this.moveAgain) {
        this.column += this.ammountOfMovement;
        this.moveAgain = false;
      } else {
        this.column -= this.ammountOfMovement;
        this.moveAgain = true;
      }
      this.timeToNextMove = this.timeCounter;
    }
  }
}
