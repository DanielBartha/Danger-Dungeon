import CanvasUtil from './CanvasUtil.js';
import GameMap from './GameMap.js';
import Scene from './Scene.js';
import MapTwo from './MapTwo.js';
import Enemies from './Enemies.js';
import GoblinEnemy from './GoblinEnemy.js';
import TreasureChest from './TreasureChest.js';
import PlayerUI from './playerUI.js';
import InstructionScene from './InstructionScene.js';
import ChestStayOpen from './ChestStayOpen.js';
import Npc from './Npc.js';
import FloorSpikes from './FloorSpikes.js';
import HealthPotion from './HealthPotion.js';
import HitEffects from './HitEffects.js';
import TalkedToNpc from './TalkedToNpc.js';
import Dialog from './Dialog.js';

export default class MapThree extends GameMap {
  public constructor(maxX: number, maxY: number, playerRow: number, playerColumn: number) {
    super(maxX, maxY, playerRow, playerColumn);
    this.backgroundImage = CanvasUtil.loadNewImage('./assets/room3.png');
    this.enemies.push(new GoblinEnemy(6, 17, 1));
    this.enemies.push(new GoblinEnemy(15, 6, 2));
    this.enemies.push(new GoblinEnemy(7, 20, 4));
    this.enemies.push(new GoblinEnemy(10, 9, 3));
    this.chest = new TreasureChest(11, 18, 3);
    this.items = new HealthPotion(8, 16);
    this.hitEffect = new HitEffects(playerRow + 3, playerColumn + 3);
    this.mapNumber = 3;
    this.npc = new Npc(6, 16);
    this.timeElapsedEnemy = 400;
    this.timeElapsedSpike = 400;
    this.dialog = new Dialog(-8, 13, 3);
    this.dialog.setGoodDialog(3);
    this.dialog.setBadDialog(3);

    /**
     *  0 : player can walk on the space
     *  1 : wall
     *  3 : chest
     *  5 : npc
     *  6 : randomize scroll
     *  7 : scroll
     *  8 : door
     *  9 : spikes
     */
    this.mapTile = [
      //  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 7, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 1, 7, 7, 6, 0, 0, 0, 1, 0, 0, 1],
      [1, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 6, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 9, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 7, 6, 0, 0, 0, 0, 0, 3, 1, 0, 0, 1, 0, 0, 0, 0, 1, 9, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 6, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 9, 1, 9, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 8],
      [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 9, 1, 0, 0, 0, 0, 8],
      [1, 1, 1, 1, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
    this.renderMap();
  }

  /**
   *
   * @param canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.clearCanvas(canvas);
    CanvasUtil.drawImage(canvas, this.backgroundImage, 100, 100);
    this.npc.render(canvas);
    this.chest.render(canvas);
    this.spikes.forEach((spike: FloorSpikes) => {
      spike.render(canvas);
    });
    this.player.render(canvas);

    if (this.items.getRender()) {
      this.items.render(canvas);
    }

    this.enemies.forEach((enemies: Enemies) => {
      enemies.render(canvas);
    });
    this.animationCounterSword -= 1;
    if (this.animationCounterSword > 0) {
      this.attackBoolean = true;
      this.sword.render(canvas);
    }
    if (this.hitEffect.getRender()) {
      this.hitEffect.render(canvas);
    }
    PlayerUI.render(canvas);
    this.imageLoad(canvas);
    if (!TalkedToNpc.getMapThree()) {
      this.dialog.render(canvas);
    }
  }

  /**
   *
   * @param elapsed
   */
  public update(elapsed: number): Scene {
    this.setPlayerColumn(this.player.getColumn());
    this.setPlayerRow(this.player.getRow());
    this.player.update(elapsed);
    this.npc.update(elapsed);
    this.chest.update(elapsed);
    this.sword.update(elapsed);

    if (!this.player.checkIfIdle()) {
      this.items.setRender(false);
    }

    this.hitEffect.update(elapsed);
    this.checkIfPlayerIsHit();

    // HIT EFFECT UPDATE
    this.timeElapsedHitEffect -= elapsed;
    if (this.timeElapsedHitEffect < 0) {
      this.hitEffect.setRender(false);
      this.timeElapsedHitEffect = 400;
    }

    // ENEMY UPDATE
    this.timeElapsedEnemy -= elapsed;
    this.enemies.forEach((enemy: GoblinEnemy) => {
      enemy.update(elapsed);
      if ((this.timeElapsedEnemy < 0) && this.player.playerCollidesWithEnemies(enemy)) {
        PlayerUI.changeHealthBar(1);
        this.timeElapsedEnemy = 400;
      }
      this.sword.swordCollidesWithSlimes(enemy);
      this.sword.swordCollidesWithGoblins(enemy);
      this.sword.swordCollidesWithFlies(enemy);
    });
    this.dialog.talkedWithNpc();

    // SPIKE UPDATE
    this.timeElapsedSpike -= elapsed;
    this.spikes.forEach((spike: FloorSpikes) => {
      spike.update(elapsed);
      if ((this.timeElapsedSpike < 0) && this.player.playerCollidesWithSpikes(spike)) {
        PlayerUI.changeHealthBar(1);
        this.timeElapsedSpike = 400;
      }
    });

    // RETURN CORRECT MAP
    if (this.mapTile[this.player.getRow()][this.player.getColumn()] === 8) {
      return new MapTwo(this.maxX, this.maxY, 13, 1);
    }
    if (PlayerUI.getState() === 4) {
      PlayerUI.setState(0);
      return new InstructionScene(this.maxX, this.maxY);
    }
    if (ChestStayOpen.getMapThree()) {
      this.interactedWithChest = true;
    }
    return null;
  }
}
