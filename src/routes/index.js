/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：root route
 */

import React from 'react'
import { Route } from 'react-router'
const rootRoutes = <div>

    <Route path='/' getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Enter').default)
        }, 'Enter')
    }}/>
    <Route path='/question/:id' getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Question').default)
        }, 'Question')
    }}/>
    <Route path='/query' getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Query').default)
        }, 'Query')
    }}/>
    <Route path='/myissue' getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Myissue').default)
        }, 'Myissue')
    }}/>
    <Route path='/qa/:id' getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/QA').default)
        }, 'QA')
    }}/>
</div>
export default rootRoutes
