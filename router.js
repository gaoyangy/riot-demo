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
  if(util.history) {
    // 页面地址改变，更新页面
        fireUrlChange();
  }
  // hash值改变时更新页面
    window.addEventListener('hashchange', url => {
        fireUrlChange(url);
    });
    window.onpopstate=function(){
      fireUrlChange();
      location.reload()  
    }
  function fireUrlChange () {
  // 路由发生变化
  this.lastUrl = this.newUrl;
  PageTree.forEach(url => {
    let app = document.querySelector("#app")
    if(location.hash === '#'+ url.page || location.hash === url.page) {
      console.log(url.page)
      var head= document.getElementsByTagName('head')[0]
      url.tag.forEach(tag => {
        var template= document.createElement('div');
        template.innerHTML = `<${tag}></${tag}>`
        app.appendChild(template)
        var script= document.createElement('script');
        script.type= 'riot/tag' 
        script.src= `./tag/${tag}.tag`
        head.appendChild(script)
      }, file)
      var src=document.querySelector("script");
      //head.removeChild(src);
      //
    }
    //
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