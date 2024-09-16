import Phaser from 'phaser'

class Game extends Phaser.Scene {
    preload() {

    }

    create() {
        const text = this.add.text(400,300,'Skill issue, get good!')
        const ball = this.add.circle(200, 300, 10, 0xffffff)

        text.setOrigin(0.5, 0.5)

        this.physics.add.existing(ball)
        ball.body.setCollideWorldBounds(true, 2, 2)
        ball.body.setVelocity(100, 100)
    }
}

export default Game