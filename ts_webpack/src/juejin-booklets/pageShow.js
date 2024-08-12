import { getData } from './getdata'
import { list1, list2, lodaData } from './loadData'
import { load_booklets } from '../utils'
export function showPage() {
  let categoryId = '0'
  let sort = '10'
  let isVip = '0'
  // 每次获取数据的时候先清空里面的内容
  getData(categoryId, sort, isVip)
  
  lodaData()
  const list = document.querySelectorAll('.item2 .nav-list .nav-item .tag-item')
  const filter = document.querySelectorAll('.filter-left .sort-item')
  // console.log(list)
  const list3 = document.querySelectorAll('.item1 .nav-item .tag-item')
  // console.log('list3', list3)
  for (let i = 0; i < list3.length; i++) {
    list3[i].addEventListener('click', () => {
      const item1 = document.querySelector('.item1 .active')
      console.log(item1)
      if (item1 !== null) {
        item1.classList.remove('active')
      }
      list3[i].classList.add('active')
    })
  }
  // console.log('list', list)
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', () => {
      categoryId = list1[i].category_id
      sort = '10'
      refresh()
      console.log(categoryId, sort, isVip)
      const item2 = document.querySelector('.item2 .nav-list .active')
      console.log(item2)
      if (item2 !== null) {
        item2.classList.remove('active')
      }

      list[i].classList.add('active')
      console.log(categoryId, sort, isVip)
      
      getData(categoryId, sort, isVip)
      load_booklets()
    })
  }

  for (let i = 0; i < filter.length; i++) {
    filter[i].addEventListener('click', () => {
      sort = list2[i].sort

      console.log(categoryId, sort, isVip)
      const active = document.querySelector(`.filter-left .filter-active`)
      if (active !== null) {
        active.classList.remove('filter-active')
      }
      filter[i].classList.add('filter-active')
      const top = document.querySelector('.triangle-top')
      const bottom = document.querySelector('.triangle-bottom')
      if (i === filter.length - 1) {
        if (bottom !== null && top !== null) {
          if (bottom.classList.contains('bottom-active')) {
            sort = '8'
            bottom.classList.remove('bottom-active')
            top.classList.add('top-active')
          } else {
            sort = '9'
            bottom.classList.add('bottom-active')
            top.classList.remove('top-active')
          }
        }
      } else {
        if (top !== null && top.classList.contains('top-active input'))
          top.classList.remove('top-active')
        if (bottom !== null && bottom.classList.contains('bottom-active'))
          bottom.classList.remove('bottom-active')
      }

      getData(categoryId, sort, isVip)
      load_booklets()

    })
  }
  const selectVip = document.querySelector('.filter-right ')
  if (selectVip !== null) {
    selectVip.addEventListener('click', () => {
      if (isVip === '1') isVip = '0'
      else isVip = '1'
      getData(categoryId, sort, isVip)
      load_booklets()
    })
  }

  function refresh(){
    const uactive = document.querySelector(`.filter-left .filter-active`)

    if (uactive !== null) {
      uactive.classList.remove('filter-active')
    }
    filter[0].classList.add('filter-active')
    const tops = document.querySelector('.triangle-top')
    const bottoms = document.querySelector('.triangle-bottom')
    console.log(tops, bottoms)
    if (tops !== null && tops.classList.contains('top-active')) {
      tops.classList.remove('top-active')
    }

    if (bottoms !== null && bottoms.classList.contains('bottom-active')) {
      bottoms.classList.remove('bottom-active')
    }
  }
}
