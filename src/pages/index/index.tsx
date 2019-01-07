import {ComponentClass} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Canvas} from '@tarojs/components'
import {connect} from '@tarojs/redux'

import './index.less'

type PageStateProps = {
    counter: {
        num: number
    }
}

type PageDispatchProps = {
    add: () => void
    dec: () => void
    asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
    props: IProps;
}

@connect(({}) => ({}), (dispatch) => ({}))
class Index extends Component {

    config: Config = {
        navigationBarTitleText: '首页'
    }

    async componentDidMount() {
        this.ctx = Taro.createCanvasContext('canvas', this.$scope)
        await this.fill()
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }


    async fill() {
        const {ctx} = this;
        ctx.setFillStyle('#ededed');
        ctx.fillRect(0, 0, 1600, 1100);
        ctx.draw();
        const dataURL = await ctx.toDataURL()
        console.log('dataURL---', dataURL)
    }

    render() {
        return (
            <View className='index'>
                <Canvas
                    width='1713'
                    height='1205'
                    className='main-canvas'
                    canvasId="canvas"
                    disable-scroll
                />
            </View>
        )
    }
}

export default Index as ComponentClass<PageOwnProps, PageState>
