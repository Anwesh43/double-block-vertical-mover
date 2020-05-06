import {useState, useEffect} from 'react'
import {sinify, divideScale, maxScale} from './hooks'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                var currScale = scale
                setAnimated(false)
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, h
    }
}

export const useStyle = (scale, w, h) => {
    const sf = sinify(scale)
    const sc1 = divideScale(sf, 0, 2)
    const sc2 = divideScale(sf, 1, 2)
    const fixedH = h / 2
    const blockSize = Math.min(w, h) / 8
    const y = fixedH - (h / 2 - blockSize) * sf2
    const fixedW = w / 2
    const position = 'absolute'
    const background = '#673AB7'
    return {
        blockStyle(i) {
            const sj = 1 - 2 * i
            const x = fixedW * i + (fixedW - blockSize) * sj * sc1
            const left = `${x}px`
            const top = `${y - blockSize}px`
            const width = `${blockSize}px`
            const height = `${blockSize}px`
            return {position, top, left, width, height, background}
        },
        tStyle() {
            const left = `${w / 2 - fixedW / 2}px`
            const top = `${y}px`
            const width = `${blockSize}px`
            const height = `${fixedH - y}px`
            return {position, left, top, background, width, height}
        }

    }
}
