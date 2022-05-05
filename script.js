// var xhr =new XMLHttpRequest();
// var txt="";
// xhr.onreadystatechange=function(){

//     if(xhr.readyState ==4 )
//     if(xhr.status==200){
//         jsonObj = xhr.responseText;
//         jsOjc=JSON.parse(jsonObj);
//         console.log(jsOjc);
//         let x=""
//         for(let i in jsOjc.data){
//             x=jsOjc.data[i].Title
//             console.log(x)
//         }
//         // console.log(jsOjc.data[0].Title)

//         document.getElementsByTagName("div")[0].innerHTML=jsonObj;
//       }

// }
// xhr.open("GET","https://jsonmock.hackerrank.com/api/movies/search/?Title=run" , true);
// xhr.send();

// jsObj;
// jsonObj;
j = 1;

function getMovieTitles(substr) {
  const orignalUrl =
    "https://jsonmock.hackerrank.com/api/movies/search/?Title=";
  usedUrl = `${orignalUrl}${substr}`;

  var url = new XMLHttpRequest();
  url.open("GET", usedUrl, true);
  url.send();

  start(url);
}

getMovieTitles("mo");

function start(url) {
    url.onreadystatechange = function () {
        if (url.readyState == 4)
        if (url.status == 200) {
            jsonObj = url.responseText;
            jsObj = JSON.parse(jsonObj);
            console.log(jsObj);
            
            PagesOfMovies()
        moviesTitels(jsObj);
      }
  };
}

function moviesTitels(jsObj) {
  if (jsObj.data == null) {
    return "";
  } else {
    pages = jsObj.total_pages;

    titles = [];

    for (let i in jsObj.data) {
      x = jsObj.data[i].Title;
      titles.push(x);

      console.log(x);

      document.getElementsByTagName("div")[0].innerHTML += x + "<br>";
    }

  }

  console.log(pages);

  document.getElementsByTagName("div")[1].innerHTML = titles.sort();
  console.log(titles.sort());
}

function PagesOfMovies(substr){
    const orignalUrl =
    "https://jsonmock.hackerrank.com/api/movies/search/?Title=";
    pages = jsObj.total_pages;
for(p=1; p<=pages; p++)
   {
       usedUrl = `${orignalUrl}${substr}&page${p}`;

   }

  var url = new XMLHttpRequest();
  url.open("GET", usedUrl, true);
  url.send();

  start(url);

}

// PagesOfMovies()

document.getElementsByTagName("div")[1].style.color = "blue";
