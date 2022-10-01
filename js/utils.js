// switch between tabs
export function switchTabs() {
  const activePage = location.pathname
  const navLinks = document.querySelectorAll('nav a').forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.parentNode.classList.add('tab-item--current')
    }
  })
  console.log(activePage)
}

// search functionality

// fetch weather functionality

// local storage functionality
