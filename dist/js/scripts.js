/*!
    * Start Bootstrap - SB Admin v6.0.2 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    (function($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            if (this.href === path) {
                $(this).addClass("active");
            }
        });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);



jQuery(function(){    
    setInterval(function(){ //Calls a function every X ms as specified in param 2
        var _nbr = parseInt(jQuery('#contagem_visualizacoes').text());//Get number from element as int
        jQuery('#contagem_visualizacoes').text(++_nbr);//Increment variable and puts it in the element
    },500);//Number of ms between function calls
});

jQuery(function(){    
    setInterval(function(){ //Calls a function every X ms as specified in param 2
        var _nbr = parseInt(jQuery('#contagem_clique_ofertas').text());//Get number from element as int
        jQuery('#contagem_clique_ofertas').text(++_nbr);//Increment variable and puts it in the element
    },500);//Number of ms between function calls
});

jQuery(function(){    
    setInterval(function(){ //Calls a function every X ms as specified in param 2
        var _nbr = parseInt(jQuery('#contagem_visualizou_semclique_ofertas').text());//Get number from element as int
        jQuery('#contagem_visualizou_semclique_ofertas').text(++_nbr);//Increment variable and puts it in the element
    },500);//Number of ms between function calls
});


//Delete linhas

$(document).ready(function() {
    $("#dataTable .deleteLink").on("click",function() {
        var td = $(this).parent();
        var tr = td.parent();
        //change the background color to red before removing
        tr.css("background-color","#FF3700");

        tr.fadeOut(400, function(){
            tr.remove();
        });
    });
});


//Cadastrar novas ofertas

$(document).ready(function(){
    $(".add").click(function(){
        var idoferta = $("#idoferta").val();
        var nomeoferta = $("#nomeoferta").val();
        var descontooferta = $("#descontooferta").val();
        var ativodesde = $("#ativodesde").val();
        var markup = "<tr><td>" + idoferta + "</td><td>" + nomeoferta + "</td><td>" + descontooferta +"%"+  "</td><td></td><td>" + ativodesde + "</td><td></td></tr>";
        $("#dataTable").append(markup);
    });


}); 

