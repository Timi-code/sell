import {
  RECEIVE_GOODS,
  RECEIVE_SELLER,
  RECEIVE_RATINGS
} from './types'

export default {
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_SELLER](state, {seller}) {
    state.seller = seller
  }
}
