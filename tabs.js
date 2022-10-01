export function tabs(contentWrapperSelector, triggerSelector, contentSelector, activeClass) {
	const TABS_ELEMENTS = {
		TRIGGER: document.querySelectorAll(triggerSelector),
		CONTENT: document.querySelectorAll(contentSelector),
		CONTENT_WRAPPER: document.querySelector(contentWrapperSelector),
	}

	const hideContent = () => {
		TABS_ELEMENTS.CONTENT.forEach(item => {
			item.style.display = 'none'
			item.style.opacity = '0'
		})
	}

	const showContent = (i = 0) => {
		const animationSpeed = 150
		TABS_ELEMENTS.CONTENT[i].style.display = 'block'

		setTimeout(() => {
			TABS_ELEMENTS.CONTENT[i].style.opacity = '1'
		}, animationSpeed)
	}

	const removeActiveClass = () => {
		TABS_ELEMENTS.TRIGGER.forEach(item => {
			item.classList.remove(activeClass)
		})
	}

	const addActiveClass = (i = 0) => {
		TABS_ELEMENTS.TRIGGER[i].classList.add(activeClass)
	}

	removeActiveClass()
	hideContent()
	addActiveClass()
	showContent()

	TABS_ELEMENTS.TRIGGER.forEach((item, i) => {
		item.addEventListener('click', () => {
			const isTabbAlreadyActive = item.classList.contains(activeClass)

			if(isTabbAlreadyActive) return
			removeActiveClass()
			hideContent()
			addActiveClass(i)
			showContent(i)
		})
	})
}