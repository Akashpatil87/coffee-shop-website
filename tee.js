let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}
let cartItem = document.querySelector('.cart-item-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');

    searchForm.classList.remove('active');
}
let searchForm = document.querySelector('.search-form');



document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("registerForm")
      .addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent form submission
  
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let number = document.getElementById("number").value;
  
        let response = await fetch("/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, number }),
        });
  
        let result = await response.json();
        document.getElementById("message").innerText = result.message;
      });
  });
  