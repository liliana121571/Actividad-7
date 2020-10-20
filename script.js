
$("#educacion1").click(function(){  
    $(this).css("background","red")
    $(this).css("font-size","50px")
}) 


$("#educacion2").click(function(){
    $(this).css("color", "brown")
    $(this).css("font-size","50px")
})

$("#educacion3").dblclick(function(){
    $(this).css("color", "blue")
    $(this).css("font-size","50px")
})

$("#educacion4").dblclick(function(){
    $(this).css("color", "green")
    $(this).css("font-size","50px")
    $(this).css("background","yellow")

})

$("div").mouseover(function(){
    $(this).css("background", "yellow")
    $(this).css("color", "red")
})

$("div").mouseout(function(){
    $(this).css("background", "blue")
    $(this).css("color", "black")
})

