document.addEventListener("DOMContentLoaded", () => {
  // Desktop Dropdown Menus
  const dropdownTriggers = document.querySelectorAll(".dropdown-trigger")
  const dropdownContents = document.querySelectorAll(".dropdown-content")

  dropdownTriggers.forEach((trigger, index) => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation()

      // Close all other dropdowns
      dropdownTriggers.forEach((t, i) => {
        if (i !== index) {
          t.classList.remove("active")
          dropdownContents[i].classList.remove("active")
        }
      })

      // Toggle current dropdown
      trigger.classList.toggle("active")
      dropdownContents[index].classList.toggle("active")
    })
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    dropdownTriggers.forEach((trigger, index) => {
      trigger.classList.remove("active")
      dropdownContents[index].classList.remove("active")
    })
  })

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenuClose = document.querySelector(".mobile-menu-close")
  const mobileMenu = document.querySelector(".mobile-menu")

  mobileMenuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active")
    document.body.style.overflow = "hidden" // Prevent scrolling when menu is open
  })

  mobileMenuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    document.body.style.overflow = "" // Restore scrolling
  })

  // Mobile Dropdown Menus
  const mobileDropdownTriggers = document.querySelectorAll(".mobile-dropdown-trigger")
  const mobileDropdownContents = document.querySelectorAll(".mobile-dropdown-content")

  mobileDropdownTriggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {
      // Toggle current dropdown
      mobileDropdownContents[index].classList.toggle("active")

      // Rotate chevron icon
      const chevron = trigger.querySelector(".chevron")
      if (mobileDropdownContents[index].classList.contains("active")) {
        chevron.style.transform = "rotate(90deg)"
      } else {
        chevron.style.transform = ""
      }
    })
  })

  // Make sidebar items interactive
  const sidebarItems = document.querySelectorAll(".sidebar-item")

  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active class from all items
      sidebarItems.forEach((i) => i.classList.remove("active"))

      // Add active class to clicked item
      item.classList.add("active")
    })
  })
})

