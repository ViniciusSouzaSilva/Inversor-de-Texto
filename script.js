function inverterCompleto()
{
    var txt1 = document.getElementById('norm')
    var txt2 = document.getElementById('inv')
    var str = txt1.value
    var nstr = []
    str = str.split('')
    str.reverse()
    str = str.join('')

    txt2.value = str
}

function inverterPalavras()
{
    var txt1 = document.getElementById('norm')
    var txt2 = document.getElementById('inv')
    var str = txt1.value
    var nstr = []
    str = str.split('')
    str.reverse()
    str = str.join('')
    str = str.split(' ')

    for(let i = str.length - 1; i >= 0; i--)
    {
        nstr.push(str[i])
    }

    nstr = nstr.join(' ')

    txt2.value = nstr
}

function copiar()
{
    var txt2 = document.getElementById('inv')
    txt2.select()
    document.execCommand('copy')
    alert('Copiado!')
}