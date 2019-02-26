import React, {Component} from 'react';
import axios from 'axios';

import Post from './post';

const api_url = 'http://localhost:8000/api/';

class PostList extends Component {
    state = {
        data : 0
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
    // componentWillUpdate(){
    //     this.getApiData();
    // }

    render() {
        // ¡¡¡ IMPORTANTE !!!
        // Por algun motivo es necesario convertir de nuevo los 
        // datos que vienen del backend a Array.
        // De lo contrario no se puede aplicar el .map()
        const parsedData = Array.from(this.state.data);
        
        return(
            <div>
                {/* Contenedor de posts */}

                {parsedData.map( (item)=>{
                    return(
                        <Post 
                            key = {item.id}
                            {...item}
                            
                            />
                        )
                    })
                }


            <button
                onClick={this.createElement}
                >
                Nuevo post
            </button>
            </div>
        )
    }
}

export default PostList;