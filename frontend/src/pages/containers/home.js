import React, {Component} from 'react';
import HomeLayout from '../components/homeLayout';
// Importar aqui el resto de elementos de la app
import PostList from './postList';

import {connect} from 'react-redux';

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
        console.log(this.props.msg);
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

// export default Home;


function mapStateToProps(state, props) {
    return {
        msg: state.data.msg
    }
}
export default connect(mapStateToProps)(Home);