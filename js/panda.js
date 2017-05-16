  var eliminar = document.getElementsByClassName('quitar');

  for (var i = 0; i < eliminar.length; i++) {
    eliminar[i].addEventListener('click', eliminarImagen);
  };

  function eliminarImagen() {
    var padre = this.parentElement;
    padre.style.display = 'none';
  };

  function restaurarImg() {
    for (var i = 0; i < eliminar.length; i++) {
      eliminar[i].parentElement.style.display = "inline-block";
    };
  };
