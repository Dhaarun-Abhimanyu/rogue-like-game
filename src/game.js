import Phaser from 'phaser';
import TitleScreen from './scenes/TitleScreen';
import Game from './scenes/Game';

console.log('Game works')

const config = {
  width: 800,
  height: 600,
  backgroundColor: '#000000',
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
};

var game = new Phaser.Game(config);

game.scene.add('game', Game);

game.scene.start('game');