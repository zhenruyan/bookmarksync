function getuserdata() {
  let userststus = localStorage.getItem('userdata');
  let userdata = JSON.parse(userststus);
  return userdata;
}
var root = new Vue({
  el: '.roms',
  data: {
    page: 1,
    user: {
      status: 0
    },
    list: [{
        'id': 1,
        'dates': '20070521',
        'data': ['temp']
      }, {
        'id': 2,
        'dates': '20070621',
        'data': ['temp']
      }, {
        'id': 3,
        'dates': '20070721',
        'data': ['temp']
      }, {
        'id': 4,
        'dates': '20070821',
        'data': ['temp']
      }, {
        'id': 5,
        'dates': '20070921',
        'data': ['temp']
      }

    ]

  },
  methods: {
    users() {
        root.page = 1;
      },
      syncs() {
        root.page = 2;
      },
      tools() {
        root.page = 3;
      },
      msgs() {
        root.page = 4;
      },
      login() {
        root.user.status = 1;
      },
      logout() {
        root.user.status = 0;
      },
      exportbook(){
        savebookdata();
        exports();
      },
      importbook(){
        console.log('aaa');
        files = document.querySelector('.importbutton').files[0];
        console.log(files);
        alert('aaa');
      }


  }
});

/*
本地导出
*/
function savebookdata() {
  chrome.bookmarks.getTree(arr=>{
    localStorage.setItem('exportdata',JSON.stringify(arr))
  })
}

function exports(){
   b=document.querySelector('.exportbutton')
   b.download='bookmark'+Date()+'.json'
  data=new Blob([localStorage.getItem('exportdata')])
  b.href=window.URL.createObjectURL(data)

}
