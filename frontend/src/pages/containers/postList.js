import React, {Component} from 'react';
import axios from 'axios';
import PostLayout from '../components/postListLayout';
// import Post from './post';

const api_url = 'http://localhost:8000/api/';

class PostList extends Component {
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
                // console.log(response);
                this.getApiData();
            })
            .catch( (error)=>{
                console.log(error);
            })
        // console.log('me clickean: ')
    }

    handleClick(event){
        // console.log('me apretaron', event.target);
        // if(event.target.id) {
            // console.log('id: ', event.target.id);
        // }
        console.log('id: ', event.target);
        // this.setRef();
    }

    h2HandleClick(event){
        // console.log(event.target.id);
        // event.preventDefault()
    }

    pHandleClick(event){
        // console.log(event.target.id);
        // event.preventDefault()
    }

    componentDidMount(){
        this.getApiData();
    }

    componentDidUpdate(){
        console.log('me actualicé: ');
    }

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
                        <PostLayout 
                            key = {item.id}
                            {...item}
                            // setRef = {this.setRef}
                            handleClick = {this.handleClick}
                            // pHandleClick = {this.pHandleClick}
                            // h2HandleClick = {this.h2HandleClick}
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