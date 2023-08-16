<template>
  <div class="popular container">
    <div class="popular-title">
        <h2>Популярные товары</h2>
        <div class="popular-title__btns">
        <button class="popular-title__btns--1">
            <span>Дизайнерские обои</span>
        </button>
        <button class="popular-title__btns--2">
            <span>Виниловые обои</span>
        </button>
        <button class="popular-title__btns--3">
            <span>Фирменные обои</span>
        </button>
        </div>
    </div>
    <div class="popular-cards">
        <div class="cards-hover1">
        <div class="popular-cards__item1">
            <div class="popular-cards__item1--img">
                <img src="../assets/images/pop1.png" alt="">
                <div class="popular-cards__item1--img___info">
                    <div class="popular-cards__item1--img___info---sale">-25%</div>
                    <div class="popular-cards__item1--img___info---pop">Популярное</div>
                    <div class="popular-cards__item1--img___info---new">Новинка</div>
                </div>
            </div>
            <div class="popular-cards__item1--info">
                <div class="popular-cards__item1--info___name">
                    <h3>Floraison</h3>
                    <p>от 2 552 ₽ / м<sup>2</sup></p>
                </div>
                <div class="popular-cards__item1--info___articul">
                    <h4>Артикул: 11039</h4>
                    <p>от 3 452 ₽ / м<sup>2</sup></p>
                </div>
            </div>
            
        </div>
        <div class="cards-hover1__btn" id="buy1">
            <router-link to="/catalog">
            <button class="cards-hover1__btn--more">Подробнее</button>
            </router-link>
            <a href="#!" class="cards-hover1__btn--buy">Купить в 1 клик</a>
        </div>
        </div>
        <div class="cards-hover1">
        <div class="popular-cards__item1">
            <div class="popular-cards__item1--img">
                <img src="../assets/images/pop2.png" alt="">
                <div class="popular-cards__item1--img___info">
                    <div class="popular-cards__item1--img___info---pop">Популярное</div>
                    <div class="popular-cards__item1--img___info---new">Новинка</div>
                </div>
            </div>
            <div class="popular-cards__item1--info">
                <div class="popular-cards__item1--info___name">
                    <h3>Floraison</h3>
                    <p>от 2 552 ₽ / м<sup>2</sup></p>
                </div>
                <div class="popular-cards__item1--info___articul">
                    <h4>Артикул: 11039</h4>
                    <p>от 3 452 ₽ / м<sup>2</sup></p>
                </div>
            </div>
            
        </div>
        <div class="cards-hover1__btn" id="buy1">
            <router-link to="/catalog">
            <button class="cards-hover1__btn--more">Подробнее</button>
            </router-link>
            <a href="#!" class="cards-hover1__btn--buy">Купить в 1 клик</a>
        </div>
        </div>
        <div class="cards-hover1">
        <div class="popular-cards__item1">
            <div class="popular-cards__item1--img">
                <img src="../assets/images/pop3.png" alt="">
                <div class="popular-cards__item1--img___info">
                    <div class="popular-cards__item1--img___info---have">В наличии</div>
                    <div class="popular-cards__item1--img___info---new">Новинка</div>
                </div>
            </div>
            <div class="popular-cards__item1--info">
                <div class="popular-cards__item1--info___name">
                    <h3>Floraison</h3>
                    <p>от 2 552 ₽ / м<sup>2</sup></p>
                </div>
                <div class="popular-cards__item1--info___articul">
                    <h4>Артикул: 11039</h4>
                    <p>от 3 452 ₽ / м<sup>2</sup></p>
                </div>
            </div>
            
        </div>
        <div class="cards-hover1__btn" id="buy1">
            <router-link to="/catalog">
            <button class="cards-hover1__btn--more">Подробнее</button>
            </router-link>
            <a href="#!" class="cards-hover1__btn--buy">Купить в 1 клик</a>
        </div>
        </div>
        <div class="cards-hover1">
        <div class="popular-cards__item1">
            <div class="popular-cards__item1--img">
                <img src="../assets/images/pop4.png" alt="">
                <div class="popular-cards__item1--img___info">
                    <div class="popular-cards__item1--img___info---sale">-25%</div>
                    <div class="popular-cards__item1--img___info---new">Новинка</div>
                </div>
            </div>
            <div class="popular-cards__item1--info">
                <div class="popular-cards__item1--info___name">
                    <h3>Floraison</h3>
                    <p>от 2 552 ₽ / м<sup>2</sup></p>
                </div>
                <div class="popular-cards__item1--info___articul">
                    <h4>Артикул: 11039</h4>
                    <p>от 3 452 ₽ / м<sup>2</sup></p>
                </div>
            </div>
            
        </div>
        <div class="cards-hover1__btn" id="buy1">
            <router-link to="/catalog">
            <button class="cards-hover1__btn--more">Подробнее</button>
            </router-link>
            <a href="#!" class="cards-hover1__btn--buy">Купить в 1 клик</a>
        </div>
        </div>
    </div>
    <div class="popular-btns">
        <div class="popular-btns__slide">
        <button class="popular-btns__slide--prev">
            <fa :icon="['fas', 'chevron-left']" />
        </button>
        <button class="popular-btns__slide--next">
            <fa :icon="['fas', 'chevron-right']" />
        </button>

        </div>
        <div class="popular-btns__line"></div>
        <router-link to="/catalog">
        <a href="#!" class="popular-btns__more">Смотреть все товары</a>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name:'cards',
    data() {
        return {
            
        }
    },
}
</script>

<style>

</style>