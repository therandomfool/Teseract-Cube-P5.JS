let r = 0;
let angle = 0;
let art

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  art = createGraphics(400, 400)
}

function draw() {
  background(20,50,225);
  push()
  for (let i = 0; i < width - 50; i += 50) {
    art.noFill()
    art.stroke(r + angle, mouseY, i*6)
    art.strokeWeight(10)
    r += .5
    art.rect(i, i, r + i, r + i)

    if (r > width || r < 0 || r > height || r < 0) {
      r = 0
    }
  }
  pop()

  push()
  noStroke();
  rotateX(angle)
  rotateY(angle)
  rotateZ(angle)
  texture(art)
  box(150)
  pop()
  angle += 0.003

}
