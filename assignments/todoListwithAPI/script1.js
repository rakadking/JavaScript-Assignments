root = document.querySelector("#root");
completed = document.querySelector(".completed");
pending = document.querySelector(".pending");

completed.addEventListener('click', getApi);

function getApi(){
  fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => renderCompleted(data));
    
}

function renderCompleted(data){
    root.innerHTML ="";
    for(let i = 0; i < data.length; i++){
        obj = data[i];
        if (obj.completed === true){
            var tag = document.createElement("p");
            tag.innerHTML = obj.title;
            root.appendChild(tag)
        }
    }

}
function getAPI(){
    fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => renderPending(data));
      
  }

pending.addEventListener('click', getAPI);
 
function renderPending(data){
    root.innerHTML = "";
    for (let i = 0; i < data.length; i++){
        obj = data[i];
        if (obj.completed === false){
            var tag = document.createElement("p");
            tag.innerHTML = obj.title;
            root.appendChild(tag)
        }
    }
}