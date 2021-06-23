(function () {
  const toggles = document.getElementsByClassName("dropdown-toggle");
  let activeToggle;
  // console.log(toggles)
  for (toggle of toggles) {
    let captureToggle = toggle;
    toggle.onclick = () => {
      // console.log(captureToggle)
      if (activeToggle && activeToggle !== captureToggle) {
        activeToggle.nextElementSibling.classList.remove("show");
      }
      activeToggle = captureToggle;
      captureToggle.nextElementSibling.classList.toggle("show");
    };
  }

  const dropdownList = document.getElementsByClassName("dropdown-list")[0];
  const handbookDropdownList =
    document.getElementsByClassName("dropdown-list")[1];
  const headerBurger = document.getElementById("header-burger");
  const handbookHeaderBurger = document.getElementById(
    "handbook-header-burger"
  );

  headerBurger.onclick = () => {
    dropdownList.classList.toggle("show");
    handbookDropdownList.classList.remove("show");
  };

  if (handbookHeaderBurger) {
    handbookHeaderBurger.onclick = () => {
      handbookDropdownList.classList.toggle("show");
      dropdownList.classList.remove("show");
    };
  }

  window.onclick = (event) => {
    if (!event.target.matches(".dropdown-toggle")) {
      // console.log("doesn't match")
      if (activeToggle) {
        activeToggle.nextElementSibling.classList.remove("show");
        activeToggle = null;
      }
    }
  };
})();
