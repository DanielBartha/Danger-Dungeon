/* eslint-disable max-len */
import CanvasUtil from './CanvasUtil.js';
import Enemies from './Enemies.js';
import KeyListener from './KeyListener.js';
import Npc from './Npc.js';
import Player from './Player.js';
import Scene from './Scene.js';
import Sword from './Sword.js';
import TreasureChest from './TreasureChest.js';
import HintScreen from './HintScreen.js';
import PlayerUI from './playerUI.js';
import InstructionScene from './InstructionScene.js';
import FloorSpikes from './FloorSpikes.js';
import Dialog from './Dialog.js';
import ChestItems from './ChestItems.js';
import HitEffects from './HitEffects.js';
import SlimeEnemy from './SlimeEnemy.js';
import GoblinEnemy from './GoblinEnemy.js';
import FlyEnemy from './FlyEnemy.js';
import AttackChange from './AttackChange.js';
import SetCorrectEnding from './SetCorrectEnding.js';

export default abstract class GameMap extends Scene {
  protected mapTile: number[][] = [];

  protected wall: HTMLImageElement;

  protected floor: HTMLImageElement;

  protected door: HTMLImageElement;

  protected chest: TreasureChest;

  protected player: Player;

  protected sword: Sword;

  protected attackBoolean: boolean;

  protected animationCounterSword: number;

  protected animationCounterHitEffect: number;

  protected enemies: Enemies[] = [];

  protected backgroundImage: HTMLImageElement;

  protected playerRow: number;

  protected playerColumn: number;

  protected npc: Npc;

  protected hint: HintScreen;

  protected hintScreen: HTMLImageElement;

  protected timeElapsedEnemy: number;

  protected timeElapsedHitEffect: number;

  protected timeElapsedSpike: number;

  protected instructionScene: InstructionScene;

  protected spikes: FloorSpikes[] = [];

  protected readingHint: boolean;

  protected mapNumber: number;

  protected interactedWithChest: boolean;

  protected hitEffect: HitEffects;

  protected dialog: Dialog;

  protected items: ChestItems;

  public constructor(maxX: number, maxY: number, playerRow: number, playerColumn: number) {
    super(maxY, maxX);

    this.wall = CanvasUtil.loadNewImage('./assets/wallTile.png');
    this.floor = CanvasUtil.loadNewImage('./assets/floorTile.png');
    this.door = CanvasUtil.loadNewImage('./assets/doorTile.png');
    this.npc = new Npc(20, 20);
    this.backgroundImage = CanvasUtil.loadNewImage('./assets/room1.png');
    this.player = new Player(playerRow, playerColumn);
    this.sword = new Sword(playerRow, playerColumn + 1);

    this.attackBoolean = false;
    this.readingHint = false;
    this.hintScreen = CanvasUtil.loadNewImage('./assets/hints/hint1.png');
    this.interactedWithChest = false;
  }

  public setPlayerRow(newRow: number): void {
    this.playerRow = newRow;
  }

  public getPlayerRow(): number {
    return this.playerRow;
  }

  public setPlayerColumn(newColumn: number): void {
    this.playerColumn = newColumn;
  }

  public getPlayerColumn(): number {
    return this.playerColumn;
  }

