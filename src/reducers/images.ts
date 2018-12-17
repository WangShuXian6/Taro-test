import {UPDATE_IMAGES, CLEAR_IMAGES, ADD_IMAGES} from '../constants/images'

const INITIAL_STATE = {
    list: [],
    number: 0
}

export default function images(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPDATE_IMAGES:
            const newImages = state.list
            newImages.push(action.data)
            return Object.assign({}, state, {list: newImages})

        case CLEAR_IMAGES:
            return Object.assign({}, state, {list: []})

        case ADD_IMAGES:
            return Object.assign({}, state, {number: state.number + 1})

        default:
            return state
    }
}