const initialState = {
    _id: null,
    name: null,
    avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png'
  };
  
  function user(state = initialState, action) {
    switch (action.type) {
      case 'SET_USER_NAME':
        return Object.assign({}, state, {
          name: action.name
        });
      case 'SET_USER_AVATAR':
        return Object.assign({}, state, {
          avatar: action.avatar
        });
      case 'SET_USER_ID':
        return Object.assign({}, state, {
          _id: action._id
      });
      default:
        return state;
    }
  }
  
  export default user;