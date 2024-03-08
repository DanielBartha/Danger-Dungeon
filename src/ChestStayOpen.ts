export default class ChestStayOpen {
  private static mapOne: boolean = false;

  private static mapThree: boolean = false;

  private static mapFour: boolean = false;

  public static setMapOne(one: boolean): void {
    this.mapOne = one;
  }

  public static getMapOne(): boolean {
    return this.mapOne;
  }

  public static setMapThree(three: boolean): void {
    this.mapThree = three;
  }

  public static getMapThree(): boolean {
    return this.mapThree;
  }

  public static setMapFour(four: boolean): void {
    this.mapFour = four;
  }

  public static getMapFour(): boolean {
    return this.mapFour;
  }
}
