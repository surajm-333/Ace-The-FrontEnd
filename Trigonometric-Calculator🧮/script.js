var number;

var input1 = document.getElementById('precision');
var input2 = document.getElementById('num');

input1.onchange = input2.onchange = input2.onkeyup = function()
{    
    number = input2.value;
    
    document.getElementById('sin').innerHTML = 'sin(' + number + '&deg;) &asymp; ' + round(sin(number));
    document.getElementById('cos').innerHTML = 'cos(' + number + '&deg;) &asymp; ' + round(cos(number));
    document.getElementById('tan').innerHTML = 'tan(' + number + '&deg;) &asymp; ' + tan(number);
};

function sin(x)
{
 
    x = (x % 360) * Math.PI / 180;
    
    var sin = 0,
        plus = true;
    
    for(var y = 1; y <= 99; y += 2)
    {
        if(plus)
        {
            sin += Math.pow(x, y) / factorial(y);
        }
        else
        {
            sin -= Math.pow(x, y) / factorial(y);
        }
        
        plus = !plus;
    }
    
    return sin;
}

function cos(x)
{
    return sin(90 - x);
}

function tan(x)
{
    return round(sin(x) / cos(x));
}


function factorial(x)
{
    for(var y = x - 1; y > 0; y--)
    {   
        x *= y;
    }
    
    return x;
}

function round(x)
{
    var precision = Math.pow(10, input1.value - 1);
    return Math.round(x * precision) / precision;
}