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

function setBackgroundImageOffset(offset) {
    const main = document.getElementById('main');
    if (main) {
        main.style.backgroundPositionY = `-${offset}px`
        main.classList.add('active')
    }
}

function setParallaxEffect() {
    const scrollY = window.scrollY

    const ratio = scrollY / window.innerHeight;
    const maxOffsetHeight = 350;

    if (scrollY <= window.innerHeight) {
        const offset = scrollY - ratio * maxOffsetHeight;

        setBackgroundImageOffset(offset)
    } else {
        const offset = scrollY - maxOffsetHeight;
        setBackgroundImageOffset(offset)
    }
}

function toggleSeeMore(icon, projectId) {
    const project = document.getElementById(projectId);
    if (project) {
        const [moreInfoDiv] = project.getElementsByClassName('more-info')
        if (moreInfoDiv) {
            moreInfoDiv.classList.toggle('active');
        }
    }

    setTimeout(() => {
        if (icon.classList.contains('chevron-down')) {
            icon.classList.remove('chevron-down')
            icon.classList.add('chevron-up')
        } else {
            icon.classList.remove('chevron-up')
            icon.classList.add('chevron-down')
        }
    }, 200)
}

function setWelcome() {
    const greetings = ["Geia", "Hi", "Hola", "Salut", "Hallo", "Ciao", "Hoi", "Hej", "Merhaba", "Cześć"];

    let index = 0
    const welcome = document.getElementById('welcome');
    if (welcome) {
        setInterval(() => {
            welcome.innerText = greetings[index]
            index = (index + 1) % greetings.length
        }, 2000)
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

    window.addEventListener('scroll', (event) => {
        setParallaxEffect()
    })

    setParallaxEffect()
    setWelcome()
}
