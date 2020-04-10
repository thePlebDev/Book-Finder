import React from 'react';
import { connect } from 'react-redux'

import API_KEY from './keys/apiKeys' // REMOVE BEFORE PUSHING
import searchCreator from '../Redux/ActionCreators/creators';


class API extends React.Component{
    constructor(props){
        super(props);
        this.state ={}
    }

    componentDidMount(){
        function start() {
            // 2. Initialize the JavaScript client library.
            window.gapi.client.init({
                'apiKey': API_KEY,
                // clientId and scope are optional if auth is not required.
            }).then(function() {
                // 3. Initialize and make the API request.
                return window.gapi.client.request({
                    'path': 'https://www.googleapis.com/books/v1/volumes/dinosaurs', //I need the resource path and parameters
                })
            }).then(function(response) {
                console.log(response.result);
            }, function(reason) {
                console.log('Error: ' + reason.result.error.message);
            });
        }
        // 1. Load the JavaScript client library.
        window.gapi.load('client', start);
    }

    render(){
        return(
            <div>
            I can make a better life for myself
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        state
    }
}

const actionCreators={
    searchCreator
}



export default API
