let calendarioBox = document.getElementById('grade-dias')
let calendarioInfo = document.getElementById('info-mes')
let diaAtual = new Date().getDate()
let mesAtual = new Date().getMonth()
let anoAtual = new Date().getFullYear()
let inicioMes = new Date(anoAtual, mesAtual).getDay()
let diaSelecionado = null

$.getJSON('http://localhost/spworking/api/db.json',
    function(data) {
        let meses = data.meses
        let diasTotais = inicioMes + data.meses[mesAtual].dias
        calendarioInfo.innerText = data.meses[mesAtual].mes + ' de ' + anoAtual
        for(let i = 0; i < inicioMes; i++) {
            calendarioBox.innerHTML += '<div class="dia dia-vazio"></div>'
        }
        for(let i = 1; i <= data.meses[mesAtual].dias; i++) {
            if(i < diaAtual) {
                calendarioBox.innerHTML += '<div class="dia dia-block" id="dia-' + i + '">' + i + '</div>'    
            } else {
                if((i + inicioMes)%7 > 0 && (i + inicioMes - 1)%7 > 0) {
                    calendarioBox.innerHTML += '<div class="dia dia-valido" id="dia-' + i + '" onclick="escolheData(' + i + ')">' + i + '</div>'
                } else {
                    calendarioBox.innerHTML += '<div class="dia dia-block" id="dia-' + i + '">' + i + '</div>' 
                }
            }
        }
    }
)

function escolheData(value) {
    sessionStorage.setItem("dia_visita", value);
    diaSelecionado = document.getElementsByClassName("dia")
    for(let i = 0; i < diaSelecionado.length; i++) {
        if(diaSelecionado[i].id == 'dia-' + value) {
            diaSelecionado[i].style.backgroundColor = '#13837d'
            diaSelecionado[i].style.color = 'white'
        } else {
            diaSelecionado[i].style.backgroundColor = ''
            diaSelecionado[i].style.color = ''
        }
    }
}

function enviarSolicitacao() {
    let mes = new Date(document.getElementById('info-mes').innerText)
    let nome = document.getElementById('nomevisita').value
    let data = sessionStorage.getItem('dia_visita')

    $.getJSON('http://localhost/spworking/api/db.json',
        function(data) {
            data.reservas.push
            console.log(data.reservas)
        }
    )
    console.log(nome, data, mes)
}