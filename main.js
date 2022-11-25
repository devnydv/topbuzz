let a=0;
  let b=5;
  function load() {
    fetch('https://paycode-19bb1.firebaseio.com/home.json')
      .then((responce) => responce.json())
      .then((data) => {
        //console.log(data);
        let got = Object.keys(data);
  
        let vall = got.length;
        
        
        
        //console.log(vall)
        for (let i = a; i < a+b; i++) {
            let opp= Object.keys(data).reverse()
            let tkey=opp[i]


          //let key = "post" + i
          //console.log(i)
          let main = document.getElementById('main');
          let butt = document.getElementById('load');
          let ndiv = document.createElement("div");
          let dimg = document.createElement("div");
          let dtls = document.createElement('div');
          let para = document.createElement('h1');
          let img = document.createElement('img');
          let link = document.createElement('a');
          let but = document.createElement('button');
  
          ndiv.setAttribute('class', 'ndiv');
          dimg.setAttribute('class', 'img');
          dtls.setAttribute('class', 'details');
          img.setAttribute("src", data[tkey].img);
          img.setAttribute('alt', data[tkey].title);
          para.innerText = data[tkey].title;
          but.innerText = "View Details";
          but.setAttribute('class', 'but');
  
          let nppara = data[tkey].title;
          let c = nppara.split(" ").join('_');
          // console.log(key)
  
  
          link.innertext = 'product.html';
          link.setAttribute('href', 'product.html?id=' + `${tkey}` + "&" + 'title=' + `${c}`);
  
          dimg.appendChild(img);
          ndiv.appendChild(dimg);
          ndiv.appendChild(dtls);
          dtls.appendChild(para);
          dtls.appendChild(link);
          link.appendChild(but);
          main.insertBefore(ndiv, butt);
  
        
  
        }
      
      
        a=a+b;
        let dif=vall-a
        console.log(a)
        console.log(dif+'difval')
        if(5>dif){
          a=a
          b=dif;
        }
        if(dif==0){
          let btn=document.getElementById("btn");
          btn.innerText= "No More Tech Found...";
          console.log(dif+'disavle');
          document.getElementById("btn").disabled=true;
        }
      
  
      })
  
  }
  
  load()
