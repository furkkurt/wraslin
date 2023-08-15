class test extends Phaser.Scene{
  constructor(){
    super("test")
  }
  create(){
    //this.head = this.physics.add.sprite(0,0,"head").setScale(10);
    this.add.spine(0,0,"head")
  }
}
