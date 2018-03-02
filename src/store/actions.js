import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_SELLER
} from './types'

import {reqGoods, reqRatings, reqSeller} from '../api'

const RESULT_OK = 0

export default {
  getSeller({commit}, cb) {
    reqSeller().then(res => {
      const result = res.data
      if (result.code === RESULT_OK) {
        const seller = result.data
        commit(RECEIVE_SELLER, {seller})
        cb && cb()
      }
    })
  },
  getRatings({commit}, cb) {
    reqRatings().then(res => {
      const result = res.data
      if (result.code === RESULT_OK) {
        const ratings = result.data
        commit(RECEIVE_RATINGS, {ratings})
        cb && cb()
      }
    })
  },
  getGoods({commit}, cb) {
    reqGoods().then(res => {
      const result = res.data
      if (result.code === RESULT_OK) {
        const goods = result.data
        commit(RECEIVE_GOODS, {goods})
        cb && cb()
      }
    })
  }
}
