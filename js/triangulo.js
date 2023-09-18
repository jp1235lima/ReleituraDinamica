function setMensagem(frase) {
    const aqui = document.querySelector('#mostra');
    aqui.innerHTML = '';

    aqui.classList.add('oi');
    aqui.innerHTML = frase;
}

function ValidarTriangulo(x, y, z){    

    if(x <= y + z && y <= x + z && z <= x + y){

        const img = document.querySelector('#imagem');
        if(x == y && y == z && z == x){
            setMensagem("Equilátero");
            img.setAttribute('src', 'image/equilatero.png');
        }
        else if(x != y && y != z && x != z){
            setMensagem("Escaleno");
            img.setAttribute('src', 'image/escaleno.png');
        }
        else{
           setMensagem("Isósceles");
           img.setAttribute('src', 'image/isosceles.png');            
        }
    }
    else{
        setMensagem("Inválido");
       
    }
}


const valores = document.querySelector('#triangulo');

valores.addEventListener('submit', function(e){
    e.preventDefault();

    const a = document.getElementById('valor1').value;
    const b = document.getElementById('valor2').value;
    const c = document.getElementById('valor3').value;
    ValidarTriangulo(a, b ,c);   
    
});

