$(function() {






    //MENU FIJO
    var ventanaAltura = $(window).height();
    var barraAltura = $('.barra').innerHeight();
    var alturaInvitados = $('.invitados').innerHeight();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > ventanaAltura) {
            $('.barra').addClass('fixed');
            $('body').css({ 'margin-top': barraAltura + 'px' });
        } else {
            $('.barra').removeClass('fixed');
            $('body').css({ 'margin-top': '0px' });
        }

    });

    $('.menu-programa a:first').addClass('activo');
    $('.programa-evento .info-curso:first').show();

    $('.menu-programa a').on('click', function() {
        $('.menu-programa a').removeClass('activo');
        $('div.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(500);
        $(this).addClass('activo');

        return false;

    }); //final del evento click
    //MENU RESPONSIVE

    $('.mobile-menu i').on('click', function() {
        $('.navegacion-principal').slideToggle();
    });

    //ANIMACIONES PARA LOS NUMEROS


    $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 3000);
    $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 3000);
    $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 5000);
    $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 3000);


    //CUENTA REGRESIVA

    $('.cuenta-regresiva').countdown('2020/12/10 09:00:00', function(event) {
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });



}); //final del dom con jquery

(function() {
    'use strict';

    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function() {

        //leaflet

        if (document.getElementById('mapa')) {
            var map = L.map('mapa').setView([-31.442577, -64.19318], 16);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);


            L.marker([-31.442577, -64.19318]).addTo(map)
                .bindPopup('Universidad Tecnologica Nacional.<br> Facultad Regional Córdoba.')
                .openPopup();

        }



        //campos Datos Usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('correo');


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

        //EVENTOS
        if (document.getElementById('calcular')) {
            calcular.addEventListener('click', calcularMontos);
            pase_dia.addEventListener('blur', mostrarDias);
            pase_dos_dias.addEventListener('blur', mostrarDias);
            pase_completo.addEventListener('blur', mostrarDias);
            email.addEventListener('blur', validarEmail);

            //VALIDACION DEL FORMULARIO
            nombre.addEventListener('blur', function() {
                    if (this.value == '') {
                        errorDiv.style.display = 'block';
                        errorDiv.innerHTML = 'Este campo es Obligatorio*';
                        this.style.border = '2px solid red';
                    }
                }) // funcion nombre
            nombre.addEventListener('keydown', function() {
                    errorDiv.style.display = 'none';
                    errorDiv.innerHTML = '';
                    this.style.border = '2px solid black';
                    this.style.borderRadius = '5px';
                }) //function keyDown

            apellido.addEventListener('blur', function() {
                    if (this.value == '') {
                        errorDiv.style.display = 'block';
                        errorDiv.innerHTML = 'Este campo es Obligatorio*';
                        this.style.border = '2px solid red';
                    }
                }) // funcion apellido
            apellido.addEventListener('keydown', function() {
                    errorDiv.style.display = 'none';
                    errorDiv.innerHTML = '';
                    this.style.border = '1px solid black';
                    this.style.borderRadius = '5px';
                }) //function keydown apellido

            email.addEventListener('blur', function() {
                    if (this.value == '') {
                        errorDiv.style.display = 'block';
                        errorDiv.innerHTML = 'Este campo es Obligatorio*';
                        this.style.border = '2px solid red';
                    }
                }) // funcion email
            email.addEventListener('keydown', function() {
                    errorDiv.style.display = 'none';
                    errorDiv.innerHTML = '';
                    this.style.border = '1px solid black';
                    this.style.borderRadius = '5px';
                }) //function keyDown email

            function validarEmail() {
                if (this.value.indexOf("@") > -1 & this.value.indexOf(".") > -1) {
                    errorDiv.style.display = 'none';
                    this.style.border = '1px solid black';
                } //cierre del if
                else {
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = 'Debes ingresar una direccion correo electronico valida*';
                    this.style.border = '2px solid red';
                }
            } //cierre de funcion validar emali


            // FUNCIONES 
            function calcularMontos(event) {
                event.preventDefault();
                if (regalo.value == '') {
                    alert('Debes Elegir un Regalo');
                    regalo.focus();
                } else {

                    var boletoDia = parseInt(pase_dia.value, 10) || 0,
                        boletoDosDias = parseInt(pase_dos_dias.value, 10) || 0,
                        boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                        cantCamisas = parseInt(camisas.value, 10) || 0,
                        cantEtiquetas = parseInt(etiqueta.value, 10) || 0;





                    var totalPagar = (boletoDia * 300) + (boletoDosDias * 450) + (boletoCompleto * 500) + ((cantCamisas * 500) * .90) + (cantEtiquetas * 200);

                    var listadoProductos = [];

                    if (boletoDia == 1) {
                        listadoProductos.push(`${boletoDia}  Pase por dia.`);
                    } else if (boletoDia > 1) {
                        listadoProductos.push(`${boletoDia} Pases por dia`);
                    } //else pase por dia

                    if (boletoDosDias == 1) {
                        listadoProductos.push(`${boletoDosDias} Pase por dos dias.`);
                    } else if (boletoDosDias > 1) {
                        listadoProductos.push(`${boletoDosDias} Pases por dos dias`);
                    } // else dos dias

                    if (boletoCompleto == 1) {
                        listadoProductos.push(`${boletoCompleto} Pase completo.`);
                    } else if (boletoCompleto > 1) {
                        listadoProductos.push(`${boletoCompleto} Pases Completos`);
                    } //else pase completo

                    if (cantCamisas == 1) {
                        listadoProductos.push(`${cantCamisas} Camisa.`);
                    } else if (cantCamisas > 1) {
                        listadoProductos.push(`${cantCamisas} Camisas`);
                    } //else cantidad de camisas

                    if (cantEtiquetas == 1) {
                        listadoProductos.push(`${cantEtiquetas} Pack de etiquetas.`);
                    } else if (cantEtiquetas > 1) {
                        listadoProductos.push(`${cantEtiquetas} Pack's de etiquetas `);
                    } // else catidad de etiquetas

                    lista_productos.style.display = 'block';
                    lista_productos.innerHTML = "";

                    for (var i = 0; i < listadoProductos.length; i++) {
                        lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                    } //fin del for loop

                    suma.innerHTML = `$${totalPagar}`;

                } //else
            } //funcion calcular montos

            function mostrarDias() {
                var boletoDia = parseInt(pase_dia.value, 10) || 0,
                    boletoDosDias = parseInt(pase_dos_dias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0;

                var diasElegidos = [];
                if (boletoDia > 0) {
                    diasElegidos.push('viernes');
                }
                if (boletoDosDias > 0) {
                    diasElegidos.push('viernes', 'sabado');
                }
                if (boletoCompleto > 0) {
                    diasElegidos.push('viernes', 'sabado', 'domingo');
                }

                for (var i = 0; i < diasElegidos.length; i++) {
                    document.getElementById(diasElegidos[i]).style.display = 'block';
                    document.getElementById(diasElegidos[i]).style.opacity = 1;
                }

                if (diasElegidos.includes('viernes') == false) {
                    document.getElementById('viernes').style.display = 'none';
                }
                if (diasElegidos.includes('sabado') == false) {
                    document.getElementById('sabado').style.display = 'none';
                }
                if (diasElegidos.includes('domingo') == false) {
                    document.getElementById('domingo').style.display = 'none';
                }


            } //funcion mostrar dias


        }
    }); // DOM CONTENT LOADED

})();