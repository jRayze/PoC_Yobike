import BasicComponents from '../interfaces/entity.model'

export default class Ball extends Entity {
  constructor(components: BasicComponents) {
    super()
    this.addComponent(components.model)
    this.addComponent(components.transform)
    this.addComponent(components.sound)
  }
  __init__(): void {
    this.getComponent(SphereShape).withCollisions = true
    engine.addEntity(this)
  }

  playBallWallCollision(): void {
    this.getComponent(AudioSource).loop = false
    this.getComponent(AudioSource).playing = true
  }
}
