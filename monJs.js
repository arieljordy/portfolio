let form = document.getElementsByTagName("form")[0]
let objet = document.getElementById("objet")
let nom = document.getElementById("nom")
// console.log(form.email);
function supprimeChar(str){
    let res = str.replace(/--|- | -|  |²|&|"|#|'|{|\(|\||_|\\|\^|@|]|\[|\)|°|}|\+|=|,|\?|;|\.|:|\/|!|§|\$|¤|£|\*|µ|%|<|>|0|1|2|3|4|5|6|7|8|9|¿|¡|ʺ|˅|`|\^|¨|¥|©|˭|¢͚͟͡͠|™|ʿ|ˀ|ˁ|ˉ|®|0|1|2|3|4|5|6|7|8|9|true|false|"true"|"false"/g, '');
    return res;
}
form.addEventListener("submit",(stop)=>{
    stop.preventDefault()
    if(nom.value===supprimeChar(nom.value)){
        const div=document.getElementById("nav-toggle").nextElementSibling
        div.className="alert alert-success alert-dismissible fade show"
        div.innerHTML=`
        <strong>Bravo! </strong> ${nom.value}, Votre méssage a été envoyé avec succès.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>       
        `
        setTimeout(()=>{
            form.submit()
        },5000)
    }else{
        const divErr=document.getElementById("nav-toggle").nextElementSibling.nextElementSibling
        divErr.className="alert alert-warning alert-dismissible fade show"
        divErr.innerHTML=`
            <strong>Erreur! </strong> une érreur est survenue, veuillez réessayer dans un instant.<br>
            Formulaire non envoyé. Le nom ne doit pas contenir des caractères spéciaux!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `
    }
})