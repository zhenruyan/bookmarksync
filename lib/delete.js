//删除节点
function rmalls() {

  function rmd(id) {
    chrome.bookmarks.removeTree(id, arr => {
      return arr
    })
  }

  //将本地书签存为json
  function getlocal() {
    chrome.bookmarks.getTree(arr => {
      console.log(arr);
      localStorage.setItem('rmdata', JSON.stringify(arr))
    });
  }
  //获取rmtree
  function getrmtree() {
    rmtree = eval(localStorage.getItem('rmdata'))
  }

  //遍历json
  function listid() {
    idarr = [];
    for (key in rmtree[0].children) {
      // console.log(key);
      for (keys in rmtree[0].children[key].children) {
        // console.log(rmtree[0].children[key].children[keys].id)
        if (rmtree[0].children[key].children[keys].id > 1) {
          idarr.push(rmtree[0].children[key].children[keys].id);
        }
      }
    }
  }
  //删除全部节点
  function rmall() {
    for (rmid in idarr) {
      rmd(idarr[rmid]);
    }
  }
  getlocal();
  getrmtree();
  listid();
  rmall()

}
