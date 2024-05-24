function toggleMode() {
  const html = document.documentElement

  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // }else{
  //   html.classList.add("light")
  // }

  html.classList.toggle("light")
  var img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute("alt", "Avatar do Daniel Brabo")
  } else {
    img.setAttribute("src", "./assets/AvatarDark.png")
    img.setAttribute("alt", "Avatar do Daniel")
  }
}
