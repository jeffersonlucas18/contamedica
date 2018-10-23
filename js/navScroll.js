function scrollIntoView(link) {   
    document.querySelector(link).scrollIntoView({
        behavior: 'smooth',
    })
}
(function(){
    $("[data-goto]").click(function(){
        var selector = $(this).attr("data-goto");
        console.log("Scrolling to:", selector);
            
        scrollIntoView(selector);                        
    });                   
})();