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
import { urlparameter } from '../../actions/index'
import rightImg from './img/right.svg'

class Enter extends Component {
    componentDidMount () {
        let parameter = this.props.urlparameter
        for (let key in parameter) {
            sessionStorage.setItem(key, parameter[key])
        }
    }

    render () {
        return (
            <div className="enter">
                <div className="enter-box">
                    <h5><span></span>문의하기</h5>
                    <p className="close"></p>
                    <div className="enter-btn">
                        <Link to="/myissue">
                            <div className="my-question">나의문의<span className={'active'}></span></div>
                        </Link>
                        <Link to="/query">
                            <div className="query">1:1문의</div>
                        </Link>
                    </div>
                    <h6>자주묻는질문</h6>
                    <div className="question-box">
                        <ul>
                            <li>
                                <Link to="question/100">
                                    게임문의<span><img src={rightImg} alt=""/></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="question/200">
                                    결제문제<span><img src={rightImg} alt=""/></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="question/300">
                                    기타<span><img src={rightImg} alt=""/></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        enter: state.enter,
        urlparameter: state.routing.locationBeforeTransitions.query
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({urlparameter}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Enter)
