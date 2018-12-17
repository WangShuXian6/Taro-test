import {UPDATE_IMAGES, CLEAR_IMAGES} from '../constants/images'

export const updateImages = (data) => {
    return {
        type: UPDATE_IMAGES,
        data
    }
}

export const asyncUpdateImages = (data) => {
    return dispatch => {
        dispatch(updateImages(data))
    }
}

export const clearImages = () => {
    return {
        type: CLEAR_IMAGES
    }
}
