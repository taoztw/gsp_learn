import gsap from "gsap";

const showToastLoop = () => {
	gsap.to(".toast", {
		y: -120,
		opacity: 1,
		scale: 1,
		duration: 0.8,
		ease: "power4.out",
		onComplete: () => {
			gsap.to(".toast", {
				delay: 1.5,
				opacity: 0,
				scale: 0.95,
				ease: "power4.in"
			});
		}
	});
};

showToastLoop();
