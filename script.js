function tabuada() {
    var nmr = document.getElementById('nmr')
    var res = document.getElementById('res')
    if (nmr.value.length == 0) {
        window.alert('dados incorretos. confira novamente!')
    } else {
        var nmr = Number(nmr.value)
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            var item = document.createElement('option') //criar elem por <select <option>>
            item.text = `${nmr} x ${c} = ${nmr*c}`
            res.appendChild(item)
            item.value = `tab${c}` // seleciona por linha
            /* mult = (nmr * c)
            var mult = Number(mult.value) nao precisava */
            /*res.innerHTML += */
        }
    }
}