class preloader extends Phaser.Scene {
  constructor() {
    super("boot");
  };
  preload(){
		this.load.image("ring", "assets/ring.png")
		this.load.image("turnbuckleT", "assets/turnbuckleT.png")
		this.load.image("turnbuckleB", "assets/turnbuckleB.png")
		this.load.image("ropesH", "assets/ropesH.png")
		this.load.image("ropesV", "assets/ropesV.png")

		this.load.setPath("./spine")
		this.load.spine("head", "head.json", "head.atlas", true)
		this.load.spine("body", "body.json", "body.atlas", true)
		this.load.spine("thighR", "thighR.json", "thighR.atlas", true)
		this.load.spine("thighL", "thighL.json", "thighL.atlas", true)
		this.load.spine("legR", "legR.json", "legR.atlas", true)
		this.load.spine("legL", "legL.json", "legL.atlas", true)
		this.load.spine("bicepR", "bicepR.json", "bicepR.atlas", true)
		this.load.spine("bicepL", "bicepL.json", "bicepL.atlas", true)
		this.load.spine("tricepR", "tricepR.json", "tricepR.atlas", true)
		this.load.spine("tricepL", "tricepL.json", "tricepL.atlas", true)
	};
	create(){
		this.scene.start("test");
	}
}
