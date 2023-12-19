function playSounds(idAudio){
    document.querySelector(idAudio).play()
}

const teclaList = document.querySelectorAll('.tecla')

for (let conter = 0; conter < teclaList.length; conter ++){

    const key =  teclaList[conter]
    const instrument = key.classList[1]
    const idAudio = `#som_${instrument}`

    key.onclick = () => {
        playSounds(idAudio)
    }

}
