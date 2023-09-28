document.addEventListener('DOMContentLoaded', function(){

  const allButtons = document.querySelectorAll('.searchBtn');
  const searchBar = document.querySelector('.searchBar');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchClose');

  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function() {
      searchBar.style.visibility = 'visible';
      searchBar.classList.add('open');
      this.setAttribute('aria-expanded', 'true');
      searchInput.focus();
    });
  }

  searchClose.addEventListener('click', function() {
    searchBar.style.visibility = 'hidden';
    searchBar.classList.remove('open');
    this.setAttribute('aria-expanded', 'false');
  });


});

// var form  = document.querySelector('form');

// form.addEventListener("submit", (e)=> {
//     e.preventDefault();
//     var name = document.getElementById('name').value
//     var msg = document.getElementById('msg').value
//     var email = document.getElementById('email').value
//     console.log(name);


//     var result = `Name : ${name} \n Email: ${email} \n Message: ${msg}`
//     console.log(result);
//     var token = "6089962515:AAF_My6RRQGuJcsHfJ1u-2FXwKdBESIPcVw"
//     var chat_id = 6194528557

//     var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${result}`

//     api = new XMLHttpRequest();
//     api.open("GET", url, true);
//     api.send();
//     console.log(result)
//     alert(`Message Successfully Sent By ${name}`)
// })