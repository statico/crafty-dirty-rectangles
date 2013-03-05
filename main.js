window.onload = function() {
  var i, W = 800, H = 600, S = 256, S2 = S/2;

  Crafty.init(W, H);
  Crafty.background('white');
  Crafty.sprite(S, 'sprite.png', { square: [0, 0] });

  var entities = [];
  for (i = 0; i < 20; i++) {
    entities.push(Crafty.e("2D, Canvas, square")
      .attr({
        x: W * Math.random() - S2,
        y: H * Math.random() - S2,
        vx: Math.random() * 2 > 1 ? 1 : -1,
        vy: Math.random() * 2 > 1 ? 1 : -1
      }));
  }

  for (i = 0; i < 5; i++) {
    entities[i].attr({ z: 100 }).bind('EnterFrame', function() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x > W-S2 || this.x < -S2) this.vx *= -1;
      if (this.y > H-S2 || this.y < -S2) this.vy *= -1;
    });
  }

};
