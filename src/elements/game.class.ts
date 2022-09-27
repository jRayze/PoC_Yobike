import Player from "./player.class";
import * as utils from "@dcl/ecs-scene-utils";

/** Game Class **/
export default class Game implements ISystem {
    player: Player;
    ball: Entity;
    score: number;
    boardScore: UIText;
    wall: Entity;
    ballLayer: number;
    wallLayer: number;

    constructor(player: Player, ball: Entity, wall: Entity) {
        this.ball = ball;
        this.player = player;
        this.score = 0;
        this.wall = wall;
        this.boardScore = this.initText();
        this.initBallCollision();
        this.initWallCollision();
        this.ballLayer = 1;
        this.wallLayer = 2;
    }

    /** Text score initialisation **/
    initText(): UIText {
        const canvas = new UICanvas();

        const text = new UIText(canvas);
        text.value = `Votre score est de ${this.score} !`;
        text.fontSize = 16;
        text.width = 128;
        text.height = 32;
        text.vAlign = "top";
        return text;
    }

    /** collision player with ball initialisation **/
    initBallCollision(): void {
        const collision = new utils.TriggerComponent(
            new utils.TriggerSphereShape(),
            {
                layer: this.ballLayer,
                onCameraEnter: () => {
                    const playerPosition = Camera.instance.feetPosition;
                    const ballPosition =
                        this.ball.getComponent(Transform).position;
                    const newBallPosition = new Vector3(
                        ballPosition.x -
                            (playerPosition.x - ballPosition.x) * 3,
                        0.1,
                        ballPosition.z - (playerPosition.z - ballPosition.z) * 3
                    );
                    this.ball.addComponentOrReplace(
                        new utils.MoveTransformComponent(
                            ballPosition,
                            newBallPosition,
                            0.5,
                            undefined,
                            utils.InterpolationType.EASEOUTQUAD
                        )
                    );
                },
            }
        );
        this.ball.addComponent(collision);
    }

    /** collision ball with wall initialisation **/
    initWallCollision(): void {
        const collision = new utils.TriggerComponent(
            new utils.TriggerSphereShape(),
            {
                layer: this.wallLayer,
                triggeredByLayer: this.ballLayer,
                onTriggerEnter: () => {
                    this.ball.getComponent(AudioSource).loop = false;
                    this.ball.getComponent(AudioSource).playing = true;
                    this.score += 1;
                },
                onTriggerExit: () => {
                    this.ball.getComponent(AudioSource).loop = false;
                    this.ball.getComponent(AudioSource).playing = false;
                },
            }
        );
        this.wall.addComponent(collision);
    }

    /** Each frame update**/
    update() {
        //Update score
        this.boardScore.value = `Votre score est de ${this.score} !`;
    }
}
