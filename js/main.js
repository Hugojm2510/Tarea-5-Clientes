function cambiarFondo(colorFondo, colorTexto){
    
    document.body.style.backgroundColor = colorFondo;
    document.body.style.color = colorTexto;
}

document.getElementById("botonRojo").addEventListener("click",function(){
    cambiarFondo("red","white");
});

document.getElementById("botonVerde").addEventListener("click",function(){
    cambiarFondo("green","lightgreen");
});

document.getElementById("botonAzul").addEventListener("click",function(){
    cambiarFondo("blue","lightblue");
});

document.getElementById("reiniciar").addEventListener("click",function(){
    cambiarFondo("white","black");
});