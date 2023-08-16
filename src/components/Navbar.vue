<template>
  <div class="navbar container">
    <nav class="navbar-logo">
        <RouterLink class="navbar-nav__logo" to="/">
        <img src="../assets/images/logo.svg" alt="" class="navbar-logo__img">
    
      </RouterLink>
    </nav>
    <div class="navbar-btns">
        <button>
            <fa :icon="['fas', 'magnifying-glass']" class="navbar-btns_search"/> 
        </button>
        <button>
            <fa :icon="['fas', 'phone']" class="navbar-btns_phone" />
        </button>
        <button>
            <fa :icon="['fas', 'bars']" class="catalog-open" @click="menuOpen"/>
        </button>
    </div>
    <nav class="navbar-nav">
        <div class="navbar-nav__search">
            <div class="navbar-nav__search--input">
                <input type="text" placeholder="Поиск..." class="navbar-nav__search--input___in">
            <fa :icon="['fas', 'magnifying-glass']"  class="navbar-nav__search--input___icon"/>
            </div>
            <div class="navbar-nav__search--contact">
                <ul>
                    <li>
                        <h5>Позвонить нам:</h5>
                        <p>+7 (555) 888-98-66</p>
                    </li>
                    <li>
                        <h5>Написать нам:</h5>
                        <a href="#!">info@stenoprint.ru</a>
                    </li>
                </ul>
                <div class="navbar-nav__search--links " >
                    <a href="#!"><fa :icon="['fab', 'instagram']" /></a>
                    <a href="#!"><fa :icon="['fab', 'vk']" /></a>
                </div>
            </div>
        </div>
        <div class="navbar-nav__list">
            <div class="navbar-nav__list--btn" @click="btnToogle">
                <fa v-if="menuIcon" :icon="['fab', 'delicious']" />
                <fa v-else :icon="['fas', 'xmark']" />
                <p>Каталог товаров</p>
            </div>
            <ul>
                <li>
                    <router-link to="/ourservices">
                    <a href="#!">Наши услуги</a>
                    </router-link>
                    </li>
                <li>
                    <router-link to="/pageabout" >
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
    </nav>
  </div>
    <div class="catalog-btn" v-if="btnMenu" @click="btnToogle">
        <div class="catalog-btn__right">
                <fa :icon="['fab', 'delicious']" />
                <p>Каталог товаров</p>
        </div>
                <fa :icon="['fas', 'chevron-down']" />
            </div>
  <transition name="opencatalog" >
  <div class="catalog" v-if="isElvisible">
    <div class="catalog-card">
        <div class="catalog-card__title">
        <img src="../assets/images/imgAva1.png" alt="">
        <router-link to="/catalog">
            <h3>Дизайнерские обои</h3>
        
        </router-link>
        </div>
        <div class="catalog-card__list">
            <ul>
                <li>
                    <router-link to="/catalog" replace>
                    
                    <a href="#!">Дизайнерские обои</a>
                    </router-link>
                    </li>
                <li><a href="#!">Фирменные обои</a></li>
                <li><a href="#!">Виниловые обои</a></li>
                <li><a href="#!">Дизайнерские обои</a></li>
                <li><a href="#!">Фирменные обои</a></li>
                <li><a href="#!">Виниловые обои</a></li>
            </ul>
        </div>
    </div>
    <div class="catalog-card">
        <div class="catalog-card__title">
        <img src="../assets/images/imgAva2.png" alt="">
            <h3>Фирменные обои</h3>
        </div>
        <div class="catalog-card__list">
            <ul>
                <li><a href="#!">Дизайнерские обои</a></li>
                <li><a href="#!">Фирменные обои</a></li>
                <li><a href="#!">Виниловые обои</a></li>
                <li><a href="#!">Дизайнерские обои</a></li>
                <li><a href="#!">Фирменные обои</a></li>
                <li><a href="#!">Виниловые обои</a></li>
            </ul>
        </div>
    </div>
    <div class="catalog-card">
        <div class="catalog-card__title">
        <img src="../assets/images/imgAva3.png" alt="">
            <h3>Виниловые обои</h3>
        </div>
        <div class="catalog-card__list">
            <ul>
                <li><a href="#!">Дизайнерские обои</a></li>
                <li><a href="#!">Фирменные обои</a></li>
                <li><a href="#!">Виниловые обои</a></li>
                <li><a href="#!">Дизайнерские обои</a></li>
                <li><a href="#!">Фирменные обои</a></li>
                <li><a href="#!">Виниловые обои</a></li>
            </ul>
        </div>
    </div>
    <div class="catalog-card">
        <div class="catalog-card__title">
        <img src="../assets/images/imgAva1.png" alt="">
            <h3>Дизайнерские обои</h3>
        </div>
        <div class="catalog-card__list">
            <ul>
                <li><a href="#!">Дизайнерские обои</a></li>
                <li><a href="#!">Фирменные обои</a></li>
                <li><a href="#!">Виниловые обои</a></li>
                <li><a href="#!">Дизайнерские обои</a></li>
                <li><a href="#!">Фирменные обои</a></li>
                <li><a href="#!">Виниловые обои</a></li>
            </ul>
        </div>
    </div>
  </div>
  </transition>
</template>

<script>

export default {
    data() {
    return {
      navbarList: [
        {url: '/', name: 'Главная'},
        {url: '/ourservices', name: 'Наши услуги'},
        {url: '/pageabout', name: 'О студии'},
      ]
    }
  },
    data:()=> {
        return {
            isElvisible: false,
            btnMenu: false,
            menuIcon: true,
        }
    },
    methods: {
        btnToogle(){
            this.isElvisible = !this.isElvisible
            this.menuIcon = !this.menuIcon
        },
        menuOpen(){
            this.btnMenu = !this.btnMenu
        }
    },
    
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>