function calcular(event){
    event.preventDefault();

    //let sexo = document.querySelector('#sexo').value
    let peso = document.querySelector('#peso')
    let altura = document.querySelector('#altura')
    let idade = document.querySelector('#idade')

    let total = peso / (altura * altura)   
    total = total.toFixed(2)
    
    document.querySelector('#total').innerHTML = total
    document.querySelector("#total").style.display = 'block'





}

document.querySelector('#total').style.display = 'none'
document.querySelector('#form').addEventListener('submit', calcular)
