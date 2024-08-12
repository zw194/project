export async function getInnerData(categoryId) {
  const response = await fetch(
    `https://api.juejin.cn/booklet_api/v1/bytecourse/list_by_category?category_id=${categoryId}&cursor=0&page_size=20&aid=2608&uuid=7349488724961347098&spider=0`,
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        pragma: 'no-cache',
        priority: 'u=1, i',
        'sec-ch-ua':
          '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site'
      },
      referrer: 'https://juejin.cn/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: null,
      method: 'GET'
    }
  )
  const data = await response.json()
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const book_item = document.querySelector('.books-view')
  const pig = `<svg data-v-5b624632 width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="video-icon">
  <path ata-v-5b624632
    d="M4.32253 13.2286V13.2286C3.62016 13.2286 3.05078 12.6593 3.05078 11.9569V5.05469C3.05078 3.95012 3.94621 3.05469 5.05078 3.05469H11.953C12.6554 3.05469 13.2247 3.62407 13.2247 4.32643V4.32643"
    stroke-width="1.2"
    stroke-linecap="round"
  ></path>
  <rect  data-v-5b624632 x="6.25039" y="6.24844" width="10.7275"
    height="10.7275"
    rx="1.6"
    stroke-width="1.2"
  ></rect>
  <path
    data-v-5b624632
    d="M13.7117 11.2915L10.778 9.49607C10.5212 9.33889 10.1914 9.52371 10.1914 9.8248L10.1914 13.4158C10.1914 13.7168 10.5212 13.9017 10.778 13.7445L13.7117 11.949C13.9574 11.7987 13.9574 11.4419 13.7117 11.2915Z"
  ></path>
</svg>`
  if (book_item != null) {
    book_item.innerHTML = data.data
      .map(item => {
        const durationInSeconds =
          item.content.extra.course_package.duration / 1000
        const durationInMinutes = durationInSeconds / 60
        // 计算小时数和分钟数
        const hours = Math.floor(durationInMinutes / 60) // 使用 Math.floor 进行向下取整
        const minutes = Math.floor(durationInMinutes % 60)

        return `<a href="#" class="byte-item">
    <div class="poster">
      <img
        src=${item.content.cover_image.url}  class="book-img"
      />
    </div>
    <div class="book-info">
      <div class="title-box">
        <span class="tag tag_vip">VIP免费</span>
        <span class="content">${item.content.name}</span>
      </div>
      <span class="desc"
        >${item.content.abstract}</span
      >
      <div class="source-wrap">
        <img
          src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/icon-bytetech.6c483d2.png"
          alt=""
        />
        ByteTech
      </div>
      <div class="video-count-duration-wrap">${pig}${item.content.extra.course_package.chapter_count}个视频 · ${hours} 小时${minutes}分钟</div>
    </div>
  </a>`
      })
      .join('')
  }
}
