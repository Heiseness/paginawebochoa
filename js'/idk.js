addEventListener('load',inicio,incio2,false);

function inicio()
{
  document.getElementById('opt').addEventListener('change',cambioTemperatura,false);
  document.getElementById('vers').addEventListener('change',cambiovers,false);
  document.getElementById('3rs').addEventListener('change',cambiorang,false);
    }

function cambioTemperatura()
{    
  document.getElementById('temp').innerHTML=document.getElementById('opt').value;
}
function cambiovers()
{    
  document.getElementById('min').innerHTML=document.getElementById('vers').value;
}
function cambiorang()
{    
  document.getElementById('max').innerHTML=document.getElementById('3rs').value;
}
function inicio()
{
  document.getElementById('on4').addEventListener('change',cambioTemperatura,false);
  document.getElementById('inb4').addEventListener('change',cambiovers,false);
  document.getElementById('in4').addEventListener('change',cambiorang,false);
    }

function cambioTemperatura()
{    
  document.getElementById('tump').innerHTML=document.getElementById('opt').value;
}
function cambiovers()
{    
  document.getElementById('mun').innerHTML=document.getElementById('vers').value;
}
function cambiorang()
{    
  document.getElementById('mux').innerHTML=document.getElementById('3rs').value;
}