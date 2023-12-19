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

    key.onkeydown = (e) => {
        if( e.code === 'Enter' || e.code === 'Space'){
            key.classList.add('ativa')
        }
    }

    key.onkeyup = (e) => {
        if( e.code === 'Enter' || e.code === 'Space'){
            key.classList.remove('ativa')
        }
    }

}
