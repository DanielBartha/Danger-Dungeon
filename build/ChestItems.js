import TreasureChest from './TreasureChest.js';
export default class ChestItems extends TreasureChest {
    shouldRender;
    constructor(row, column) {
        super(row, column);
        this.posX = this.column * 32;
        this.posY = this.row * 32;
        this.row = row;
        this.column = column;
        this.shouldRender = false;
    }
    getRender() {
        return this.shouldRender;
    }
    setRender(renderThis) {
        this.shouldRender = renderThis;
    }
}
//# sourceMappingURL=ChestItems.js.map