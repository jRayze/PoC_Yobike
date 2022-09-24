import IPod from './elements/iPod'
import Ball from './elements/ball'
import Wall from './elements/wall'
import Game from './elements/game'
import ModArea from './elements/modArea'
import Player from './elements/player'

const sourceIPod = new AudioClip('assets/chill.mp3')
const sourceBallonMur = new AudioClip('assets/ballon_mur.mp3')

/*const collisionBallonMur = (ball: Ball, wall: Wall): void => {
  // si collision entre le ballon et le mur
  ball.playBallWallCollision()
}*/

const iPod = new IPod({
  model: new GLTFShape('models/scene.gltf'),
  transform: new Transform({
    position: new Vector3(15, 0.58, 15),
    scale: new Vector3(0.01, 0.01, 0.01)
  }),
  sound: new AudioSource(sourceIPod)
})

const ball = new Ball({
  model: new SphereShape(),
  transform: new Transform({
    position: new Vector3(5, 0.1, 5),
    scale: new Vector3(0.2, 0.2, 0.2)
  }),
  sound: new AudioSource(sourceBallonMur)
})

const wall = new Wall({
  model: new BoxShape(),
  transform: new Transform({
    position: new Vector3(8, 0.8, 0.1),
    scale: new Vector3(3, 2, 0.1)
  }),
  sound: new AudioSource(sourceBallonMur)
})

const modArea = new ModArea({
  cameraModeArea: new CameraModeArea({
    area: { box: new Vector3(16, 1, 14) },
    cameraMode: CameraMode.ThirdPerson
  }),
  transform: new Transform({
    position: new Vector3(8, 0, 8)
  }),
  avatarModifierArea: new AvatarModifierArea({
    area: { box: new Vector3(16, 4, 16) },
    modifiers: [AvatarModifiers.DISABLE_PASSPORTS]
  })
})

modArea.__init__()
iPod.__init__()
ball.__init__()
wall.__init__()

const player = new Player()

const game = new Game(player, ball)

engine.addSystem(game, 100)

/*const keyboardStatus = (): Object => {
  const input = Input.instance
  const keyboard = { up: 0, down: 0, left: 0, right: 0 }
  input.subscribe('BUTTON_DOWN', ActionButton.FORWARD, false, (e) => (keyboard.up = 
    GetAngleBetweenVectors(player.position, ))
  ))
  //input.subscribe('BUTTON_UP', ActionButton.FORWARD, false, (e) => e)

  input.subscribe('BUTTON_DOWN', ActionButton.BACKWARD, false, (e) => e)
  //input.subscribe('BUTTON_UP', ActionButton.BACKWARD, false, (e) => e)

  input.subscribe('BUTTON_DOWN', ActionButton.LEFT, false, (e) => e)
  //input.subscribe('BUTTON_UP', ActionButton.LEFT, false, (e) => e)

  input.subscribe('BUTTON_DOWN', ActionButton.RIGHT, false, (e) => e)
  //input.subscribe('BUTTON_UP', ActionButton.RIGHT, false, (e) => e)
}*/
