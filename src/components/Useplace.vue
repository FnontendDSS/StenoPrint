<template>
  <div class="useplace container">
    <div class="useplace-title">
        <h3>Место применения</h3>
        <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
    </div>
    <div class="useplace-cards">
        <div class="useplace-cards__item">
            <splide :options="options" class="useplace-cards__item--slides">
                <splide-slide>
                    <img src="../assets/images/usep1.png" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="../assets/images/usep1.png" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="../assets/images/usep1.png" alt="">
                </splide-slide>
                <div class="useplace-cards__item--slides___hover" id="more">
                    <button class="useplace-cards__item--slides___hover---btn" @click="openModal">
                        <fa :icon="['fas', 'magnifying-glass']" />
                    </button>
                </div>
            </splide>
            <div class="useplace-cards__item--info">
                <h4>Жилые помещения</h4>
                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
            </div>
        </div>
        <div class="useplace-cards__item">
            <splide :options="options" class="useplace-cards__item--slides">
                <splide-slide>
                    <img src="../assets/images/usep2.png" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="../assets/images/usep2.png" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="../assets/images/usep2.png" alt="">
                </splide-slide>
                <div class="useplace-cards__item--slides___hover" id="more">
                    <button class="useplace-cards__item--slides___hover---btn" @click="openModal">
                        <fa :icon="['fas', 'magnifying-glass']" />
                    </button>
                </div>
            </splide>
            <div class="useplace-cards__item--info">
                <h4>Офисы, рестораны, кафе</h4>
                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
            </div>
        </div>
        <div class="useplace-cards__item">
            <splide :options="options" class="useplace-cards__item--slides">
                <splide-slide>
                    <img src="../assets/images/usep1.png" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="../assets/images/usep1.png" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="../assets/images/usep1.png" alt="">
                </splide-slide>
                <div class="useplace-cards__item--slides___hover" id="more">
                    <button class="useplace-cards__item--slides___hover---btn" @click="openModal">
                        <fa :icon="['fas', 'magnifying-glass']" />
                    </button>
                </div>
            </splide>
            <div class="useplace-cards__item--info">
                <h4>Жилые помещения</h4>
                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
            </div>
        </div>
        <div class="useplace-cards__item">
            <splide :options="options" class="useplace-cards__item--slides">
                <splide-slide>
                    <img src="../assets/images/usep2.png" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="../assets/images/usep2.png" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="../assets/images/usep2.png" alt="">
                </splide-slide>
                <div class="useplace-cards__item--slides___hover" id="more">
                    <button class="useplace-cards__item--slides___hover---btn" @click="openModal">
                        <fa :icon="['fas', 'magnifying-glass']" />
                    </button>
                </div>
            </splide>
            <div class="useplace-cards__item--info">
                <h4>Офисы, рестораны, кафе</h4>
                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.</p>
            </div>
        </div>
    </div>
  </div>
  <div class="usepmodal" v-if="modal">
    <div class="usepmodal-content">
        <div class="usepmodal-content__slide">
            <splide class="usepmodal-content__slide--img">
                <splide-slide>
                    <img src="../assets/images/modal.png" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="../assets/images/modal.png" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="../assets/images/modal.png" alt="">
                </splide-slide>
            </splide>
        </div>
        <div class="usepmodal-content__info">
            <div class="usepmodal-content__info--title">
            <h3>Жилые помещения</h3>
            <div class="usepmodal-content__info--title___btn" @click="closeModal">
            <fa :icon="['fas', 'xmark']" />
            </div>
            </div>
            <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.</p>
            <router-link to="/portfolio">
            <button class="usepmodal-content__info--btn">
                <span>Перейти в каталог коллекции</span>
            </button>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
    options:{
        rewind : true,
          width  : 710,
          gap    : '1rem',
      },
    components: {
        Splide,
        SplideSlide,
  },
  data:() => {
    return {
       modal: false 
    }
  },
  methods: {
    openModal(){
        this.modal = true
    },
    closeModal(){
        this.modal = false
    }
  },
}
</script>

<style>

</style>