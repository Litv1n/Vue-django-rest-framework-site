<template>
<div class="tm-main-content no-pad-b">
        
    <section class="row tm-item-preview">
        <div class="col-md-6 col-sm-12 mb-md-0 mb-5">
            <img src="img/image-05-preview.jpg" alt="Image" class="img-fluid tm-img-center-sm">
        </div>
        <div class="col-md-6 col-sm-12">
            <h2 class="tm-blue-text tm-margin-b-p">Автомобили</h2>
            <p class="tm-margin-b-p">Несмотря на то, что грузовой автомобиль это сложная инженерная конструкция, регулярно требующая к себе внимания, мы создали перкрасный сервис по ремонту и обслуживанию автомобилей. Каждая транспортная единица всегда на ходу и в работе.</p>
            <p class="tm-margin-b-p">Мы в Лидер-Транс пристально следим за температурным режимом во время перевозки. Кунг, то есть будка куда грузится ваша продукция, исправна и всегда поддерживает нужную вам температуру.</p>
            <p class="tm-margin-b-p">8 европаллет, а именно столько помещается в наши грузовики, без проблем проходят как в Москву так и в Московскую Область.</p>
            <p class="tm-blue-text tm-margin-b-s">Views: 10,890</p>
        </div>
    </section>

    <div class="tm-gallery no-pad-b">
        <div class="row">
            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item mb-5">
                <router-link to="/preview">
                    <div class="tm-gallery-item-overlay">
                        <img src="img/image-06.jpg" alt="Image" class="img-fluid tm-img-center">
                    </div>
                    <p class="tm-figcaption no-pad-b">Ответственность</p>
                </router-link>
            </figure>
            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item mb-5">
                <router-link to="/preview">
                    <div class="tm-gallery-item-overlay">
                        <img src="img/image-03.jpg" alt="Image" class="img-fluid tm-img-center">
                    </div>
                    <p class="tm-figcaption no-pad-b">Диспетчеры</p>
                </router-link>
            </figure>
            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item mb-5">
                <router-link to="/preview">
                    <div class="tm-gallery-item-overlay">
                        <img src="img/image-08.jpg" alt="Image" class="img-fluid tm-img-center">
                    </div>
                    <p class="tm-figcaption no-pad-b">Гибкость</p>
                </router-link>
            </figure> 
            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item mb-5">
                <router-link to="/preview">
                    <div class="tm-gallery-item-overlay">
                        <img src="img/image-05.jpg" alt="Image" class="img-fluid tm-img-center">
                    </div>
                    <p class="tm-figcaption no-pad-b">Коллектив</p>
                </router-link>
            </figure>
        </div>   
    </div>                    
                
</div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style>

</style>