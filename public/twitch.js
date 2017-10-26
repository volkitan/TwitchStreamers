function showAll() {
  let titleDivs = document.getElementsByClassName("title");
  for(let i = 0; i < titleDivs.length; i++) {
    titleDivs[i].parentNode.classList.remove("disable");
  }
}


function showOnline() {
    let titleDivs = document.getElementsByClassName("title");
    for(let i = 0; i < titleDivs.length; i++) {
      if(titleDivs[i].innerHTML === "Channel is offline") {
        titleDivs[i].parentNode.classList.add("disable");
      } else {
        titleDivs[i].parentNode.classList.remove("disable");
      }
    }
}

function showOffline() {
  let titleDivs = document.getElementsByClassName("title");
  for(let i = 0; i < titleDivs.length; i++) {
    if(titleDivs[i].innerHTML === "Channel is offline") {
      titleDivs[i].parentNode.classList.remove("disable");
    } else {
      titleDivs[i].parentNode.classList.add("disable");
    }
  }
}
