var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 450,
  backgroundColor: '#fff',
  scale: {
    mode: Phaser.Scale.FIT,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  plugins: {
    scene: [
      {
        key: 'SpinePlugin',
        plugin: window.SpinePlugin,
        sceneKey: 'spine'
      }
    ]
  },
  scene: [preloader, test],
  pixelArt: true
};

var game = new Phaser.Game(config);
