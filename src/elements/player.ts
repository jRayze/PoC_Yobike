export default class Player extends Entity {
  constructor() {
    super()
    this.addComponent(
      new Transform({
        position: new Vector3(0, 0, 0)
      })
    )
    engine.addEntity(this)
  }
}
