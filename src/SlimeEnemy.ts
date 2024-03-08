import CanvasUtil from './CanvasUtil.js';
import Enemies from './Enemies.js';

export default class SlimeEnemy extends Enemies {
  public constructor(row: number, column: number, direction: number) {
    super(row, column, 1500);
    this.image = CanvasUtil.loadNewImage('./assets/slime/slime_left_idle_anim_f0.png');
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/slime/slime_left_idle_anim_f0.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/slime/slime_left_idle_anim_f1.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/slime/slime_left_idle_anim_f2.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/slime/slime_left_idle_anim_f3.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/slime/slime_left_idle_anim_f4.png'));
    this.animationImages.push(CanvasUtil.loadNewImage('./assets/slime/slime_left_idle_anim_f5.png'));

    this.setNumberOfSprites(6);

    this.ammountOfMovement = 1;

    this.moveNumbers = direction;
  }
}
