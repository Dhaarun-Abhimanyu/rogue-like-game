import Phaser from 'phaser'

class TitleScreen extends Phaser.Scene {

    preload() {

    }

    create() {
        const text = this.add.text(400, 300, 'Rogue-like game!!')
        text.setOrigin(0.5, 0.5)
    }
}

export default TitleScreen