!(function (t) {
  function e(t) {
    this.init(t || {});
  }

  function n(t) {
    this.init(t || {});
  }

  function i(t) {
    document.removeEventListener("mousemove", i);
    document.removeEventListener("touchstart", i);
    document.addEventListener("mousemove", d);
    document.addEventListener("touchmove", d);
    document.addEventListener("touchstart", u);
    d(t);
    a();
    o();
  }

  function a() {
    w = [];
    for (var t = 0; t < E.trails; t++)
      w.push(new n({ spring: 0.45 + 0.025 * (t / E.trails) }));
  }

  function o() {
    if (f.running) {
      f.globalCompositeOperation = "source-over";
      // f.fillStyle = "rgba(8,5,16,0.4)";
      f.fillStyle = "#070818";

      f.fillRect(0, 0, f.canvas.width, f.canvas.height);
      f.globalCompositeOperation = "lighter";
      // f.strokeStyle = "hsla(" + Math.round( l.update() ) + ",90%,50%,0.25)";
      f.strokeStyle = "#322486";
      f.lineWidth = 1;
      for (var t, e = 0; e < E.trails; e++) {
        t = w[e];
        t.update();
        t.draw();
      }
      f.frame++;
      requestAnimFrame(o);
    }
  }

  function s() {
    f.canvas.width = t.innerWidth;
    f.canvas.height = t.innerHeight;
  }

  function r() {
    if (!f.running) {
      f.running = !0;
      o();
    }
  }

  function h() {
    f.running = !1;
  }

  function d(t) {
    if (t.touches) {
      x.x = t.touches[0].pageX;
      x.y = t.touches[0].pageY;
    } else {
      x.x = t.clientX;
      x.y = t.clientY;
    }
    t.preventDefault();
  }

  function u(t) {
    if (1 === t.touches.length) {
      x.x = t.touches[0].pageX;
      x.y = t.touches[0].pageY;
    }
  }

  var f,
    l,
    v,
    g,
    y,
    x = {},
    w = [],
    E = {};

  E.friction = 0.5;
  E.trails = 20;
  E.size = 50;
  E.dampening = 0.25;
  E.tension = 0.98;

  e.prototype = (function () {
    var t = 0;

    return {
      init: function (t) {
        this.phase = t.phase || 0;
        this.offset = t.offset || 0;
        this.frequency = t.frequency || 0.001;
        this.amplitude = t.amplitude || 1;
      },
      update: function () {
        return (
          (this.phase += this.frequency),
          (t = this.offset + Math.sin(this.phase) * this.amplitude)
        );
      },
      value: function () {
        return t;
      },
    };
  })();

  n.prototype = (function () {
    function t() {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
    }

    return {
      init: function (e) {
        this.spring = e.spring + 0.1 * Math.random() - 0.05;
        this.friction = E.friction + 0.01 * Math.random() - 0.005;
        this.nodes = [];
        for (var n, i = 0; i < E.size; i++) {
          n = new t();
          n.x = x.x;
          n.y = x.y;
          this.nodes.push(n);
        }
      },
      update: function () {
        var t = this.spring,
          e = this.nodes[0];
        e.vx += (x.x - e.x) * t;
        e.vy += (x.y - e.y) * t;
        for (var n, i = 0, a = this.nodes.length; a > i; i++) {
          e = this.nodes[i];
          if (i > 0) {
            n = this.nodes[i - 1];
            e.vx += (n.x - e.x) * t;
            e.vy += (n.y - e.y) * t;
            e.vx += n.vx * E.dampening;
            e.vy += n.vy * E.dampening;
          }
          e.vx *= this.friction;
          e.vy *= this.friction;
          e.x += e.vx;
          e.y += e.vy;
          t *= E.tension;
        }
      },
      draw: function () {
        var t,
          e,
          n = this.nodes[0].x,
          i = this.nodes[0].y;
        f.beginPath();
        f.moveTo(n, i);
        for (var a = 1, o = this.nodes.length - 2; o > a; a++) {
          t = this.nodes[a];
          e = this.nodes[a + 1];
          n = 0.5 * (t.x + e.x);
          i = 0.5 * (t.y + e.y);
          f.quadraticCurveTo(t.x, t.y, n, i);
        }
        t = this.nodes[a];
        e = this.nodes[a + 1];
        f.quadraticCurveTo(t.x, t.y, e.x, e.y);
        f.stroke();
        f.closePath();
      },
    };
  })();

  t.requestAnimFrame = (function () {
    return (
      t.requestAnimationFrame ||
      t.webkitRequestAnimationFrame ||
      t.mozRequestAnimationFrame ||
      function (e) {
        t.setTimeout(e, 1e3 / 60);
      }
    );
  })();

  t.onload = function () {
    f = document.getElementById("canvas").getContext("2d");
    console.log(f);
    f.running = !0;
    f.frame = 1;
    //v = new Image;
    //v.src = "https://raw.githubusercontent.com/RustamWD/lightspiral/master/images/logo.png ";
    l = new e({
      phase: 2 * Math.random() * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });
    // m( "h1" );
    document.addEventListener("mousemove", i);
    document.addEventListener("touchstart", i);
    document.body.addEventListener("orientationchange", s);
    t.addEventListener("resize", s);
    t.addEventListener("focus", r);
    t.addEventListener("blur", h);
    s();
  };
})(window);
