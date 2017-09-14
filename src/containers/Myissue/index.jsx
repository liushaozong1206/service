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
import { myissue, querySubmit } from '../../actions/index'
import back from './img/back.svg'
import rightImg from './img/right.svg'
class Myq extends Component {
    componentDidMount () {
        this.props.actions.myissue({
            gameId: sessionStorage.getItem('gameId'),
            playerId: sessionStorage.getItem('playerId'),
            gameRole: sessionStorage.getItem('gameRole'),
            gameServer: sessionStorage.getItem('gameServer')
        })
    }

    render () {
        let list = this.props.myissue.listText
        return (
            <div className="enter">
                <div className="enter-box clearfix">
                    <h5><span></span>나의문의</h5>
                    <Link to="/">
                        <p className="back"><img src={back} alt=""/></p>
                    </Link>
                    <div className="myissue">
                        <p className="query"><Link to="/query">1:1문의</Link></p>
                        <div className="list-box">
                            {
                                Array.prototype.isPrototypeOf(list) && list.length === 0 ? <div className="hint-text" dangerouslySetInnerHTML={{__html: '문의 내용이 없습니다'}}></div>
                                    : list.map((item, index) => {
                                        let path = `/qa/${item.id}`
                                        return (
                                            <div className="list" key={index}>
                                                <span
                                                    className={item.handle_status === '2' ? 'state active' : 'state' }></span>
                                                <p>
                                                    <Link to={path}>
                                                        <em>{item.questionType}</em>
                                                        <time>{item.askTime}</time>
                                                        <font>{item.handle_status === '2' ? '답변보기' : '답변대기중'}</font>
                                                        <span><img className="direction" src={rightImg} alt=""/></span>
                                                    </Link>
                                                </p>
                                            </div>
                                        )
                                    })
                            }
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
        querysuccess: state.querysuccess,
        query: state.query
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({myissue, querySubmit}, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Myq)
