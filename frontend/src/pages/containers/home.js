import React, {Component} from 'react';
import axios from 'axios';
import HomeLayout from '../components/homeLayout';
// Importar aqui el resto de elementos de la app
import Post from './post';


const api_url = 'http://localhost:8000/api/';



class Home extends Component  {
    // console.log('home page loaded')

    state = {
        data : 0,
    }

    getApiData = () => {
        axios 
            .get(api_url)
            .then( (response) => {
                this.setState({
                    data: response.data
                })
                // console.log(response.data);
            } )
            .catch( (error) => {
                console.log(error);
            })
    }

    createElement = () =>{
        axios
            .post(api_url, {
                title: 'post n',
                content: 'contenido hardcodeado locamente'
            })
            .then( (response)=>{
                console.log(response);
            })
            .catch( (error)=>{
                console.log(error);
            })
    }

    componentWillMount(){
        this.getApiData();
    }
    componentWillUpdate(){
        this.getApiData();
    }

    render () {
        return (
            <HomeLayout
                // data = {this.state.data}
                >
                {/* montar aqui los elementos importados para renderizarlos */}
                <Post 
                    // ¡¡¡ IMPORTANTE !!!
                    // Por algun motivo es necesario convertir de nuevo los 
                    // datos que vienen del back a Array.
                    // De lo contrario no se puede aplicar el .map() en destino
                    data = {Array.from(this.state.data)}
                    createElement = {this.createElement}    
                />
            </HomeLayout>
        )

    }
}

export default Home;