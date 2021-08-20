<template>
    <div>
        <b-card-group >
            <b-card bg-variant="dark" text-variant="white" title="Servicio al cliente">
                <b-card-text>-Bogotá 404 90 31</b-card-text>
                <b-card-text>-Medellín 360 90 22</b-card-text>
                <b-card-text>-Cali 644 24 3</b-card-text>
                <b-card-text>-Celular 311 555 55 55</b-card-text>
            </b-card>
            <b-card bg-variant="dark" text-variant="white" title="Nuestro Menú">
                <b-navbar-nav>
                    <b-nav-item href="#">-Carnes Rojas</b-nav-item>
                    <b-nav-item href="#">-Comida Rápida</b-nav-item>
                    <b-nav-item href="#">-Típica</b-nav-item>
                    <b-nav-item href="#">-Tradicional</b-nav-item>
                    <b-nav-item href="#">-Todo el Menú</b-nav-item>
                </b-navbar-nav>
            </b-card>
            <b-card bg-variant="dark" text-variant="white" title="Encuentrenos">
                <b-card-group>
                    <b-card bg-variant="dark" text-variant="white">
                    <b-navbar-nav >
                        <b-nav-item href="#"><b-icon-twitter title="Twitter"></b-icon-twitter>  Twitter</b-nav-item>
                        <b-nav-item href="#"><b-icon-facebook title="Facebook"></b-icon-facebook>  Facebook</b-nav-item>
                        <b-nav-item href="#"><b-icon-youtube title="Youtube"></b-icon-youtube>  Youtube</b-nav-item>
                    </b-navbar-nav>
                    </b-card>
                    <b-card bg-variant="dark" text-variant="white">
                        <b-link href="#"><b-icon-geo-alt-fill title="Ubicación"></b-icon-geo-alt-fill>  Ubicación</b-link>
                        <b-embed
                            type="iframe"
                            src="https://g.page/elmistersanagustin?share"
                        ></b-embed>
                    </b-card>
                </b-card-group>
            </b-card>
            <template #footer>
                <small class="text-muted">Last updated 3 mins ago</small>
            </template>
        </b-card-group>
        <b-card-footer class="bg-dark small text-center text-muted" >Copyright © 2020</b-card-footer>
</div>
</template>

<script>
export default {
    name: 'HeaderFooter'
}
</script>