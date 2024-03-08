export default class AttackChange {
  private static setPurple: boolean = false;

  private static setGreen: boolean = false;

  public static setPurpleSlash(purple: boolean): void {
    this.setPurple = purple;
  }

  public static getPurpleSlash(): boolean {
    return this.setPurple;
  }

  public static setGreenSlash(green: boolean): void {
    this.setGreen = green;
  }

  public static getGreenSlash(): boolean {
    return this.setGreen;
  }
}
