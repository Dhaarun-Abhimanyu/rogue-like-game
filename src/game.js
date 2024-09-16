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
      gravity: { y: 0 },
      debug: true,
    },
  },
  autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
};

const game = new Phaser.Game(config);

game.scene.add('titlescreen', TitleScreen);
game.scene.add('game', Game);

game.scene.start('game');