  /**
   * movement + attack + interacting
   *
   * @param keyListener interact
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_UP)
      && this.mapTile[this.player.getRow() - 1][this.player.getColumn()] !== 1) {
      this.player.setRow(this.player.getRow() - 1);
      this.sword = new Sword(this.playerRow - 1, this.playerColumn);
      this.sword.setRow(this.sword.getRow() - 1);
      this.hitEffect = new HitEffects(this.playerRow + 3, this.playerColumn + 3);
      this.hitEffect.setRow(this.hitEffect.getRow() - 1);
      this.sword.setTopAttack();
      this.player.setPlayerRunningRight();
    }

    if (keyListener.keyPressed(KeyListener.KEY_DOWN)
      && this.mapTile[this.player.getRow() + 1][this.player.getColumn()] !== 1) {
      this.player.setRow(this.player.getRow() + 1);
      this.sword = new Sword(this.playerRow + 1, this.playerColumn);
      this.sword.setRow(this.sword.getRow() + 1);
      this.hitEffect = new HitEffects(this.playerRow + 3, this.playerColumn + 3);
      this.hitEffect.setRow(this.hitEffect.getRow() + 1);

      this.sword.setBottomAttack();
      this.player.setPlayerRunningLeft();
    }

    if (keyListener.keyPressed(KeyListener.KEY_RIGHT)
      && this.mapTile[this.player.getRow()][this.player.getColumn() + 1] !== 1) {
      this.player.setColumn(this.player.getColumn() + 1);
      this.sword = new Sword(this.playerRow, this.playerColumn + 1);
      this.sword.setColumn(this.sword.getColumn() + 1);
      this.hitEffect = new HitEffects(this.playerRow + 3, this.playerColumn + 3);
      this.hitEffect.setColumn(this.hitEffect.getColumn() + 1);

      this.sword.setRightAttack();
      this.player.setPlayerRunningRight();
    }

    if (keyListener.keyPressed(KeyListener.KEY_LEFT)
      && this.mapTile[this.player.getRow()][this.player.getColumn() - 1] !== 1) {
      this.player.setColumn(this.player.getColumn() - 1);
      this.sword = new Sword(this.playerRow, this.playerColumn - 1);
      this.sword.setColumn(this.sword.getColumn() - 1);
      this.hitEffect = new HitEffects(this.playerRow + 3, this.playerColumn + 3);
      this.hitEffect.setColumn(this.hitEffect.getColumn() - 1);

      this.sword.setLeftAttack();
      this.player.setPlayerRunningLeft();
    }

    if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
      this.animationCounterSword = 30;
      this.enemies.forEach((enemy: Enemies) => {
        if (this.sword.swordCollidesWithSlimes(enemy) && enemy instanceof SlimeEnemy) {
          this.enemies = this.enemies.filter((enemy: Enemies) => (!this.sword.swordCollidesWithSlimes(enemy)));
        }
        if (this.sword.swordCollidesWithGoblins(enemy) && enemy instanceof GoblinEnemy) {
          this.enemies = this.enemies.filter((enemy: Enemies) => (!this.sword.swordCollidesWithGoblins(enemy)));
        }
        if (this.sword.swordCollidesWithFlies(enemy) && enemy instanceof FlyEnemy) {
          this.enemies = this.enemies.filter((enemy: Enemies) => (!this.sword.swordCollidesWithFlies(enemy)));
        }
      });
    }

    if (keyListener.keyPressed(KeyListener.KEY_E) && !this.interactedWithChest && this.mapTile[this.player.getRow()][this.player.getColumn()] === 3) {
      this.items.setRender(true);
      this.chest.setTreasureChestOpen(this.mapNumber);

      this.player.setPlayerIdle();
    }

    if (keyListener.keyPressed(KeyListener.KEY_F) && this.mapTile[this.player.getRow()][this.player.getColumn()] === 5) {
      this.dialog.setRender(true);
      this.dialog.setImage();
      this.player.setPlayerIdle();
    } if (keyListener.keyPressed(KeyListener.KEY_Y) && this.mapTile[this.player.getRow()][this.player.getColumn()] === 5) {
      SetCorrectEnding.setBadEnding(true);
      if (this.mapNumber === 1) {
        AttackChange.setGreenSlash(true);
      }
      if (this.mapNumber === 2) {
        PlayerUI.setState(0);
      }
      if (this.mapNumber === 3) {
        AttackChange.setPurpleSlash(true);
      }
      this.dialog.setRender(true);
      this.dialog.setGoodImage();
    } if (keyListener.keyPressed(KeyListener.KEY_N) && this.mapTile[this.player.getRow()][this.player.getColumn()] === 5) {
      this.dialog.setRender(true);
      this.dialog.setBadImage();
    }
  }

  /**
   * checks if player is hit
   */
  public checkIfPlayerIsHit(): void {
    this.enemies.forEach((enemy: Enemies) => {
      if (this.player.playerCollidesWithEnemies(enemy)) {
        this.hitEffect.setRender(true);
      }
    });
    this.spikes.forEach((spike: FloorSpikes) => {
      if (this.player.playerCollidesWithSpikes(spike)) {
        this.hitEffect.setRender(true);
      }
    });
  }

  /**
   * loads hints
   *
   * @param canvas this one
   */
  public imageLoad(canvas: HTMLCanvasElement): void {
    if (this.mapTile[this.player.getRow()][this.player.getColumn()] === 6) {
      const random = Math.floor(Math.random() * 8);
      this.hint = new HintScreen(random);
    }
    if (this.mapTile[this.player.getRow()][this.player.getColumn()] === 7) {
      if (!this.readingHint) {
        this.hint.renderHint(canvas);
      }
      this.player.setPlayerIdle();
    }
  }

  /**
   * renders spikes
   *
   * @param canvas
   */
  public renderMap(): void {
    for (let i = 0; i < this.mapTile.length; i++) {
      const row = this.mapTile[i];
      for (let j = 0; j < row.length; j++) {
        switch (row[j]) {
          case 9:
            this.spikes.push(new FloorSpikes(i, j));
            break;
          default:
            break;
        }
      }
    }
  }
}
