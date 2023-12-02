function playSoundPom(){
    document.querySelector('#som_tecla_pom').play()
}

const teclaList = document.querySelectorAll('.tecla')

let conter = 0

while (conter < teclaList.length){
    teclaList[conter].onclick = playSoundPom
    conter ++
}