function toggleNavigation() {
    const navIcon = document.getElementById('nav-icon');
    if (navIcon) {
        navIcon.classList.toggle('open')
    }

    const navigation = document.getElementById('navigation')
    if (navigation) {
        navigation.classList.toggle('open')
    }
}
