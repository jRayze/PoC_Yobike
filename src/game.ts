import IPod from "./elements/iPod.class";
import Ball from "./elements/ball.class";
import Wall from "./elements/wall.class";
import Game from "./elements/game.class";
import ModArea from "./elements/modArea.class";
import Player from "./elements/player.class";

const sourceIPod = new AudioClip("assets/chill.mp3");
const sourceBallonMur = new AudioClip("assets/ballon_mur.mp3");

/** Intance all componnents**/
const iPod = new IPod({
    model: new GLTFShape("models/scene.gltf"),
    transform: new Transform({
        position: new Vector3(15, 0.58, 15),
        scale: new Vector3(0.01, 0.01, 0.01),
    }),
    sound: new AudioSource(sourceIPod),
});

const ball = new Ball({
    model: new SphereShape(),
    transform: new Transform({
        position: new Vector3(5, 0.1, 5),
        scale: new Vector3(0.2, 0.2, 0.2),
    }),
    sound: new AudioSource(sourceBallonMur),
});

const wall = new Wall({
    model: new BoxShape(),
    transform: new Transform({
        position: new Vector3(8, 0.8, 0.1),
        scale: new Vector3(3, 2, 0.1),
    }),
    sound: new AudioSource(sourceBallonMur),
});

const modArea = new ModArea({
    cameraModeArea: new CameraModeArea({
        area: { box: new Vector3(16, 1, 14) },
        cameraMode: CameraMode.ThirdPerson,
    }),
    transform: new Transform({
        position: new Vector3(8, 0, 8),
    }),
    avatarModifierArea: new AvatarModifierArea({
        area: { box: new Vector3(16, 4, 16) },
        modifiers: [AvatarModifiers.DISABLE_PASSPORTS],
    }),
});


// Instance the input object
const input = Input.instance

// button down event
input.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, (e) => {
    iPod.toggleSong()
})

/** Init components in the board**/
modArea.__init__();
iPod.__init__();
ball.__init__();
wall.__init__();

/** Init game **/
const player = new Player();
const game = new Game(player, ball, wall);
engine.addSystem(game, 100);