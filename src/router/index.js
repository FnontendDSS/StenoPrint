import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import PageAbout from '@/pages/PageAbout'
import OurServices from '@/pages/OurServices'
import OurServicesDet from '@/pages/OurServicesDet'
import MoreServicedetVue from '@/pages/MoreServicedet.vue'
import Catalog from '@/pages/Catalog.vue'
import CatalogMore from '@/pages/CatalogMore.vue'
import CatalogCard from '@/pages/CatalogCard.vue'
import Portfolio from '@/pages/Portfolio.vue'
import BlogPage from '@/pages/BlogPage.vue'
import BlogPageDetal from '@/pages/BlogPageDetal.vue'
import Contacts from '@/pages/Contacts.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/pageabout', name: 'PageAbout', component: PageAbout},
    {path: '/ourservices', name: 'OurServices', component: OurServices},
    {path: '/ourservicesdet', name: 'OurServicesDet', component: OurServicesDet},
    {path: '/moreservicedet', name: 'MoreServicedetVue', component: MoreServicedetVue},
    {path: '/catalog', name: 'Catalog', component: Catalog},
    {path: '/catalogmore', name: 'CatalogMore', component: CatalogMore},
    {path: '/catalogcard', name: 'CatalogCard', component: CatalogCard},
    {path: '/portfolio', name: 'Portfolio', component: Portfolio},
    {path: '/blogpage', name: 'BlogPage', component: BlogPage},
    {path: '/blogpagedetal', name: 'BlogPageDetal', component: BlogPageDetal},
    {path: '/contacts', name: 'Contacts', component: Contacts},
  ]
})

export default router