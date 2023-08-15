class preloader extends Phaser.Scene {
  constructor() {
    super("boot");
  };
  preload(){
		this.load.image("body", "assets/body.png");
		this.load.image("hand", "assets/hand.png");
		//this.load.image("head", "assets/head.png");
		this.load.image("leg", "assets/leg.png");
		this.load.image("thigh", "assets/thigh-bicep.png");
		this.load.image("bicep", "assets/thigh-bicep.png");

		this.load.spine("head", "assets/head.json", "assets/head.atlas", true)
	};
	create(){
		this.scene.start("test");
	}
}
