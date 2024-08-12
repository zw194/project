import { showPage } from './juejin-booklets/pageShow'
import { showInnerPage } from './byte-internal-courses/pageShow'
import './index.css'
import _ from 'lodash'
import { load_booklets } from './utils/index'
if(process.env.NODE_ENV === 'production')
{
    console.log = function(){}
}
showPage()


load_booklets();

const booklet = document.querySelector('.booklet')
if (booklet != null) {
  booklet.addEventListener('click', () => {
    showPage()
   load_booklets()
  })
}

const inner = document.querySelector('.inner')
if (inner != null) {
  inner.addEventListener('click', () => {
    showInnerPage()
  })
}

window.addEventListener('scroll',  _.throttle(() => {
  if(booklet){
    load_booklets();
  }
}, 500));