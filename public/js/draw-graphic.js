var Point = Isomer.Point;
var Path = Isomer.Path;
var Shape = Isomer.Shape;
var Vector = Isomer.Vector;
var Color = Isomer.Color;

var iso = new Isomer(document.getElementById("engage"));

for (x = 0; x < 10; x++) {
  iso.add(new Path([
    new Point(x, 0, 0),
    new Point(x, 10, 0),
    new Point(x, 0, 0)
  ]), new Color(50, 60, 160));
}
for (y = 0; y < 10; y++) {
  iso.add(new Path([
    new Point(0, y, 0),
    new Point(10, y, 0),
    new Point(0, y, 0)
  ]), new Color(50, 60, 160));
}

iso.add(new Path([
  Point.ORIGIN,
  new Point(0, 0, 10),
  Point.ORIGIN
]), new Color(160, 50, 60));

var red = new Color(160, 60, 50);
var blue = new Color(50, 60, 160);
var yellow = new Color(0, 128, 0)

iso.add(Shape.Prism(Point.ORIGIN, 3, 5, 1));
iso.add(Shape.Prism(Point(2, 4, 1), 1, 1, 3), yellow);
iso.add(Shape.Prism(Point(1, 4, 1), 1, 1, 2), yellow);
iso.add(Shape.Prism(Point(0, 4, 1), 1, 1, 1), yellow);
iso.add(Shape.Pyramid(Point(0, 1, 1), 3, 3, 3), red);
iso.add(Shape.Prism(Point(2, 0, 1), 1, 1, 3), blue);
iso.add(Shape.Prism(Point(1, 0, 1), 1, 1, 2), blue);
iso.add(Shape.Prism(Point(0, 0, 1), 1, 1, 1), blue);