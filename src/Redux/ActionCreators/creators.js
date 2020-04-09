import types from './types'

var actionCreatorModule =(function(){

    function searchCreator(text){
        return {
            type: types.search,
            payload: {
                text: text
            }
        }
    }

    // using the revealing module pattern
    return{
        searchCreator:searchCreator
    }
})();

export default actionCreatorModule
