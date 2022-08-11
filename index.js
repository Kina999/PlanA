document.addEventListener('click', function handleClick(event) {
    const items = document.querySelectorAll('.nav-items a');
    var dropBtn = document.getElementById('catalog');
    dropBtn.classList.remove('active');
    items.forEach(item => {
        item.classList.remove('active');
    });
    if(event.target.className === "content"){
        dropBtn.classList.add('active')
    }else if(event.target.className === "navbar-item"){
        event.target.classList.add('active');
    }
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}