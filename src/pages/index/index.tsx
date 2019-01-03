import {ComponentClass} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Canvas} from '@tarojs/components'
import {connect} from '@tarojs/redux'

import './index.less'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
    props: IProps;
}

@connect(({}) => ({}), (dispatch) => ({}))
class Index extends Component {

    ctx
    config: Config = {
        navigationBarTitleText: 'canvas bug'
    }

    constructor() {
        super(...arguments)
    }

    componentDidMount(){
        this.ctx =Taro.createCanvasContext('canvas', this.$scope)
        this.fill()
    }

    componentWillReceiveProps(nextProps) {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    fill(){
        const { ctx } = this;
        console.log('ctx--',ctx)
        ctx.setFillStyle('blue');
        ctx.fillRect(50, 50, 100, 175);
        ctx.draw();
    }

    render() {
        return (
            <View className='index'>
                <Canvas
                    className='main-canvas'
                    canvasId="canvas"
                />
            </View>
        )
    }
}

export default Index as ComponentClass<PageOwnProps, PageState>
