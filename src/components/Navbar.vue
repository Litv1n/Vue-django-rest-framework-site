<template>
<header class="tm-site-header">
    <h1 class="tm-site-name">ЛИДЕР-ТРАНС</h1>
    <p class="tm-site-description">транспортная компания</p>
    
    <nav class="navbar-expand-md tm-main-nav-container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#tmMainNav" aria-controls="tmMainNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse tm-main-nav" id="tmMainNav">
            <ul class="nav nav-fill tm-main-nav-ul">
                <router-link
                    tag="li"
                    to="/"
                    exact
                    active-class="active"
                    class="nav-item"><a class="nav-link active">Главная</a></router-link>
                <router-link
                    tag="li"
                    to="/team"
                    active-class="active"
                    class="nav-item"><a class="nav-link">Команда</a></router-link>
                <router-link
                    tag="li"
                    to="/contact"
                    active-class="active"
                    class="nav-item"><a class="nav-link">Обратная связь</a></router-link>
                <router-link
                    tag="li"
                    to="/posts"
                    active-class="active"
                    class="nav-item"><a class="nav-link">Посты</a></router-link>
                <router-link
                    tag="li"
                    to="/calculator"
                    active-class="active"
                    class="nav-item"><a class="nav-link">Калькулятор</a></router-link>
            </ul>
        </div>
    </nav>
</header>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style>
.navbar {}
</style>