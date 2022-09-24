import Player from './player';

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
    if (this.player.position != Camera.instance.feetPosition) {
      this.player.updatePosition(Camera.instance.feetPosition);
      log(this.player.position)
    }
    //log(this.player.position)
  }
}
