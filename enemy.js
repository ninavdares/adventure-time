var enemy = {
  x: 300,
  y:300,
  sprites: [document.getElementById("enemyf1"),
],

  spriteNum: 0,
  update: function(){
    var a = (this.x-player.x)*(this.x-player.x);
    var b = (this.y-player.y)*(this.y-player.y);
    var dist = Math.sqrt(a+b);
    if (dist < 10){
      player.dead = true;
    }
    if (this.x < player.x){
      this.x = this.x +3;
    }
    if (this.x > player.x){
      this.x = this.x -3;
    }
    if (this.y <player.y){
      this.y = this.y +3;
    }
    if (this.y >player.y){
      this.y = this.y -3;
    }


  },
  render: function(){
    ctx.drawImage(this.sprites[this.spriteNum], this.x, this.y, 50, 80);
  }
};
