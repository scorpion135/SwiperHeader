function mobileNav() {
	// Mobile nav button
	const navBtnOpen = document.querySelector('#modalOpen');
	const navBtnClose = document.querySelector('#modalClose');
	const navOverlay = document.querySelector('.mobile-nav-overlay');
	const mobileNav = document.querySelector('.mobile-nav');

	function toggleMobileNav() {
		navOverlay.classList.toggle('mobile-nav-overlay--open');
		mobileNav.classList.toggle('mobile-nav--open');
		document.body.classList.toggle('no-scroll');
	}

	navBtnOpen.onclick = toggleMobileNav

	navBtnClose.onclick = toggleMobileNav

	navOverlay.onclick = toggleMobileNav
}

export default mobileNav;

