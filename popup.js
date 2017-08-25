chrome.bookmarks.getTree(arr=>{localStorage.setItem('a',JSON.stringify(arr))})

function tijia() {
  fetch("http://127.0.0.1:3000/",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: localStorage.getItem('a')
    })
  }).then(function(response) {
    return response;
  }).catch(
    err=>{
      return err
    }
  );
}


var loginstatus = new Vue({
  el: '.vroot',
data: {
    user:{
      status:0,
      hison:0
    }
},
methods: {
  logout() {
    loginstatus.user.status=0;
    loginstatus.user.hison=0;
  },
  login(){
    loginstatus.user.status=1;
  },pushall(){
    console.log('pushall');
  },
  cloneall(){
      console.log('cloneall');
  },
  newhistview(){
    console.log('hist')
    loginstatus.user.hison=1;
  },
  xhist(){
    loginstatus.user.hison=0;
  }

}
});
