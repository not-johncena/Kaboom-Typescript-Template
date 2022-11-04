import kaboom from "kaboom";

kaboom({
	width: 640,
	height: 480,
	stretch: false,
	letterbox: true,
	background: [200, 200, 200]
});

loadSprite("mark", "sprites/mark.png");

add([
	text("Hello! To get started,\nread the README."),
	scale(1, 1),
]);

add([
	sprite("mark"),
	scale(5, 5),
	pos(320, 240),
]);