/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：public function
 */

import axios from 'axios'
import { message } from 'antd'
import $ from 'jquery'
export const axiosAjax = (type, url, params, fn) => {
    axios({
        method: type,
        url: url,
        params: params
    }).then(function (response) {
        const data = response.data
        fn.call(this, data)
    }).catch(function (error) {
        message.error(error)
    })
}

export const Ajax = (url, data, fn) => {
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        contentType: false,
        async: false,
        cache: false,
        processData: false,
        success: function (data) {
            fn.call(window, data, url)
        },
        error: function () {
            console.log('error')
        }
    })
}
export const getQueryString = (name) => {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let r = window.location.search.substr(1).match(reg)
    if (r != null) {
        return unescape(r[2])
    }
    return null
}
