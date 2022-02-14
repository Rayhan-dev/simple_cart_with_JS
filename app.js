function updateProductNumbers(buttonId,input_field,isIncresing,priceId,price){
    document.getElementById(buttonId).addEventListener('click',function(){
        let productQuantity = parseInt(document.getElementById(input_field).value);
        if(isIncresing){
            productQuantity=productQuantity+1;
            document.getElementById(input_field).value=productQuantity;
        }else if(isIncresing==false && productQuantity>0){
            productQuantity=productQuantity-1;
            document.getElementById(input_field).value=productQuantity;
        }
            let  totalPrice = productQuantity*price;
            document.getElementById(priceId).innerText=totalPrice;
        totals();
    })
}
function totals(){
   let phoneCost = parseInt(document.getElementById('phonePrice').innerText);
   let caseCost = parseInt(document.getElementById('casePrice').innerText);
   let subtotal=phoneCost+caseCost;
   document.getElementById('subTotal').innerText=subtotal;
   document.getElementById('tax').innerText = parseInt(subtotal*(10/100));
   document.getElementById('finalCost').innerText= subtotal+parseInt(document.getElementById('tax').innerText);
}
updateProductNumbers('phone_plus','phone_quantity',true,'phonePrice',1219);
updateProductNumbers('phone_minus','phone_quantity',false,'phonePrice',1219);
updateProductNumbers('case_plus','case_quantity',true,'casePrice',59);
updateProductNumbers('case_minus','case_quantity',false,'casePrice',59);


