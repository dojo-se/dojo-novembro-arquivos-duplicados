var arquivos = ['aleatorio', 'aleatorio01', '','aleatorio'];
// 
function init() {
    return arquivos;
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

module.exports = init;

