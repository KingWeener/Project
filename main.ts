scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
function spawnCoin (list: Sprite[]) {
    if (info.score() <= 5) {
        tiles.placeOnRandomTile(list._pickRandom(), sprites.castle.tileDarkGrass2)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Top)) {
        mySprite.ay = 300
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.ay = -300
    }
})
let mySprite: Sprite = null
info.setScore(0)
mySprite = sprites.create(img`
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 b c 5 5 d 4 c . . 
    . b b b b 5 5 5 b f d d 4 4 4 b 
    . b d 5 b 5 5 b c b 4 4 4 4 b . 
    . . b 5 5 b 5 5 5 4 4 4 4 b . . 
    . . b d 5 5 b 5 5 5 5 5 5 b . . 
    . b d b 5 5 5 d 5 5 5 5 5 5 b . 
    b d d c d 5 5 b 5 5 5 5 5 5 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . b b b . . . 
    . b 1 1 1 b . . 
    b 1 9 9 9 1 b . 
    b 1 9 9 1 1 b . 
    c 1 9 9 1 9 c . 
    c 1 9 1 9 9 c . 
    . f 9 9 9 f . . 
    . . f f f . . . 
    `, SpriteKind.Food)
let mySprite3 = sprites.create(img`
    . . b b b . . . 
    . b 5 5 5 b . . 
    b 5 d 3 d 5 b . 
    b 5 3 5 1 5 b . 
    c 5 3 5 1 d c . 
    c 5 d 1 d d c . 
    . f d d d f . . 
    . . f f f . . . 
    `, SpriteKind.Food)
let list = [mySprite2, mySprite3]
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
let gravity = 300
mySprite.ay = gravity
mySprite.setVelocity(100, 0)
forever(function () {
    spawnCoin(list)
})
