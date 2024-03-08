import CanvasUtil from './CanvasUtil.js';
import GameMap from './GameMap.js';
import SlimeEnemy from './SlimeEnemy.js';
import MapOne from './MapOne.js';
import Player from './Player.js';
import PlayerUI from './playerUI.js';
import TreasureChest from './TreasureChest.js';
import FlyEnemy from './FlyEnemy.js';
import InstructionScene from './InstructionScene.js';
import ChestStayOpen from './ChestStayOpen.js';
import Npc from './Npc.js';
import PurpleSlashAbility from './PurpleSlashAbility.js';
import HitEffects from './HitEffects.js';
import Dialog from './Dialog.js';
import TalkedToNpc from './TalkedToNpc.js';
import BadEnding from './BadEnding.js';
import GoodEnding from './GoodEnding.js';
import SetCorrectEnding from './SetCorrectEnding.js';
export default class MapFour extends GameMap {
    constructor(maxX, maxY, playerRow, playerColumn) {
        super(maxX, maxY, playerRow, playerColumn);
        this.backgroundImage = CanvasUtil.loadNewImage('./assets/room4.png');
        this.enemies.push(new SlimeEnemy(11, 20, 1));
        this.enemies.push(new SlimeEnemy(5, 19, 1));
        this.enemies.push(new SlimeEnemy(8, 25, 1));
        this.enemies.push(new SlimeEnemy(18, 14, 1));
        this.enemies.push(new FlyEnemy(12, 13, 1));
        this.enemies.push(new FlyEnemy(8, 8, 3));
        this.enemies.push(new FlyEnemy(8, 13, 4));
        this.player = new Player(16, 2);
        this.chest = new TreasureChest(15, 26, 4);
        this.items = new PurpleSlashAbility(12, 24);
        this.hitEffect = new HitEffects(playerRow + 3, playerColumn + 3);
        this.mapNumber = 4;
        this.npc = new Npc(13, 26);
        this.timeElapsedEnemy = 400;
        this.timeElapsedSpike = 400;
        this.dialog = new Dialog(-1, 23, 4);
        this.dialog.setGoodDialog(4);
        this.dialog.setBadDialog(4);
        this.mapTile = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 9, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 9, 9, 1, 1, 9, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 9, 0, 0, 9, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 9, 9, 9, 1, 0, 9, 1, 1, 9, 0, 0, 1, 0, 0, 0, 1, 5, 5, 0, 1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 9, 0, 0, 9, 1, 9, 1, 1, 0, 0, 1, 0, 3, 0, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 9, 1],
            [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ];
        this.renderMap();
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.backgroundImage, 100, 100);
        this.npc.render(canvas);
        this.chest.render(canvas);
        this.spikes.forEach((spike) => {
            spike.render(canvas);
        });
        this.player.render(canvas);
        if (this.items.getRender()) {
            this.items.render(canvas);
        }
        this.enemies.forEach((enemies) => {
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
        if (!TalkedToNpc.getMapFour()) {
            this.dialog.render(canvas);
        }
    }
    update(elapsed) {
        this.setPlayerColumn(this.player.getColumn());
        this.setPlayerRow(this.player.getRow());
        this.chest.update(elapsed);
        this.player.update(elapsed);
        this.npc.update(elapsed);
        this.sword.update(elapsed);
        this.hitEffect.update(elapsed);
        this.checkIfPlayerIsHit();
        this.timeElapsedHitEffect -= elapsed;
        if (this.timeElapsedHitEffect < 0) {
            this.hitEffect.setRender(false);
            this.timeElapsedHitEffect = 400;
        }
        this.timeElapsedSpike -= elapsed;
        this.spikes.forEach((spike) => {
            spike.update(elapsed);
            if ((this.timeElapsedSpike < 0) && this.player.playerCollidesWithSpikes(spike)) {
                PlayerUI.changeHealthBar(1);
                this.timeElapsedSpike = 400;
            }
        });
        this.dialog.talkedWithNpc();
        this.timeElapsedEnemy -= elapsed;
        if (!this.player.checkIfIdle()) {
            this.items.setRender(false);
        }
        this.enemies.forEach((enemy) => {
            enemy.update(elapsed);
            if ((this.timeElapsedEnemy < 0) && this.player.playerCollidesWithEnemies(enemy)) {
                PlayerUI.changeHealthBar(1);
                this.timeElapsedEnemy = 400;
            }
            this.sword.swordCollidesWithSlimes(enemy);
            this.sword.swordCollidesWithGoblins(enemy);
            this.sword.swordCollidesWithFlies(enemy);
        });
        if (this.mapTile[this.player.getRow()][this.player.getColumn()] === 7) {
            return new MapOne(this.maxX, this.maxY, this.mapTile.length - 3, 28);
        }
        if (this.mapTile[this.player.getRow()][this.player.getColumn()] === 2 && TalkedToNpc.getGoToEnding() === true) {
            PlayerUI.setState(0);
            if (SetCorrectEnding.getBadEnding() === true) {
                return new BadEnding(this.maxX, this.maxY);
            }
            else {
                return new GoodEnding(this.maxX, this.maxY);
            }
        }
        if (PlayerUI.getState() === 4) {
            PlayerUI.setState(0);
            return new InstructionScene(this.maxX, this.maxY);
        }
        if (ChestStayOpen.getMapFour()) {
            this.interactedWithChest = true;
        }
        return null;
    }
}
//# sourceMappingURL=MapFour.js.map