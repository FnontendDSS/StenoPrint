<template>
    <div class="catalogcard">
        <div class="ourservicesdet-title">
                <div class="ourservicesdet-title__routers">
                    <router-link to="/" replace>
                <a href="#!" class="pageabout-title__routers--home"><fa :icon="['fas', 'house-chimney-window']" /></a>
                </router-link>
                <p class="pageabout-title__routers--item">/</p>
                <router-link to="/catalog" replace>
                <a href="#!" class="pageabout-title__routers--about">Каталог товаров</a>
                </router-link>
                <p class="pageabout-title__routers--item">/</p>
                <router-link to="/catalogmore" replace>
                <a href="#!" class="pageabout-title__routers--about">Дизайнерские обои</a>
                </router-link>
                <p class="pageabout-title__routers--item">/</p>
                <router-link to="/catalogcard" replace>
                <a href="#!" class="pageabout-title__routers--about">Floraison</a>
                </router-link>
                </div>
            </div>
        <div class="catalogcard-main">
            <div class="catalogcard-main__l">
                <div class="catalogcard-main__l--img">
                    <img src="../assets/images/catalogcard1.png" alt="" class="catalogcard-main__l--img___1"> 
                    <img src="../assets/images/catalogcard2.png" alt="" class="catalogcard-main__l--img___2">
                    <img src="../assets/images/catalogcard3.png" alt="" class="catalogcard-main__l--img___3">
                </div>
                <div class="catalogcard-main__l--text">
                    <div class="catalogcard-main__l--text___title">
                        <div class="catalogcard-main__l--text___title---head">
                            <h3>Заголовок</h3>
                            <span @click="openOrClose1">
                                <fa v-if="cardArrow1" :icon="['fas', 'chevron-down']" />
                                <fa v-else :icon="['fas', 'chevron-up']" />
                            </span>
                        </div>
                        <transition>
                        <div class="catalogcard-main__l--text___title---p" v-if="lCard1">
                            <p>Но базовый вектор развития влечет за собой процесс внедрения и модернизации соответствующих условий активизации. В целом, конечно, сплочённость команды профессионалов требует определения и уточнения поставленных обществом задач.</p>
                            <p>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач. Принимая во внимание показатели успешности, реализация намеченных плановых заданий в значительной степени обусловливает важность анализа существующих паттернов поведения.</p>
                        </div>
                        </transition>
                    </div>
                    <div class="catalogcard-main__l--text___info">
                        <div class="catalogcard-main__l--text___info---title">
                            <h3>Характеристики:</h3>
                            <span @click="openOrClose2">
                                <fa v-if="cardArrow2" :icon="['fas', 'chevron-down']" />
                                <fa v-else :icon="['fas', 'chevron-up']" />
                            </span>
                        </div>
                        <transition>
                        <div class="catalogcard-main__l--text___info---info" v-if="lCard2">
                            <div class="catalogcard-main__l--text___info---info____card">
                                <h4>Материал</h4>
                                <p>Флизелин, флизелин с акриловым покрытием (шовный и бесшовный), фреска.</p>
                            </div>
                            <div class="catalogcard-main__l--text___info---info____card">
                                <h4>Экологичность</h4>
                                <p>Все наши обои на 100% экологичны. Сертификаты: UL GREENGUARD GOLD (чернила), OEKO-TEX® Standard 100 (Материалы).</p>
                            </div>
                            <div class="catalogcard-main__l--text___info---info____card">
                                <h4>Пожаробезобасность</h4>
                                <p>Пожарный сертификат Г1 (Слабогорючие материалы).</p>
                            </div>
                            <div class="catalogcard-main__l--text___info---info____card">
                                <h4>Запас по размерам</h4>
                                <p>Все наши обои на 100% экологичны. Сертификаты: UL GREENGUARD GOLD (чернила), OEKO-TEX® Standard 100 (Материалы).</p>
                            </div>
                        </div>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="catalogcard-main__r">
                <div class="catalogcard-main__r--title">
                <h1>Floraison</h1>
                <h4>Артикул: 11039</h4>
                <p>Но базовый вектор развития влечет за собой процесс внедрения и модернизации соответствующих условий активизации. В целом, конечно, сплочённость команды профессионалов требует определения и уточнения поставленных обществом задач.
