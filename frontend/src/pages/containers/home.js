import React, {Component} from 'react';
import HomeLayout from '../components/homeLayout';
import axios from 'axios';
// Importar aqui el resto de elementos de la app


const api_url = 'http://localhost:8000/api/';

class Home extends Component  {
    // console.log('home page loaded')
    refreshList = () => {
        return axios 
            .get(api_url)
            .then( (response) => {
                // response.data
                // console.log(response);
                console.log(response.data[1]);
            })
            .catch( (error) => {
                console.log(error);
            })
    }

    componentDidMount(){
        this.refreshList();
    }
    render () {
        return (
            
            <HomeLayout>
                {/* montar aqui los elementos importados para renderizarlos */}
            </HomeLayout>
        )

    }
}

export default Home;