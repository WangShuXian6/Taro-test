import {ComponentClass} from 'react'
import Taro, {Component, Config} from '@tarojs/taro'
import {View, Button, Text,Image} from '@tarojs/components'
import {connect} from '@tarojs/redux'

import {add, minus, asyncAdd} from '../../actions/counter'
import {updateImages,asyncUpdateImages} from "../../actions/images";

import './index.less'

import snowImage from './snow.jpg'

// #region 书写注意
// 
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
    counter: {
        num: number
    },
    images: {
        images: any
    }
}

type PageDispatchProps = {
    add: () => void
    dec: () => void
    asyncAdd: () => any,
    updateImages: (data) => any,
    asyncUpdateImages: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
    props: IProps;
}

@connect(({counter, images}) => ({
    counter,
    images
}), (dispatch) => ({
    add() {
        dispatch(add())
    },
    dec() {
        dispatch(minus())
    },
    asyncAdd() {
        dispatch(asyncAdd())
    },
    updateImages(data) {
        dispatch(updateImages(data))
    },
    asyncUpdateImages() {
        dispatch(asyncUpdateImages())
    },
}))
class Index extends Component {
    constructor(){
        super(...arguments)
        this.state={
            cardList: [],
        }
    }

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        navigationBarTitleText: '首页'
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


    async asyncUpload() {
        const imagePath = await this.uploadingImage()
        console.log('imagePath --', imagePath)
        if (imagePath) {
            console.log('imagePath--success')
            this.props.updateImages({
                image: imagePath,
                hasRecord: false,
                record: '',
                number: 1
            })
            this.updateCardList(imagePath)

        }
        console.log('this.props-', this.props)
        console.log('this.props.images.images.length--', this.props.images.images[0].image)
    }

    uploadingImage(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve (snowImage)
            },2000)
        })
    }

    updateCardList(imagePath) {
        const newImage = {
            image: imagePath,
            hasRecord: false,
            record: '',
            number: 1
        }
        const newCardList = this.state.cardList
        newCardList.push(newImage)
        this.setState({
            cardList: newCardList
        })
    }

    render() {
        return (
            <View className='index'>
                <Button className='add_btn' onClick={this.props.add}>+</Button>
                <Button className='dec_btn' onClick={this.props.dec}>-</Button>
                <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
                <View><Text>{this.props.counter.num}</Text></View>
                <View><Text>Hello, World</Text></View>

                <View className='upload'>
                    <Text className='upload-button' onClick={this.asyncUpload.bind(this)}>模拟上传图片</Text>
                    <View className='props-wrapper'>
                        <Text>使用props数据</Text>
                        {
                            this.props.images.images.map((item)=>{
                                return (
                                    <Image
                                        className='card-image'
                                        src={item.image}
                                    />
                                )
                            })
                        }
                    </View>

                    <View className='state-wrapper'>
                        <Text>使用state数据</Text>
                        {
                            this.state.cardList.map((item)=>{
                                return (
                                    <Image
                                        className='card-image'
                                        src={item.image}
                                    />
                                )
                            })
                        }
                    </View>
                    <Text className='upload-button' onClick={this.props.asyncUpdateImages}>直接使用props的动作上传图片</Text>
                    <View className='props-direct-wrapper'>
                        <Text>使用props数据</Text>
                        {
                            this.props.images.images.map((item)=>{
                                return (
                                    <Image
                                        className='card-image'
                                        src={item.image}
                                    />
                                )
                            })
                        }
                    </View>


                </View>


            </View>
        )
    }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>
