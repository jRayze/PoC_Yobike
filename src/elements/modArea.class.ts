import { ModAreaComponents } from '../interfaces/entity.model'

export default class ModArea extends Entity {
  constructor(modAreaComponents: ModAreaComponents) {
    super()
    this.addComponent(modAreaComponents.cameraModeArea)
    this.addComponent(modAreaComponents.transform)
    if (modAreaComponents.avatarModifierArea) this.addComponent(modAreaComponents.avatarModifierArea)
  }

  __init__() {
    engine.addEntity(this)
  }
}
