import React, { Component, useEffect, useLayoutEffect, useReducer, useState, useContext, useRef, useCallback, useMemo, } from 'react'
import Taro, { useRouter, useTabItemTap, useResize, useReachBottom, usePullDownRefresh, useDidHide, useDidShow, usePageScroll } from '@tarojs/taro'
import { View, Text, Canvas, Image } from '@tarojs/components'
import './index.less'

//components
import Common from '../../components/Common'

export default function Index() {

  return (
    <View className='second'>
      second
      <Common></Common>
    </View>
  )
}
