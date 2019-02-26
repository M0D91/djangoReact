import React, {Component} from 'react';
import PostLayout from '../components/postLayout';

class Post extends Component {
    // funciones utiles para el 'controllador'
    render(){
        console.log(this.props);
        return (
            <div>
                <PostLayout 
                    key = {this.props.id}
                    title = {this.props.title}
                    content = {this.props.content}
                    />
            </div>
        )
        
    }
}

export default Post;