<template>
  <div class="contacts container" >
    <div class="pageabout-title">
    <div class="pageabout-title__routers">
        <router-link to="/">
        <a href="#!" class="pageabout-title__routers--home"><fa :icon="['fas', 'house-chimney-window']" /></a>
        </router-link>
        <p class="pageabout-title__routers--item">/</p>
        <router-link to="/contacts">
        <a href="#!" class="pageabout-title__routers--about">Контакты </a>
        </router-link>
    </div>
        <h1>Контакты </h1>   
    </div>
    <div class="contacts-main">
      <div class="contacts-main__l">
        <div class="contacts-main__l--adress">
          <h3>Адрес:</h3>
          <p>Москва, ул. Новая Басманная, дом 18, строение 2</p>
        </div>
        <div class="contacts-main__l--contact">
          <div class="contacts-main__l--contact___l">
            <h3>Телефон:</h3>
            <p>+7 (495) 150-24-68</p>
          </div>
          <div class="contacts-main__l--contact___r">
            <h3>E-mail:</h3>
            <a href="https://zakaz@stenoprint.ru/">zakaz@stenoprint.ru</a>
          </div>
        </div>
        <div class="contacts-main__l--links">
          <ul>
            <li>
              <a href=""><fa :icon="['fab', 'instagram']" /></a>
            </li>
            <li>
              <a href=""><fa :icon="['fab', 'telegram']" /></a>
            </li>
            <li>
              <a href=""><fa :icon="['fab', 'whatsapp']" /></a>
            </li>
          </ul>
        </div>
        <div class="contacts-main__l--work">
          <h3>Время работы:</h3>
          <p> Пн - Пт: 9:00 - 18:00</p>
        </div>
      </div>
      <div class="contacts-main__r">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.379015708133!2d37.661343599999995!3d55.7692889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a8770517b5b%3A0x4ebbd212cc8ab6d4!2z0J3QvtCy0LDRjyDQkdCw0YHQvNCw0L3QvdCw0Y8g0YPQuy4sIDE4INGB0YLRgNC-0LXQvdC40LUgMiwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEwNzA3OA!5e0!3m2!1sru!2s!4v1691482894292!5m2!1sru!2s" width="708" height="400" style="border-radius:30px; border:none;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
  <Offer/>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Offer from '@/components/Offer.vue';

export default {
    components: { Footer, Offer }
}
</script>

<style>

</style>