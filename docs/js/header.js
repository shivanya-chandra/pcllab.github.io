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
  const headerBurger = document.getElementById("header-burger");
  headerBurger.onclick = () => {
    dropdownList.classList.toggle("show");
  };

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