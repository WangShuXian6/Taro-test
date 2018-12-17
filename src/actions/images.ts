import {UPDATE_IMAGES, CLEAR_IMAGES} from '../constants/images'
import snowImage from '../pages/index/snow.jpg'
import {add} from "./counter";

export const updateImages = (data) => {
    return {
        type: UPDATE_IMAGES,
        data
    }
}

export const clearImages = () => {
    return {
        type: CLEAR_IMAGES
    }
}

export function asyncUpdateImages () {
    return dispatch => {
        setTimeout(()=>{
            dispatch(updateImages(snowImage))
        },2000)

    }
}
