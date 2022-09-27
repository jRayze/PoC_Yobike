/** Player Class **/
export default class Player extends Entity {
    position: Vector3;

    constructor() {
        super();
        this.addComponent(
            new Transform({
                position: new Vector3(0, 0, 0),
            })
        );
        this.position = new Vector3(0, 0, 0);
        engine.addEntity(this);
    }

    updatePosition(newPosition: Vector3): void {
        this.position = newPosition;
    }
}
