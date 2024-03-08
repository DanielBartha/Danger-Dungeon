import { GameLoop } from './GameLoop.js';
import MainGame from './MainGame.js';

const game = new MainGame(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
