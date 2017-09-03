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
    }
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
      }


  }
});
