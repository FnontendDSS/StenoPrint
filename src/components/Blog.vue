<template>
  <div class="blog container">
    <div class="blog-title">
        <h2>Блог</h2>
    </div>
    <div class="blog-cards">
        <div class="blog-cards__item">
            <div class="blog-cards__item--img">
                <img src="../assets/images/blog1.png" alt="">
                <div class="blog-cards__item--img___btn">
                    Антигравийная пленка
                </div>
            </div>
            <div class="blog-cards__item--info">
                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
            </div>
            <div class="blog-cards__item--footer">
                <div class="blog-cards__item--footer___view">
                    <fa :icon="['fas', 'eye']" /> 3833
                </div>
                <div class="blog-cards__item--footer___data">22 мая 2022</div>
            </div>
        </div>
        <div class="blog-cards__item">
            <div class="blog-cards__item--img">
                <img src="../assets/images/blog2.png" alt="">
                <div class="blog-cards__item--img___btn">
                    Антигравийная пленка
                </div>
            </div>
            <div class="blog-cards__item--info">
                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
            </div>
            <div class="blog-cards__item--footer">
                <div class="blog-cards__item--footer___view">
                    <fa :icon="['fas', 'eye']" /> 3833
                </div>
                <div class="blog-cards__item--footer___data">22 мая 2022</div>
            </div>
        </div>
        <div class="blog-cards__item">
            <div class="blog-cards__item--img">
                <img src="../assets/images/blog3.png" alt="">
                <div class="blog-cards__item--img___btn">
                    Антигравийная пленка
                </div>
            </div>
            <div class="blog-cards__item--info">
                <h3>Как бы то ни было, граница обучения кадров ни к чему нас не обязывает</h3>
                <p>Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены. Однозначно, активно развивающиеся страны третьего мира, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
            </div>
            <div class="blog-cards__item--footer">
                <div class="blog-cards__item--footer___view">
                    <fa :icon="['fas', 'eye']" /> 3833
                </div>
                <div class="blog-cards__item--footer___data">22 мая 2022</div>
            </div>
        </div>
    </div>
    <div class="blog-btns">
        <div class="blog-btns__arrows">
            <div class="blog-btns__arrows--prev">
        <fa :icon="['fas', 'chevron-left']" />
            </div>
            <div class="blog-btns__arrows--next">
        <fa :icon="['fas', 'chevron-right']" />
            </div>
        </div>
        <div class="blog-btns__line"></div>
        <div class="blog-btns__more">
            <router-link to="/blogpage">
            <a href="#!">Смотреть весь блог</a>
            
            </router-link>
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