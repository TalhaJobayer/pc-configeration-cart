function getMemoryInput(price){
    const showAmmount= document.getElementById("memory-cost");
    const totalmemory=showAmmount.innerText;
    showAmmount.innerText=parseInt(totalmemory)+price;
    document.getElementById("memory-cost").innerText=showAmmount.innerText;
    finalAmmount();

    return showAmmount.innerText;

}
document.getElementById('sixteenGB').addEventListener('click',function(){
    getMemoryInput(300)
    
 
})
document.getElementById('eightGB').addEventListener('click',function(){
    getMemoryInput(500)
 
})
// =================delivery==========
function getDeliveryInput(cost){
    let showDeliveryAmmount= document.getElementById('delivery-cost');
    const totalDelivery=showDeliveryAmmount.innerText;
    showDeliveryAmmount.innerText=parseInt(totalDelivery)+cost;
   
    document.getElementById('delivery-cost').innerText=showDeliveryAmmount.innerText;
    finalAmmount();
    return showDeliveryAmmount.innerText;
}
document.getElementById('paid-delivery').addEventListener('click',function(){
    getDeliveryInput(20);
  
})
document.getElementById('free-delivery').addEventListener('click',function(){
    getDeliveryInput(10);
  
})
// =====================ssd=======
function getSSDInput(money){
    const showStorageAmmount= document.getElementById('storage-cost');
    const totalStorageAmmount=showStorageAmmount.innerText;
    showStorageAmmount.innerText=parseInt(totalStorageAmmount)+money;
    console.log(showStorageAmmount.innerText);
    document.getElementById('storage-cost').innerText=showStorageAmmount.innerText;
    finalAmmount();

}
document.getElementById('ssd2').addEventListener('click',function(){
    getSSDInput(500);
  
})
document.getElementById('ssd3').addEventListener('click',function(){
    getSSDInput(700);
    
  
})
document.getElementById('ssd1').addEventListener('click',function(){
    getSSDInput(900);
    
})
// total===========
function getTotal(clickid){
    let totalMoney=document.getElementById(clickid)
let totalMoneyText=totalMoney.innerText;
totalMoney.innerText=parseInt(totalMoney.innerText)
return totalMoney.innerText;


}
function finalAmmount(){
   const memoryTotal=getTotal("memory-cost")
   const storageToatal=getTotal("storage-cost")
   const deliveryTotal=getTotal("delivery-cost")
    let total=parseFloat(memoryTotal)+parseFloat(storageToatal)+parseFloat(deliveryTotal);
    let allTotal= document.getElementById("total-price");
      allTotal.innerText=total;
      

    
}

        
      document.getElementById('apply-btn').addEventListener('click',function(){
        let promoCode=document.getElementById('promo-input').value;
        
        if(  promoCode == 123){
            
           let offerPrice=document.getElementById('total-price')
           let offerPriceText=offerPrice.innerText;
           let offerCalculation=parseFloat(offerPriceText);
           offerPrice.innerText=offerCalculation-offerCalculation*.2;
           console.log(offerPrice.innerTextText);
           document.getElementById('applied-text').style.display= 'block';
           document.getElementById('hoini').style.display= 'none';
        console.log("hoise");
             
        }
        else{
            document.getElementById('hoini').style.display= 'block';
           document.getElementById('applied-text').style.display= 'none';
        console.log("hoini");
        }
        
    })


