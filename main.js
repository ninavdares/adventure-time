var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

/*ctx.fillRect(50, 100, 300, 85);
ctx.fillStyle = "#FF0000";
ctx.fillRect( 20, 200, 200, 250);
ctx.fillRect( 20, 20, 40, 20);
ctx.fillStyle = "#888888";
ctx.fillRect( 250, 20, 40, 20);*/

var background = document.getElementById("background")

function animate(){
    ctx.drawImage(background, 0, 0)
    if (player.dead){
      //alert("You suck!");
      window.location.href = "index.html";
      return;
    }
    player.update();
    player.render();
    enemy.update();
    enemy.render();
    window.requestAnimationFrame(animate);
}


animate();
