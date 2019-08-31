import {combineReducers} from 'redux';
import AuthAdminReducer from './AuthAdminReducer'
import ItemReducer from './ItemReducer'

export default combineReducers({
    authAdmin: AuthAdminReducer,
    ItemAdmin: ItemReducer
})