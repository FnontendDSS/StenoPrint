<template>
  <div class="services container">
    <div class="services-title">
        <h2>Наши услуги</h2>
        <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
    </div>
    <div class="services-cards">
        <div class="services-cards__card">
            <div class="services-cards__card--imgs">
            <img src="../assets/images/SerAva1.png" alt="" class="services-cards__card--imgs__bg">
                <img src="../assets/images/underline.svg" alt="" class="services-cards__card--imgs__line">
            </div>
            <div class="services-cards__card--text">
            <h3>Создание уникального дизайна в квартире, доме, офисе</h3>
            <p>Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
            <router-link to="/ourservices">
                <button class="services-cards__card--btn">
                    <span>Узнать подробнее</span>
                    <fa :icon="['fas', 'chevron-right']" />
                </button>
            </router-link>
            </div>
        </div>
        <div class="services-cards__card">
            <div class="services-cards__card--imgs">
            <img src="../assets/images/SerAva2.png" alt="" class="services-cards__card--imgs__bg">
                <img src="../assets/images/underline.svg" alt="" class="services-cards__card--imgs__line">
            </div>
            <div class="services-cards__card--text">
            <h3>Оформление офисов и коммерческих помещений в фирменном стиле</h3>
            <p>Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
            <router-link to="/ourservices">
                <button class="services-cards__card--btn">
                    <span>Узнать подробнее</span>
                    <fa :icon="['fas', 'chevron-right']" />
                </button>
            </router-link>
            </div>
        </div>
        <div class="services-cards__card">
            <div class="services-cards__card--imgs">
            <img src="../assets/images/SerAva3.png" alt="" class="services-cards__card--imgs__bg">
                <img src="../assets/images/underline.svg" alt="" class="services-cards__card--imgs__line">
            </div>
            <div class="services-cards__card--text">
            <h3>Функциональный дизайн. Нанесение указателей, вывесок</h3>
            <p>Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
            <router-link to="/ourservices">
                <button class="services-cards__card--btn">
                    <span>Узнать подробнее</span>
                    <fa :icon="['fas', 'chevron-right']" />
                </button>
            </router-link>
            </div>
        </div>
        <div class="services-cards__card">
            <div class="services-cards__card--imgs">
            <img src="../assets/images/SerAva4.png" alt="" class="services-cards__card--imgs__bg">
                <img src="../assets/images/underline.svg" alt="" class="services-cards__card--imgs__line">
            </div>
            <div class="services-cards__card--text">
            <h3>Печать фотографий и коллажей</h3>
            <p>Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
            <router-link to="/ourservices">
            <button class="services-cards__card--btn">
                <span>Узнать подробнее</span>
                <fa :icon="['fas', 'chevron-right']" />
            </button>
            </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

