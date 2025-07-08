gsap.to(".card", {
	opacity: 1,
	duration: 1,
	scale: 0.1,
	onComplete: () => {
		gsap.to(".card", {
			y: 100,
			repeat: 2,
			// scale: 2,
			duration: 0.5
			// yolo: false
		});
	}
});
