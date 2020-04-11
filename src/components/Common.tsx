import React, { Component, useEffect, useLayoutEffect, useReducer, useState, useContext, useRef, useCallback, useMemo, } from 'react'
import Taro, { useRouter, useTabItemTap, useResize, useReachBottom, usePullDownRefresh, useDidHide, useDidShow, usePageScroll } from '@tarojs/taro'
import { View, Text, Canvas, Image } from '@tarojs/components'
import './Common.less'
type Props = {

}
export default function Common({ }: Props) {

  return (
    <View className='common-container'>
      common
    </View>
  )
}
