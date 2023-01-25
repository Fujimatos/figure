const eclate = document.querySelector(".tangram")
const boutton_eclate = document.querySelector(".boutton--eclate")
const boutton_carre = document.querySelector(".boutton--carre")
const boutton_perso = document.querySelector(".boutton--perso")



  boutton_eclate.addEventListener("click",
  function(){ 
    eclate.classList.add("tangram--eclate")
    eclate.classList.remove("tangram--square")
    eclate.classList.remove("tangram--perso")
 })
  boutton_carre.addEventListener("click",
  function(){ 
    eclate.classList.add("tangram--square")
    eclate.classList.remove("tangram--eclate")
    eclate.classList.remove("tangram--perso")

 })
  boutton_perso.addEventListener("click",
  function(){ 
    eclate.classList.add("tangram--perso")
    eclate.classList.remove("tangram--square")
    eclate.classList.remove("tangram--eclate")
  })
 


