<template>
    <div class="bg-dark">
    <b-navbar v-b-scrollspy toggleable="lg" type="dark" variant="secondary">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown text="Idioma" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <em>Usuario </em><b-icon-person-circle title="Iniciar Sesion"></b-icon-person-circle>
            </template>
            <b-dropdown-item href="#">Perfil</b-dropdown-item>
            <b-dropdown-item href="#">Inicial Sesión</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-navbar-brand href="#"> | Ubicación <b-icon-geo-alt-fill title="ubicación"></b-icon-geo-alt-fill></b-navbar-brand>
            <b-navbar-brand href="#"> |  <b-icon-twitter title="twitter"></b-icon-twitter></b-navbar-brand>
            <b-navbar-brand href="#"><b-icon-facebook title="facebook"></b-icon-facebook></b-navbar-brand>
            <b-navbar-brand href="#"><b-icon-youtube title="youtube"></b-icon-youtube></b-navbar-brand>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#"><img src="../assets/logo.png" width="40" height="40"/> El Pastor</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
                <b-nav-item :to="{name: 'empresas'}" href="@/empresas">Nuestro Lugar</b-nav-item>
                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>Menú</em> <b-icon-menu-app title="Menú"></b-icon-menu-app>
                    </template>
                    <b-dropdown-item href="#">Carnes Rojas</b-dropdown-item>
                    <b-dropdown-item href="#">Carnes Blancas</b-dropdown-item>
                    <b-dropdown-item href="#">Comida Rápida</b-dropdown-item>
                    <b-dropdown-item href="#">Típica</b-dropdown-item>
                    <b-dropdown-item href="#">Tradicional</b-dropdown-item>
                    <b-dropdown-item href="#">Todas las categorias</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item href="#">Contactanos</b-nav-item>
                </b-navbar-nav>
                    <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
    </b-navbar>
    </div>
</template>
<script>
export default {
    name: 'HeaderItem'
}
</script>