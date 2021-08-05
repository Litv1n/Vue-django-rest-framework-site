<template>
<div class="tm-main-content no-pad-b">
        
    <section class="row tm-item-preview">
        <div class="col-md-6 col-sm-12 mb-md-0 mb-5">
            <img src="img/image-06.jpg" alt="Image" class="img-fluid tm-img-center-sm">
        </div>
        <div class="col-md-6 col-sm-12">
            <h2 class="tm-blue-text tm-margin-b-p">Ответственность</h2>
            <p class="tm-margin-b-p">Договор который мы заключим является для нас важнейшим этапом при сотрудничестве. Мы работаем только в рамках договора и исполняем наши обязанности на 100 процентов.</p>
            <p class="tm-blue-text tm-margin-b-s">Views: 10,890</p>
        </div>
    </section>

    <div class="tm-gallery no-pad-b">
        <div class="row">
            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item mb-5">
                <router-link to="/first">
                    <div class="tm-gallery-item-overlay">
                        <img src="img/image-06.jpg" alt="Image" class="img-fluid tm-img-center">
                    </div>
                    <p class="tm-figcaption no-pad-b">Ответственность</p>
                </router-link>
            </figure>
            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item mb-5">
                <router-link to="/disp">
                    <div class="tm-gallery-item-overlay">
                        <img src="img/image-03.jpg" alt="Image" class="img-fluid tm-img-center">
                    </div>
                    <p class="tm-figcaption no-pad-b">Диспетчеры</p>
                </router-link>
            </figure>
            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item mb-5">
                <router-link to="/gibc">
                    <div class="tm-gallery-item-overlay">
                        <img src="img/image-08.jpg" alt="Image" class="img-fluid tm-img-center">
                    </div>
                    <p class="tm-figcaption no-pad-b">Гибкость</p>
                </router-link>
            </figure> 
            <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item mb-5">
                <router-link to="/col">
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
    name: 'first',
    components: {
        data() {
            
        }
    }
}
</script>