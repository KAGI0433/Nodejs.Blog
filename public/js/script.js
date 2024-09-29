document.addEventListener('DOMContentLoaded', function(){

    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('.searchInput');
    const searchClose = document.getElementById('.searchClose');


    for (var i = 0; i < allButtons.length; i++) {

        allButtons[i].addEventListener('click', function() {
            searchBar.Style.visibility ='visible';
            searchBar.classList.add('open');
            this.setAttibute('aria-expanded', 'true');
            searchInput.focus();
        });

    }
});