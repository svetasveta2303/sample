var operation = [  '+',  '-',  '*',  '/' ,'%' ]

var num1 = document.createElement ( 'input' )
num1.type = 'number'
document.body.appendChild ( num1 )
num1.placeholder = 'первое число'

var sel = document.createElement ( 'select' )
document.body.appendChild ( sel )

var num2 = document.createElement ( 'input' )
num2.type = 'number'
document.body.appendChild ( num2 )
num2.placeholder = 'второе число'

var btn = document.createElement ( 'button' )
document.body.appendChild ( btn )
btn.innerHTML = ' = '

var result = document.createElement ( 'span' )
document.body.appendChild ( result )

for ( var i = 0;  i < operation.length;  i++ ) {
        var opt = document.createElement ( 'option' )
        sel.appendChild ( opt )
        opt.value = operation [ i ]
        opt.innerHTML = operation [ i ]
}

btn.onclick = function ( event ) {
    if ( sel.value === '-' && num2.value < 0 ) {
      sel.value = '+'
      num2.value = Math.abs ( num2.value )
    }
    result.innerHTML = eval ( num1.value + sel.value + num2.value )
}
