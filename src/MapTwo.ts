/* eslint-disable max-len */
import CanvasUtil from './CanvasUtil.js';
import Enemies from './Enemies.js';
import GameMap from './GameMap.js';
import MapThree from './MapThree.js';
import MapOne from './MapOne.js';
import Scene from './Scene.js';
import SlimeEnemy from './SlimeEnemy.js';
import PlayerUI from './playerUI.js';
import GoblinEnemy from './GoblinEnemy.js';
import InstructionScene from './InstructionScene.js';
import Npc from './Npc.js';
import Dialog from './Dialog.js';
import FloorSpikes from './FloorSpikes.js';
import FlyEnemy from './FlyEnemy.js';
import HitEffects from './HitEffects.js';
import TalkedToNpc from './TalkedToNpc.js';

export default class MapTwo extends GameMap {
  public constructor(maxX: number, maxY: number, playerRow: number, playerColumn: number) {
    super(maxX, maxY, playerRow, playerColumn);
    this.backgroundImage = CanvasUtil.loadNewImage('./assets/room2.png');
    this.npc = new Npc(8, 26);
    this.mapNumber = 2;
    this.dialog = new Dialog(-6, 23, 2);
    this.enemies.push(new GoblinEnemy(10, 27, 1));
    this.enemies.push(new GoblinEnemy(10, 17, 4));
    this.enemies.push(new GoblinEnemy(15, 2, 3));
    this.enemies.push(new GoblinEnemy(6, 13, 1));
    this.enemies.push(new SlimeEnemy(15, 17, 1));
    this.enemies.push(new FlyEnemy(14, 21, 1));
    this.hitEffect = new HitEffects(playerRow + 3, playerColumn + 3);
    this.timeElapsedEnemy = 400;
    this.timeElapsedSpike = 400;
    this.dialog.setGoodDialog(2);
    this.dialog.setBadDialog(2);

    /**
     *  0 : player can walk on the space
     *  1 : wall
     *  3 : chest
     *  4 : door
     *  5 : npc
     *  6 : randomize scroll
     *  7 : scroll
     *  8 : door
     */
    this.mapTile = [
    //  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 6, 7, 6, 7, 1, 1, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 6, 0, 6, 0, 6, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 0, 0, 0, 0, 0, 5, 5, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 4],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 4],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
      [8, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [8, 0, 0, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
    this.spikes.forEach((spike: FloorSpikes) => {
      spike.render(canvas);
    });
    this.player.render(canvas);
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

    if (!TalkedToNpc.getMapTwo()) {
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
    this.sword.update(elapsed);

    this.hitEffect.update(elapsed);
    this.checkIfPlayerIsHit();

    // HIT EFFECT UPDATE
    this.timeElapsedHitEffect -= elapsed;
    if (this.timeElapsedHitEffect < 0) {
      this.hitEffect.setRender(false);
      this.timeElapsedHitEffect = 400;
    }

    // SPIKE UPDATE
    this.timeElapsedSpike -= elapsed;
    this.spikes.forEach((spike: FloorSpikes) => {
      spike.update(elapsed);
      if ((this.timeElapsedSpike < 0) && this.player.playerCollidesWithSpikes(spike)) {
        PlayerUI.changeHealthBar(1);
        this.timeElapsedSpike = 400;
      }
    });
    this.dialog.talkedWithNpc();

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

    // RETURN CORRECT MAP
    if (this.mapTile[this.player.getRow()][this.player.getColumn()] === 4) {
      return new MapOne(this.maxX, this.maxY, this.mapTile.length - 2, this.playerColumn);
    }
    if (this.mapTile[this.player.getRow()][this.player.getColumn()] === 8) {
      return new MapThree(this.maxX, this.maxY, this.playerRow, 28);
    }
    if (PlayerUI.getState() === 4) {
      PlayerUI.setState(0);
      return new InstructionScene(this.maxX, this.maxY);
    }
    return null;
  }
}
