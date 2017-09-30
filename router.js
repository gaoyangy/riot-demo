(function() {
  var util = {
    history: !!window.history && window.history.pushState,
    hashchange: 'onhashchange' in window
  }
  let PageTree = [
    {page:'', tag:['todo']},
    {page:'/page1', tag:['todo','list']},
    {page:'/page2', tag:['list']}
  ]
  let Arrtag = []
  if(util.history) {
    // 页面地址改变，更新页面
        fireUrlChange();
  }
  // hash值改变时更新页面
  window.addEventListener('hashchange', url => {
        fireUrlChange(url);
  });

  function add () {
    var head= document.getElementsByTagName('html')[0]
    tag.forEach(elem => {
      var script= document.createElement('script');
      script.type= 'riot/tag' 
      script.src= `./tag/${elem}.tag`
      head.appendChild(script)
      setTimeout(function(){
        if(!riot){
          window.location.reload()
        }else{
          riot.compile(function() {
            riot.mount('*')
          })
        }
      },10)
    })
  }
  function fireUrlChange () {
  // 路由发生变化
  this.lastUrl = this.newUrl;
  PageTree.forEach(url => {
    let app = document.querySelector("#app")
    if(location.hash === '#'+ url.page || location.hash === url.page) {
      let appdiv = document.querySelector("#app>div")
      if (appdiv) {
        app.innerHTML = ''
      }
      console.log(url.page)
      tag = url.tag
      url.tag.forEach(tag => {
        var template= document.createElement('div');
        template.innerHTML = `<${tag}></${tag}>`
        app.appendChild(template)
        //渲染html
        add()
    }, file)
    }
    function file (result,app) {
      if (!result) {
        // app.innerHTML = 'NO found'
      } else {
        //app.innerHTML = 'loading'
      }
    }
    //
  })
  }
})()