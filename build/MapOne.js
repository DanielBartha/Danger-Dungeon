import CanvasUtil from './CanvasUtil.js';
import GameMap from './GameMap.js';
import MapTwo from './MapTwo.js';
import MapFour from './MapFour.js';
import SlimeEnemy from './SlimeEnemy.js';
import TreasureChest from './TreasureChest.js';
import PlayerUI from './playerUI.js';
import InstructionScene from './InstructionScene.js';
import Npc from './Npc.js';
import ChestStayOpen from './ChestStayOpen.js';
import Dialog from './Dialog.js';
import TalkedToNpc from './TalkedToNpc.js';
import GreenSlashAbility from './GreenSlashAbility.js';
import HitEffects from './HitEffects.js';
import GoblinEnemy from './GoblinEnemy.js';
export default class MapOne extends GameMap {
    constructor(maxX, maxY, playerRow = 10, playerColumn = 2) {
        super(maxX, maxY, playerRow, playerColumn);
        this.enemies.push(new SlimeEnemy(15, 10, 1));
        this.enemies.push(new SlimeEnemy(3, 25, 1));
        this.enemies.push(new SlimeEnemy(11, 22, 1));
        this.enemies.push(new GoblinEnemy(4, 14, 1));
        this.chest = new TreasureChest(6, 30, 1);
        this.npc = new Npc(7, 11);
        this.items = new GreenSlashAbility(3, 28);
        this.hitEffect = new HitEffects(playerRow + 3, playerColumn + 3);
        this.mapNumber = 1;
        this.timeElapsedEnemy = 400;
        this.timeElapsedSpike = 400;
        this.timeElapsedHitEffect = 400;
        this.dialog = new Dialog(-7, 8, 1);
        this.dialog.setGoodDialog(1);
        this.dialog.setBadDialog(1);
        this.mapTile = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 9, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 9, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 7, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 7, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
        if (!TalkedToNpc.getMapOne()) {
            this.dialog.render(canvas);
        }
    }
    update(elapsed) {
        this.setPlayerColumn(this.player.getColumn());
        this.setPlayerRow(this.player.getRow());
        this.player.update(elapsed);
        this.npc.update(elapsed);
        this.chest.update(elapsed);
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
        if (!this.player.checkIfIdle()) {
            this.items.setRender(false);
        }
        if (this.mapTile[this.player.getRow()][this.player.getColumn()] === 4 && TalkedToNpc.getGoToNextRoom() === true) {
            return new MapTwo(this.maxX, this.maxY, 2, this.playerColumn);
        }
        if (this.mapTile[this.player.getRow()][this.player.getColumn()] === 7 && TalkedToNpc.getGoToLastRoom() === true) {
            return new MapFour(this.maxX, this.maxY, this.playerRow, 2);
        }
        if (PlayerUI.getState() === 4) {
            PlayerUI.setState(0);
            return new InstructionScene(this.maxX, this.maxY);
        }
        if (ChestStayOpen.getMapOne()) {
            this.interactedWithChest = true;
        }
        return null;
    }
}
//# sourceMappingURL=MapOne.js.map