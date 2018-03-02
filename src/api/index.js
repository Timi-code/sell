import axios from 'axios'

const GOODS_URL = '/api/goods'
const RATINGS_URL = '/api/ratings'
const SELLER_URL = '/api/seller'

export function reqGoods() {
  return axios.get(GOODS_URL)
}

export function reqRatings() {
  return axios.get(RATINGS_URL)
}

export function reqSeller() {
  return axios.get(SELLER_URL)
}
