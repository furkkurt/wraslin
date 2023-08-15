class test extends Phaser.Scene{
  constructor(){
    super("test")
  }
  create(){
    this.cameras.main.setZoom(.7)
    this.ring = this.add.sprite(0,0,"ring").setOrigin(0.1)
    this.turnbuckleTR = this.add.sprite(this.ring.width/1.43, this.ring.y-48,"turnbuckleT").setOrigin(0)
    this.ropesR = this.physics.add.sprite(this.ring.width/1.32, this.ring.y,"ropesV").setOrigin(0)
    this.turnbuckleBR = this.add.sprite(this.ring.width/1.285, this.ring.height/2.25,"turnbuckleB").setOrigin(0).setDepth(2)
    this.turnbuckleTL = this.add.sprite(this.ring.x+32, this.ring.y-48,"turnbuckleT").setOrigin(0).flipX = true
    this.ropesL = this.physics.add.sprite(this.ring.x-46, this.ring.y,"ropesV").setOrigin(0).flipX = true
    this.turnbuckleBL = this.add.sprite(this.ring.x-64, this.ring.height/2.25,"turnbuckleB").setOrigin(0).setDepth(2).flipX = true
    this.ropesT = this.physics.add.sprite(this.ring.x+128, this.ring.y-48,"ropesH").setOrigin(0)
    this.ropesB = this.physics.add.sprite(this.ring.x+28, this.ring.height/2.13,"ropesH").setOrigin(0).setScale(1.33,1.93).setDepth(2)

    this.wrestler1 = new Wrestler(this, [1,1,1,1,1,1,1,2,1,1], 400, 200, false)
    this.wrestler2 = new Wrestler(this, [0,0,0,0,0,0,0,1,0,0], 500, 200, true)
  
    this.input.keyboard.on('keydown-A', Move.left.bind(this.scene, this));
    this.input.keyboard.on('keyup-A', Move.stop.bind(this.scene, this));
    this.input.keyboard.on('keydown-D', Move.right.bind(this.scene, this));
    this.input.keyboard.on('keyup-D', Move.stop.bind(this.scene, this));
    this.input.keyboard.on('keydown-W', Move.up.bind(this.scene, this));
    this.input.keyboard.on('keyup-W', Move.stop.bind(this.scene, this));
    this.input.keyboard.on('keydown-S', Move.down.bind(this.scene, this));
    this.input.keyboard.on('keyup-S', Move.stop.bind(this.scene, this));
    this.input.keyboard.on('keydown-UP', Move.hurricanrana.bind(this.scene, this));
    this.input.keyboard.on('keydown-DOWN', Move.fourfifthy.bind(this.scene, this));

    this.ropes = this.add.group();
    this.ropes.add(this.ropesB, this.ropesH, this.ropesL, this.ropesR)
    this.physics.add.overlap(this.wrestler1.bodyParts[9], this.ropes, () => {console.log("springboard")})
  }

  update(){
    if(!this.wrestler1.performingMove) {
      if (this.wrestler1.bodyParts[9].y > this.wrestler2.bodyParts[9].y){
        this.wrestler1.bodyParts.forEach((part) => {
          part.setDepth(1.01)
        })
        this.wrestler2.bodyParts.forEach((part) => {
          part.setDepth(1)
        })
      }
      else {
        this.wrestler2.bodyParts.forEach((part) => {
          part.setDepth(1.01)
        })
        this.wrestler1.bodyParts.forEach((part) => {
          part.setDepth(1)
        })
      }
    }

    this.wrestler1.springboard = false
  }
}
