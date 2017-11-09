var arquivos = ['a', 'b', 'c', 'a', 'b', 'a','a','t',null, '', 'b','b'];
// 
function init() {
    return percorrerLista2();
}

function percorreLista()
{
    var arquivoAnterior = ''
    for(var i=0; i < arquivos.length; i++)
    {
        if(arquivosAnterior == '')
            arquivosAnterior = arquivos[i];
        else if(arquivos[i] == arquivoAnterior)
            arquivos[i] = null;
        
    }
}
function percorrerLista2(){
    for(var i=1; i<arquivos.length; i++){
        if(arquivos[0] == arquivos[i])
        arquivos.pop(i);
    }
    console.log(arquivos)
    return arquivos;
}

module.exports = init;

