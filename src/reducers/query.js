/**
 * Author: liushaozong
 * Date: 2017/8/29
 * Time: 17:40
 * Description:Description
 */

import { QUERY, QUERYSUB, QUERYSUCCESS } from '../constants/index'

export const query = (state = {listImg: [], succeed: 0}, action) => {
    switch (action.type) {
        case QUERY:
            let img = JSON.parse(action.imgData).data
            return Object.assign({}, state, {listImg: img})
        case QUERYSUB:
            return Object.assign({}, state, {succeed: action.setData.result})
        case QUERYSUCCESS:
            return Object.assign({}, state, {succeed: 0, listImg: []})
        default:
            return state
    }
}
