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

export function asyncUpdateImages() {
    const imageObj = {
        image: snowImage,
        hasRecord: false,
        record: '',
        number: 1
    }
    return dispatch => {
        setTimeout(() => {
            dispatch(updateImages(imageObj))
        }, 2000)

    }
}
