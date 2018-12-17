import {UPDATE_IMAGES, CLEAR_IMAGES} from '../constants/images'

const INITIAL_STATE = {
    images: []
}

export default function images(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPDATE_IMAGES:
            const newImages = state.images
            newImages.push(action.data)
            return Object.assign({}, state, {images: newImages})

        case CLEAR_IMAGES:
            return Object.assign({}, state, {images: []})

        default:
            return state
    }
}