import {useStyle} from './hooks'
import React from 'react'

const VerticalBlock = ({w, h, scale}) => {
    const {tStyle} = useStyle(scale, w, h)
    return <div style = {tStyle()}>
    </div>
}

const HorizontalBlock = ({i, w, h, scale}) => {
    const {blockStyle} = useStyle(scale, w, h)
    return <div style = {blockStyle(i)}>
    </div>
}

const DoubleBlockMoverPresentational = ({w, h, scale, onClick}) => {
    return <div onClick = {onClick}>
              {[0, 1].map(i => <HorizontalBlock key = {`hb_${i}`} i = {i} w = {w} h = {h} scale = {scale}/>)}
              <VerticalBlock w = {w} h = {h} scale = {scale}/>
          </div>
}

export default DoubleBlockMoverPresentational
