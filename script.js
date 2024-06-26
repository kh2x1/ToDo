// var con = document.getElementById("continor");
// var tasks = [];

// // Load tasks from localStorage if available
// if (localStorage.getItem("tasks")) {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//     tasks.forEach(task => {
//         addTaskToDOM(task.name, task.completed); // Pass both task name and completion status
//     });
// }

// document.getElementById("sub").addEventListener("click", function () {
//     var value = document.getElementById("text").value;

//     if (value === "") {
//         window.alert("ADD TASK!!");
//         return;
//     }

//     addTask(value);

//     // Save tasks to localStorage
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// });

// function addTask(value) {
//     tasks.push({ name: value, completed: false }); // Push an object with task name and completion status
//     addTaskToDOM(value, false); // Pass completion status as false for new tasks
// }

// function addTaskToDOM(value, completed) {
//     var allDiv = document.createElement("div");
//     var ul = document.createElement("ul");
//     var li = document.createElement("li")
//     var div2 = document.createElement("div");
//     con.appendChild(allDiv)
//     allDiv.appendChild(ul)
//     ul.appendChild(li)
//     allDiv.appendChild(div2)

//     allDiv.style.display = "flex"
//     allDiv.style.justifyContent = "space-between"
//     li.style.display = "flex"
//     li.style.alignItems = "center"
//     li.style.listStyle = "none"
//     li.style.flexWrap = "wrap"

//     div2.style.width = "20%"
//     div2.style.display = "flex"
//     div2.style.alignItems = "center"
//     div2.style.justifyContent = "center"
//     div2.style.padding = "2px"

//     var checkbox = document.createElement("input");
//     checkbox.type = "checkbox"
//     checkbox.style.width = "20px"
//     checkbox.style.height = "20px"
//     li.appendChild(checkbox)

//     var h2 = document.createElement("h2")
//     li.appendChild(h2)
//     h2.textContent = value;
//     h2.style.color = completed ? "red" : "black"; // Set color based on completion status
//     h2.style.fontWeight = "bold";
//     if (completed) {
//         h2.style.textDecoration = "line-through"; // Add line-through if completed
//     }

//     var img = document.createElement("img")
//     img.src = "icons8-close.svg"
//     img.style.cursor = "pointer"
//     img.style.width = "30px"
//     img.style.height = "30px"

//     div2.appendChild(img)

//     // Function to update task completion status and local storage
//     function updateTaskStatus() {
//         var index = tasks.findIndex(task => task.name === value);
//         if (index !== -1) {
//             tasks[index].completed = checkbox.checked;
//             updateLocalStorage();
//         }
//     }

//     checkbox.checked = completed; // Set checkbox state based on completion status
//     checkbox.onclick = function () {
//         if (checkbox.checked) {
//             h2.style.color = "red"
//             h2.style.textDecoration = "line-through"
//         } else {
//             h2.style.color = "black"
//             h2.style.textDecoration = "none"
//         }
//         updateTaskStatus();
//     }

//     img.onclick = function () {
//         div2.style.display = "none"
//         img.style.display = "none"
//         ul.style.display = "none"
//         li.style.display = "none"
//         // Remove task from tasks array
//         var index = tasks.findIndex(task => task.name === value);
//         if (index !== -1) {
//             tasks.splice(index, 1);
//         }
//         // Remove task from DOM
//         ul.removeChild(li);
//         // Save tasks to localStorage
//         updateLocalStorage();
//     }
// }

// function updateLocalStorage() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }






var con = document.getElementById("continor");
var dark = document.getElementById("dark")
var light = document.getElementById("light")


function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode")
}


var tasks = [];
// Load tasks from localStorage if available
if(localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(task => {
        addTaskToDOM(task);
    });
}




document.getElementById("sub").addEventListener("click", function(){
    var value = document.getElementById("text").value;
    
    if(value === "") {
        window.alert("ADD TASK!!");
        return;
    }
    
    addTask(value);
    
    // Save tasks to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
});



function addTask(value) {
    tasks.push(value);
    addTaskToDOM(value);
}


function addTaskToDOM(value) {
    var allDiv = document.createElement("div");
    var ul = document.createElement("ul");
    var li = document.createElement("li")
    var div2 = document.createElement("div");
    con.appendChild(allDiv)
    allDiv.appendChild(ul)
    ul.appendChild(li)
    allDiv.appendChild(div2)

    allDiv.style.display="flex"
    allDiv.style.justifyContent="space-between"
    li.style.display="flex"
    li.style.alignItems="center"
    li.style.listStyle="none"
    li.style.flexWrap="wrap"

    div2.style.width="20%"
    div2.style.display="flex"
    div2.style.alignItems="center"
    div2.style.justifyContent="center"
    div2.style.padding = "2px"

    var checkbox = document.createElement("input");
    checkbox.type="checkbox"
    checkbox.style.width="20px"
    checkbox.style.height="20px"
    li.appendChild(checkbox)

    var h2 = document.createElement("h2")
    li.appendChild(h2)
    h2.textContent = value;
    h2.style.fontWeight="bold"


    // var button = document.createElement("input");
    // div2.appendChild(button)
    // button.type="button";
    // button.value="Delete"
    // button.style.display="flex"
    // button.style.justifyContent="center"
    // button.style.alignItems="center"
    // button.style.backgroundColor="red"
    // button.style.color="white"
    // button.style.padding="5px"
    // button.style.borderRadius="20px"
    // button.style.width="100%"

    var img = document.createElement("img")
    img.src="icons8-close.svg"
    img.style.cursor="pointer"
    img.style.width="30px"
    img.style.height="30px"

    div2.appendChild(img)

    checkbox.onclick = function(){
        if (checkbox.checked) {
            h2.style.color= "red"
            h2.style.textDecoration = "line-through"
        } else {
            h2.style.color= "white"
            h2.style.textDecoration = "none"
        }
        updateLocalStorage();
    }

    img.onclick=function() {
        div2.style.display="none"
        img.style.display="none"
        ul.style.display="none"
        li.style.display="none"
        // Remove task from tasks array
        var index = tasks.indexOf(value);
        if(index > -1) {
            tasks.splice(index, 1);
        }
        // Remove task from DOM
        ul.removeChild(li);
        // Save tasks to localStorage
        updateLocalStorage();
    }

}

function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}








