// Replace YOUR_API_KEY
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=4262fe5481d342b89385f12fb292c8d0";

export async function getNews() {
  return fetch(url)
    .then(response => response.json())
    .then(json => json.articles);
}



