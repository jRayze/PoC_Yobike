export default class BasicComponents {
  model: Shape
  transform: Transform
  sound: AudioSource
  constructor(model: SphereShape | GLTFShape | BoxShape, transform: Transform, sound: AudioSource) {
    this.model = model
    this.transform = transform
    this.sound = sound
  }
}

export class ModAreaComponents {
  cameraModeArea: CameraModeArea
  transform: Transform
  avatarModifierArea?: AvatarModifierArea
  constructor(cameraModeArea: CameraModeArea, transform: Transform, avatarModifierArea: AvatarModifierArea) {
    this.cameraModeArea = cameraModeArea
    this.transform = transform
    this.avatarModifierArea = avatarModifierArea
  }
}
