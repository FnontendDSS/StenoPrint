<template>
  <div class="footer container">
    <div class="footer-main">
        <div class="footer-main__catalog">
            <h3>Каталог товаров</h3>
            <ul>
                <li>
                    <a href="#!">Дизайнерские обои</a>
                    <a href="#!">Фирменные обои</a>
                    <a href="#!">Виниловые обои</a>
                    <a href="#!">Дизайнерские обои</a>
                    <a href="#!">Фирменные обои</a>
                    <a href="#!">Виниловые обои</a>
                </li>
                <li>
                    <a href="#!">Виниловые обои</a>
                    <a href="#!">Дизайнерские обои</a>
                    <a href="#!">Фирменные обои</a>
                    <a href="#!">Виниловые обои</a>
                    <a href="#!">Дизайнерские обои</a>
                </li>
            </ul>
        </div>
        <div class="footer-main__service">
            <router-link to="/ourservices">
            <h3 >Наши услуги</h3>
        </router-link>
            <ul>
                <li><a href="#!">Создание уникального дизайна в квартире, доме, офисе</a></li>
                <li>
                    <router-link to="/ourservicesdet" replace>
                    
                    <a href="#!">Оформление офисов и коммерческих помещений в фирменном стиле</a>
                    </router-link>
                    </li>
                <li><a href="#!">Функциональный дизайн. Нанесение указателей, вывесок</a></li>
                <li><a href="#!">Печать фотографий и коллажей</a></li>
            </ul>
        </div>
        <div class="footer-main__about">
            <ul>
                <li>
                    <router-link to="/pageabout">
                        <a href="#!">О студии</a>
                    </router-link>
                    </li>
                <li>
                    <router-link to="/portfolio">
                        <a href="#!">Портфолио</a>
                    </router-link>
                    </li>
                <li>
                    <router-link to="/blogpage">
                        <a href="#!">Блог</a>
                    </router-link>
                    </li>
                <li>
                    <router-link to="/contacts">
                        <a href="#!">Контакты</a>
                    </router-link>
                    </li>
            </ul>
        </div>
        <div class="footer-main__links">
            <div class="footer-main__links--phone">
                <h5>Позвонить нам:</h5>
                <p>+7 (555) 888-98-66 </p>
            </div>
            <div class="footer-main__links--mail">
                <h5>Написать нам:</h5>
                <a href="#!">info@stenoprint.ru</a>
            </div>
            <div class="footer-main__links--nets">
                <fa :icon="['fab', 'instagram']" />
                <fa :icon="['fab', 'vk']" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>