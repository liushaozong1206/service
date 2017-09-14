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
import { Uploadproblem, querySubmit } from '../../actions/index'
import back from './img/back.svg'
import btn from './img/btn.svg'
import uploading from './img/uploading.svg'
import $ from 'jquery'
class Query extends Component {
    constructor () {
        super()
        this.state = {
            'queryCont': 1,
            'queryEmail': 1,
            'emailHint': '邮箱输入错误',
            'contHint': '内容不能为空',
            'success': '문의가 접수되었습니다. 접수된 문의는 나의문의에서 확인할 수 있습니다.'
        }
    }

    queryContChange () {
        this.setState({queryCont: this.refs.queryCont.value})
    }

    queryEmailChange () {
        this.setState({queryEmail: this.refs.queryEmail.value})
    }

    queryBtnClick () {
        let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        let email = this.state.queryEmail
        let cont = this.state.queryCont
        let emailText = emailReg.test(email)
        let imgList = []
        for (let i = 0; i < $('.img-news img').length; i++) {
            imgList.push($('.img-news img').eq(i).attr('src'))
        }
        imgList.join(',')
        if (cont === 1 || cont === '') {
            console.log('不能为空')
            return false
        } else if (!emailText) {
            console.log('邮箱输入错误')
            return false
        } else if (emailText) {
            this.props.actions.querySubmit({
                questionTypeId: 1,
                questionType: this.refs.queryValue.value,
                typeOptionId: 2,
                typeOption: 'typeOption',
                playerId: sessionStorage.getItem('playerId'),
                playerAccount: email,
                gameRole: sessionStorage.getItem('gameRole'),
                gameId: sessionStorage.getItem('gameId'),
                gameServer: sessionStorage.getItem('gameServer'),
                questionText: cont,
                dynamicParams: this.props.query.listImg.join(',')
            })
        }
    }
    qeuryUpload () {
        let form = document.getElementById('formDataForm')
        let formData = new FormData(form)
        this.props.actions.Uploadproblem(formData)
        if (this.props.query.listImg.length >= 2) {
            $('.form-group').hide()
            $('.img-box .btn').hide()
        }
    }

    componentDidMount () {
        $('.file').change(function (e) {
            $('.img-box .btn').show()
        })
    }
    render () {
        return (
            <div className="enter">
                <div className="shade"></div>
                <p className={this.props.query.succeed === 1 ? 'hint active' : 'hint' }>{this.state.success}</p>
                <div className="enter-box clearfix">
                    <h5><span></span>1:1문의</h5>
                    <Link to="/">
                        <p className="back"><img src={ back } alt=""/></p>
                    </Link>
                    <div className="question-query-box">
                        <div className="query-box">
                            <div className="query-genre">
                                <span>문의유형</span>
                                <div className="guery-option">
                                    <select ref='queryValue'>
                                        <option value="게임문의">게임문의</option>
                                        <option value="결제문제">결제문제</option>
                                        <option value="BUG">BUG</option>
                                        <option value="계정문제">계정문제</option>
                                        <option value="아이템유실">아이템유실</option>
                                        <option value="이벤트">이벤트</option>
                                    </select>
                                </div>
                            </div>
                            <div className="query-cont">
                                <p className="title">문의내용<span>*</span></p>
                                <textarea className="textarea" maxLength="500" ref='queryCont' placeholder="최소 10자 이상의 문의 내용을 입력하세요." onChange={() => this.queryContChange()}></textarea>
                            </div>
                            <div className="query-email">
                                <p className="title">Email<span>*</span></p>
                                <input className="email" ref='queryEmail' type="text" onChange={() => this.queryEmailChange()} placeholder="Email 주소를 입력하세요."/>
                            </div>
                            <div className="query-img">
                                <p className="title">스크린샷 (최대2장 5MB이하)</p>
                                <form id="formDataForm" method="post" encType="multipart/form-data">
                                    <div className="img-news">
                                        {
                                            this.props.query.listImg.map((item, index) => {
                                                return (<img src={'http://img.linekong.com/' + item} key={index} alt=""/>)
                                            })
                                        }
                                    </div>
                                    <div className='img-box'>
                                        <img src={uploading} alt=''/>
                                        <div className="form-group">
                                            <input className="file" type="file" name="img[]" multiple accept=".jpg,.gif"/>
                                        </div>
                                        <a href="javascript:0" className="btn" onClick={() => this.qeuryUpload()}>업로드</a>
                                    </div>

                                </form>

                            </div>
                            <div className='query-btn' onClick={() => this.queryBtnClick()}>
                                <span><img src={ btn } alt=''/></span><font>문의제출</font>
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
        query: state.query,
        querySetData: state.querySetData,
        querysuccess: state.querysuccess,
        urlparameter: state.urlparameter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ Uploadproblem, querySubmit }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Query)
