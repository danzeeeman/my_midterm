let jsonHardCoverData;

// API KEY SAAznEXg76OxgBJA0SXcbQiz4PrDXNpC

let baseURL = "https://api.nytimes.com/"

let hardCoverEndPoint = "svc/books/v3/lists/current/hardcover-fiction.json?"

let apiKey = "api-key=SAAznEXg76OxgBJA0SXcbQiz4PrDXNpC"

function preload(){
  loadData();
}

function setup() {
  createCanvas(400, 400);
  setInterval(loadData, 6000);
}

function loadData(){
  loadJSON(baseURL+hardCoverEndPoint+apiKey, onHardCoverData);
}

function onHardCoverData(data){
  // print(data);
  jsonHardCoverData = data;
  print("got data");
  print(jsonHardCoverData.results.books);
}

function draw() {
  background(220);
  
  if(jsonHardCoverData){
    for(let i = 0; i < jsonHardCoverData.results.books.length; i++){
      text(jsonHardCoverData.results.books[i].title, 10, 10+20*i);
    }
  }
}