export const list1 = [
  { category_id: '0', category_name: '全部' },
  { category_id: '6809637769959178254', category_name: '后端' },
  { category_id: '6809637767543259144', category_name: '前端' },
  { category_id: '6809635626879549454', category_name: 'Android' },
  { category_id: '6809635626661445640', category_name: 'iOS' },
  { category_id: '6809637776263217160', category_name: '代码人生' }
]
export function lodaInnerData(){
  const modify = document.querySelector('.item2 .nav-list')
  const str = list1
    .map((item, index) => {
      if (index === 0)
        return `<a href="#" class="nav-item">
    <span class="tag-item active" data-id = ${item.category_id}>${item.category_name}</span>
    </a>`
      else {
        return `<a href="#" class="nav-item">
        <span class="tag-item" data-id = ${item.category_id}>${item.category_name}</span>
        </a>`
      }
    })
    .join('')
  console.log(str)
  if (modify != null) {
    modify.innerHTML = str
  }

  const statu = document.querySelector('.filter-left')
  if (statu != null) {
    statu.innerHTML = ''
  }
  const selected = document.querySelector('.filter-right')
  if (selected != null) {
    selected.innerHTML = ''
  }
}
