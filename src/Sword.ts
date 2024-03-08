import AnimatedDrawable from './AnimatedDrawable.js';
import CanvasUtil from './CanvasUtil.js';
import FlyEnemy from './FlyEnemy.js';
import GoblinEnemy from './GoblinEnemy.js';
import SlimeEnemy from './SlimeEnemy.js';
import AttackChange from './AttackChange.js';

export default class Sword extends AnimatedDrawable {
  private leftAttackImages: HTMLImageElement[] = [];

  private leftAttackPurple: HTMLImageElement[] = [];

  private leftAttackGreen: HTMLImageElement[] = [];

  private rightAttackImages: HTMLImageElement[] = [];

  private rightAttackPurple: HTMLImageElement[] = [];

  private rightAttackGreen: HTMLImageElement[] = [];

  private topAttackImages: HTMLImageElement[] = [];

  private topAttackPurple: HTMLImageElement[] = [];

  private topAttackGreen: HTMLImageElement[] = [];

  private bottomAttackImages: HTMLImageElement[] = [];

  private bottomAttackPurple: HTMLImageElement[] = [];

  private bottomAttackGreen: HTMLImageElement[] = [];

  public constructor(row: number, column: number) {
    super();

    this.image = CanvasUtil.loadNewImage('./assets/sword/slash_effect_anim_f0.png');
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_anim_f0.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_anim_f1.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_anim_f2.png'));

    // white slash
    this.leftAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_left_anim_f0.png'));
    this.leftAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_left_anim_f1.png'));
    this.leftAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_left_anim_f2.png'));

    this.rightAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_anim_f0.png'));
    this.rightAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_anim_f1.png'));
    this.rightAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_anim_f2.png'));

    this.topAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_top_anim_f0.png'));
    this.topAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_top_anim_f1.png'));
    this.topAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_top_anim_f2.png'));

    this.bottomAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_bottom_anim_f0.png'));
    this.bottomAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_bottom_anim_f1.png'));
    this.bottomAttackImages.push(CanvasUtil.loadNewImage('./assets/sword/slash_effect_bottom_anim_f2.png'));

    // purple slash
    this.leftAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_left_anim_f0.png'));
    this.leftAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_left_anim_f1.png'));
    this.leftAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_left_anim_f2.png'));

    this.rightAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_anim_f0.png'));
    this.rightAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_anim_f1.png'));
    this.rightAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_anim_f2.png'));

    this.topAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_top_anim_f0.png'));
    this.topAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_top_anim_f1.png'));
    this.topAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_top_anim_f2.png'));

    this.bottomAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_bottom_anim_f0.png'));
    this.bottomAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_bottom_anim_f1.png'));
    this.bottomAttackPurple.push(CanvasUtil.loadNewImage('./assets/sword_purple/slash_effect_bottom_anim_f2.png'));

    // green slash
    this.leftAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_left_anim_f0.png'));
    this.leftAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_left_anim_f1.png'));
    this.leftAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_left_anim_f2.png'));

    this.rightAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_anim_f0.png'));
    this.rightAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_anim_f1.png'));
    this.rightAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_anim_f2.png'));

    this.topAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_top_anim_f0.png'));
    this.topAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_top_anim_f1.png'));
    this.topAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_top_anim_f2.png'));

    this.bottomAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_bottom_anim_f0.png'));
    this.bottomAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_bottom_anim_f1.png'));
    this.bottomAttackGreen.push(CanvasUtil.loadNewImage('./assets/sword_green/slash_effect_bottom_anim_f2.png'));

    this.setGreenSword();
    this.setPurpleSword();

    this.setNumberOfSprites(3);

    this.row = row;
    this.column = column;

    this.timeToNextChange = 90;
    this.setTimeToNextChangeBack = 90;
  }

  public setPurpleSword(): void {
    if (AttackChange.getPurpleSlash()) {
      this.leftAttackImages = this.leftAttackPurple;
      this.rightAttackImages = this.rightAttackPurple;
      this.topAttackImages = this.topAttackPurple;
      this.bottomAttackImages = this.bottomAttackPurple;
    }
  }

  public setGreenSword(): void {
    if (AttackChange.getGreenSlash()) {
      this.leftAttackImages = this.leftAttackGreen;
      this.rightAttackImages = this.rightAttackGreen;
      this.topAttackImages = this.topAttackGreen;
      this.bottomAttackImages = this.bottomAttackGreen;
    }
  }

  public setLeftAttack(): void {
    this.image = this.leftAttackImages[0];
    this.animationImages = this.leftAttackImages;
  }

  public setRightAttack(): void {
    this.image = this.rightAttackImages[0];
    this.animationImages = this.rightAttackImages;
  }

  public setTopAttack(): void {
    this.image = this.topAttackImages[0];
    this.animationImages = this.topAttackImages;
  }

  public setBottomAttack(): void {
    this.image = this.bottomAttackImages[0];
    this.animationImages = this.bottomAttackImages;
  }

  /**
   *
   * @param enemy
   */
  public swordCollidesWithSlimes(enemy: SlimeEnemy): boolean {
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
   * @param enemy
   */
  public swordCollidesWithGoblins(enemy: GoblinEnemy): boolean {
    if (AttackChange.getGreenSlash() || AttackChange.getPurpleSlash()) {
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
    return false;
  }

  /**
   *
   * @param enemy
   */
  public swordCollidesWithFlies(enemy: FlyEnemy): boolean {
    if (AttackChange.getPurpleSlash()) {
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
}
