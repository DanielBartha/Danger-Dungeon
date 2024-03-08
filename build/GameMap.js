import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Npc from './Npc.js';
import Player from './Player.js';
import Scene from './Scene.js';
import Sword from './Sword.js';
import HintScreen from './HintScreen.js';
import PlayerUI from './playerUI.js';
import FloorSpikes from './FloorSpikes.js';
import HitEffects from './HitEffects.js';
import SlimeEnemy from './SlimeEnemy.js';
import GoblinEnemy from './GoblinEnemy.js';
import FlyEnemy from './FlyEnemy.js';
import AttackChange from './AttackChange.js';
import SetCorrectEnding from './SetCorrectEnding.js';
export default class GameMap extends Scene {
    mapTile = [];
    wall;
    floor;
    door;
    chest;
    player;
    sword;
    attackBoolean;
    animationCounterSword;
    animationCounterHitEffect;
    enemies = [];
    backgroundImage;
    playerRow;
    playerColumn;
    npc;
    hint;
    hintScreen;
    timeElapsedEnemy;
    timeElapsedHitEffect;
    timeElapsedSpike;
    instructionScene;
    spikes = [];
    readingHint;
    mapNumber;
    interactedWithChest;
    hitEffect;
    dialog;
    items;
    constructor(maxX, maxY, playerRow, playerColumn) {
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
    setPlayerRow(newRow) {
        this.playerRow = newRow;
    }
    getPlayerRow() {
        return this.playerRow;
    }
    setPlayerColumn(newColumn) {
        this.playerColumn = newColumn;
    }
    getPlayerColumn() {
        return this.playerColumn;
    }
    processInput(keyListener) {
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
            this.enemies.forEach((enemy) => {
                if (this.sword.swordCollidesWithSlimes(enemy) && enemy instanceof SlimeEnemy) {
                    this.enemies = this.enemies.filter((enemy) => (!this.sword.swordCollidesWithSlimes(enemy)));
                }
                if (this.sword.swordCollidesWithGoblins(enemy) && enemy instanceof GoblinEnemy) {
                    this.enemies = this.enemies.filter((enemy) => (!this.sword.swordCollidesWithGoblins(enemy)));
                }
                if (this.sword.swordCollidesWithFlies(enemy) && enemy instanceof FlyEnemy) {
                    this.enemies = this.enemies.filter((enemy) => (!this.sword.swordCollidesWithFlies(enemy)));
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
        }
        if (keyListener.keyPressed(KeyListener.KEY_Y) && this.mapTile[this.player.getRow()][this.player.getColumn()] === 5) {
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
        }
        if (keyListener.keyPressed(KeyListener.KEY_N) && this.mapTile[this.player.getRow()][this.player.getColumn()] === 5) {
            this.dialog.setRender(true);
            this.dialog.setBadImage();
        }
    }
    checkIfPlayerIsHit() {
        this.enemies.forEach((enemy) => {
            if (this.player.playerCollidesWithEnemies(enemy)) {
                this.hitEffect.setRender(true);
            }
        });
        this.spikes.forEach((spike) => {
            if (this.player.playerCollidesWithSpikes(spike)) {
                this.hitEffect.setRender(true);
            }
        });
    }
    imageLoad(canvas) {
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
    renderMap() {
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
//# sourceMappingURL=GameMap.js.map