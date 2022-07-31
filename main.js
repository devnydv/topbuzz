


fetch('https://paycode-19bb1.firebaseio.com/home.json')
.then((responce)=>responce.json())
.then((data)=>{
  //console.log(data);
  let got = Object.keys(data);
  
    let vall = got.length;
    //console.log(vall)
    
    if(vall<=10){
      let butt=document.getElementById("butt");
      butt.innerText= "No More Tech Found..."
      butt.setAttribute('disabled','disabled')
    }
    window.localStorage.setItem("val", vall)
    let newp= vall-9
    
    //console.log("newp"+newp)
      for (let i = vall; i >=newp ; i--) {
        //let key = got[i];
        let key="post"+i
        let main = document.getElementById('main');
        let butt=document.getElementById('load');
      let ndiv= document.createElement("div");
      let dimg=document.createElement("div");
      let dtls=document.createElement('div');
      let para = document.createElement('h1');
      let img = document.createElement('img');
      let link = document.createElement('a');
      let but=document.createElement('button');

      ndiv.setAttribute('class','ndiv');
      dimg.setAttribute('class','img');
      dtls.setAttribute('class','details');
      img.setAttribute("src", data[key].img );
      img.setAttribute('alt', data[key].title);
      para.innerText = data[key].title;
      but.innerText= "View Details";
      but.setAttribute('class','but');

      let nppara= data[key].title;
       let c= nppara.split(" ").join('_');
      // console.log(key)


      link.innertext = 'product.html';
      link.setAttribute('href', 'product.html?id=' + `${key}`+"&"+'title='+`${c}`);
      
      dimg.appendChild(img);
      ndiv.appendChild(dimg);
      ndiv.appendChild(dtls);
      dtls.appendChild(para);
      dtls.appendChild(link);
      link.appendChild(but);
      main.insertBefore( ndiv, butt);


      
      }
      




    
}


)

  
  let apival=window.localStorage.getItem("val")
  
//console.log(apival)
function load() {
      //console.log(apival)
      
      
    if(apival>1 ){
      apival=apival-10
      mval=apival-9
      console.log("mbal"+ mval)
      console.log(apival)
      lol(apival, mval)
      
      
      
    }if(mval<10){
      apival=mval
      mval=1
      
      lol(apival, mval)
      let butt=document.getElementById("butt");
      butt.innerText= "No More Tech Found..."
      butt.setAttribute('disabled','disabled')
      
    }
    
  }
  
function lol(apival, mval){
  //console.log("lolapi"+apival, mval)


  fetch('https://paycode-19bb1.firebaseio.com/.json')
  .then((responce)=>responce.json())
  .then((data)=>{
    //console.log(data.home);
    let get = Object.keys(data.home);
    console.log(get)
     // let vall = get.length;
    //  vall--
      
      
        for (let i =apival ; i >= mval; i--) {
          //let key = get[i];
          let key= "post"+i
          let main = document.getElementById('main');
          let butt=document.getElementById('load')
        let ndiv= document.createElement("div");
        let dimg=document.createElement("div");
        let dtls=document.createElement('div');
        let para = document.createElement('h1');
        let img = document.createElement('img');
        let link = document.createElement('a');
        let but=document.createElement('button');
  
        ndiv.setAttribute('class','ndiv');
        dimg.setAttribute('class','img');
        dtls.setAttribute('class','details');
        img.setAttribute("src", data[key].img);
        img.setAttribute('alt', data[key].title);
        para.innerText = data[key].title;
        but.innerText= "View Details";
        but.setAttribute('class','but');
  
        let nppara= data.home[key].title;
         let c= nppara.split(" ").join('_');
         console.log(c);
  
  
        link.innertext = 'product.html';
        link.setAttribute('href', 'product.html?id=' + `${key}`+"&"+'title='+`${c}`);
        
        dimg.appendChild(img);
        ndiv.appendChild(dimg);
        ndiv.appendChild(dtls);
        dtls.appendChild(para);
        dtls.appendChild(link);
        link.appendChild(but);
        main.insertBefore( ndiv, butt);
  
  
        
        }
        
  
  
  
  
      
  }
  
  
  )
  
}
