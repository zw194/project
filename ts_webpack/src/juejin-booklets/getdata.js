
export async function getData(categoryId,sort,isVip) {
 
  let response = await fetch(
    'https://api.juejin.cn/booklet_api/v1/booklet/listbycategory?aid=2608&uuid=7349488724961347098&spider=0',
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
        'sec-fetch-site': 'same-site',
        'x-secsdk-csrf-token':
          '0001000000016fcf4cc45910203e9a084abaae917da84cf2b584c9a6c4145c6c23d4929b851517cbdbc57a5dd18f'
      },
      referrer: 'https://juejin.cn/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `{"category_id":"${categoryId}","cursor":"0","sort":${sort},"is_vip":${isVip},"limit":60}`,
      method: 'POST'
    }
  )
  response = await response.json()
  const level = []
  level[2] = 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53901be7d27e4abe94530e12d815491d~tplv-k3u1fbpfcp-jj:0:0:0:0:q75.avis'
  level[3] = 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/922e26916a444513bceddad5bcf437e1~tplv-k3u1fbpfcp-jj:0:0:0:0:q75.avis'
  level[4] = 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1f4453379f1d416ca00c3619e796d330~tplv-k3u1fbpfcp-jj:0:0:0:0:q75.avis'
  level[5] = 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8584543d8535435a9d74c1fbf7901ac7~tplv-k3u1fbpfcp-jj:0:0:0:0:q75.avis'
  level[6] = 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1f4af1eaec64ce78675ad13fcd71be1~tplv-k3u1fbpfcp-jj:0:0:0:0:q75.avis'
  level[7] = 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a070131b0b34e729a1c6b0cdcda2dc7~tplv-k3u1fbpfcp-jj:0:0:0:0:q75.avis'
  level[8] = 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/271b5a9cf1e84447b6518cd7bb6b0e07~tplv-k3u1fbpfcp-jj:0:0:0:0:q75.avis'
  const vipLevel = [];
  vipLevel[1] = 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7467fc326521e91a50af0d354572dccc.svg'
  vipLevel[4] = 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/07302452a7ad81cb43a173b5cd580237.svg'
  vipLevel[5] = 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/162b40efbd71af9a806dd2b54c4580ef.svg'
  const bookItem = document.querySelector('.books-view');
  bookItem.innerHTML = '';
  if (bookItem !== null) {
    response.data.forEach(item => {
      // 创建包含书籍信息的 div 节点
      const bookItemDiv = document.createElement('div');
      bookItemDiv.classList.add('book-item');
  
      // 构建书籍信息的 HTML 内容
      let htmlContent = `
        <div class="img-info">
          <img data-src="${item.base_info.cover_img}" class="book-img" />
        </div>
        <div class="book-info">
          <div class="title-box">
      `;
  
      // 根据条件添加标签内容
      let tagContent = `<span class="content">${item.base_info.title}</span>`;
      if (item.is_new !== false) {
        tagContent = `<span class="tag tag_new">新品</span>` + tagContent;
      } else if (item.base_info.can_vip_borrow !== false) {
        tagContent = `<span class="tag tag_vip">VIP</span>` + tagContent;
      }
      htmlContent += tagContent + `
          </div>
          <span class="desc">${item.base_info.summary}</span>
          <div class="author">
            <a href="#" class="xiaoce-user">
              <div class="hero">
                <img class="avator-img" data-src="${item.user_info.avatar_large}" alt="" />
              </div>
              <a href="#" class="author_name">
                <span class="name">${item.user_info.user_name}</span>
      `;
  
      // 根据条件添加等级信息
      let rankContent = '';
      if (item.user_info.level !== 0) {
        rankContent = `
          <span class="rank">
            <img data-src="${level[item.user_info.level]}" alt="" />
          </span>
        `;
      }
      htmlContent += rankContent;
  
      // 根据条件添加 VIP 等级信息
      let vipContent = '';
      if (item.user_info.is_vip === true && item.user_info.user_growth_info.vip_level !== 0) {
        vipContent = `
          <div class="vip_level">
            <span class="tooltip">
              <img src="${vipLevel[item.user_info.user_growth_info.vip_level]}" />
            </span>
          </div>
        `;
      }
      htmlContent += vipContent + `
              </a>
            </a>
            <div class="author_desc">${item.user_info.job_title}${item.user_info.company}</div>
          </div>
          <div class="other">
      `;
  
      // 根据条件添加价格信息
      let priceContent = '';
      if (item.max_discount.discount_money !== 0) {
        priceContent = `
          <div class="lasted-price">
            <span class="price-unit">￥</span>${item.max_discount.discount_money / 100}
            <span class="origin-price">￥${item.max_discount.price / 100}</span>
          </div>
        `;
      } else {
        priceContent = `
          <div class="lasted-price">
            <span class="price-unit">免费</span>
          </div>
        `;
      }
      htmlContent += priceContent + `
            <div class="messages">
              <span>已完结${item.section_updated_count}小结</span>
              <div class="message">
                <span>${item.base_info.buy_count}</span>
                <span>人已购买</span>
              </div>
            </div>
          </div>
          <div class="sale-tooltip-wrap">
            <div class="sale-tooltip">${item.max_discount.desc}</div>
          </div>
        </div>
      `;
  
      // 将构建好的 HTML 内容赋值给 bookItemDiv 的 innerHTML
      bookItemDiv.innerHTML = htmlContent;
  
      // 将 bookItemDiv 添加到 bookItem 中
      bookItem.appendChild(bookItemDiv);
    });
  }
  // 添加懒加载
  // 当DOM渲染完成后，执行懒加载
}
