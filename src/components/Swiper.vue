<template>
    <div class="swiper container">
      <splide :options="options">
    <splide-slide>
      <div class="swiper-bg">
        <img src="../assets/images/image1.png" alt="" class="swiper-bg__img">
        <button class="swiper-btn__left">
        <fa :icon="['fas', 'angle-left']"/>
        </button>
        <div class="swiper-content">
          <h2>Художественное оформление вертикальных поверхностей</h2>
          <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
          <router-link to="/catalog">
          <button class="swiper-content__btnMore">
            <span>Узнать подробнее</span>
          </button>
          
          </router-link>
        </div>
        <button class="swiper-btn__right" >
        <fa :icon="['fas', 'angle-right']" /> 
        </button>
      </div>
    </splide-slide>
    <splide-slide>
      <div class="swiper-bg">
        <img src="../assets/images/image1.png" alt="" class="swiper-bg__img">
        <button class="swiper-btn__left">
        <fa :icon="['fas', 'angle-left']"/>
        </button>
        <div class="swiper-content">
          <h2>Художественное оформление вертикальных поверхностей</h2>
          <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
          <router-link to="/catalog">
          <button class="swiper-content__btnMore">
            <span>Узнать подробнее</span>
          </button>
          
          </router-link>
        </div>
        <button class="swiper-btn__right" >
        <fa :icon="['fas', 'angle-right']" /> 
        </button>
      </div>
    </splide-slide>
    <splide-slide>
      <div class="swiper-bg">
        <img src="../assets/images/image1.png" alt="" class="swiper-bg__img">
        <button class="swiper-btn__left">
        <fa :icon="['fas', 'angle-left']"/>
        </button>
        <div class="swiper-content">
          <h2>Художественное оформление вертикальных поверхностей</h2>
          <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
          <router-link to="/catalog">
          <button class="swiper-content__btnMore">
            <span>Узнать подробнее</span>
          </button>
          
          </router-link>
        </div>
        <button class="swiper-btn__right" >
        <fa :icon="['fas', 'angle-right']" /> 
        </button>
      </div>
    </splide-slide>
    <splide-slide>
      <div class="swiper-bg">
        <img src="../assets/images/image1.png" alt="" class="swiper-bg__img">
        <button class="swiper-btn__left">
        <fa :icon="['fas', 'angle-left']"/>
        </button>
        <div class="swiper-content">
          <h2>Художественное оформление вертикальных поверхностей</h2>
          <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
          <router-link to="/catalog">
          <button class="swiper-content__btnMore">
            <span>Узнать подробнее</span>
          </button>
          
          </router-link>
        </div>
        <button class="swiper-btn__right" >
        <fa :icon="['fas', 'angle-right']" /> 
        </button>
      </div>
    </splide-slide>
    <splide-slide>
      <div class="swiper-bg">
        <img src="../assets/images/image1.png" alt="" class="swiper-bg__img">
        <button class="swiper-btn__left">
        <fa :icon="['fas', 'angle-left']"/>
        </button>
        <div class="swiper-content">
          <h2>Художественное оформление вертикальных поверхностей</h2>
          <p>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
          <router-link to="/catalog">
          <button class="swiper-content__btnMore">
            <span>Узнать подробнее</span>
          </button>
          
          </router-link>
        </div>
        <button class="swiper-btn__right" >
        <fa :icon="['fas', 'angle-right']" /> 
        </button>
      </div>
    </splide-slide>
    
  </splide>

    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  data() {
    return {
      options:{
        rewind : true,
          width  : 1430,
          gap    : '1rem',
      },
    }
  },
  components: {
    Splide,
    SplideSlide,
  },
  methods: {
    
  },
}
</script>

<style>

</style>