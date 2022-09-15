function principal(){
    const a = document.querySelector('#c_a')
    const b = document.querySelector('#c_b')
    const c = document.querySelector('#c_c')
  
    const c_a = Number(a.value)
    const c_b = Number(b.value)
    const c_c = Number(c.value)
  
    const Soma = soma(c_b,c_a)
    const Produto = produto(c_c,c_a)
    const msg = document.querySelector('#resultado')
    msg.innerHTML= `x1=${Soma} x2=${Produto}`
    
}

function soma(b,a){
    return -(b/a)
}
function produto(c,a){
    return(c/a)
}
