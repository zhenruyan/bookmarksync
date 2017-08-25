chrome.bookmarks.getTree(arr=>{console.log(JSON.stringify(arr));localStorage.setItem('a',JSON.stringify(arr))})

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
