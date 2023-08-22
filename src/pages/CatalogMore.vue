<template>
  <div class="catalogpage">
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
        </div>
        <h1>Дизайнерские обои</h1>
    </div>
        <div class="catalogpage-category">
            <div id="anima">
                </div>
                <div class="catalogpage-category__cards">
                    <div class="catalogpage-category__cards--img">
                        <img src="../assets/images/ava1.png" alt="" class="catalogpage-category__cards--img___1">
                        <img src="../assets/images/ava2.png" alt="" class="catalogpage-category__cards--img___2">
                        <img src="../assets/images/ava3.png" alt="" class="catalogpage-category__cards--img___3">
                    </div>
                    <div class="catalogpage-category__cards--info">
                        <h3>Дизайнерские обои</h3>
                        <div class="catalogpage-category__cards--info___filtr">150 товаров</div>
                    </div>
                </div>
        </div>
    <div class="catalogpage-main">
        <div class="catalogpage-main__filtr">
            <div class="catalogpage-main__filtr--item">
                <div class="catalogpage-main__filtr--item___title" @click="openOrCloseFiltr">
                    <h4>Коллекции:</h4> <p class="catalogpage-main__filtr--item___title---text">Акварель, Модерн, Цветы
</p>
                    <span >
                        <fa v-if="filtrarrow" :icon="['fas', 'chevron-down']" />
                        <fa v-else :icon="['fas', 'chevron-up']" />
                        </span>
                </div>
                <transition>
                <div class="catalogpage-main__filtr--item___main" v-if="filtrItem">
                    <div class="catalogpage-main__filtr--item___main---inputs" >
                        <label> <input type="checkbox"> <h5>Градиенты</h5></label>
                        <p>13</p>
                    </div>
                    <div class="catalogpage-main__filtr--item___main---inputs">
                        <label> <input type="checkbox"> <h5>Акварель</h5></label>
                        <p>24</p>
                    </div>
                    <div class="catalogpage-main__filtr--item___main---inputs">
                        <label> <input type="checkbox"> <h5>Модерн</h5></label>
                        <p>16</p>
                    </div>
                    <div class="catalogpage-main__filtr--item___main---inputs">
                        <label> <input type="checkbox"> <h5>Цветы</h5></label>
                        <p>42</p>
                    </div>
                    <div class="catalogpage-main__filtr--item___main---inputs">
                        <label> <input type="checkbox"> <h5>Классика</h5></label>
                        <p>31</p>
                    </div>
                </div>
                </transition>
            </div>
            <div class="catalogpage-main__filtr--item">
                <div class="catalogpage-main__filtr--item___title"   @click="openOrCloseFiltr3">
                    <h4>Цвет</h4>
                    <span>
                        <fa v-if="filtrarrow3" :icon="['fas', 'chevron-down']" />
                        <fa v-else :icon="['fas', 'chevron-up']" />
                        </span>
                </div>
                <transition>
               <div class="catalogpage-main__filtr--item___main" v-if="filtrItem3">
                <div class="catalogpage-main__filtr--item___main---info">
                <div class="catalogpage-main__filtr--item___main---info____img">
                    <img src="../assets/images/filtr1.png" alt="">
                </div>
                    <div class="catalogpage-main__filtr--item___main---info____text">
                        <h5>Серия R GOLD</h5>
                        <p>Зеркальная пленка</p>
                    </div>
                <p class="catalogpage-main__filtr--item___main---info____num">20</p>

                </div>
                <div class="catalogpage-main__filtr--item___main---info">
                <div class="catalogpage-main__filtr--item___main---info____img">
                    <img src="../assets/images/filtr2.png" alt="">
                </div>
                    <div class="catalogpage-main__filtr--item___main---info____text">
                        <h5>Серия R BLUE</h5>
                        <p>Тонирующая пленка</p>
                    </div>
                <p class="catalogpage-main__filtr--item___main---info____num">15</p>

                </div>
                <div class="catalogpage-main__filtr--item___main---info">
                <div class="catalogpage-main__filtr--item___main---info____img">
                    <img src="../assets/images/filtr3.png" alt="">
                </div>
                    <div class="catalogpage-main__filtr--item___main---info____text">
                        <h5>Серия SR PS</h5>
                        <p>Матовые тонирующие</p>
                    </div>
                <p class="catalogpage-main__filtr--item___main---info____num">43</p>

                </div>
                <div class="catalogpage-main__filtr--item___main---info">
                <div class="catalogpage-main__filtr--item___main---info____img">
                    <img src="../assets/images/filtr4.png" alt="">
                </div>
                    <div class="catalogpage-main__filtr--item___main---info____text">
                        <h5>Серия ATRIUM</h5>
                        <p>Металлизированные с блеском</p>
                    </div>
                <p class="catalogpage-main__filtr--item___main---info____num">88</p>

                </div>
               </div>
                </transition>
            </div>
            <div class="catalogpage-main__filtr--item">
                <div class="catalogpage-main__filtr--item___title"  @click="openOrCloseFiltr4">
                    <h4>Материал</h4>
                    <span>
                        <fa v-if="filtrarrow4" :icon="['fas', 'chevron-down']" />
                        <fa v-else :icon="['fas', 'chevron-up']" />
                        </span>
                </div>
                <transition>
               <div class="catalogpage-main__filtr--item___main" v-if="filtrItem4">
                <div class="catalogpage-main__filtr--item___main---info">
                <div class="catalogpage-main__filtr--item___main---info____img">
                    <img src="../assets/images/filtr1.png" alt="">
                </div>
                    <div class="catalogpage-main__filtr--item___main---info____text">
                        <h5>Серия R GOLD</h5>
                        <p>Зеркальная пленка</p>
                    </div>
                <p class="catalogpage-main__filtr--item___main---info____num">20</p>

                </div>
                <div class="catalogpage-main__filtr--item___main---info">
                <div class="catalogpage-main__filtr--item___main---info____img">
                    <img src="../assets/images/filtr2.png" alt="">
                </div>
                    <div class="catalogpage-main__filtr--item___main---info____text">
                        <h5>Серия R BLUE</h5>
                        <p>Тонирующая пленка</p>
                    </div>
                <p class="catalogpage-main__filtr--item___main---info____num">15</p>

                </div>
                <div class="catalogpage-main__filtr--item___main---info">
                <div class="catalogpage-main__filtr--item___main---info____img">
                    <img src="../assets/images/filtr3.png" alt="">
                </div>
                    <div class="catalogpage-main__filtr--item___main---info____text">
                        <h5>Серия SR PS</h5>
                        <p>Матовые тонирующие</p>
                    </div>
                <p class="catalogpage-main__filtr--item___main---info____num">43</p>

                </div>
                <div class="catalogpage-main__filtr--item___main---info">
                <div class="catalogpage-main__filtr--item___main---info____img">
                    <img src="../assets/images/filtr4.png" alt="">
                </div>
                    <div class="catalogpage-main__filtr--item___main---info____text">
                        <h5>Серия ATRIUM</h5>
                        <p>Металлизированные с блеском</p>
                    </div>
                <p class="catalogpage-main__filtr--item___main---info____num">88</p>

                </div>
               </div> 
                </transition>
            </div>
            <div class="catalogpage-main__filtr--btns">
                <button class="catalogpage-main__filtr--btns___l">
                    <span>Применить</span>
                </button>
                <button class="catalogpage-main__filtr--btns___r">
                    <span><fa :icon="['fas', 'xmark']" /> Сбросить</span>
                </button>
            </div>
        </div>
        <Splide :options="options" id="splideCatalog">
                <SplideSlide>
            <div class="catalogpage-main__cards--category">
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop1.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop2.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop3.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----have">В наличии</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop4.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop1.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop2.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop3.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----have">В наличии</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop4.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop1.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop2.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop3.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----have">В наличии</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop4.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop4.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop1.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop2.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
            </div>
                </SplideSlide>
                <SplideSlide>
            <div class="catalogpage-main__cards--category">
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop1.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop2.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop3.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----have">В наличии</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop4.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop1.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop2.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop3.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----have">В наличии</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop4.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop1.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop2.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop3.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----have">В наличии</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop4.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop4.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop1.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop2.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
            </div>
                </SplideSlide>
                <SplideSlide>
            <div class="catalogpage-main__cards--category">
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop1.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop2.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop3.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----have">В наличии</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop4.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop1.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop2.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop3.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----have">В наличии</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop4.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop1.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop2.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop3.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----have">В наличии</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop4.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop4.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop1.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----sale">-25%</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
                <router-link to="/catalogcard">
                <div class="catalogpage-main__cards--category___item">
                    <div class="catalogpage-main__cards--category___item---img">
                        <img src="../assets/images/pop2.png" alt="">
                        <div class="catalogpage-main__cards--category___item---img____btns">
                            <div class="catalogpage-main__cards--category___item---img____btns----pop">Популярное</div>
                            <div class="catalogpage-main__cards--category___item---img____btns----new">Новинка</div>
                        </div>
                    </div>
                    <div class="catalogpage-main__cards--category___item--info">
                        <div class="catalogpage-main__cards--category___item--info___name">
                            <h4>Floraison</h4>
                            <p>от 2 552 ₽ / м2</p>
                        </div>
                        <div class="catalogpage-main__cards--category___item--info___price">
                            <h5>Артикул: 11039</h5>
                            <p>от 3 452 ₽ / м2</p>
                        </div>
                    </div>
                </div>
                </router-link>
            </div>
                </SplideSlide>
            </Splide>
    </div>
  </div>
  <Footer/>
  <button class="instruction">
    <div class="instruction-icon" @click="openOrCloseInsrtuction"><fa :icon="['fas', 'paintbrush']" /></div>
    <div class="instruction-text" v-if="instuctionItem"><p>Cмотреть инструкции</p></div>
  </button>
</template>

<script>
import Footer from '@/components/Footer.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  components: { Footer,Splide, SplideSlide  },
    data() {
        return {
            instuctionItem: false,
            filtrItem: false,
            filtrItem2: false,
            filtrItem3: false,
            filtrItem4: false,
            filtrarrow: true,
            filtrarrow2: true,
            filtrarrow3: true,
            filtrarrow4: true,
            options:{
           rewind: true,
           width: 1070,
           gap: '1rem',
           arrows: false,
         },
        }
    },
    methods: {
        openOrCloseFiltr(){
            this.filtrItem = !this.filtrItem
              this.filtrarrow = !this.filtrarrow
        },
        openOrCloseFiltr2(){
            this.filtrItem2 = !this.filtrItem2
            this.filtrarrow2 = !this.filtrarrow2
        },
        openOrCloseFiltr3(){
            this.filtrItem3 = !this.filtrItem3
            this.filtrarrow3 = !this.filtrarrow3
        },
        openOrCloseFiltr4(){
            this.filtrItem4 = !this.filtrItem4
            this.filtrarrow4 = !this.filtrarrow4
        },
        openOrCloseInsrtuction(){
            this.instuctionItem = !this.instuctionItem
        },
    },
}
</script>

<style>

</style>