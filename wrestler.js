class Wrestler {
  constructor(scene, skins, x, y, flipX) {
    this.scene = scene
    this.bodyParts = []
    this.performingMove = false
    this.isDown = false
    this.springboard = false
    this.flipX = flipX
    if (this.flipX)
      this.scaleX = -.5
    else
      this.scaleX = .5
    this.bodyParts.push(
      this.scene.add.spine(x,y,"tricepR").setSkinByName(skins[0]).setScale(this.scaleX, .5),
      this.scene.add.spine(x,y,"bicepR").setSkinByName(skins[1]).setScale(this.scaleX, .5),
      this.scene.add.spine(x,y,"legL").setSkinByName(skins[2]).setScale(this.scaleX, .5),
      this.scene.add.spine(x,y,"thighL").setSkinByName(skins[3]).setScale(this.scaleX, .5),
      this.scene.add.spine(x,y,"legR").setSkinByName(skins[4]).setScale(this.scaleX, .5).setDepth(1.1),
      this.scene.add.spine(x,y,"thighR").setSkinByName(skins[5]).setScale(this.scaleX, .5).setDepth(1.1),
      this.scene.add.spine(x,y,"body").setSkinByName(skins[6]).setScale(this.scaleX, .5),
      this.scene.add.spine(x,y,"head").setSkinByName(skins[7]).setScale(this.scaleX, .5),
      this.scene.add.spine(x,y,"tricepL").setSkinByName(skins[8]).setScale(this.scaleX, .5),
      this.scene.add.spine(x,y,"bicepL").setSkinByName(skins[9]).setScale(this.scaleX, .5)
    )
    for (let i = 0; i<this.bodyParts.length; i++){
      this.scene.physics.add.existing(this.bodyParts[i])
      this.bodyParts[i].scene = this.scene
    }
  }
}
