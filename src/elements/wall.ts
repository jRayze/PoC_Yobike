import BasicComponents from '../interfaces/entity.model'

export default class Wall extends Entity {
  constructor(components: BasicComponents) {
    super()
    this.addComponent(components.model)
    this.addComponent(components.transform)
    this.addComponent(components.sound)
  }

  __init__() {
    this.getComponent(BoxShape).withCollisions = true
    engine.addEntity(this)
  }
}
