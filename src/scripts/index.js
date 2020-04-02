   //CLICK ON THE NEWS ICON ON THE TOP TO GET DETAILS ABOUT PROJECT
   import "../styles/index.css";
   import Darkmode from 'darkmode-js';
   var options = {
    position:'fixed',
    right: 'unset',
    left: '8px', 
    bottom:'8px',
    time: '0.7s',
    mixColor: '#fff', 
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c',  
    buttonColorLight: '#fff', 
    saveInCookies: false, 
    label: '🌓', 
    autoMatchOsTheme: true 
  };
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();



  

   const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=9d7ddb7c0b54416688c9a8b49b2274cb';
   
  
   
   var searchBox = document.getElementById("search");
   searchBox.addEventListener("keypress",(event)=>{
        var usersearch = document.getElementById("search").value;
        
       if(event.keyCode==13){
           console.log(usersearch); 
           if(usersearch != ''){
               var searchUrl = `https://newsapi.org/v2/everything?q=${usersearch}&apiKey=9d7ddb7c0b54416688c9a8b49b2274cb`;
               beforeLoading();
               getNews(searchUrl);
           }   
           else{
               console.log(usersearch);
               beforeLoading();
               getNews(url); 
           }
       }   
   });
   var loadingUntil;

 const beforeLoading=()=>{
   document.querySelector("#news-section").style.display="none";
   loadingUntil=setTimeout(afterLoading,2000);
   };
   
    
   const afterLoading=()=>{
       document.querySelector("#loader").style.display="none";
       document.querySelector("#news-section").style.display="block";
      /* import "../styles/index.css";
      var options = {
           position:'fixed',
           right: 'unset',
           left: '10px', 
           bottom:'10px',
           time: '0.7s',
           mixColor: '#fff', 
           backgroundColor: '#fff',
           buttonColorDark: '#100f2c',  
           buttonColorLight: '#fff', 
           saveInCookies: false, 
           label: '🌓', 
           autoMatchOsTheme: true 
         };
         
         const darkmode = new Darkmode(options);
         darkmode.showWidget();*/
      
       
   };
   
   const getNews= async(url)=>{
       const fetchData=await fetch(url);
       const result=await fetchData.json();
       console.log(result.articles[0].author);
   
       if(result.totalResults>0){
           var output="";
           result.articles.forEach((element)=>{
               output+=
               `<li class="article">
                   <img class="article-img img-responsive" src="${element.urlToImage}" alt="Image Not Availiable" style="width:100%;border-radius:5px;height:auto;padding:15px">
                   <h2 class=" card-title" style="padding:15px">${element.title}</h2>
                   <p class=" card-text" style="padding:15px">${element.description}</p>
                   <span class="article-author card-text " style="padding:15px">Author:  ${element.author}</span> <br>
                   <br> <a href=${element.url} class="article-link btn btn-primary mb-1" target='_blank'><em>Read More At: ${element.source.name}</em></a></li>`;
           });
           output += '';
           document.getElementById('news-articles').innerHTML=output;
       } else if(result.totalResults==0){
    let noResultsFound=document.querySelector(" #news-section");
    noResultsFound.innerHTML=`<h3> ${usersearch } ??? No such article found.</h3> `;
       }
   };
   getNews(url);
   
   window.addEventListener('scroll',()=>{
       const getval= window.scrollY;
   console.log(getval);
   if(getval>=600){
       document.getElementById('scrollToTop').style.display="block";
   }
   else{
       document.getElementById('scrollToTop').style.display="none";   
   }
   });
   document.getElementById('scrollToTop').addEventListener("click",()=>{
       window.scrollTo({
           top:0,
           left:0,
           behavior:"smooth"
       });
   
   });
   
   let searchBar=document.getElementById('search');
   searchBar.addEventListener('click',()=>{
       searchBar.style.border="3px solid rgba(51,102,255,0.7)";
   
   
   });
   searchBar.addEventListener('mouseout',()=>{
       searchBar.style.border="none";
       searchBar.style.borderBottom="2px solid black";
      searchBar.style.isolation="isolate";
    

       
   });
   
   let information=document.getElementById('unique');
   information.addEventListener('click',()=>{
       alert(`WELCOME TO NEWS AGGREGATOR APP
       Created by: Dipak Roy
       Features:
       1) scroll to top button
       2) Day/Night Mode
       3) Dynamic
       4) Pre Loader
       5) Thankyou Message (bottom of the page)`);
   });
   setTimeout(() => {
       document.getElementById('placeme').innerHTML=`<marquee  class="moving " behavior="alternate" scrollamount="13">Thanks for visitng NEWS Aggregator App.Hope You Enjoyed <i class="fas fa-smile-wink"></i> It! </marquee>`;
       
   }, 10000);