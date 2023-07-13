const form = document.getElementById("todo");
form.addEventListener("submit", function(event){event.preventDefault();
   let transactionFormData = new FormData(form);
   let transactionTableRef = document.getElementById("tablasil")
   let newTransactionRow = transactionTableRef.insertRow(-1);

   let newTypeCellRef = newTransactionRow.insertCell(0);
   newTypeCellRef.textContent= transactionFormData.get("fab") 

   newTypeCellRef = newTransactionRow.insertCell(1);
   newTypeCellRef.textContent= transactionFormData.get("fabricacion")+"mm";

   newTypeCellRef = newTransactionRow.insertCell(2);
   newTypeCellRef.textContent= transactionFormData.get("trans")

   newTypeCellRef = newTransactionRow.insertCell(3);
   newTypeCellRef.textContent= transactionFormData.get("anio")

   newTypeCellRef = newTransactionRow.insertCell(4);
   newTypeCellRef.textContent= transactionFormData.get("costodefab")+"dlls"

   newTypeCellRef = newTransactionRow.insertCell(5);
   newTypeCellRef.textContent= transactionFormData.get("lito") 

   newTypeCellRef = newTransactionRow.insertCell(6);

   if(transactionFormData.get("fab")=="Samsung"){
       newTypeCellRef.textContent= "Corea del Sur"
   }
   if(transactionFormData.get("fab")=="TSMC"){
       newTypeCellRef.textContent= "China"
   }
   if(transactionFormData.get("fab")=="Intel"){
       newTypeCellRef.textContent= "Estados Unidos"
   }

   newTypeCellRef = newTransactionRow.insertCell(7);
   newTypeCellRef.textContent= "300mm"

   newTypeCellRef = newTransactionRow.insertCell(8);
   var v;
   v = transactionFormData.get("fabricacion")*transactionFormData.get("fabricacion");
   newTypeCellRef.textContent= Math.floor((22500*Math.PI)/v)

   newTypeCellRef = newTransactionRow.insertCell(9);
   var v;
   var v1;
   v = transactionFormData.get("fabricacion")*transactionFormData.get("fabricacion");
   newTypeCellRef.textContent= Math.floor((50/(70686/v))*100)+"%"

   newTypeCellRef = newTransactionRow.insertCell(10);
   newTypeCellRef.textContent= Math.floor(((50/(70686/v))*100)/10)+"%";

   newTypeCellRef = newTransactionRow.insertCell(11);
   newTypeCellRef.textContent= transactionFormData.get("stock");

   transactionFormData.get("fabri");
   })