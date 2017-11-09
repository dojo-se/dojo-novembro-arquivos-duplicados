
var arquivos = ['a', 'b', 'c', 'a', 'b', 'a','a','t',null, '', 'b','b'];
// 
function init() {
    return removeDuplicados();
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
function substituiDuplicados(){
    for(var i=0; i<arquivos.length; i++){
        if(arquivos[i] == arquivos[i+1])
        arquivos[i]=null;

    }
    
    console.log(arquivos)
    return arquivos;
}

function removeDuplicados(){
var nova = [];
 nova = arquivos.reduce(function (anterior,proximo){
        if(anterior==proximo){
           return proximo;
        }
    }, arquivos[0]);

    console.log(nova);
return nova;
    
}

module.exports = init;

