<template>
  <div class="portfolio container">
    <div class="pageabout-title">
    <div class="pageabout-title__routers">
        <router-link to="/">
        <a href="#!" class="pageabout-title__routers--home"><fa :icon="['fas', 'house-chimney-window']" /></a>
        </router-link>
        <p class="pageabout-title__routers--item">/</p>
        <router-link to="/portfolio">
        <a href="#!" class="pageabout-title__routers--about">Портфолио</a>
        </router-link>
    </div>
        <h1>Портфолио</h1>   
    </div>
    <div class="portfolio-main">
        <div class="portfolio-main__btns">
        <button class="portfolio-main__btns--item"><span>Дизайнерские обои</span></button>
        <button class="portfolio-main__btns--item"><span>Виниловые обои</span></button>
        <button class="portfolio-main__btns--item"><span>Фирменные обои</span></button>
        </div>
        <div class="portfolio-main__content">
            <img src="../assets/images/catalogcard3.png" alt="" class="portfolio-main__content--img" @click="openportmod">
            <img src="../assets/images/portfolio2.png" alt="" class="portfolio-main__content--img" @click="openportmod">
            <img src="../assets/images/portfolio2.png" alt="" class="portfolio-main__content--img" @click="openportmod">
            <img src="../assets/images/catalogcard3.png" alt="" class="portfolio-main__content--img" @click="openportmod">
            <img src="../assets/images/catalogcard3.png" alt="" class="portfolio-main__content--img" @click="openportmod">
            <img src="../assets/images/portfolio2.png" alt="" class="portfolio-main__content--img" @click="openportmod">
            <img src="../assets/images/portfolio2.png" alt="" class="portfolio-main__content--img" @click="openportmod">
            <img src="../assets/images/catalogcard3.png" alt="" class="portfolio-main__content--img" @click="openportmod">
            <img src="../assets/images/catalogcard3.png" alt="" class="portfolio-main__content--img" @click="openportmod">
            <img src="../assets/images/portfolio2.png" alt="" class="portfolio-main__content--img" @click="openportmod">
        </div>
    </div>
  </div>
  <div class="portfoliomod" v-if="portmod">
    <div class="portfoliomod-item">
        <div class="portfoliomod-item__img">
            <img src="../assets/images/catalogcard3.png" alt="">
        </div>
        <div class="portfoliomod-item__info">
            <div class="portfoliomod-item__info--title">
                <h3>Зеркальные тонирующие пленки серии SR PS</h3>
                <button @click="closeportmod">
                    <span>
                        <fa :icon="['fas', 'xmark']" />
                    </span>
                </button>
            </div>
            <div class="portfoliomod-item__info--price">
                <div class="portfoliomod-item__info--price___img">
                    <img src="../assets/images/filtr1.png" alt="">
                </div>
                <div class="portfoliomod-item__info--price___name">
                    <h4>Серия R GOLD</h4>
                    <p>Зеркальная пленка</p>
                </div>
                <div class="portfoliomod-item__info--price___p">
                    <h5>552 ₽</h5>
                    <p>/м<sup>2</sup></p>
                </div>
            </div>
            <div class="portfoliomod-item__info--text" id="scrollbar1">
                <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.</p>
            </div>
        </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer },
    data() {
        return {
            portmod: false,
        }
    },
    methods: {
        openportmod(){
            this.portmod = true
        },
        closeportmod(){
            this.portmod = false
        },
    },
}
</script>

<style>

</style>