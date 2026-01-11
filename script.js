"use strict";

const toggle =() =>{
  const htmlTag = document.documentElement;
  const toggle =document.getElementById("toggleTheme");

  toggle.addEventListener("click",()=>{
    const currentTheme = htmlTag.getAttribute("data-theme");

    if( currentTheme ==="dark"){
      htmlTag.setAttribute("data-theme","light");
    }
    else{
      htmlTag.setAttribute("data-theme","dark");
    }
  })
}
toggle();