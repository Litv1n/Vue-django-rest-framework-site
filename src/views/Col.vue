<template>
<div class="tm-main-content no-pad-b">
        
    <section class="row tm-item-preview">
        <div class="col-md-6 col-sm-12 mb-md-0 mb-5">
            <img src="img/image-08.jpg" alt="Image" class="img-fluid tm-img-center-sm">
        </div>
        <div class="col-md-6 col-sm-12">
            <h2 class="tm-blue-text tm-margin-b-p">Коллектив</h2>
            <p class="tm-margin-b-p">в нашей компании царит дружба и порядок исключающие разлад и недопонимание. Если сотруднику нужна помощь или понимание со сотороны руководства мы всегда оказываем такую подержку.</p>
            <p class="tm-margin-b-p">Однако если что-то не так и мы види что люди целенаправленно вносят негатив в социальную составляющую нашей компании и не может остпениться, с таким сотрудником, скорее всего, нам придеться попрощаться.</p>
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
    setup() {
        
    },
}
</script>

<style>

</style>