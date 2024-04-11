function generarMenuIndex() {

const menuContent = `

<nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="#"><img src="../../resources/img/logo_header.png" alt="Logo"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
</nav>

<div class="sidebar mt-5">
    <a href="../admin/inicio.html" class="active"><img src="../../resources/img/hogar.png" alt=""><span
            class="sidebar-text mx-3">Inicio</span></a>
    <a href="../admin/admin_grupos.html"><img src="../../resources/img/carpeta-abierta (2).png" alt=""><span
            class="sidebar-text mt-2 mx-3">Grupos PTC</span></a>
    <a href="../admin/admin_estudiantes.html"><img src="../../resources/img/alumno.png" alt=""><span
            class="sidebar-text mt-2 mx-3">Alumnos
            ITR</span></a>
    <a href="../admin/admin_profesores.html"><img src="../../resources/img/usuario-de-pizarra.png" alt=""><span
            class="sidebar-text mt-2 mx-3">Profesores ITR</span></a>
    <a href="../admin/admin_administradores.html"><img src="../../resources/img/alt-administrador.png" alt=""><span
            class="sidebar-text mt-2 mx-3">Administradores
            ITR</span></a>
    <a href="../admin/admin_propuestas.html"><img
            src="../../resources/img/configuracion-alternativa-del-flujo-de-trabajo.png" alt=""><span
            class="sidebar-text mt-2 mx-3">Propuestas PTC</span></a>
    <a href="../admin/admin_cursos.html"><img src="../../resources/img/leccion.png" alt=""><span
            class="sidebar-text mt-2 mx-3">Gestionar
            Cursos</span></a>
    <a href="../admin/index.html"><img src="../../resources/img/salida.png" alt=""><span
            class="sidebar-text mt-2 mx-3">Cerrar
            Sesión</span></a>
</div>`;

return menuContent;

}

function generarFooterIndex() {

const footerIndex = `
<footer id="footer" class="text-center">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <span>&copy;</span>
                <p class="d-inline-block">Sistema Administrativo de Proyectos Técnicos 2024</p>
            </div>
        </div>
    </div>
</footer>
`;
return footerIndex;

}