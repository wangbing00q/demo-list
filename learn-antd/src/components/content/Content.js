import React,{Component} from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';
import AddInfo from './AddInfo';
import AddCinema from './AddCinema';
import CinemaList from './CinemaList';
import AddNews from './AddNews';





import {Route} from 'react-router-dom'

import {Layout} from 'antd';

const {Content}= Layout;

class Contentbar extends Component{
	render(){
		return (
			<Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280,}}>
            	<Route path='/aboutmovie/add' component={AddMovie} />
            	<Route path='/aboutmovie/list' component={MovieList} />
            	<Route path='/aboutmovie/editmovie' component={AddMovie} />
            	<Route path='/aboutmovie/info' component={MovieInfo} />
            	<Route path='/aboutmovie/editinfo' component={AddInfo} />

                  <Route path='/aboutcinema/add' component={AddCinema} />
                  <Route path='/aboutcinema/list' component={CinemaList} />
                  <Route path='/aboutcinema/editcinema' component={AddCinema} />

                  <Route path='/aboutnews/add' component={AddNews} />
                  <Route path='/aboutnews/list' component={AddNews} />
                  <Route path='/aboutnews/info' component={AddNews} />
                  <Route path='/aboutnews/editnews' component={AddNews} />
                  <Route path='/aboutnews/editnewsinfo' component={AddNews} />

            </Content>
		)
	}
}

export default Contentbar




