/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


submenus = new Array(2);
submenus[0] = "<a href='cadastro.html'>Novo Cadastro</a>";
submenus[1] = "<a href='about.html'>Sobre</a>";


function selSubMenu(index)
{
    var menu = document.getElementsByTagName("li");
    menu[index].style.color = "red";
    var x = document.getElementById("submenu");
    x.innerHTML = submenus[index];
}
function padrao(obj)
{
    obj.style.color = "black";
}

function message()
{
    alert("Cadastro Realizado com Sucesso!");
}

function enviar()
{
    form = document.forms[0];
    
    nome = form.querySelector('input[name="fname"]').value;
    
    sobrenome = form.querySelector('input[name="lname"]').value;
    
    email = form.querySelector('input[name="email"]').value;
    
    nome = nome +" "+sobrenome;
}
