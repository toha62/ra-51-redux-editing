import {
  CHANGE_SERVICE_FIELD,
  SET_EDIT_SERVICE_FIELD,
  RESET_EDIT_SERVICE_FIELD,
  RESET_SERVICE_FIELD
} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
  isEdit: false,
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case SET_EDIT_SERVICE_FIELD:      
      return {...state, isEdit: true};
    case RESET_EDIT_SERVICE_FIELD:      
      return {...state, isEdit: false};
    case RESET_SERVICE_FIELD:      
      return {...initialState};  
    default:
      return state;
  }
}
