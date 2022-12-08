let navBar = document.querySelector(".navbar"),
  openBtn = document.querySelector(".open_btn"),
  closeBtn = document.querySelector(".close_btn");
  
openBtn.addEventListener('click', () => {
  navBar.classList.add("open_menu");
});

closeBtn.addEventListener("click", () => {
  navBar.classList.remove("open_menu");
});
