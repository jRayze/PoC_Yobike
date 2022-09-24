import BasicComponents from '../interfaces/entity.model'

export default class IPod extends Entity {
  constructor(components: BasicComponents) {
    super()
    this.addComponent(components.model)
    this.addComponent(components.transform)
    this.addComponent(components.sound)
  }
  __init__() {
    this.getComponent(GLTFShape).withCollisions = true
    engine.addEntity(this)
  }

  playSong(): void {
    this.getComponent(AudioSource).loop = true
    this.getComponent(AudioSource).playing = true
  }

  stopSong(): void {
    this.getComponent(AudioSource).playing = false
  }
}
