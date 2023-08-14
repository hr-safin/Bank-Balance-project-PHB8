const depositButton = document.getElementById("depo-btn")
const withdrawButton = document.getElementById("with-btn")

depositButton.addEventListener("click",function(){
    
    const depositeField = document.getElementById("depositInput")
    let depositeFieldAmount = depositeField.value
    let newDepoFieldInput = parseFloat(depositeFieldAmount)

    if(isNaN(newDepoFieldInput)){
        alert("Please provide valid number")
        depositeField.value = ""
        return
    }

    const depoAmount = document.getElementById("depo-amount")
    let depo = depoAmount.innerText
   let previousAmount = parseFloat(depo)

    const currentTotal = previousAmount + newDepoFieldInput

    const balance = document.getElementById("balance-amount")
    let balanceValue = balance.innerText
    let newBalance = parseFloat(balanceValue)

    let newBalanceTotal = newBalance + newDepoFieldInput
    
    depoAmount.innerText = currentTotal
    balance.innerText = newBalanceTotal
    depositeField.value = ""
   
})


withdrawButton.addEventListener("click", function(){
   const withdrawField = document.getElementById("withdrawInput")
   let withdrawFieldAmount = withdrawField.value
   let newWithdrawField = parseFloat(withdrawFieldAmount)

   if(isNaN(newWithdrawField)){
    alert("Please provide valid number")
    withdrawField.value = ""
    return;
   }

   const withdraw = document.getElementById("with-amount")
   const withdrawAmount = withdraw.innerText
   const prevWithdraw = parseFloat(withdrawAmount)

   

   const balance = document.getElementById("balance-amount")
   let balanceValue = balance.innerText
   let newBalance = parseFloat(balanceValue)

   let newBalanceTotal = newBalance - newWithdrawField
   if(newWithdrawField > newBalance){
    alert("can not withdraw more than balance")
    withdrawField.value = ""
    return
   }

   const currentTotal = prevWithdraw + newWithdrawField
   withdraw.innerText = currentTotal
   
   balance.innerText = newBalanceTotal
   

   withdrawField.value = ""

   
})