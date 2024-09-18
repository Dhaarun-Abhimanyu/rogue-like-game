import Phaser from 'phaser';

class Game extends Phaser.Scene {
    preload() {
        this.load.image('player', 'assets/images/player.png');
        this.load.on('filecomplete-image-player', () => {
            console.log('Player image loaded successfully');
        });
        this.load.on('loaderror', (file) => {
            console.error('Error loading file:', file.src);
        });
    }

    create() {
        this.skillissue = this.add.text(400, 300, 'Skill issue, get good!');
        this.skillissue.setOrigin(0.5, 0.5);

        this.player = this.physics.add.sprite(100, 100, 'player');
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursors.left.isDown)
            this.player.setVelocityX(-180);
        else if (this.cursors.right.isDown)
            this.player.setVelocityX(180);
        else
            this.player.setVelocityX(0);

        if (this.cursors.up.isDown)
            this.player.setVelocityY(-180);
        else if (this.cursors.down.isDown)
            this.player.setVelocityY(180);
        else
            this.player.setVelocityY(0);

        if (this.cursors.space.isDown)
            this.player.setOrigin(0, 0);
    }
}

export default Game;