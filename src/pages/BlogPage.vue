<template>
  <div class="blogpage container">
    <div class="pageabout-title">
    <div class="pageabout-title__routers">
        <router-link to="/">
        <a href="#!" class="pageabout-title__routers--home"><fa :icon="['fas', 'house-chimney-window']" /></a>
        </router-link>
        <p class="pageabout-title__routers--item">/</p>
        <router-link to="/blogpage">
        <a href="#!" class="pageabout-title__routers--about">Блог </a>
        </router-link>
    </div>
        <h1>Блог </h1>   
    </div>
    <div class="blogpage-main">
        <div class="blogpage-main__title">
            <label class="blogpage-main__title--search" for="search">
                <input type="search" id="search" placeholder="Поиск в блоге...">
                <span>
                <fa :icon="['fas', 'search']" />
                </span>
            </label>
            
            <div class="blogpage-main__title--cat">
                <div class="blogpage-main__title--cat___head">
                    <h3>Все категории</h3>
                    <span @click="openOrCloseCatInfo">
                    <fa v-if="btnarrow" :icon="['fas', 'chevron-down']" />
                    <fa v-else :icon="['fas', 'chevron-up']" />
                    </span>
                </div>
                <div class="blogpage-main__title--cat___info" v-if="catInfo">
                    <ul>
                        <li>
                            <h4>Антигравийная пленка</h4>
                            <span>13</span>
                        </li>
                        <li>
                            <h4>Антигравийная пленка</h4>
                            <span>13</span>
                        </li>
                        <li>
                            <h4>Антигравийная пленка</h4>
                            <span>13</span>
                        </li>
                        <li>
                            <h4>Антигравийная пленка</h4>
                            <span>13</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="blogpage-main__cards">
            <router-link to="/blogpagedetal">
            
            <div class="blogpage-main__cards--item">
                <div class="blogpage-main__cards--item___img">
                    <img src="../assets/images/blog1.png" alt="">
                    <button class="blogpage-main__cards--item___img---btn"><span>Антигравийная пленка</span></button>
                </div>
                <div class="blogpage-main__cards--item___info">
                    <h5>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h5>
                    <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                    <div class="blogpage-main__cards--item___info---viwe">
                        <p><fa :icon="['fas', 'eye']" />3833</p>
                        <p>22 мая 2022</p>
                    </div>
                </div>
            </div>
            </router-link>
            <router-link to="/blogpagedetal">
            
            <div class="blogpage-main__cards--item">
                <div class="blogpage-main__cards--item___img">
                    <img src="../assets/images/blog2.png" alt="">
                    <button class="blogpage-main__cards--item___img---btn"><span>Антигравийная пленка</span></button>
                </div>
                <div class="blogpage-main__cards--item___info">
                    <h5>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h5>
                    <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                    <div class="blogpage-main__cards--item___info---viwe">
                        <p><fa :icon="['fas', 'eye']" />3833</p>
                        <p>22 мая 2022</p>
                    </div>
                </div>
            </div>
            </router-link>
            <router-link to="/blogpagedetal">
            
            <div class="blogpage-main__cards--item">
                <div class="blogpage-main__cards--item___img">
                    <img src="../assets/images/blog3.png" alt="">
                    <button class="blogpage-main__cards--item___img---btn"><span>Антигравийная пленка</span></button>
                </div>
                <div class="blogpage-main__cards--item___info">
                    <h5>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h5>
                    <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                    <div class="blogpage-main__cards--item___info---viwe">
                        <p><fa :icon="['fas', 'eye']" />3833</p>
                        <p>22 мая 2022</p>
                    </div>
                </div>
            </div>
            </router-link>
            <router-link to="/blogpagedetal">
            
            <div class="blogpage-main__cards--item">
                <div class="blogpage-main__cards--item___img">
                    <img src="../assets/images/blog1.png" alt="">
                    <button class="blogpage-main__cards--item___img---btn"><span>Антигравийная пленка</span></button>
                </div>
                <div class="blogpage-main__cards--item___info">
                    <h5>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h5>
                    <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                    <div class="blogpage-main__cards--item___info---viwe">
                        <p><fa :icon="['fas', 'eye']" />3833</p>
                        <p>22 мая 2022</p>
                    </div>
                </div>
            </div>
            </router-link>
            <router-link to="/blogpagedetal">
            
            <div class="blogpage-main__cards--item">
                <div class="blogpage-main__cards--item___img">
                    <img src="../assets/images/blog2.png" alt="">
                    <button class="blogpage-main__cards--item___img---btn"><span>Антигравийная пленка</span></button>
                </div>
                <div class="blogpage-main__cards--item___info">
                    <h5>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h5>
                    <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                    <div class="blogpage-main__cards--item___info---viwe">
                        <p><fa :icon="['fas', 'eye']" />3833</p>
                        <p>22 мая 2022</p>
                    </div>
                </div>
            </div>
            </router-link>
            <router-link to="/blogpagedetal">
            
            <div class="blogpage-main__cards--item">
                <div class="blogpage-main__cards--item___img">
                    <img src="../assets/images/blog3.png" alt="">
                    <button class="blogpage-main__cards--item___img---btn"><span>Антигравийная пленка</span></button>
                </div>
                <div class="blogpage-main__cards--item___info">
                    <h5>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h5>
                    <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                    <div class="blogpage-main__cards--item___info---viwe">
                        <p><fa :icon="['fas', 'eye']" />3833</p>
                        <p>22 мая 2022</p>
                    </div>
                </div>
            </div>
            </router-link>
            <router-link to="/blogpagedetal">
            
            <div class="blogpage-main__cards--item">
                <div class="blogpage-main__cards--item___img">
                    <img src="../assets/images/blog1.png" alt="">
                    <button class="blogpage-main__cards--item___img---btn"><span>Антигравийная пленка</span></button>
                </div>
                <div class="blogpage-main__cards--item___info">
                    <h5>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h5>
                    <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                    <div class="blogpage-main__cards--item___info---viwe">
                        <p><fa :icon="['fas', 'eye']" />3833</p>
                        <p>22 мая 2022</p>
                    </div>
                </div>
            </div>
            </router-link>
            <router-link to="/blogpagedetal">
            
            <div class="blogpage-main__cards--item">
                <div class="blogpage-main__cards--item___img">
                    <img src="../assets/images/blog2.png" alt="">
                    <button class="blogpage-main__cards--item___img---btn"><span>Антигравийная пленка</span></button>
                </div>
                <div class="blogpage-main__cards--item___info">
                    <h5>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h5>
                    <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                    <div class="blogpage-main__cards--item___info---viwe">
                        <p><fa :icon="['fas', 'eye']" />3833</p>
                        <p>22 мая 2022</p>
                    </div>
                </div>
            </div>
            </router-link>
            <router-link to="/blogpagedetal">
            
            <div class="blogpage-main__cards--item">
                <div class="blogpage-main__cards--item___img">
                    <img src="../assets/images/blog3.png" alt="">
                    <button class="blogpage-main__cards--item___img---btn"><span>Антигравийная пленка</span></button>
                </div>
                <div class="blogpage-main__cards--item___info">
                    <h5>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h5>
                    <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                    <div class="blogpage-main__cards--item___info---viwe">
                        <p><fa :icon="['fas', 'eye']" />3833</p>
                        <p>22 мая 2022</p>
                    </div>
                </div>
            </div>
            </router-link>
            <router-link to="/blogpagedetal">
            
            <div class="blogpage-main__cards--item">
                <div class="blogpage-main__cards--item___img">
                    <img src="../assets/images/blog1.png" alt="">
                    <button class="blogpage-main__cards--item___img---btn"><span>Антигравийная пленка</span></button>
                </div>
                <div class="blogpage-main__cards--item___info">
                    <h5>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h5>
                    <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                    <div class="blogpage-main__cards--item___info---viwe">
                        <p><fa :icon="['fas', 'eye']" />3833</p>
                        <p>22 мая 2022</p>
                    </div>
                </div>
            </div>
            </router-link>
            <router-link to="/blogpagedetal">
            
            <div class="blogpage-main__cards--item">
                <div class="blogpage-main__cards--item___img">
                    <img src="../assets/images/blog2.png" alt="">
                    <button class="blogpage-main__cards--item___img---btn"><span>Антигравийная пленка</span></button>
                </div>
                <div class="blogpage-main__cards--item___info">
                    <h5>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h5>
                    <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                    <div class="blogpage-main__cards--item___info---viwe">
                        <p><fa :icon="['fas', 'eye']" />3833</p>
                        <p>22 мая 2022</p>
                    </div>
                </div>
            </div>
            </router-link>
            <router-link to="/blogpagedetal">
            
            <div class="blogpage-main__cards--item">
                <div class="blogpage-main__cards--item___img">
                    <img src="../assets/images/blog3.png" alt="">
                    <button class="blogpage-main__cards--item___img---btn"><span>Антигравийная пленка</span></button>
                </div>
                <div class="blogpage-main__cards--item___info">
                    <h5>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h5>
                    <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                    <div class="blogpage-main__cards--item___info---viwe">
                        <p><fa :icon="['fas', 'eye']" />3833</p>
                        <p>22 мая 2022</p>
                    </div>
                </div>
            </div>
            </router-link>
        </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
    data() {
        return {
            catInfo: false,
            btnarrow: true,
        };
    },
    methods: {
        openOrCloseCatInfo() {
            this.catInfo = !this.catInfo;
            this.btnarrow = !this.btnarrow
        }
    },
    components: { Footer }
}
</script>

