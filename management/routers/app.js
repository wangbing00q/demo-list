const Koa=require('koa');
const static=require('koa-static');
const koaBody=require('koa-body');
const koaCors=require('koa-cors');



const addMovieRouter=require('./addMovie');
const editMovieInfoRouter=require('./editMovieInfo');
const addCinemaRouter=require('./addCinema');


const getMovieRouter=require('../_routers/movie/getmovie');
const getCinemaRouter=require('../_routers/movie/getcinema');
const getHomeRouter=require('../_routers/movie/gethome')



const app= new Koa();

app.use(static('public'));
app.use(koaBody({
	multipart:true
}));
app.use(koaCors());




app.use(addMovieRouter.routes());
app.use(addMovieRouter.allowedMethods());

app.use(editMovieInfoRouter.routes());
app.use(editMovieInfoRouter.allowedMethods());

app.use(addCinemaRouter.routes());
app.use(addCinemaRouter.allowedMethods());

app.use(getMovieRouter.routes());
app.use(getMovieRouter.allowedMethods());

app.use(getCinemaRouter.routes());
app.use(getCinemaRouter.allowedMethods());

app.use(getHomeRouter.routes());
app.use(getHomeRouter.allowedMethods());



module.exports = app