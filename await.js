let URL = "https://jsonmock.hackerrank.com/api/movies/search/?Title=";

async function moviesTitels(movies) {
  let responseURL = await fetch(`${URL}${movies}`);
  let jasonObj = await responseURL.json();
  console.log(jasonObj);

  if (jasonObj != null) {
    let titles = [];
    pages = jasonObj.total_pages;
    console.log(pages);
    if (pages === 1) {
      for (let i in jasonObj.data) {
        x = jasonObj.data[i].Title;
        titles.push(x);
      }
      console.log(titles);
      return titles.sort();
    } else {
      for (let pageNum = 1; pageNum <= pages; pageNum++) {
        let responseURL = await fetch(`${URL}${movies}&page=${pageNum}`);
        let jasonObj = await responseURL.json();
        if (jasonObj != null) {
          for (let i in jasonObj.data) {
            x = jasonObj.data[i].Title;
            titles.push(x);
          }
        }
      }
      console.log(titles);

      return titles.sort();
    }
    
    }
    else 
    return ""
}

moviesTitels("run");


