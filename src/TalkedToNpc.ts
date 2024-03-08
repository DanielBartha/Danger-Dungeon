export default class TalkedToNpc {
  private static mapOne: boolean = false;

  private static mapTwo: boolean = false;

  private static mapThree: boolean = false;

  private static mapFour: boolean = false;

  private static currentText: number = -1;

  private static goToNextRoom: boolean = false;

  private static goToEnding: boolean = false;

  private static goToLastRoom: boolean = false;

  private static goToThirdRoom: boolean = false;

  /**
   *
   * @param arraylenght
   */
  public static nextDialog(arraylenght: number): void {
    if (this.currentText < arraylenght - 1) {
      this.currentText += 1;
    } else {
      this.currentText = 10;
    }
  }

  public static resetCurrentText(): void {
    this.currentText = -1;
  }

  public static setGoToNextRoom(go: boolean):void {
    this.goToNextRoom = go;
  }

  public static getGoToNextRoom():boolean {
    return this.goToNextRoom;
  }

  public static setGoToThirdRoom(yes: boolean) : void {
    this.goToThirdRoom = yes;
  }

  public static getGoToThirdRoom() :boolean {
    return this.goToThirdRoom;
  }

  public static setGoToLastRoom(ok: boolean):void {
    this.goToLastRoom = ok;
  }

  public static getGoToLastRoom():boolean {
    return this.goToLastRoom;
  }

  public static setGoToEnding(nice: boolean): void {
    this.goToEnding = nice;
  }

  public static getGoToEnding():boolean {
    return this.goToEnding;
  }

  public static getcurrentText():number {
    return this.currentText;
  }

  public static setMapOne(one : boolean): void {
    this.mapOne = one;
  }

  public static getMapOne(): boolean {
    return this.mapOne;
  }

  public static setMapTwo(two : boolean): void {
    this.mapTwo = two;
  }

  public static getMapTwo(): boolean {
    return this.mapTwo;
  }

  public static setMapThree(three : boolean): void {
    this.mapThree = three;
  }

  public static getMapThree(): boolean {
    return this.mapThree;
  }

  public static setMapFour(four : boolean): void {
    this.mapFour = four;
  }

  public static getMapFour(): boolean {
    return this.mapFour;
  }
}
