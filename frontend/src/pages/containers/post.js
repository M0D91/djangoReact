import React, {Component} from 'react';
import PostLayout from '../components/postLayout';

class Post extends Component {
    // funciones utiles para el 'controllador'
    render(){
        return (
            <div className='postCajita'>
                {this.props.data.map( (item)=>{
                    return(
                        <PostLayout 
                            key = {item.id}
                            {...item}
                            />
                        )
                    })
                }
            </div>
        )
        
    }
}

export default Post;