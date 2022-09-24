import Player from './player'

export default class Game implements ISystem {
  player: Player
  ball: Entity
  prevPosition: Vector3
  angle: float
  constructor(player: Player, ball: Entity) {
    this.ball = ball
    this.player = player
    this.prevPosition = new Vector3(0, 0, 0)
    this.angle = 0
  }

  update() {
    
    const angle = Vector3.GetAngleBetweenVectors(new Vector3(0, 0, 0), Camera.instance.feetPosition, new Vector3(0, 0, 0));
    log(angle);
    /*if (
      this.prevPosition.x !== Camera.instance.feetPosition.x ||
      this.prevPosition.z !== Camera.instance.feetPosition.z
    ) {*/
      /*log('------')
      log(Camera.instance.feetPosition)
      log(this.prevPosition)
      log('------')
      const x = Camera.instance.feetPosition.x - this.prevPosition.x
      const y = Camera.instance.feetPosition.z - this.prevPosition.z
      log('x =', x)
      log('y =', y)
      this.angle = Math.atan2(x, y)
      log(this.angle)
    }
    this.prevPosition = Camera.instance.feetPosition*/
  //}
}
