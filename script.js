// Cria o evento do scroll 
window.addEventListener("scroll", lidarComScroll)

// Cria variável que lista todas as caixas
let caixas = document.querySelectorAll(".text-box")

//Cria função de regras do scroll
function lidarComScroll(){

    // Cria variável que retorna número de pixels do Y (topo) da rolagem do elemento
    let distanciaScrollada = window.scrollY

    //Loop que pega cada elemento da lista 'caixas'
        for (let caixa of caixas){

        //Cria variável da distância Y
        let distanciaY = caixa.getBoundingClientRect().y

        //Cria variável da base até o topo
        let distanciaDaBaseAteTopo = caixa.getBoundingClientRect().bottom

        //Condição para se a caixa for menor que a altura da base e maior que a altura do topo
        if (distanciaDaBaseAteTopo < window.innerHeight && distanciaY >0){
            //Tornar a opacidade 100%
            caixa.style.opacity = 1
        }

        //Caso contrário...
        else{
            //Opacidade volta a zero 0%
            caixa.style.opacity = 0
        }

    }




}