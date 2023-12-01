function playSoundPom(){
    document.querySelector('#som_tecla_pom').play()
}

const teclaList = document.querySelectorAll('.tecla')

teclaList[0].onclick = playSoundPom