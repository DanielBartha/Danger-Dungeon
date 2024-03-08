export default class SetCorrectEnding {
  private static badEnding: boolean = false;

  public static setBadEnding(ending: boolean): void {
    this.badEnding = ending;
  }

  public static getBadEnding(): boolean {
    return this.badEnding;
  }
}
