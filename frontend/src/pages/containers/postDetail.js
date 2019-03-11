import React, {Component} from 'react';
import PostLayout from '../components/postDetailLayout';

class Post extends Component {
    // funciones utiles para el 'controllador'
    handleClick(event){
        console.log('me apretaron', event);
    }

    // setRef = (element) => {
        // console.log(element);
    // }
    
    render(){
        // console.log(this.props.id);
        return (
            <div>
                <PostLayout 
                    key = {this.props.id}
                    title = {this.props.title}
                    content = {this.props.content}
                    handleClick = {this.handleClick}
                    // id={this.props.id}
                    // setRef = {this.setRef}
                    />
            </div>
        )
        
    }
}

export default Post;