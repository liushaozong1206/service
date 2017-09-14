/**
 * Author: liushaozong
 * Date: 2017/8/29
 * Time: 17:40
 * Description:Description
 */

import { MYISSUE } from '../constants/index'

export const myissue = (state = {listText: []}, action) => {
    switch (action.type) {
        case MYISSUE:
            return Object.assign({}, state, {listText: action.Data.questions === undefined ? [] : action.Data.questions})
        default:
            return state
    }
}
