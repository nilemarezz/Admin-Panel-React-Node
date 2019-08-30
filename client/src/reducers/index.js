import {combineReducers} from 'redux';
import AuthAdminReducer from './AuthAdminReducer'

export default combineReducers({
    authAdmin: AuthAdminReducer
})