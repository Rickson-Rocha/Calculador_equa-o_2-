
const calcular = document.querySelector('#calcular')
function calc(){
    const a = document.querySelector('#c_a')
    const b = document.querySelector('#c_b')
    const c = document.querySelector('#c_c')
    const co_a = Number(a.value)
    const co_b = Number(b.value)
    const co_c = Number(c.value)
    const resultado = document.querySelector('#resultado') 
    if(co_a !='' && co_b !='' && co_c !=''){
        const x1 = (-(co_b) + raizQuadrada(delta(co_a,co_b,co_c)))/(2*co_a);
        const x2 = (-(co_b) - raizQuadrada(delta(co_a,co_b,co_c)))/(2*co_a);
        resultado.innerHTML = `x1=${x1} x2= ${x2}`
    }else{
        resultado.innerHTML = 'Para efetuar os calculos é necessário preencher todos os campos'
    }
}


function quadrado(n){
    return n*n
}

function delta(a,b,c){

    return quadrado(b)-(4*a*c);
}

function raizQuadrada(n){
   return Math.sqrt(n)
}

calcular.addEventListener('click',calc)
