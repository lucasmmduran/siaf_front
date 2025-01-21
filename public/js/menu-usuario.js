document.addEventListener('DOMContentLoaded', function() {
    const dropdownMenuUsuario = document.getElementById('dropdownMenuUsuario');
    const buttomDropUserMenu = document.getElementById('btnDropUserMenu');
    const iconoActivo = document.querySelector('.icono-activo');
    const iconoFocus = document.querySelector('.icono-focus');

    // Función para cerrar todos los menús desplegables y revertir la situación de las imágenes
    function cerrarSubMenu() {
        submenuUserCollapse.classList.remove('show');
        BsubmenuUserCollapse.classList.remove('show'); // Cierra el submenú de pagos si está abierto
        iconoActivo.classList.add('d-none'); // Muestra el icono activo
        iconoFocus.classList.remove('d-none'); // Oculta el icono focus
    }

    function cerrarMenus() {
        dropdownMenuUsuario.classList.remove('show'); // Cierra el menú de usuario
        iconoActivo.classList.remove('d-none'); // Muestra el icono activo
        iconoFocus.classList.add('d-none'); // Oculta el icono focus
        // Restablece el estado de todos los demás botones de submenú a "collapsed"
        //subMenuButton.classList.add('collapsed');
        //subMenuButton.setAttribute('aria-expanded', 'false');
        // Restablece el estado de todos los demás botones de submenú a "collapsed"
        //subBMenuButton.classList.add('collapsed');
        //subBMenuButton.setAttribute('aria-expanded', 'false');
    }

    // Evento de clic en cualquier parte del documento
    document.addEventListener('click', function(event) {
        //const isClickInsideMenu = buttomDropUserMenu.contains(event.target) || dropdownMenuUsuario.contains(event.target);
        const isClickInsideMenu =  dropdownMenuUsuario.contains(event.target);
        if (!isClickInsideMenu) {
            cerrarMenus();
        }
    });

    // Evento de clic en el botón del menú de usuario
    buttomDropUserMenu.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el evento de clic se propague al documento
        dropdownMenuUsuario.classList.toggle('show'); // Alterna la visibilidad del menú de usuario
        iconoActivo.classList.toggle('d-none'); // Alterna la visibilidad del icono activo
        iconoFocus.classList.toggle('d-none'); // Alterna la visibilidad del icono focus
    });

});