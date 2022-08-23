 const cardArry = []
 function display(cardproduct){
   let totalPrice = 0;
   //  console.log(cardArry);
   const tableBody = document.getElementById('card-product');
   tableBody.innerHTML = '';
   for(let i = 0; i < cardproduct.length; i++){
      // console.log(cardArry[i].productName,cardArry[i].productPrice);
      const name = cardArry[i].productName;
      const price = cardArry[i].productPrice;
      totalPrice = totalPrice + price
      const tr = document.createElement('tr');
      tr.innerHTML =`
      <th scope="row">${i+1}</th>
      <td>${name}</td>
      <td>${price}</td>
                 ` ;
      tableBody.appendChild(tr);             
   }
   const tr = document.createElement('tr');
   tr.innerHTML = 
   ` 
   <td>Total Price</td>
   <td>${totalPrice}</td>`;
   tableBody.appendChild(tr);
 }

function addToCard(element){
    // console.log(element.parentNode.parentNode.children)
    // console.log(element.parentNode.parentNode.children[0].innerText) 
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText) 
    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice =element.parentNode.parentNode.children[1].children[0].innerText;
 const productObject ={
    productName:productName,
    productPrice:parseInt (productPrice)
 }
 cardArry.push(productObject);
 document.getElementById('total-product').innerText = cardArry.length;

 display(cardArry);
}