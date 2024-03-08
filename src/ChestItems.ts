import TreasureChest from './TreasureChest.js';

export default abstract class ChestItems extends TreasureChest {
  protected shouldRender: boolean;

  public constructor(row: number, column: number) {
    super(row, column);

    this.posX = this.column * 32;
    this.posY = this.row * 32;
    this.row = row;
    this.column = column;

    this.shouldRender = false;
  }

  public getRender(): boolean {
    return this.shouldRender;
  }

  public setRender(renderThis: boolean): void {
    this.shouldRender = renderThis;
  }
}
