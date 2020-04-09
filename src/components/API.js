import React from 'react';

import API_KEY from './keys/apiKeys' // REMOVE BEFORE PUSHING


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

export default API
