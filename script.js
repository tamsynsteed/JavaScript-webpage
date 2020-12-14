function calculations() {
    let femalequant = document.getElementById("quantityfem").value;
    let malequant = document.getElementById("quantitymal").value;
  
    let femfixprice = 150.95 * parseFloat(femalequant);
    let malfixprice = 189.95 * parseFloat(malequant);
  
    let totalamount = femfixprice + malfixprice;
    console.log(typeof femfixprice);
    rand = "&#82;";
    console.log(malequant);
    document.getElementById("totmal").innerHTML = malfixprice.toFixed(2);
    document.getElementById("totfem").innerHTML = femfixprice.toFixed(2);
    document.getElementById("totalprice").innerHTML =
      rand + totalamount.toFixed(2);
  }