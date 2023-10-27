var gras = document.querySelector('button:first-child')
var italic = document.querySelector('button:nth-child(2)')
var underline = document.querySelector('button:nth-child(3)')
var clear = document.querySelector('button:last-child')
var p = document.querySelector('p')

gras.addEventListener('click', () => {
    if (p.style.fontWeight == 'bold') {
        p.style.fontWeight = 'normal'
    }  else {
        p.style.fontWeight = 'bold'
    }
})

italic.addEventListener('click', () => {
    if (p.style.fontStyle == 'italic') {
        p.style.fontStyle = 'normal'
    }  else {
        p.style.fontStyle = 'italic'
    }
})

underline.addEventListener('click', () => {
    if (p.style.textDecoration == 'underline') {
        p.style.textDecoration = 'none'
    }  else {
        p.style.textDecoration = 'underline'
    }
})
clear.addEventListener('click', () => {
        p.style.textDecoration = 'none'
        p.style.fontStyle = 'normal' 
        p.style.fontWeight = 'normal' 

})