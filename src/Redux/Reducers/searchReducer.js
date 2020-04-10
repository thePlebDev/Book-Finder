import types from '../ActionCreators/types'

const initialState = {
    search:'initial'
}

function searchReducer(state = initialState, action){
    switch(action.type){
      case types.search:
        return {...state, search: action.payload.text} // this is the spread operator

      default:
        return state
    }
}

export default searchReducer
