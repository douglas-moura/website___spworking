let calendarioBox = document.getElementById('grade-dias')
let calendarioInfo = document.getElementById('info-mes')
let diaAtual = new Date().getDate()
let mesAtual = new Date().getMonth()
let anoAtual = new Date().getFullYear()
let inicioMes = new Date(anoAtual, mesAtual).getDay()

$.getJSON('http://localhost/spworking/api/db.json',
    function(data) {
        let diasTotais = inicioMes + data.meses[mesAtual].dias
        console.log(diasTotais)
        calendarioInfo.innerText = data.meses[mesAtual].mes + ' de ' + anoAtual
        for(let i = 0; i < inicioMes; i++) {
            calendarioBox.innerHTML += '<div class="dia dia-vazio"></div>'
        }
        for(let i = 1; i <= data.meses[mesAtual].dias; i++) {
            if(i < diaAtual) {
                calendarioBox.innerHTML += '<div class="dia dia-block">' + i + '</div>'    
            } else {
                if((i + inicioMes)%7 > 0 && (i + inicioMes - 1)%7 > 0) {
                    calendarioBox.innerHTML += '<div class="dia dia-valido">' + i + '</div>'
                } else {
                    calendarioBox.innerHTML += '<div class="dia dia-block">' + i + '</div>' 
                }
            }
        }
    }
);


