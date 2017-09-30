export default function getJSON(method,url,data) {  
  return new Promise(function(resolve, reject) {  
      var XHR = new XMLHttpRequest();
      if (method) {
        method = method.toLocaleUpperCase()
      }
      XHR.open(method, url, true); 
      XHR.onreadystatechange = function() {  
          if (XHR.readyState == 4) {  
              if (XHR.status == 200) {  
                  try {  
                      var response = JSON.parse(XHR.responseText);  
                      resolve(response);  
                  } catch (e) {  
                      reject(e);  
                  }  
              } else {  
                  reject(new Error(XHR.statusText));  
              }  
          }  
      }
      if (data) {
        XHR.send(JSON.stringify(data));  
      }
  }).then().catch(e => {
    console.log(e)
  })  
}