import gsap from "gsap";

const animation = gsap.to(".box", {
	opacity: 1,
	rotation: 360,
	borderRadius: "50%",
	scale: 1.25,
	duration: 2
	// repeat: 2,
	// yoyo: true
});

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");
const repeat = document.querySelector(".repeat");

play.addEventListener("click", () => {
	animation.play();
});
pause.addEventListener("click", () => {
	animation.pause();
});

restart.addEventListener("click", () => {
	animation.restart();
});

reverse.addEventListener("click", () => {
	animation.reverse();
});

repeat.addEventListener("click", () => {
	animation.repeat(2);
});

yoyo.addEventListener("click", () => {
	animation.yoyo(true);
});
