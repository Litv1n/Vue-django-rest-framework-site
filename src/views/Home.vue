<template>
<div class="tm-main-content">
    <section class="tm-margin-b-l">
        <header>
            <h2 class="tm-main-title">Добро пожаловать</h2>    
        </header>
        
        <p>Лидер-Транс - это надежная транспортная компания которая всегда придет вам на помощь, если дело касается перевозки, разумеется. Преимущественно мы специализируемся на перевозке товаров требующих температурный режим от -18 до +20. Самые надежные водители и лучшие диспетчеры не позволят сорвать ни одну загрузку.</p>
        
        <div class="tm-gallery">
            <div class="row">
                <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <router-link to="/auto">
                        <div class="tm-gallery-item-overlay">
                            <img src="img/image-01.jpg" alt="Image" class="img-fluid tm-img-center">
                        </div>
                        
                        <p class="tm-figcaption">Автомобили</p>
                    </router-link>
                </figure>
                <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <router-link to="/drivers">
                        <div class="tm-gallery-item-overlay">
                            <img src="img/image-02.jpg" alt="Image" class="img-fluid tm-img-center">
                        </div>
                        <p class="tm-figcaption">Водители</p>
                    </router-link>
                </figure>
                <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <router-link to="/disp">
                        <div class="tm-gallery-item-overlay">
                            <img src="img/image-03.jpg" alt="Image" class="img-fluid tm-img-center">
                        </div>
                        <p class="tm-figcaption">Диспетчеры</p>
                    </router-link>
                </figure>
                <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <router-link to="/conc">
                        <div class="tm-gallery-item-overlay">
                            <img src="img/image-04.jpg" alt="Image" class="img-fluid tm-img-center">
                        </div>
                        <p class="tm-figcaption">Концентрация</p>
                    </router-link>
                </figure>
                <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <router-link to="/gibc">
                        <div class="tm-gallery-item-overlay">
                            <img src="img/image-05.jpg" alt="Image" class="img-fluid tm-img-center">
                        </div>
                        <p class="tm-figcaption">Гибкость</p>
                    </router-link>
                </figure>
                <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <router-link to="/first">
                        <div class="tm-gallery-item-overlay">
                            <img src="img/image-06.jpg" alt="Image" class="img-fluid tm-img-center">
                        </div>
                        <p class="tm-figcaption">Ответственность</p>
                    </router-link>
                </figure>
                <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <router-link to="/stab">
                        <div class="tm-gallery-item-overlay">
                            <img src="img/image-07.jpg" alt="Image" class="img-fluid tm-img-center">
                        </div>
                        <p class="tm-figcaption">Стабильность</p>
                    </router-link>
                </figure>
                <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                    <router-link to="/col">
                        <div class="tm-gallery-item-overlay">
                            <img src="img/image-08.jpg" alt="Image" class="img-fluid tm-img-center">
                        </div>
                        <p class="tm-figcaption">Коллектив</p>
                    </router-link>
                </figure> 
            </div>   
        </div>
        
        <nav class="tm-gallery-nav">
            <ul class="nav justify-content-center">
                <li class="nav-item"><a class="nav-link active" href="#">1</a></li>
                <li class="nav-item"><a class="nav-link" href="#">2</a></li>
                <li class="nav-item"><a class="nav-link" href="#">3</a></li>
                <li class="nav-item"><a class="nav-link" href="#">4</a></li>                    
            </ul>
        </nav>
    </section>

</div>
</template>

<script>
export default {
    name: 'home',
    components: {
        data() {

        }
    }
}
</script>

<style>

</style>