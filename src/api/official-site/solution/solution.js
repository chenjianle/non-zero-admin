import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/official/website/solution/list',
    method: 'post',
    data: query
  })
}

export function fetchSolution(id) {
  return request({
    url: '/official/website/solution/' + id,
    method: 'get'
  })
}

export function createSolution(data) {
  return request({
    url: '/official/website/solution',
    method: 'post',
    data: data
  })
}

export function updateSolution(data) {
  return request({
    url: '/official/website/solution',
    method: 'put',
    data: data
  })
}

export function deleteSolution(id) {
  return request({
    url: '/official/website/solution/' + id,
    method: 'delete'
  })
}

export function checkoutStatus(id) {
  return request({
    url: '/official/website/solution/checkout/' + id,
    method: 'post'
  })
}
