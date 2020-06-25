(function(){
 'use strict';
    
    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function(){
        
        //campos Datos Usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');
        
        
        // Campos Pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dos_dias = document.getElementById('pase_dos_dias');
        var pase_completo = document.getElementById('pase_completo');
        
        //Botones y Divs
        
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var btnRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista_productos');
        var suma = document.getElementById('suma_total');
        
        //Extras
        
        var etiquetas = document.getElementById('etiquetas');
        var camisas = document.getElementById('camisa_evento');
        
        
        calcular.addEventListener('click', calcularMontos);
        
        function calcularMontos(event) {
            event.preventDefault();
            if (regalo.value == '') {
                alert('Debes Elegir un Regalo');
                regalo.focus();
            } else {
                 
              var boletoDia = parseInt(pase_dia.value, 10)|| 0,
                  boletoDosDias = parseInt(pase_dos_dias.value, 10)|| 0,
                  boletoCompleto = parseInt(pase_completo.value, 10)|| 0,
                  cantCamisas = parseInt(camisas.value, 10)|| 0,
                  cantEtiquetas = parseInt(etiqueta.value, 10)|| 0;
                
                
          
                
                
                var totalPagar = (boletoDia * 300) + (boletoDosDias * 450) + (boletoCompleto * 500) + ((cantCamisas * 500) * .90) + (cantEtiquetas * 200);

                var listadoProductos = [];
                
                if(boletoDia == 1 ){
                listadoProductos.push(`${boletoDia}  Pase por dia.`);
                }else if(boletoDia > 1){
                    listadoProductos.push(`${boletoDia} Pases por dia`);
                }//else pase por dia
                
                if(boletoDosDias == 1){
                listadoProductos.push(`${boletoDosDias} Pase por dos dias.`);
               }else if(boletoDosDias > 1){
                   listadoProductos.push(`${boletoDosDias} Pases por dos dias`);
               }// else dos dias
                
                if(boletoCompleto == 1) {
                   listadoProductos.push(`${boletoCompleto} Pase completo.`);
               } else if(boletoCompleto > 1){
                   listadoProductos.push(`${boletoCompleto} Pases Completos`);
               } //else pase completo

                   if(cantCamisas == 1) {
                   listadoProductos.push(`${cantCamisas} Camisa.`);
               } else if(cantCamisas > 1){
                   listadoProductos.push(`${cantCamisas} Camisas`);
               } //else cantidad de camisas
                
                   if(cantEtiquetas == 1) {
                   listadoProductos.push(`${cantEtiquetas} Pack de etiquetas.`);
               } else if(cantEtiquetas > 1){
                   listadoProductos.push(`${cantEtiquetas} Pack's de etiquetas `);
               }// else catidad de etiquetas
                
                lista_productos.style.display = 'block';
               lista_productos.innerHTML = "";
                for(var i = 0; i < listadoProductos.length; i++){
                    lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                }//fin del for loop
                
                suma.innerHTML = `$${totalPagar}`;
                
                
            }//else
        }//funcion calcular montos
        
        
    });// DOM CONTENT LOADED
    
 })();