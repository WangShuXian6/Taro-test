import {ComponentClass} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {connect} from '@tarojs/redux'

import {add, minus, asyncAdd} from '../../actions/counter'

import './index.less'

import {AtSwipeAction, AtList, AtListItem} from "taro-ui"

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface List {
    props: IProps;
}

@connect(({}) => ({}), (dispatch) => ({}))
class List extends Component {
    config: Config = {
        navigationBarTitleText: '列表'
    }

    constructor() {
        super(...arguments)
        this.state = {
            isOpened: false
        }
    }

    componentWillReceiveProps(nextProps) {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    handleClick(e) {
        console.log('e-', e)
        this.setState({isOpened: false})
    }

    render() {
        return (
            <AtList>
                <AtSwipeAction
                    onClick={this.handleClick}
                    isOpened={this.state.isOpened}
                    autoClose={true}
                    options={[
                        {
                            text: '取消',
                            style: {
                                backgroundColor: '#6190E8'
                            }
                        },
                        {
                            text: '确认',
                            style: {
                                backgroundColor: '#FF4949'
                            }
                        }
                    ]}>
                    <AtListItem title='Item1'/>
                </AtSwipeAction>
            </AtList>
        )
    }
}

export default List as ComponentClass<PageOwnProps, PageState>
