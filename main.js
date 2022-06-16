    function inserir(n) {
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + n;
    }
    function limpar(){
        document.getElementById('resultado').innerHTML = '';
    }
    function voltar(){
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }
    function calcular(){
        var resultado = (document.getElementById('resultado').innerHTML);
        if (resultado){
            resultadoFinal = eval(resultado);
            if (resultadoFinal % 1 === 0){
                document.getElementById('resultado').innerHTML = resultadoFinal;
            } else {
                var resultadoArredondado =  resultadoFinal.toFixed(2);
                document.getElementById('resultado').innerHTML = resultadoArredondado; 
            }
        } 
    }
