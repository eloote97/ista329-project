$(document).ready(function() {
    var headerHTML = `
        <style>
        .head {
            background-color: #E7E5DA;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            border: 2px solid black;
            box-sizing: border-box;
            box-shadow: 4px 4px 4px black;
            border-radius: 10px;
            margin: 10px;
        }
        
        .title {
            font-size: 24pt;
            color: black;
        }
        
        nav div {
            text-decoration: none;
            font-size: 18pt;
            padding-top: 60px;
        }
        
        nav div a {
            text-decoration: underline;
            color: black;
        }
        
        body {
            background-color: #D2E0FB;
        }
        </style>
    `;
    
    $('body').prepend(headerHTML);
});

//origionally i wnated this to just use innerHTML but it just would work so I moved
//to a jquery solution.
