import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View,Text} from '@tarojs/components'

import './index.less'
import { AtIcon,AtMessage ,AtButton} from 'taro-ui'

type PageStateProps = {

}

type PageDispatchProps = {
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

class Index extends Component {

    config: Config = {
    navigationBarTitleText: 'taro-ui 2.0.0-beta2 测试'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (type) {
    Taro.atMessage({
      'message': '消息通知',
      'type': type,
    })
  }

  render () {
    return (
      <View className='index'>
        <Text>AtIcon 新的引入方式</Text>
        <View className='at-icon at-icon-settings' />

        <Text>AtIcon 一般用法</Text>
        <AtIcon value='clock' size='30' color='#F00' />

        <AtButton onClick={this.handleClick.bind(this)}>
          普通消息
        </AtButton>

        <AtMessage />
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
