// console.log(JSON.stringify(datas));
datas = data[0].children[0].children
  /*
    parentId 父节点id
    id  id
    index  排序
    title  标题
    children  节点
    url  链接
  */


function addkey(datas, id) {
  for (let ks in datas) {
    // console.log(datas[ks].id);
    if (datas[ks].children) {
      // console.log('创建文件夹' + datas[ks].title + 'id:' + datas[ks].id)
      chrome.bookmarks.create({
        'parentId': id || '1',
        'index': datas[ks].index,
        'title': datas[ks].title
      }, arr => {
        addkey(datas[ks].children, arr.id);
      })

    } else {
      console.log('index:' + datas[ks].index + '创建书签' + datas[ks].title + 'id：' +
        datas[ks].id + '父节点id' +
        id);
      chrome.bookmarks.create({
        'parentId ': String(id) || "",
        'index': datas[ks].index,
        'title': datas[ks].title,
        'url': datas[ks].url
      })
    }
  }
}

addkey(datas);
// console.log(datas);
