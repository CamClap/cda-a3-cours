// var button= document.querySelector('button')
// button.addEventListener('click', ajouterCommentaire)

// function ajouterCommentaire() {
//     var commentaire = document.querySelector('#commentaire')
//     var comments = document.querySelector('#comments')
//     // comments.innerHTML += `<p>${commentaire.value} </p>`
//     var p = document.createElement('p')
//     p.innerHTML = commentaire.value
//     comments.appendChild(p)
//     commentaire.value = ''
// }

var button = document.querySelector('button')
button.addEventListener('click',  () => {
    var commentaire = document.querySelector('#commentaire')
    var comments = document.querySelector('#comments')
    // comments.innerHTML += `<p>${commentaire.value} </p>`
    var p = document.createElement('p')
    p.innerHTML = commentaire.value
    comments.appendChild(p)
    commentaire.value = ''
})
var somme = (a = 0, b = 0) => a + b
var somme =  (a = 0, b = 0) => { //ouvre accolade tu dois mettre return
    var resultat = a + b
    return resultat
}
// var somme = function (a = 0, b = 0) {
//     // function somme(a=0, b=0) {
//     return a + b
// }
// function somme(a=0, b=0) {
//     return a + b
// }
console.log(somme());
console.log(somme(2));
console.log(somme(2, 3));