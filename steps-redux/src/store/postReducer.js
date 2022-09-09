const defaultState = {
    posts:[],
  }

  export const renderReducer = (state=defaultState,action) =>{
    switch(action.type){
        case 'RENDER_POSTS':
            return {...state ,posts:action.payload}

        default : return state
    }

  }
