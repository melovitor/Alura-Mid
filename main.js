function playSounds(idAudio){
    document.querySelector(idAudio).play()
}

const teclaList = document.querySelectorAll('.tecla')

let conter = 0

while (conter < teclaList.length){
    const key =  teclaList[conter]
    const instrument = key.classList[1]
    const idAudio = `#som_${instrument}`

    key.onclick = () => {
        playSounds(idAudio)
    }
    conter ++
}