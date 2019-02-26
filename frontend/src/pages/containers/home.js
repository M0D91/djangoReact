import React, {Component} from 'react';
import HomeLayout from '../components/homeLayout';
// Importar aqui el resto de elementos de la app
import PostList from './postList';


// const api_url = 'http://localhost:8000/api/';



class Home extends Component  {
    // console.log('home page loaded')

    // state = {
    //     data : 0,
    // }

    // componentWillMount(){
    //     this.getApiData();
    // }
    // componentWillUpdate(){
    //     this.getApiData();
    // }

    render () {
        return (
            <HomeLayout
                // data = {this.state.data}
                >
                {/* montar aqui los elementos importados para renderizarlos */}
                <PostList   
                />
            </HomeLayout>
        )

    }
}

export default Home;