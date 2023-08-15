class Move {
  constructor(move, scene, wrestler, opponent) {
    this.wrestler1 = wrestler
    this.wrestler2 = opponent
    this.scene = scene
    this.move = move
    switch(this.move) {
      case "hurricanrana":
        this.hurricanrana()
        break
    }
  }

  static left(scene){
    if(scene.wrestler1.bodyParts[0].body.velocity.x >= 0 && !scene.wrestler1.performingMove) {
      console.log(scene.wrestler1.performingMove)
      for (let i = 0; i<scene.wrestler1.bodyParts.length; i++){
        scene.wrestler1.bodyParts[i].setScale(-.5,.5)
        scene.wrestler1.bodyParts[i].body.setVelocityX(-200)
        scene.wrestler1.bodyParts[i].play("walk1", true)
      }
    }
  }
  static right(scene){
    if(scene.wrestler1.bodyParts[0].body.velocity.x <= 0 && !scene.wrestler1.performingMove) {
      for (let i = 0; i<scene.wrestler1.bodyParts.length; i++){
        scene.wrestler1.bodyParts[i].setScale(.5,.5)
        scene.wrestler1.bodyParts[i].body.setVelocityX(200)
        scene.wrestler1.bodyParts[i].play("walk1", true)
      }
    }
  }
  static up(scene){
    if(scene.wrestler1.bodyParts[0].body.velocity.y >= 0 && !scene.wrestler1.performingMove) {
      for (let i = 0; i<scene.wrestler1.bodyParts.length; i++){
        scene.wrestler1.bodyParts[i].body.setVelocityY(-200)
        scene.wrestler1.bodyParts[i].play("walk1", true)
      }
    }
  }
  static down(scene){
    if(scene.wrestler1.bodyParts[0].body.velocity.y <= 0 && !scene.wrestler1.performingMove) {
      for (let i = 0; i<scene.wrestler1.bodyParts.length; i++){
        scene.wrestler1.bodyParts[i].body.setVelocityY(200)
        scene.wrestler1.bodyParts[i].play("walk1", true)
      }
    }
  }
  static stop(scene){
    if(!scene.wrestler1.performingMove) {
      for (let i = 0; i<scene.wrestler1.bodyParts.length; i++){
        scene.wrestler1.bodyParts[i].body.setVelocity(0)
        scene.wrestler1.bodyParts[i].play("idle1", true)
      }
    }
  }

  static hurricanrana(scene){
    if(!scene.wrestler1.performingMove) {
      if (Math.abs(scene.wrestler1.bodyParts[0].x - scene.wrestler2.bodyParts[0].x)<100 && (scene.wrestler1.bodyParts[0].scaleX * scene.wrestler2.bodyParts[0].scaleX) < 0) {
        scene.wrestler1.performingMove = true
        scene.wrestler1.bodyParts[4].setDepth(1.1)
        scene.wrestler1.bodyParts[5].setDepth(1.1)
        scene.wrestler2.bodyParts[8].setDepth(1.2)
        scene.wrestler2.bodyParts[9].setDepth(1.2)
        for (let i = 0; i<scene.wrestler1.bodyParts.length; i++){
          scene.wrestler1.bodyParts[i].body.setVelocityY(-260)
          scene.wrestler1.bodyParts[i].play("hurricanrana")
          scene.wrestler2.bodyParts[i].state.timeScale = .6
          scene.wrestler2.bodyParts[i].play("sell2")
        }

        scene.time.addEvent({
          delay: 500,
          callback:() =>{
            for (let i = 0; i<scene.wrestler1.bodyParts.length; i++){
              scene.wrestler1.bodyParts[i].body.setVelocityY(260)
            }
          }
        })
        
        scene.time.addEvent({
          delay: 750,
          callback:() =>{
            for (let i = 0; i<scene.wrestler1.bodyParts.length; i++){
              scene.wrestler2.bodyParts[i].body.setVelocityX(-500)
            }
          }
        })
        
        scene.time.addEvent({
          delay: 1000,
          callback:() =>{
            for (let i = 0; i<scene.wrestler1.bodyParts.length; i++){
              scene.wrestler1.bodyParts[i].body.setVelocityY(0)
              scene.wrestler2.bodyParts[i].body.setVelocityX(0)
              scene.wrestler1.bodyParts[i].setDepth(1)
              scene.wrestler2.bodyParts[i].setDepth(1)
              scene.wrestler1.performingMove = false
            }
          }
        })
      }
    }
  }

  static fourfifthy(scene){
    if(!scene.wrestler1.performingMove && (scene.wrestler1.springboard && scene.wrestler2.isDown)) {
      scene.wrestler1.performingMove = true
      for (let i = 0; i<scene.wrestler1.bodyParts.length; i++){
        scene.wrestler1.bodyParts[i].setDepth(1.1)
        scene.wrestler2.bodyParts[i].setDepth(1)
        scene.wrestler1.bodyParts[i].play("450")
        scene.wrestler2.bodyParts[i].play("idleGround2")
        scene.wrestler2.bodyParts[i].setScale(.5-i*0.01)
      }
      
      scene.time.addEvent({
        delay: 500,
        callback:() =>{
          for (let i = 0; i<scene.wrestler1.bodyParts.length; i++){
            scene.wrestler1.bodyParts[i].body.setVelocityX(200)
            scene.wrestler1.bodyParts[i].body.setVelocityY(-200)
          }
        }
      })

      scene.time.addEvent({
        delay: 1000,
        callback:() =>{
          for (let i = 0; i<scene.wrestler1.bodyParts.length; i++){
            scene.wrestler1.bodyParts[i].body.setVelocityY(250)
          }
        }
      })
      scene.time.addEvent({
        delay: 1500,
        callback:() =>{
          for (let i = 0; i<scene.wrestler1.bodyParts.length; i++){
            scene.wrestler1.bodyParts[i].body.setVelocity(0)
          }
          scene.wrestler1.performingMove = false
        }
      })
    }
  }
}