</p>
                </div>
                <div class="catalogcard-main__r--color">
                    <h3>Цвет:</h3>
                    <div class="catalogcard-main__r--color___img">
                        <img src="../assets/images/pop2.png" alt="">
                        <img src="../assets/images/pop1.png" alt="">
                        <img src="../assets/images/pop3.png" alt="">
                    </div>
                </div>
                <div class="catalogcard-main__r--size">
                    <h3>Размер:</h3>
                    <div class="catalogcard-main__r--size___input">
                        <div class="catalogcard-main__r--size___input---l">
                            <h5>Высота:</h5>
                            <input type="text" placeholder="1 метр">
                        </div>
                        <div class="catalogcard-main__r--size___input---m">X</div>
                        <div class="catalogcard-main__r--size___input---r">
                            <h5>Ширина: </h5>
                            <input type="text" placeholder="1 метр">
                        </div>
                    </div>
                </div>
                <div class="catalogcard-main__r--material">
                    <h3>Материал:</h3>
                    <div class="catalogcard-main__r--material___card">
                        <h5>Бесшовные материалы:</h5>
                        <div class="carddiv">

                        <div class="catalogcard-main__r--material___card---item">
                            <img src="../assets/images/filtr1.png" alt="" class="catalogcard-main__r--material___card---item____img">
                            <div class="catalogcard-main__r--material___card---item____text">
                                <h5>Серия R GOLD</h5>
                                <p>Зеркальная пленка</p>
                            </div>
                        </div>
                        <div class="catalogcard-main__r--material___card---item">
                            <img src="../assets/images/filtr2.png" alt="" class="catalogcard-main__r--material___card---item____img">
                            <div class="catalogcard-main__r--material___card---item____text">
                                <h5>Серия R BLUE</h5>
                                <p>Тонирующая пленка</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="catalogcard-main__r--material___card">
                        <h5>Шовные материалы:</h5>
                        <div class="carddiv">

                        <div class="catalogcard-main__r--material___card---item">
                            <img src="../assets/images/filtr1.png" alt="" class="catalogcard-main__r--material___card---item____img">
                            <div class="catalogcard-main__r--material___card---item____text">
                                <h5>Серия R GOLD</h5>
                                <p>Зеркальная пленка</p>
                            </div>
                        </div>
                        <div class="catalogcard-main__r--material___card---item">
                            <img src="../assets/images/filtr2.png" alt="" class="catalogcard-main__r--material___card---item____img">
                            <div class="catalogcard-main__r--material___card---item____text">
                                <h5>Серия R BLUE</h5>
                                <p>Тонирующая пленка</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="catalogcard-main__r--instruction">
                    <a href="#!">Смотреть инструкцию по оклейке Зеркальной пленки</a>
                    <span><fa :icon="['fas', 'chevron-right']" /></span>
                </div>
                <div class="catalogcard-main__r--price">
                    <h2>2 552 ₽</h2>
                    <h4>552 ₽</h4>
                    <p>/м<sup>2</sup></p>
                </div>
                <div class="catalogcard-main__r--btns">
                    <button class="catalogcard-main__r--btns___l" @click="cardModOpen">
                        <span>Оформить заказ</span>
                    </button>
                    <div class="catalogcard-main__r--btns___r">
                        <span><fa :icon="['fas', 'phone']" /></span>
                        <p>Требуется консультация</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="catalogcard-materials">
            <div class="catalogcard-materials__title">
                <h2>Материалы</h2>
                <p>С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.</p>
                <div class="catalogcard-materials__title--line">
                    <p>По рулонам</p>
                    <div class="catalogcard-materials__title--line__item"></div>
                    <p>Бесшовные</p>
                    <div class="catalogcard-materials__title--line__item"></div>
                </div>
            </div>
            <div class="catalogcard-materials__cards">
                <div class="catalogcard-materials__cards--item">
                    <img src="../assets/images/materialscard.png" alt="">
                    <div class="catalogcard-materials__cards--item___info">
                        <h4>Scandi</h4>
                        <p>С помощью опыта нашей команды преобразить любые помещения не составит труда.</p>
                    </div>
                </div>
                <div class="catalogcard-materials__cards--item">
                    <img src="../assets/images/materialscard.png" alt="">
                    <div class="catalogcard-materials__cards--item___info">
                        <h4>Scandi</h4>
                        <p>С помощью опыта нашей команды преобразить любые помещения не составит труда.</p>
                    </div>
                </div>
                <div class="catalogcard-materials__cards--item">
                    <img src="../assets/images/materialscard.png" alt="">
                    <div class="catalogcard-materials__cards--item___info">
                        <h4>Scandi</h4>
                        <p>С помощью опыта нашей команды преобразить любые помещения не составит труда.</p>
                    </div>
                </div>
                <div class="catalogcard-materials__cards--item">
                    <img src="../assets/images/materialscard.png" alt="">
                    <div class="catalogcard-materials__cards--item___info">
                        <h4>Scandi</h4>
                        <p>С помощью опыта нашей команды преобразить любые помещения не составит труда.</p>
                    </div>
                </div>
                <div class="catalogcard-materials__cards--item">
                    <img src="../assets/images/materialscard.png" alt="">
                    <div class="catalogcard-materials__cards--item___info">
                        <h4>Scandi</h4>
                        <p>С помощью опыта нашей команды преобразить любые помещения не составит труда.</p>
                    </div>
                </div>
                <div class="catalogcard-materials__cards--item">
                    <img src="../assets/images/materialscard.png" alt="">
                    <div class="catalogcard-materials__cards--item___info">
                        <h4>Scandi</h4>
                        <p>С помощью опыта нашей команды преобразить любые помещения не составит труда.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Popular/>
    <Footer/>
    <div class="offercardmod" v-if="cardmod">
        <div class="offercardmod-card">
            <div class="offercardmod-card__title">
                <div class="offercardmod-card__title--head">
                    <h3>Оформление заказа</h3>
                    <button class="offercardmod-card__title--head___btn" @click="cardModClose"> 
                        <span>
                            <fa :icon="['fas', 'xmark']" />
                        </span>
                    </button>
                </div>
                <div class="offercardmod-card__title--text">
                    <p>Проверьте ваш заказ, заполните форму и наш менеджер свяжется с вами для уточнения деталей в ближайшее время.</p>
                </div>
            </div>
            <div class="offercardmod-card__info">
                <img src="../assets/images/pop1.png" alt="">
                <div class="offercardmod-card__info--text">
                    <h5>Floraison</h5>
                    <p>Дизайнерские обои</p>
                </div>
                <div class="offercardmod-card__info--price">
                    <h4>2 552 ₽</h4>
                    <p>/ 50 м<sup>2</sup></p>
                </div>
            </div>
            <div class="offercardmod-card__help" v-if="btnOffer">
                <div class="offercardmod-card__help--title">
                    <h3>Требуется ли цветопроба?</h3>
                    <span class="offercardmod-card__help--title___btn" @click="infoBtn">
                        <fa :icon="['fas', 'info']" />
                    </span >
                    <div class="offercardmod-card__help--title___info" v-if="btninfo">
                        <p>Цветопередача готовых обоев может отличатся от макета на экране компьютера. Если необходимо точно подобрать цветовой тон фотообоев, мы рекомендуем предварительно согласовать цветопробу.</p>
                    </div>
                </div>
                <div class="offercardmod-card__help--btns">
                    <button class="offercardmod-card__help--btns___y">
                        <span>Да</span>
                    </button>
                    <button class="offercardmod-card__help--btns___n" @click="btnNo">
                        <span>Нет</span>
                    </button>
                </div>
            </div>
            <div class="offercardmod-card__inputs" v-else>
                <div class="offercardmod-card__inputs--name">
                    <h5>Ваше имя:</h5>
                    <input type="text" placeholder="Иван">
                </div>
                <div class="offercardmod-card__inputs--phone">
                    <h5>Номер телефона:</h5>
                    <input type="tel" placeholder="+7 (___) ___-__-__">
                </div>
            </div>
            <div class="offercardmod-card__btn">
                <button class="offercardmod-card__btn--true" v-if="btnOffer">
                    <span>Оформить заказ</span>
                </button>
                <button class="offercardmod-card__btn--false" v-else>
                    <span>Оформить заказ</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Popular from '@/components/Popular.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: { Popular, Footer },
    data() {
        return {
            cardmod: false,
            btnOffer: true,
            btninfo: false,
            lCard1: false,
            lCard2: false,
            cardArrow1: true,
            cardArrow2: true,
        }
    },
    methods: {
        cardModClose(){
            this.cardmod = false
        },
        cardModOpen(){
            this.cardmod = true
        },
        btnNo(){
            this.btnOffer = !this.btnOffer
        },
        openOrClose1(){
            this.lCard1 = !this.lCard1
            this.cardArrow1 = !this.cardArrow1
        },
        openOrClose2(){
            this.lCard2 = !this.lCard2
            this.cardArrow2 = !this.cardArrow2
        },
        infoBtn(){
            this.btninfo = !this.btninfo
        }
    },

}
</script>

