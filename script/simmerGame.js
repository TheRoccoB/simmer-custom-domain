(function(){
    function createGame(){
        var iframe = document.createElement('iframe');
        iframe.position = 'fixed';
        iframe.style.border = "0";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.setAttribute("src", "https://i.simmer.io/@Nannings/shuffle-world")
        document.body.appendChild(iframe);
    }

    createGame();
})();
