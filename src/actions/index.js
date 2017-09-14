/**
 * Author：liushaozong
 * Time：2017/7/27
 * Description：index actions
 */
import { QUESTION, ENTER, QUERY, QUERYSUB, MYISSUE, QUERYSUCCESS, URLPARAMETER } from '../constants/index'
import { hashHistory } from 'react-router'
import { Ajax, axiosAjax } from '../public/index'
export const Uploadproblem = (data) => {
    return (dispatch) => {
        Ajax('/dhhzl/cus/api/uploadImg.php', data, function (imgData) {
            dispatch({
                type: QUERY,
                imgData
            })
        })
    }
}
export const querySubmit = (payload) => {
    return (dispatch) => {
        axiosAjax('POST', '/dhhzl/cus/api/insertQuestionFromClient.php', {
            'questionTypeId': payload.questionTypeId,
            'questionType': payload.questionType,
            'typeOptionId': payload.typeOptionId,
            'typeOption': payload.typeOption,
            'playerId': payload.playerId,
            'playerAccount': payload.playerAccount,
            'gameRole': payload.gameRole,
            'gameId': payload.gameId,
            'gameServer': payload.gameServer,
            'questionText': payload.questionText,
            'dynamicParams': payload.dynamicParams
        }, function (setData) {
            if (setData.result === 1) {
                setTimeout(function () {
                    hashHistory.push('/')
                    dispatch({
                        type: QUERYSUCCESS,
                        setData
                    })
                }, 1000)
            }
            dispatch({
                type: QUERYSUB,
                setData
            })
        })
    }
}
export const myissue = (listData) => {
    return (dispatch) => {
        axiosAjax('POST', '/dhhzl/cus/api/listQueryGameQuestions.php', {
            'gameId': listData.gameId,
            'playerId': listData.playerId,
            'gameRole': listData.gameRole,
            'gameServer': listData.gameServer
        }, function (Data) {
            dispatch({
                type: MYISSUE,
                Data
            })
        })
    }
}

export const urlparameter = (gameParameter) => {
    return {
        type: URLPARAMETER,
        gameParameter
    }
}

export const question = (data) => {
    return {
        type: QUESTION,
        data
    }
}

export const enter = (data) => {
    return {
        type: ENTER,
        data
    }
}
