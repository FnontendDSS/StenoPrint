<template>
  <div class="ourservices container">
    <div class="ourservices-title">
        <div class="ourservices-title__routers">
            <router-link to="/">
        <a href="#!" class="ourservices-title__routers--home"><fa :icon="['fas', 'house-chimney-window']" /></a>
        </router-link>
        <p class="ourservices-title__routers--item">/</p>
        <router-link to="/ourservices">
        <a href="#!" class="ourservices-title__routers--service">Услуги</a>
        </router-link>
        </div>
        <h1>Услуги</h1>
        <p class="ourservices-title__item">Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
    </div>
    <div class="ourservices-main">
        <div class="ourservices-main__card1">
            <div class="ourservices-main__card1--img">
                <img src="../assets/images/ourser1.png" alt="">
            </div>
            <div class="ourservices-main__card1--text">
                <h3>Создание уникального дизайна в квартире, доме, офисе</h3>
                <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи.</p>
                <router-link to="/ourservicesdet" replace>
                <a href="#!">
                    Узнать подробнее
                    <fa :icon="['fas', 'angle-right']" />
                </a>
                
                </router-link>
            </div>
        </div>
        <div class="ourservices-main__card2">
            <div class="ourservices-main__card2--text">
                <h3>Создание уникального дизайна в квартире, доме, офисе</h3>
                <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи.</p>
                <router-link to="/ourservicesdet" replace>
                <a href="#!">
                    Узнать подробнее
                    <fa :icon="['fas', 'angle-right']" />
                </a>
                
                </router-link>
            </div>
            <div class="ourservices-main__card2--img">
                <img src="../assets/images/ourser2.png" alt="">
            </div>
        </div>
        <div class="ourservices-main__card3">
            <div class="ourservices-main__card3--img">
                <img src="../assets/images/ourser3.png" alt="">
            </div>
            <div class="ourservices-main__card3--text">
                <h3>Создание уникального дизайна в квартире, доме, офисе</h3>
                <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи.</p>
                <router-link to="/ourservicesdet" replace>
                <a href="#!">
                    Узнать подробнее
                    <fa :icon="['fas', 'angle-right']" />
                </a>
                
                </router-link>
            </div>
        </div>
        <div class="ourservices-main__card4">
            <div class="ourservices-main__card4--text">
                <h3>Создание уникального дизайна в квартире, доме, офисе</h3>
                <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи.</p>
                <router-link to="/ourservicesdet" replace>
                
                <a href="#!">
                    Узнать подробнее
                    <fa :icon="['fas', 'angle-right']" />
                </a>
                </router-link>
            </div>
            <div class="ourservices-main__card4--img">
                <img src="../assets/images/ourser4.png" alt="">
            </div>
        </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
    components: {Footer}
}
</script>

