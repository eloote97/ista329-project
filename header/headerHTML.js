//header html
$(document).ready(function() {
    var headerHTML = `
        <header>
            <nav class="head">
                <div>
                    <a href="../../index.html">Restaurants</a>
                </div>
                <p class="title">Tucson Eats</p>
                <div>
                    <a href="about.html">About Us</a>
                </div>
            </nav>
        </header>
    `;
    
    $('body').prepend(headerHTML);
});

//origionally i wnated this to just use innerHTML but it just would work so I moved
//to a jquery solution.