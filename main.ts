controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let list: number[] = []
    flipGravity(true, list)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
function flipGravity (Gravity: boolean, I_forgot: any[]) {
    if (controller.B.isPressed() && mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (gravity < 0) {
            gravity = -300
        } else {
            gravity = 300
        }
    }
}
let gravity = 0
let mySprite: Sprite = null
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
scene.cameraFollowSprite(mySprite)
gravity = 300
tiles.setCurrentTilemap(tilemap`level2`)
mySprite.ay = gravity
mySprite.setVelocity(125, 0)
forever(function () {
    if (mySprite.vx == 0) {
        game.gameOver(false)
    }
})
