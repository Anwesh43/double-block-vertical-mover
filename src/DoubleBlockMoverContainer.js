import React from 'react'
import {useDimension, useAnimatedScale} from './hooks'

import DoubleBlockMoverPresentational from './DoubleBlockMoverPresentational'
const DoubleBlockMoverContainer = (props) => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.02, 30)
    return <DoubleBlockMoverPresentational w = {w} h = {h} scale = {scale} onClick = {start}>
            </DoubleBlockMoverPresentational>
}

export default DoubleBlockMoverContainer
