let dolar = 5.1                          //sem requisição da cotação atual
let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", ()=> {
convert("usd-to-brl")
})
brlInput.addEventListener("keyup", ()=> {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur",() =>{
    usdInput.value=formatcurrency(usdInput.value)
})
brlInput.addEventListener("blur", () => {
    brlInput.value=formatcurrency(brlInput.value)
})

usdInput.value="1000,00"
convert("usd-to-brl")

//funções
function formatcurrency(value){
  let fixedvalue=fixValue(value)           //ajustar o valor 
  let options={                         
    useGrouping:false,
    minimunFractionDigits:2               
  }     // ultilizar a função de formatar
  let formatter=new Intl.NumberFormat("pt-br", options)    
    return formatter.format(fixedvalue)  //retorma o valor formatado

}

function fixValue(value){
    let fixedvalue=value.replace(",",".") // troca virgula por ponto
    let floatvalue=parseFloat(fixedvalue) //transforma em numero 
    if(floatvalue==NaN){
        floatvalue=0
    }
    return floatvalue
}




function convert (type){    
if(type == "usd-to-brl"){
    //ajustar o valor (pega a virgula e troca pelo ponto)
    let fixedvalue=fixValue(usdInput.value)                             
    let result=fixedvalue*dolar       //converter o valor
    result= result.toFixed(2)
    brlInput.value=formatcurrency(result) //mostra no campo de real
                                        
                                        
    }
if (type=="brl-to-usd"){
     let fixedvalue=fixValue(brlInput.value)    

    let result=fixedvalue / dolar
    result= result.toFixed(2)  //converter o valor

    usdInput.value=formatcurrency(result) //mostra no campo de dolar                      
                                        
    }
}