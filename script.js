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
  input.value = "";

})


const cotaçãoFeth = async moeda => {

    try{
        const url = `https://economia.awesomeapi.com.br/json/last/${moeda}`

        const response = await fetch(url)
        await response.json()
        .then(data => {
    
           const euro = inputValue => {
    
       if(selectOption === "EUR-BRL,BRL-EUR"){
        const cotaçãoEuroParaReal = parseFloat(data.EURBRL.ask);
        const cotaçãoRealParaEuro = parseFloat(data.BRLEUR.ask);
        
        
        inputValue = input.value
        const inputConvertidoEuroParaReal = inputValue * cotaçãoEuroParaReal.toFixed(2);
        const valorEmRealEuro = inputConvertidoEuroParaReal.toLocaleString("pt-BR", {style:"currency", currency: "BRL"});
        moedaGringa.innerHTML = valorEmRealEuro
        
        const inputConvertidoRealParaEuro = inputValue * cotaçãoRealParaEuro.toFixed(2);
        const valorEuro = inputConvertidoRealParaEuro.toLocaleString("pt-BR", {style:"currency", currency: "EUR"});
     moedaBr.innerHTML = valorEuro   
          
        }; 
    }
    
        const dólar = inputValue => {
    
         if(selectOption === "USD-BRL,BRL-USD") {
    
        const cotaçãoDólarParaReal = parseFloat(data.USDBRL.ask);
        const cotaçãoRealParaDólar = parseFloat(data.BRLUSD.ask);
                    
        
        inputValue = input.value
        const inputConvertidoDólarParaReal = inputValue * cotaçãoDólarParaReal.toFixed(2)
        const valorEmRealDólar = inputConvertidoDólarParaReal.toLocaleString("pt-BR", { style: "currency", currency: "BRL"});
        moedaGringa.innerHTML = valorEmRealDólar
                    
     const inputConvertidoRealParaDólar = inputValue * cotaçãoRealParaDólar.toFixed(2);
     const valorDólar = inputConvertidoRealParaDólar.toLocaleString("pt-BR", {style: "currency", currency: "USD"});
     moedaBr.innerHTML = valorDólar    
        };    
     };     
           
        const yeneJaponês = inputValue => {
    
            if(selectOption === "JPY-BRL,BRL-JPY") {
    
        const cotaçãoYeneParaReal = parseFloat(data.JPYBRL.ask);
        const cotaçãoRealParaYene = parseFloat(data.BRLJPY.ask);
    
    
        inputValue = input.value;
        const inputConvertidoYeneParaReal = inputValue * cotaçãoYeneParaReal.toFixed(2);
        const valorEmRealYene = inputConvertidoYeneParaReal.toLocaleString("pt-BR", {style: "currency", currency:"BRL"});
        moedaGringa.innerHTML = valorEmRealYene
    
        const inputConvertidoRealParaYene = inputValue * cotaçãoRealParaYene.toFixed(2);
        const valorYene = inputConvertidoRealParaYene.toLocaleString("pt-BR", {style:"currency", currency: "JPY"});
        moedaBr.innerHTML = valorYene
            };
        }; 
    
        
        const yuanChinês = inputValue => {
    
            if(selectOption === "CNY-BRL,BRL-CNY"){
    
               const cotaçãoYuanParaReal = parseFloat(data.CNYBRL.ask);
               const cotaçãoRealParaYuan = parseFloat(data.BRLCNY.ask);
    
    
            const inputConvertidoYuanParaReal = inputValue * cotaçãoYuanParaReal.toFixed(2);
            const valorEmRealYuan = inputConvertidoYuanParaReal.toLocaleString("pt-BR", {style: "currency", currency:"BRL"});
            moedaGringa.innerHTML = valorEmRealYuan;
                
            const inputConvertidoRealParaYuan = inputValue * cotaçãoRealParaYuan.toFixed(2);
            const valorYuan = inputConvertidoRealParaYuan.toLocaleString("pt-BR", {style: "currency", currency:"CNY"});
            moedaBr.innerHTML = valorYuan 
            };
        };
    
        const rubloRusso = inputValue => {
           if(selectOption === "RUB-BRL,BRL-RUB"){
    
            const cotaçãoRubloParaReal = parseFloat(data.RUBBRL.ask);
            const cotaçãoRealParaRublo = parseFloat(data.BRLRUB.ask);
    
            
           const inputConvertidoRubloParaReal = inputValue * cotaçãoRubloParaReal.toFixed(2);
           const valorEmRealRublo = inputConvertidoRubloParaReal.toLocaleString("pt-BR", {style:"currency", currency: "BRL"});
           moedaGringa.innerHTML = valorEmRealRublo;
    
           const inputConvertidoRealParaRublo = inputValue * cotaçãoRealParaRublo.toFixed(2);
           const valorRublo = inputConvertidoRealParaRublo.toLocaleString("pt-BR", {style:"currency", currency:"RUB"});
           moedaBr.innerHTML = valorRublo;
    
           };
        };
    
        const pesoArgentino = inputValue => {
            if(selectOption === "ARS-BRL,BRL-ARS") {
    
        const cotaçãoPesoArgentinoParaReal = parseFloat(data.ARSBRL.ask);
        const cotaçãoRealParaPesoArgentino = parseFloat(data.BRLARS.ask);
    
    
        const inputConvertidoPesoArgentinoParaReal = inputValue * cotaçãoPesoArgentinoParaReal.toFixed(2);
        const valorEmRealPesoArgentino = inputConvertidoPesoArgentinoParaReal.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
        moedaGringa.innerHTML = valorEmRealPesoArgentino;
         
        const inputConvertidoRealParaPesoArgentino = inputValue * cotaçãoRealParaPesoArgentino.toFixed(2);
        const valorPesoArgentino = inputConvertidoRealParaPesoArgentino.toLocaleString("pt-BR", {style:"currency", currency:"ARS"});
        moedaBr.innerHTML = valorPesoArgentino;
            };
        };
    
    
         input.addEventListener('change', () => {
            const inputValue = input.value
            dólar(inputValue);
          euro(inputValue);
          yeneJaponês(inputValue);
          yuanChinês(inputValue);
          rubloRusso(inputValue);
          pesoArgentino(inputValue);
         
         });
          
      });
    }catch(e){
        alert(`ERRO: ${e}`)
    };
    
};

