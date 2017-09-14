/**
 * Author：liushaozong
 * Time：2017/7/26
 * Description：enter
 */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './index.scss'
import { myissue } from '../../actions/index'
import back from './img/back.svg'
import accountImg from './img/account-img.svg'
import message from './img/message.svg'
import close from './img/close.svg'
import service from './img/service.svg'
class Myq extends Component {
    componentDidMount () {

    }
    componentWillMount () {
        this.props.actions.myissue({
            gameId: sessionStorage.getItem('gameId'),
            playerId: sessionStorage.getItem('playerId'),
            gameRole: sessionStorage.getItem('gameRole'),
            gameServer: sessionStorage.getItem('gameServer')
        })
    }
    render () {
        let listTextData = this.props.myissue.listText
        let playerId = ''
        let questionText = ''
        let answerText = ''
        let answerNpc = ''
        for (let i = 0; i < listTextData.length; i++) {
            if (listTextData[i].id === this.props.params.id) {
                playerId = listTextData[i].playerId
                questionText = listTextData[i].questionText
                answerText = listTextData[i].answerText
                answerNpc = listTextData[i].answerNpc
            }
        }
        return (
            <div className="enter">
                <div className="enter-box clearfix">
                    <h5 className="title-h5"><span></span>문의답변</h5>
                    <p className="back"><Link to='/myissue'><img src={back} alt=""/></Link></p>
                    <div className="qa">
                        <div className="list-box-qa clearfix">
                            <div className="dialogue clearfix">
                                <div className="account clearfix">
                                    <div className="account-title">
                                        <p className="title-img"><img src={accountImg} alt=""/></p>
                                        <p className="title-text">{playerId}</p>
                                    </div>
                                    <div className="account-cont">{questionText}</div>
                                </div>
                                <div className="service clearfix">
                                    <div className="service-title">
                                        <p className="title-img"><img src={service} alt=""/></p>
                                        <p className="title-text">공식 회복</p>
                                    </div>
                                    <div className="service-cont">{answerNpc}</div>
                                </div>
                                <div className={answerText !== '' ? 'service-reply active' : 'service-reply'}>
                                    <div className="service-title">
                                        <p className="title-img"><img src={service} alt=""/></p>
                                        <p className="title-text">공식 회복</p>
                                    </div>
                                    <div className="service-cont">{answerText}</div>
                                </div>
                            </div>
                            <div className="qa-btn clearfix">
                                <p>문의 답변에 만족하셨나요?</p>
                                <Link to='/query'>
                                    <div className="no">
                                        <span><img src={message} alt=""/></span><font>아니오<br/>(추가문의)</font>
                                    </div>
                                </Link>
                                <Link to='/'>
                                    <div className="yes">
                                        <span><img src={close} alt=""/></span><font>예<br/>(문의종료)</font>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        myissue: state.myissue,
        query: state.query
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({myissue}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Myq)
