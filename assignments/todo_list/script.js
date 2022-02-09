var toDo = document.querySelector("button");
var addtodo = document.querySelector('div.todos');
var input = document.querySelector("input");
var count = 0;
toDo.addEventListener('click', add);

function add(){
    if (input.value){
    var tag = document.createElement("p");
    tag.innerHTML = input.value;
    addtodo.appendChild(tag);
    tag.setAttribute('key', count);
    count += 1;
    tag.addEventListener('click', function(e){
        addtodo.removeChild(e.target);
    })
    input.value ="";
}
}





