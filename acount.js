const depositButton = document.getElementById("depo-btn")
const withdrawButton = document.getElementById("with-btn")


 depositButton.addEventListener("click", function(){
   
    const depositeField = document.getElementById("depositInput")
    const depositeFieldStr = depositeField.value
    const newDepostiAmount = parseFloat(depositeFieldStr)
    

    

    const depositValue = document.getElementById("depo-amount")
    const depositValueStr = depositValue.innerText
    const prevDepoValue = parseFloat(depositValueStr)

    if(depositeField.value ===""){
        depositeField.value = ""
        return;
        
    }
    
    const currentTotal = prevDepoValue + newDepostiAmount

    depositValue.innerText = currentTotal

    depositeField.value = ""

    const balance = document.getElementById("balance-amount")
    const prevBalanceStr = balance.innerText
    
    const prevBalanceValue = parseFloat(prevBalanceStr)

    const newBalanceValue = prevBalanceValue + newDepostiAmount

    balance.innerText = newBalanceValue
    


    
 })


 withdrawButton.addEventListener("click", function(){
    const withdrawInput = document.getElementById("withdrawInput")
    const withDrawStr =withdrawInput.value
    const newWithDrawAmount = parseFloat(withDrawStr)
    
    const withDrawValue = document.getElementById("with-amount")
    const withDrawValueStr = withDrawValue.innerText
    const prevWithDrawValue = parseFloat(withDrawValueStr)

    if(withdrawInput.value === ""){
        withdrawInput.value = ""
        return;
    }

    
    
    
    


    withdrawInput.value = ""

    const balance = document.getElementById("balance-amount")
    const balanceStr = balance.innerText
    const prevBalance = parseFloat(balanceStr)

    if(newWithDrawAmount > prevBalance){
        alert("You can not withdraw more than balance")
        withdrawInput.value = ""
        return;
    }
    const currentWithDrawTotal = prevWithDrawValue + newWithDrawAmount

    withDrawValue.innerText = currentWithDrawTotal
   

    const newBalanceValue = prevBalance - newWithDrawAmount

    

    balance.innerText = newBalanceValue
 })
