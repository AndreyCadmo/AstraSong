function formatarData(input) { /* FORMATANDO INPUT NASCIMENTO PARA COLOCAR A / NO LUGAR CERTO */
    let valor = input.value.replace(/\D/g, '');

    if (valor.length > 2) {
        valor = valor.substring(0, 2) + '/' + valor.substring(2);
    }
    if (valor.length > 5) {
        valor = valor.substring(0, 5) + '/' + valor.substring(5, 9);
    }
    input.value = valor;
}

function formatarTelefone(input) {
    let valor = input.value.replace(/\D/g, '');
    let padrao = /(\d{2})(\d{1,5})(\d{1,4})/; 
    
    if (valor.length > 10) { 
        input.value = valor.replace(padrao, '($1) $2-$3');
    } else {
        input.value = valor.replace(padrao, '($1) $2-$3');
    }
}

var playingMusic = null;

function playMusic(id) {
  var audio = document.getElementById(id);
  var button = document.querySelector('[onclick="playMusic(\'' + id + '\')"]');
  
  if (playingMusic && playingMusic !== audio) {
    var previousButton = document.querySelector('[onclick="playMusic(\'' + playingMusic.id + '\')"]');
    previousButton.textContent = 'PLAY';
    playingMusic.pause();
    playingMusic.currentTime = 0;
  }

  if (audio.paused) {
    audio.play();
    button.textContent = 'PAUSE';
    playingMusic = audio;
  } else {
    audio.pause();
    audio.currentTime = 0;
    button.textContent = 'PLAY';
    playingMusic = null;
  }
}

let listaClonada = null;

function formulario(id) {
    const form = document.getElementById('form');
    const plans = document.getElementById('plans');
    const lista = document.getElementById(id);
    const destino = document.getElementById('selectPlan');

    if (form.style.display === 'none') {
        form.style.display = 'flex';
        plans.style.display = 'none';
        
        if (listaClonada) {
            listaClonada.remove();
        }

        listaClonada = lista.cloneNode(true);
        listaClonada.id = 'clonada'; 
        destino.appendChild(listaClonada);

    } else {
        form.style.display = 'none';
        plans.style.display = 'flex';
        
        if (listaClonada) {
            listaClonada.remove();
            listaClonada = null; 
        }
    }
}
