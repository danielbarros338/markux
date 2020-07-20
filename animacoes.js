//scroll
const cabec = document.querySelectorAll(".cabecalho");
window.addEventListener("scroll", function scrollCabecalho(){
    if(window.pageYOffset > 50) {
        cabec[0].style.transition = "0.5s";
        cabec[0].style.top = "-120px";
    }else{
        cabec[0].style.transition = "0.5s";
        cabec[0].style.top = "0px";
    }
})

const banner = document.querySelectorAll(".banner");
window.addEventListener("scroll", function scrollBanner(){
    if(window.pageYOffset > 70) {
        banner[0].style.transition = "1s";
        banner[0].style.opacity = "1";
        banner[0].style.left = "0"
    }
    if(window.pageYOffset > 2093){
        banner[1].style.transition = "1.5s";
        banner[1].style.opacity = "1";
        banner[1].style.left = "0"
    }
})

console.log(window.pageYOffset)

const mux1 = document.querySelectorAll(".markuxfff");
const mux2 = document.querySelectorAll(".markuxf000");
window.addEventListener("scroll", function scrollImgs(){
    if(window.pageYOffset > 550) {
        mux1[0].style.transition = "1.5s";
        mux1[0].style.opacity = "1";
    }
    if(window.pageYOffset > 1380) {
        mux2[0].style.transition = "1.5s";
        mux2[0].style.opacity = "1";
    }
})

const empresa = document.querySelectorAll(".empresa");
const visao = document.querySelectorAll(".visao");
window.addEventListener("scroll", function scrollTxt(){
    if(window.pageYOffset >200) {
        empresa[0].style.transition = "1.5s";
        empresa[0].style.opacity = "1";
    }
    if(window.pageYOffset > 1080) {
        visao[0].style.transition = "2s";
        visao[0].style.left = "0";
        visao[0].style.opacity = "1";
    }
})

const ancora = document.querySelectorAll(".ancora");
ancora.forEach(item =>{ //"Percorrera" todos os itens
    item.addEventListener("click", function scrollPraId(event){
        event.preventDefault(); // Previne o comportamento padrao do href 
        const element = event.target; // Pega o elemento clicado
        const id = element.getAttribute('href'); // Pega os atributos href
        const to = document.querySelector(id).offsetTop; // Pega a posiçao do topo do elemento
        
        window.scroll({ //Configura meu scroll para o elemento
            top: to - 20,
            behavior: "smooth",
        })
    })
})