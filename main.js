$(document).ready(() => {
    // alert('Ya se termino de cargar la pagina');
    $("#imgPrueba").css("width", "600px");
    $(".titulos").css("text-decoration", "underline");
    
    var texto = false;
    $(".parrafos").click(() =>{
        if (texto == false){
            $(".parrafos").css("color","#234");
            $(".parrafos").css("font-size", "16pt");
            texto = true;
        }else{
            $(".parrafos").css("color","#000");
            $(".parrafos").css("font-size", "12pt");
            texto = false;
        }
    })

    $("#btnMostrar").prop("disabled", true);
    $("#btnOcultar").prop("disabled", false);
    $("#btnMostrar").click(() => {
        $("#imgPrueba").show("slow");
        $("#btnMostrar").prop("disabled", true);
        $("#btnOcultar").prop("disabled", false);
    })

    $("#btnOcultar").click(() => {
        $("#imgPrueba").hide("slow");
        $("#btnMostrar").prop("disabled", false);
        $("#btnOcultar").prop("disabled", true);
    })
})