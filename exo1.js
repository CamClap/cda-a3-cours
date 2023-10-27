var texte=document.querySelector('p')
var gras= document.querySelector('#gras')
gras.addEventListener("click", ()=>{
  texte.style.fontWeight="bold"
})
var italic= document.querySelector('#italic')
italic.addEventListener("click", ()=>{
  texte.style.fontStyle="italic"
})
var surligne= document.querySelector('#surligne')
surligne.addEventListener("click", ()=>{
  texte.style.textDecoration="underline"
})
var clear= document.querySelector('#clear')
clear.addEventListener("click", ()=>{
  texte.style.textDecoration=""
  texte.style.fontWeight=""
  texte.style.fontStyle=""
})
