document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll("input[name='unit']");
    const totalPrice = document.getElementById("total-price");
  
    radios.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        let price;
        switch (event.target.value) {
          case "1":
            price = "$10.00 USD";
            break;
          case "2":
            price = "$18.00 USD";
            break;
          case "3":
            price = "$24.00 USD";
            break;
        }
        totalPrice.textContent = price;
      });
    });
  });