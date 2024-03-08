/* eslint-disable max-len */
import AnimatedDrawable from './AnimatedDrawable.js';
import CanvasUtil from './CanvasUtil.js';
import TalkedToNpc from './TalkedToNpc.js';

export default class Dialog extends AnimatedDrawable {
  private dialogRoom1: HTMLImageElement[] = [];

  private dialogRoom2: HTMLImageElement[] = [];

  private dialogRoom3: HTMLImageElement[] = [];

  private dialogRoom4: HTMLImageElement[] = [];

  private currentDialog: HTMLImageElement[] = [];

  private badResponse: HTMLImageElement;

  private goodResponse: HTMLImageElement;

  private shouldRender : boolean;

  private currentRoom: number;

  public constructor(row: number, column: number, roomNumber: number) {
    super();
    this.row = row;
    this.column = column;
    this.image = CanvasUtil.loadNewImage('./assets/dialog/empty.png');
    this.dialogRoom1.push(CanvasUtil.loadNewImage('./assets/dialog/dialog1.png'));
    this.dialogRoom1.push(CanvasUtil.loadNewImage('./assets/dialog/question1.png'));

    this.dialogRoom2.push(CanvasUtil.loadNewImage('./assets/dialog/question2.png'));

    this.dialogRoom3.push(CanvasUtil.loadNewImage('./assets/dialog/question3.png'));

    this.dialogRoom4.push(CanvasUtil.loadNewImage('./assets/dialog/question4.png'));

    this.currentRoom = roomNumber;
    this.setDialog(roomNumber);

    this.shouldRender = false;
    this.posX = 100 + this.column * 32;
    this.posY = 100 + this.row * 32;

    TalkedToNpc.resetCurrentText();
  }

  public setImage():void {
    TalkedToNpc.nextDialog(this.currentDialog.length);
    this.image = this.currentDialog[TalkedToNpc.getcurrentText()];
  }

  public setGoodImage():void {
    this.image = this.goodResponse;
  }

  public setBadImage(): void {
    this.image = this.badResponse;
  }

  public getRender(): boolean {
    return this.shouldRender;
  }

  public setRender(render: boolean):void {
    this.shouldRender = render;
  }

  /**
   * block player from enetering new map if not talked to npc
   *
   * @param number
   */
  public talkedWithNpc(): void {
    if (this.currentRoom === 1 && TalkedToNpc.getcurrentText() === 10) {
      TalkedToNpc.setGoToNextRoom(true);
      TalkedToNpc.setMapOne(true);
    }
    if (this.currentRoom === 2 && TalkedToNpc.getcurrentText() === 10) {
      TalkedToNpc.setMapTwo(true);
    }
    if (this.currentRoom === 3 && TalkedToNpc.getcurrentText() === 10) {
      TalkedToNpc.setGoToLastRoom(true);
      TalkedToNpc.setMapThree(true);
    }
    if (this.currentRoom === 4 && TalkedToNpc.getcurrentText() === 10) {
      TalkedToNpc.setGoToEnding(true);
      TalkedToNpc.setMapFour(true);
    }
  }

  public setDialog(number:number): void {
    if (number === 1) {
      this.currentDialog = this.dialogRoom1;
    }
    if (number === 2) {
      this.currentDialog = this.dialogRoom2;
    }
    if (number === 3) {
      this.currentDialog = this.dialogRoom3;
    }
    if (number === 4) {
      this.currentDialog = this.dialogRoom4;
    }
  }

  public setGoodDialog(number: number): void {
    if (number === 1) {
      this.goodResponse = CanvasUtil.loadNewImage('./assets/dialog/respons1q1.png');
    }
    if (number === 2) {
      this.goodResponse = CanvasUtil.loadNewImage('./assets/dialog/respons1q2.png');
    }
    if (number === 3) {
      this.goodResponse = CanvasUtil.loadNewImage('./assets/dialog/respons1q3.png');
    }
    if (number === 4) {
      this.goodResponse = CanvasUtil.loadNewImage('./assets/dialog/respons1q4.png');
    }
  }

  public setBadDialog(number:number): void {
    if (number === 1) {
      this.badResponse = CanvasUtil.loadNewImage('./assets/dialog/respons2q1.png');
    }
    if (number === 2) {
      this.badResponse = CanvasUtil.loadNewImage('./assets/dialog/respons2p2.png');
    }
    if (number === 3) {
      this.badResponse = CanvasUtil.loadNewImage('./assets/dialog/respons2q3.png');
    }
    if (number === 4) {
      this.badResponse = CanvasUtil.loadNewImage('./assets/dialog/respons2q4.png');
    }
  }

  /**
   *
   * @param elapsed
   */
  public update(elapsed: number): void {
    this.posX = 100 + this.column * 32;
    this.posY = 100 + this.row * 32;
  }
}
