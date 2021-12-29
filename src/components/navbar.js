Vue.component('navbar', {
    data: function () {
      return {
        count: 0
      }
    },
    template: 
    `
    <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>
    `
  })

//export default{
//    name: 'NavBar'
//}