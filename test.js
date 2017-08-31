const data = require('./demo.js');
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


function addkey(datas) {
  for (let ks in datas) {
    // console.log(datas[ks].id);
    if (datas[ks].children) {
      console.log('创建文件夹' + datas[ks].title + 'id:' + datas[ks].id)
      addkey(datas[ks].children);
    } else {
      console.log('创建书签' + datas[ks].title + 'id：' + datas[ks].id + '父节点id' +
        datas[ks].parentId);
    }
  }
}

addkey(datas);
// console.log(datas);
