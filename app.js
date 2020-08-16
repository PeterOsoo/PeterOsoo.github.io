const topLink = document.querySelector(".top-link")

window.addEventListener("scroll", () => {
	const scrollHeight = window.pageYOffset

	if (scrollHeight > 490) {
		topLink.classList.add("show-link")
	} else {
		topLink.classList.remove("show-link")
	}
})
