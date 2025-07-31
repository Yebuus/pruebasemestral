document.getElementById('enviar').addEventListener('click', function () {
  let isValid = true;
  const resultado = document.getElementById('resultado');
  resultado.textContent = '';
  resultado.className = '';

  const nombre = document.getElementById('nombre');
  const errorNombre = document.getElementById('errorNombre');
  const descuento = document.getElementById('descuento').value.trim();
  const cantidad = parseInt(document.getElementById('quanity').value, 10);
  const tipoEntrada = document.getElementById('tipo').value;

  // Precios de las entradas
  const precios = {
    general: 1000,
    vip: 5000,
    vippremium: 10000,
  };

  // Validación del campo "nombre"
  if (nombre.value.trim() === '') {
    errorNombre.textContent = 'Por favor, ingrese un nombre.';
    errorNombre.style.color = 'red'; 
    isValid = false;
  } else if (nombre.value.length > 30) {
    errorNombre.textContent = 'El nombre maximo 30 caracteres';
    errorNombre.style.color = 'red'; 
    isValid = false;
  } else {
    errorNombre.textContent = ''; // Limpia el mensaje de error si es válido
  }

  // Mensaje de éxito si todo es válido
  if (isValid) {
    let precioTotal = precios[tipoEntrada] * cantidad;

    // Aplicar descuento si el código es válido
    if (descuento === 'ROCK10') {
      const descuentoAplicado = precioTotal * 0.1; // 10% de descuento
      precioTotal -= descuentoAplicado;
      resultado.textContent = `Formulario enviado correctamente. Precio total con descuento: $${precioTotal.toFixed(2)}`;
    } else {
      resultado.textContent = 'Formulario enviado correctamente.';
    }

    resultado.style.color = 'green'; 
  }
});