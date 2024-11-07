new Vue({
  el: '#app',
  data: {
    message: '',
    dialogVisible: false
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    }
  }
});