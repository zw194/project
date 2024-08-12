import { getInnerData } from './getData'
import { list1, lodaInnerData } from './loadData'

export function showInnerPage() {
  let categoryId = '0'

  lodaInnerData()
  void getInnerData(categoryId)
  const list = document.querySelectorAll('.item2 .nav-list .nav-item .tag-item')
  console.log(list)

  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', (e) => {
      categoryId = list1[i].category_id

      console.log(categoryId)
      const active = document.querySelector(`.item2 .nav-list .active`)
      if (active !== null) {
        active.classList.remove('active')
      }
      list[i].classList.add('active')
      void getInnerData(categoryId)
    })
  }
}
