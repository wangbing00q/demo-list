import Vue from 'vue'
import Router from 'vue-router'
import homnePage from '../components/home-page/movie-page'
import movieList from '../components/movie-list/movie-list'
import movieInfo from '../components/movie-info/movie-info'
import cinemas from '../components/cinemas/cinemas.vue';
import moviesInfo from '../components/moviesInfo/movies-info.vue';
import board from '../components/board/bangdan.vue'
import hotPage from '../components/movie-hot/show-tab1/hot-page.vue'
import newDetailpage from '../components/movie-hot/details1/new-detailpage'
import picturePage from "../components/movie-hot/details4/picture-page"
import signup from '../components/zhuce/register-home'
import boxOffice from '../components/piaofang/data-home'

Vue.use(Router)

const routes = [
    { path: '/', component: homnePage },
    { path: '/films', component: movieList },
    { path: '/films/:id', component: movieInfo },
    { path: '/cinemas', component: cinemas, name: 'cinemas' },
    { path: '/cinemas/:cinemasNum', name: 'moviesInfo', component: moviesInfo },
    { path: '/board', component: board, name: 'board' },
    { path: '/news', component: hotPage, name: 'hotPage' },
    { path: "/news/:id", component: picturePage },
    { path: "/films/news/:id", component: newDetailpage },
    { path: "/signup", component: signup },
    { path: "/boxoffice", component: boxOffice },    
]

const router = new Router({
    routes,
    mode: 'history'
})

export default router