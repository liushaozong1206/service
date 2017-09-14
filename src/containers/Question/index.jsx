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
import { question } from '../../actions/index'
import back from './img/back.svg'
import rightImg from './img/right.svg'
import down from './img/down.svg'

let queryData = [
    {
        id: 100,
        cont: [
            {
                q: 'Q:',
                title: '닉네임을 변경하고 싶습니다.',
                rightImg: rightImg,
                downImg: down,
                text: '메인 화면의 캐릭터 정보에서 닉네임을 변경할 수 있습니다. 캐릭터 정보창에서 닉네임 변경 버튼을 누르면 변경하고 싶은 닉네임을 입력한 뒤 변경할 수 있습니다.다만, 닉네임 변경 시 사파이어가 소모되니 닉네임 변경은 신중하기 결정하시기 바랍니다.'
            },
            {
                q: 'Q:',
                title: '캐릭터 레벨이 70 이상 올라가지 않습니다.',
                rightImg: rightImg,
                downImg: down,
                text: '캐릭터 레벨이 69레벨이 되면 70레벨 제한을 해제할 수 있는 퀘스트를 진행해야 70레벨 이상으로 올라갈 수 있습니다. 해당 퀘스트를 진행하지 않을 경우 캐릭터 경험치는 계속 획득할 수 있으나, 캐릭터 레벨은 올라가지 않습니다.퀘스트를 완료하지 않고 경험치를 많이 획득한 상태에서 퀘스트를 완료할경우 레벨이 한꺼번에 오를 수도 있으니 게임 이용에 참고 부탁드립니다.'
            },
            {
                q: 'Q:',
                title: '전투는 어떻게 진행하나요?',
                rightImg: rightImg,
                downImg: down,
                text: '1. 포탄 모양의 공격 버튼을 눌렀다 떼면 포탄이 발포되어 공격을 할 수 있습니다.포탄을 발포하면 수초 뒤 발포할 수 있습니다.공격 버튼을 길게 누를수록 사거리가 증가합니다 (최대 사거리 내외로)적이 있는 측면의 화포만 포탄을 발사하며 양쪽에 적이 있을 경우 양쪽 다 발사합니다.<br/>2. 사거리를 나타내는 표식이 붉은색일 경우 포탄이 장전되지 않아 포탄을 발포할 수 없습니다.<br/>3. 방향타를 조작해서 함선이 나아가는 방향을 조정할 수 있습니다.<br/>4. 이동하면서 포탄을 발사해서 공격할 수 있습니다.'
            }
        ]
    },
    {
        id: 200,
        cont: [
            {
                q: 'Q:',
                title: '진행 하였으나, 결제 상품을 받지 못했어요.',
                rightImg: rightImg,
                downImg: down,
                text: '결제 후 결제 상품이 정상적으로 지급되지 않을 경우결제 정보를 바탕으로 확인 후 도움을 드리고 있습니다.따라서 번거로우시더라도 아래 양식에 따라 기재 후문의를 통해 접수해주면, 빠른 도움을 드리도록 하겠습니다.<br/>[결제 정보 양식]<br/>1. 서버 / 캐릭터명:<br/>2. 결제하신 마켓명:<br/>3. 휴대폰 번호 / 스토어 계정 / 결제 주문번호:<br/>4. 결제일시 / 금액:<br/>5. 요청사항 : (지급 / 취소)'
            },
            {
                q: 'Q:',
                title: '정상적으로 다이아 구입이 되지 않아요.',
                rightImg: rightImg,
                downImg: down,
                text: '결제가 진행되지 않아 불편을 드린 점, 진심으로 사과드립니다.<br/>다만, 결제 시 다이아 구매가 진행되지 않는 현상은단말기 내 캐시/데이터 삭제를 통해 해결하실 수 있으니아래 내용에 진행 후 다시 한 번 재시도를 부탁 드리겠습니다.<br/>■ 캐시/데이터 삭제 방법- 단말기 메뉴 > 시스템 설정 > 애플리케이션 관리자 > 대항해의길 선택> 캐시 삭제/데이터 삭제 > 게임 삭제 후 재설치위 내용에 따라 진행 후에도 동일한 현상이 발생될 경우게임 내 문의를 통해 세부 내용을 기재하여 접수해주시길 부탁 드립니다.'
            },
            {
                q: 'Q:',
                title: '1달러가 결제되었어요.',
                rightImg: rightImg,
                downImg: down,
                text: '앱스토어에서 결제 시 추가 결제되는 1달러의 경우해당 마켓의 테스트 결제로 인해 발생되는 부분입니다.<br/>또한, 해당 1달러의 경우 실제 요금에 청구되지 않으니이 점 참고하여 결제 과정에 혼동이 없으시길 바랍니다.'
            }
        ]
    },
    {
        id: 300,
        cont: [
            {
                q: 'Q:',
                title: '게임 설치 및 실행이 안돼요.',
                rightImg: rightImg,
                downImg: down,
                text: '게임 설치 및 실행이 진행되지 않는 현상은사용하고 계신 단말기의 네트워크 수신 상태 및OS 버전 등 다양한 원인으로 인해 발생할 수 있습니다.<br/>다만, 해당 현상은 불필요한 데이터 삭제 및게임 재설치로 해결하실 수 있으니, 자세한 내용은아래를 참고하여 다시 한 번 진행을 부탁 드리겠습니다.<br/>1. 불필요한 애플리케이션 및 데이터 삭제<br/>2. 단말기의 디바이스 OS 버전, 최신 버전으로 업데이트<br/>3. 와이파이 및 네트워크 수신 상태 확인<br/>4. 게임 완전 삭제 후 재설치- [설정] > [애플리케이션 정보] > [캐시 삭제] > [데이터 삭제]'
            },
            {
                q: 'Q:',
                title: '게임 탈퇴는 어떻게 하나요?',
                rightImg: rightImg,
                downImg: down,
                text: '게임 탈퇴는 게임 내 시스템 설정에서 이용하실 수 있습니다.<br/>■ 게임 탈퇴 방법- 메인 화면 내 [설정] > [게임탈퇴] 클릭다만, 게임 탈퇴의 경우 기존의 모든 데이터가 삭제되어모든 서버의 캐릭터 정보가 삭제되니, 참고 바랍니다.'
            },
            {
                q: 'Q:',
                title: '게임 삭제 후 재설치를 하면 데이터가 초기화되나요? ',
                rightImg: rightImg,
                downImg: down,
                text: '단말기 변경 및 초기화 등 게임을 재설치할 경우기존에 사용하신 계정의 데이터는 안정하게 보호됩니다.<br/>다만, 비회원으로 게임을 이용한 상태에서단말기 변경 및 초기화를 진행한 뒤 게임을 재설치할 경우비회원으로 진행했던 게임 정보가 삭제되니계정 전환을 완료한 뒤 단말기 변경 및 초기화를 진행하시기 바랍니다.<br/>추가로 게임 내 게임 탈퇴의 경우에는 진행 시해당 계정의 모든 데이터가 자동으로 삭제되니이 점 꼭 유의하여 이용에 어려움이 없으시길 바랍니다.'
            }
        ]
    }
]

class Question extends Component {
    constructor () {
        super()
        this.state = {
            on: 0
        }
    }

    fold (i) {
        this.setState({on: i})
    }

    render () {
        return (
            <div className="enter">
                <div className="enter-box clearfix">
                    <h5><span> </span>문의하기</h5>
                    <Link to="/">
                        <p className="back"><img src={back} alt=""/></p>
                    </Link>
                    <div className="question-box">
                        <div className="list-box">
                            {
                                queryData.map((item, index) => {
                                    if (parseInt(this.props.params.id) === item.id) {
                                        return item.cont.map((list, i) => {
                                            let active = i === this.state.on ? 'active' : ''
                                            let activeImg = i === this.state.on ? list.downImg : list.rightImg
                                            return (
                                                <div className="list" key={i}>
                                                    <p onClick={() => this.fold(i)}>
                                                        <font>{list.q}</font>
                                                        <em>{list.title}</em>
                                                        <span>
                                                            <img className="direction" src={activeImg} alt=""/>
                                                        </span>
                                                    </p>
                                                    <div className={'list-cont ' + active} dangerouslySetInnerHTML={{__html: list.text}} >
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
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
        question: state.question
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({question}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
