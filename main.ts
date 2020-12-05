sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mnamka.setPosition(randint(20, 120), randint(20, 100))
    if (true) {
        angery = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 . . 6 6 . . . . . . 
            . . . . . 6 . . 6 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 . . . . . . . . 
            . . . . . 6 . . 6 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
    }
    angery.follow(ja)
    angery.setPosition(randint(20, 160), randint(20, 160))
    angery.setFlag(SpriteFlag.StayInScreen, true)
    if (info.score() == 10) {
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    angery.destroy()
    info.changeScoreBy(-2)
    if (true) {
        angery.destroy()
    }
    if (info.score() == -10) {
        game.over(false)
    }
})
let angery: Sprite = null
let mnamka: Sprite = null
let ja: Sprite = null
scene.setBackgroundColor(14)
ja = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 9 9 9 9 9 . . . . . 
    . . . 9 9 9 9 . . . . 9 9 . . . 
    . . . 9 . . . . . . . . 9 9 . . 
    . . . 9 . f f . . f f . . 9 . . 
    . . . 9 . . . . . . . . . 9 . . 
    . . . 9 . . . f f . . . 9 . . . 
    . . . 9 . . . . . . . . 9 . . . 
    . . . 9 9 . . . . . . 9 9 . . . 
    . . . . . 9 9 9 9 9 9 9 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(ja, 250, 250)
ja.setFlag(SpriteFlag.StayInScreen, true)
mnamka = sprites.create(img`
    7 7 7 7 7 . . . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mnamka.startEffect(effects.spray, 1000)
mnamka.setFlag(SpriteFlag.StayInScreen, true)
