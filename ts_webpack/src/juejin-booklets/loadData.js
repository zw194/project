export const list1 = [
  { category_id: '0', category_name: '全部' },
  { category_id: '6809637769959178254', category_name: '后端' },
  { category_id: '6809637767543259144', category_name: '前端' },
  { category_id: '6809635626879549454', category_name: 'Android' },
  { category_id: '6809635626661445640', category_name: 'iOS' },
  { category_id: '6809637773935378440', category_name: '人工智能' },
  { category_id: '6809637771511070734', category_name: '开发工具' },
  { category_id: '6809637776263217160', category_name: '代码人生' },
  { category_id: '6809637772874219534', category_name: '阅读' }
]
export const list2 = [
  { status_name: '全部', sort: '10' },
  { status_name: '最新', sort: '1' },
  { status_name: '热销', sort: '7' },
  { status_name: '价格', sort: '8' }
]
export function lodaData() {
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
  if (modify !== null) {
    modify.innerHTML = str
  }

  const statu = document.querySelector('.filter-left')
  const filterLeft = list2
    .map((item, index) => {
      if (index === 0) {
        return `<a href="#" class="sort-item  filter-active" data-id = ${item.sort}>${item.status_name}</a>`
      } else if (index === list2.length - 1) {
        return `<a href="#" class="sort-item price" data-id=${item.sort}
        >${item.status_name}
        <div class="triangle">
          <div class="triangle-top"></div>
          <div class="triangle-bottom"></div>
        </div>
      </a>`
      } else {
        return ` <a href="#" class="sort-item" data-id = ${item.sort}>${item.status_name}</a>`
      }
    })
    .join('')
  console.log(filterLeft)
  if (statu !== null) {
    statu.innerHTML = filterLeft
  }

  const right = document.querySelector('.filter-right')
  if (right !== null) {
    right.innerHTML = `<span class="checkbox">
<label>
  <span class="check-select"><input type="checkbox" class = "check" /></span>
  <span>只看VIP课程</span>
</label>
</span>`
  }
}
