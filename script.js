
function printMousePos(event) {
  x = event.clientX - 10;
  y = event.clientY - 10;
  m = (h - y) / Math.sqrt(3);
  a = 1 - (x + m) / w;
  b = 1 - y/h;
  c = 1 - (w - x + m) / w;
	display();
}

function display() {
  out.innerHTML =
    "x: " + x + "<br>" +
    "y: " + y + "<br>" +
    "szeri szeri lejdi: " + a + "<br>" +
    "jomaha: " + b + "<br>" +
    "siubidubidubi: " + c + "<br>";
}

function init() {
  w = 500;
  h = 500 * Math.sqrt(3) / 2;
	x = w;
	y = 0;
	a = 0;
	b = 0;
	c = 1;
	display();
  box = document.getElementById("box");
  out = document.getElementById("out");
  box.addEventListener("click", printMousePos, false);
}

window.onload = init;
