const dolarToReal = document.querySelector("select");
const input = document.querySelector("input")
const btnEnviar = document.querySelector(".btn-enviar")
const moedaGringa = document.querySelector('.moeda-gringa span')
const moedaBr = document.querySelector('.moeda-br span');

let selectOption
dolarToReal.addEventListener('change', () => {
    selectOption = dolarToReal.options[dolarToReal.selectedIndex].value

    cotaçãoFeth(selectOption)

})


btnEnviar.addEventListener('click', e =>{
    e.preventDefault()
  cotaçãoFeth(selectOption)
})


const cotaçãoFeth = async moeda => {
    const url = `https://economia.awesomeapi.com.br/json/last/${moeda}`

    const response = await fetch(url)
    const data = response.json()
    data.then(data => {

        const cotaçãoDólarParaReal = parseFloat(data.USDBRL.ask);
        const cotaçãoRealParaDólar = parseFloat(data.BRLUSD.ask);
        

        input.addEventListener('change', () => {
            const inputValue = input.value
            const inputConvertidoReal = inputValue * cotaçãoDólarParaReal.toFixed(2)
            const valorEmReal = inputConvertidoReal.toLocaleString("pt-BR", { style: "currency", currency: "BRL"});
            moedaGringa.innerHTML = valorEmReal
            
            
            const inputConvertidoDólar = inputValue * cotaçãoRealParaDólar.toFixed(2);
            const valorEmDólar = inputConvertidoDólar.toLocaleString("pt-BR", {style: "currency", currency: "USD"});
            moedaBr.innerHTML = valorEmDólar
        })
    })
}

