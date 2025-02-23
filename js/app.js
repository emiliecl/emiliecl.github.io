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

function setActiveProject(index) {
    const projectIndicator = document.getElementById('project-indicator');
    const children = projectIndicator.children

    let childIndex = 0;
    for (const child of children) {
        if (index === childIndex) {
            child.classList.add('active');
        } else {
            child.classList.remove('active');
        }

        childIndex += 1
    }
}

window.onload = () => {
    const projectsSection = document.getElementById('projects');
    const sections = projectsSection.getElementsByTagName('article').length;

    const projectIndicator = document.getElementById('project-indicator');
    for (let index = 0; index < sections; index++) {
        const indicator = document.createElement('div')

        projectIndicator.appendChild(indicator)
    }

    projectIndicator.style.gridTemplateColumns = '1fr '.repeat(sections)
    setActiveProject(0)

    const articleContainer = document.getElementById('article-container');
    articleContainer.addEventListener('scroll', (event) => {
        const ratio = articleContainer.scrollLeft / articleContainer.scrollWidth
        const activeSectionIndex = Math.round(ratio * sections)

        setActiveProject(activeSectionIndex);
    })
}
