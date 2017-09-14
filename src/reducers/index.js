/**
 * Author：liushaozong
 * Time：2017/7/27
 * Description：root reducer
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { query } from './query'
import { myissue } from './myissue'

const reducers = Object.assign({
    query,
    myissue,
    routing: routerReducer
})

const rootReducer = combineReducers(reducers)
export default rootReducer
