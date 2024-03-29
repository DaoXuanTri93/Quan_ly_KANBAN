
class TASKS {
    
    constructor(id, name, color, date, date2,href) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.date = date;
        this.date2 = date2;
        this.href = href;
        this.comment = '';
    }
}

const key_data = 'tasks-data';
const key_data_today = 'tasksToDay-data';
const key_data_Doing = 'tasksDoing-data';
const key_data_Done = 'tasksDone-data';



let listTasks = [];
let listTaskToday = [];
let listTaskDoing = [];
let listTaskDone = [];



function renderTasks() {
    let task = document.querySelector('#sortable1');
    let map = listTasks.map(function (task) {
        return ` 
        <div class="box-text" onclick="hideEdit(${task.id})" id="${task.id}">
            ${task.name}
            <div class="box-text-color color-${task.id} box-text-color-${task.color}" ></div>
            <div class="box-text-date add-date-${task.id}">${task.date} ${task.date2}</div>
        </div>    
        `
    })
    task.innerHTML = map.join('');
}
function renderlistTaskToday() {
    let taskToDay = document.querySelector('#sortable2');
    let map = listTaskToday.map(function (taskToDay) {
        return `
        <div class="box-text" onclick="hideEditToDay(${taskToDay.id})" id="${taskToDay.id}">
        ${taskToDay.name}
        <div class="box-text-color color-${taskToDay.id} box-text-color-${taskToDay.color}" ></div>
        <div class="box-text-date add-date-${taskToDay.id}">${taskToDay.date} ${taskToDay.date2}</div>
    </div>    
        `
    })
    taskToDay.innerHTML = map.join('');
}
function renderlistTaskDoing() {
    let taskDoing = document.querySelector('#sortable3');
    let map = listTaskDoing.map(function (taskDoing) {
        return `
        <div class="box-text" onclick="hideEditDoing(${taskDoing.id})" id="${taskDoing.id}">
        ${taskDoing.name}
        <div class="box-text-color color-${taskDoing.id} box-text-color-${taskDoing.color}" ></div>
        <div class="box-text-date add-date-${taskDoing.id}">${taskDoing.date} ${taskDoing.date2}</div>
    </div>    
        `
    })
    taskDoing.innerHTML = map.join('');
}
function renderlistTaskDone() {
    let taskDone = document.querySelector('#sortable4');
    let map = listTaskDone.map(function (taskDone) {
        return `
        <div class="box-text" onclick="hideEditDone(${taskDone.id})" id="${taskDone.id}">
        ${taskDone.name}
        <div class="box-text-color color-${taskDone.id} box-text-color-${taskDone.color}" ></div>
        <div class="box-text-date add-date-${taskDone.id}">${taskDone.date} ${taskDone.date2}</div>
    </div>    
        `
    })
    taskDone.innerHTML = map.join('');
}


function init() {
    if (getData(key_data) == null) {
        listTasks = [
            //constructor(id, name,color, date, date2)
            new TASKS(1, '[Bài đọc] Thẻ tạo liên kết: a', 'green', '', '','https://www.google.com/'),
            new TASKS(2, '[Bài đọc] Các thẻ tiêu đề h1, h2, h3, h4, h5, h6', 'green', '', '','https://james.codegym.vn/mod/page/view.php?id=5919'),
            new TASKS(3, '[Bài đọc] Thẻ tạo đoạn văn bản: p', 'green', '', '','https://james.codegym.vn/mod/page/view.php?id=5920'),
            new TASKS(4, '[Thực hành] Tạo bảng cơ bản', 'green', '', '','https://james.codegym.vn/mod/page/view.php?id=5928'),
            new TASKS(5, '[Thực hành] Tạo bảng nâng cao', 'yellow', '', '','https://james.codegym.vn/mod/page/view.php?id=5930'),
            new TASKS(6, 'Hoàn thành khoá học "Học cách học"', 'green', '', '','https://james.codegym.vn/mod/assign/view.php?id=5942'),
            new TASKS(7, '[Bài tập] Tạo form đơn giản', 'yellow', '', '','https://james.codegym.vn/mod/page/view.php?id=5939'),
            new TASKS(8, 'Hoàn thành khoá học "Hoàn thành mọi việc với Kanban"', 'green', '', '','https://james.codegym.vn/mod/assign/view.php?id=5943'),
            new TASKS(9, '[Bài tập] Tạo giao diện form đăng ký người dùng"', 'yellow', '', '','https://james.codegym.vn/mod/page/view.php?id=5940'),
            new TASKS(10, '[Bài tập] Tạo bảng đơn giản', 'yellow', '', '','https://james.codegym.vn/mod/page/view.php?id=5931'),
            new TASKS(11, '[Bài đọc] Tạo biểu mẫu cho trang web', 'green', '', '','https://james.codegym.vn/mod/page/view.php?id=5934'),
            new TASKS(12, '[*Xem thêm] Máy tính hoạt động như thế nào?', 'red', '', '','https://james.codegym.vn/mod/book/view.php?id=5791'),
            new TASKS(13, '[*Đọc thêm] Các hệ thống quản lý mã nguồn và phiên bản', 'red', '', '','https://james.codegym.vn/mod/page/view.php?id=5778'),
        ];

        setData(key_data, listTasks);
        // setData(key_data, listTaskToday);
    } else {
        listTasks = getData(key_data);
        // listTaskToday = getData(key_data);

    }
}
function init1() {
    if (getData(key_data_today) == null) {

        listTaskToday = [
            // new TASKS(7, 'Today 7', 'red', '', ''),
            // new TASKS(8, 'Today 8', 'yellow', '', ''),
            // new TASKS(9, 'Today 9', 'green', '', '')
        ];
        // setData(key_data, listTasks);
        setData(key_data_today, listTaskToday);
    } else {
        // listTasks = getData(key_data);
        listTaskToday = getData(key_data_today);

    }
}
function init2() {
    if (getData(key_data_Doing) == null) {

        listTaskDoing = [
            // new TASKS(10, 'Doing 10', ' ', ' ', ''),
            // new TASKS(11, 'Doing 11', ' ', ' ', ''),
            // new TASKS(12, 'Doing 12', ' ', ' ', '')
        ];
        // setData(key_data, listTasks);
        setData(key_data_Doing, listTaskDoing);
    } else {
        // listTasks = getData(key_data);
        listTaskDoing = getData(key_data_Doing);

    }
}
function init3() {
    if (getData(key_data_Done) == null) {

        listTaskDone = [
            // new TASKS(13, 'Done 13', ' ', ' ', ''),
            // new TASKS(14, 'Done 14', ' ', ' ', ''),
            // new TASKS(15, 'Done 15', ' ', ' ', '')
        ];
        // setData(key_data, listTasks);
        setData(key_data_Done, listTaskDone);
    } else {
        // listTasks = getData(key_data);
        listTaskDone = getData(key_data_Done);

    }
}
function getData(key) {
    return JSON.parse(localStorage.getItem(key))
}
function setData(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));
}
function addTasks() {
    let maxId = getId() + 1;
    let area = document.querySelector('#textarea').value;
    if (area.trim() != '') {
        listTasks.push(new TASKS(maxId, area, '', '', '',''));
        // showTextArea();
        setData(key_data, listTasks);
        renderTasks();
        // renderlistTaskToday();
        resetTasks();
    } else {
        alert('Name is required !!!')
    }
}
// phim enter
function pressEnter(e) {
    if (e.keyCode == 13) {
        addTasks();
    }
}
function pressEnterEdit(e) {
    if (e.keyCode == 13) {
        addComment();
    }
}
//  ket thuc phim enter
function resetTasks() {
    let area = document.querySelector('#textarea').value = '';
}
// phan an/hien cua text area va edit
function hideTextArea() {
    let hideTextArea = document.querySelector('.box-textarea').classList.remove('d-none');
}
function showTextArea() {
    let hideTextArea = document.querySelector('.box-textarea').classList.add('d-none');
}
function hideEdit(tasksId) {
    if (tasksId != null) {
        // let toDay = gettaskByIdToDay(tasksId);
        let task = gettaskById(tasksId);
        let str = `
        <div class="box-edit" >
        <div class="box-edit-stick">
            <div class="box-edit-tasks">
            <h2 class="box-edit-h2">Name</h2>
                <textarea cols="30" rows="2" class ="edit-name textarea" >${task.name}</textarea>
                   <h2 class="box-edit-h2">Link</h2>
                    <div><a class="link" target="_blank" href="${task.href}">${task.href}</a>
                    </div>
                    <textarea  cols="30" rows="2" class ="edit-link textarea" ></textarea>
                    <div><button onclick=" editLink(${tasksId})" class="btn btn-changelink"> Change Link </button></div>
    
                <h2 class="box-edit-h2">Add Note</h2>
                <div><textarea cols="30" rows="2" class="box-edit-comment textarea" onkeydown="pressEnterEdit(event)" value="${task.comment}">${task.comment}</textarea>
               </div>
               <button onclick="removetask(${tasksId})" class="btn btn-delete">Delete</button>
                <button onclick="editTask(${tasksId})" class="btn btn-update">Update</button>
                <div class="box-edit-comment">
                    <h2 class="box-edit-h2">Note</h2>
                </div>
                <p class="comment">${task.comment}</p>
            </div>
            <div class="box-edit-delete">
                <button class="btn btn-x" onclick="showEdit()">X</button>
                <h2  class="box-edit-h2">Color</h2>
                <select class="box-edit-color input" id="select">
                    <option hidden>--Color--</option>
                    <option value="Green" class="box-edit-option green1" >Green</option>
                    <option value="Yellow" class="box-edit-option yellow" >yellow</option>
                    <option value="Red" class="box-edit-option red" >Red</option>
                </select>
                <div>
                    <h2 class="box-edit-h2">Star Time</h2>
                    <div >
                        <input type="date" class="box-edit-date-start input" value="${task.date}" >
                    </div>
                    <h2 class="box-edit-h2">End Time</h2>
    
                    <div >
                        <input type="date" class="box-edit-date-end input" value="${task.date2}">
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
        document.getElementById('editContainer').innerHTML = str;
    }

    // console.log(hideEdit);
}
function hideEditToDay(tasksId) {
    if (tasksId != null) {
        // let toDay = gettaskByIdToDay(tasksId);
        let task = gettaskByIdToDay(tasksId);
        let str = `
        <div class="box-edit" >
        <div class="box-edit-stick">
            <div class="box-edit-tasks">
            <h2 class="box-edit-h2">Name</h2>
                <textarea cols="30" rows="2" class ="edit-name textarea">${task.name}</textarea>
                   <h2 class="box-edit-h2">Link</h2>
                    <div><a class="link" target="_blank" href="${task.href}">${task.href}</a>
                    </div>
                    <textarea  cols="30" rows="2" class ="edit-link textarea" ></textarea>
                    <div><button onclick=" editLinkToDay(${tasksId})" class="btn btn-changelink"> Change Link </button></div>
    
                <h2 class="box-edit-h2">Add Note</h2>
                <div><textarea cols="30" rows="2" class="box-edit-comment textarea" onkeydown="pressEnterEdit(event)"></textarea>
               </div>
               <button onclick="removetaskToDay(${tasksId})" class="btn btn-delete">Delete</button>
                <button onclick="editTaskToDay(${tasksId})" class="btn btn-update">Update</button>
                <div class="box-edit-comment">
                    <h2 class="box-edit-h2">Note</h2>
                </div>
                <p class="comment">${task.comment}</p>
            </div>
            <div class="box-edit-delete">
                <button class="btn btn-x" onclick="showEdit()">X</button>
                <h2  class="box-edit-h2">Color</h2>
                <select class="box-edit-color input" >
                    <option hidden >--Color--</option>
                    <option value="Green" class="box-edit-option green1">Green</option>
                    <option value="Yellow" class="box-edit-option yellow">yellow</option>
                    <option value="Red" class="box-edit-option" red>red</option>
                </select>
                <div>
                    <h2 class="box-edit-h2">Star Time</h2>
                    <div >
                        <input type="date" class="box-edit-date-start input" value="${task.date}" >
                    </div>
                    <h2 class="box-edit-h2">End Time</h2>
    
                    <div >
                        <input type="date" class="box-edit-date-end input" value="${task.date}">
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
        `;
        document.getElementById('editContainer').innerHTML = str;
    }

    // console.log(hideEdit);
}
function hideEditDoing(tasksId) {
    if (tasksId != null) {
        // let toDay = gettaskByIdToDay(tasksId);
        // let task = gettaskByIdToDay(tasksId);
        let task = gettaskByIdDoing(tasksId);
        let str = `
        <div class="box-edit" >
        <div class="box-edit-stick">
            <div class="box-edit-tasks">
            <h2 class="box-edit-h2">Name</h2>
                <textarea cols="30" rows="2" class ="edit-name textarea">${task.name}</textarea>
                   <h2 class="box-edit-h2">Link</h2>
                    <div><a class="link" target="_blank" href="${task.href}">${task.href}</a>
                    </div>
                    <textarea  cols="30" rows="2" class ="edit-link textarea" ></textarea>
                    <div><button onclick=" editLinkDoing(${tasksId})" class="btn btn-changelink"> Change Link </button></div>
    
                <h2 class="box-edit-h2">Add Note</h2>
                <div><textarea cols="30" rows="2" class="box-edit-comment textarea" onkeydown="pressEnterEdit(event)"></textarea>
               </div>
               <button onclick="removetaskDoing(${tasksId})" class="btn btn-delete">Delete</button>
                <button onclick="editTaskDoing(${tasksId})" class="btn btn-update">Update</button>
                <div class="box-edit-comment">
                    <h2 class="box-edit-h2">Note</h2>
                </div>
                <p class="comment">${task.comment}</p>
            </div>
            <div class="box-edit-delete">
                <button class="btn btn-x" onclick="showEdit()">X</button>
                <h2  class="box-edit-h2">Color</h2>
                <select class="box-edit-color input" id="checkcolor" >
                    <option hidden >--Color--</option>
                    <option value="Green" class="box-edit-option green1">Green</option>
                    <option value="Yellow" class="box-edit-option yellow">yellow</option>
                    <option value="Red" class="box-edit-option" red>red</option>
                </select>
                <div>
                    <h2 class="box-edit-h2">Star Time</h2>
                    <div >
                        <input type="date" class="box-edit-date-start input" value="${task.date}">
                    </div>
                    <h2 class="box-edit-h2">End Time</h2>
    
                    <div >
                        <input type="date" class="box-edit-date-end input" value="${task.date2}"> 
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
        `;
        document.getElementById('editContainer').innerHTML = str;
    }

    // console.log(hideEdit);
}
function hideEditDone(tasksId) {
    if (tasksId != null) {
        // let toDay = gettaskByIdToDay(tasksId);
        // let task = gettaskByIdToDay(tasksId);
        let task = gettaskByIdDone(tasksId);
        let str = `
        <div class="box-edit" >
        <div class="box-edit-stick">
            <div class="box-edit-tasks">
            <h2 class="box-edit-h2">Name</h2>
                <textarea cols="30" rows="2" class ="edit-name textarea">${task.name}</textarea>
                   <h2 class="box-edit-h2">Link</h2>
                    <div><a class="link" target="_blank" href="${task.href}">${task.href}</a>
                    </div>
                    <textarea  cols="30" rows="2" class ="edit-link textarea" ></textarea>
                    <div><button onclick=" editLinkDone(${tasksId})" class="btn btn-changelink"> Change Link </button></div>
    
                <h2 class="box-edit-h2">Add Note</h2>
                <div><textarea cols="30" rows="2" class="box-edit-comment textarea" onkeydown="pressEnterEdit(event)"></textarea>
               </div>
               <button onclick="removetaskDone(${tasksId})" class="btn btn-delete">Delete</button>
                <button onclick="editTaskDone(${tasksId})" class="btn btn-update">Update</button>
                <div class="box-edit-comment">
                    <h2 class="box-edit-h2">Note</h2>
                </div>
                <p class="comment">${task.comment}</p>
            </div>
            <div class="box-edit-delete">
                <button class="btn btn-x" onclick="showEdit()">X</button>
                <h2  class="box-edit-h2">Color</h2>
                <select class="box-edit-color input">
                    <option hidden>--Color--</option>
                    <option value="Green" class="box-edit-option green1">Green</option>
                    <option value="Yellow" class="box-edit-option yellow">yellow</option>
                    <option value="Red" class="box-edit-option" red>red</option>
                </select>
                <div>
                    <h2 class="box-edit-h2">Star Time</h2>
                    <div >
                        <input type="date" class="box-edit-date-start input" value="${task.date}">
                    </div>
                    <h2 class="box-edit-h2">End Time</h2>
    
                    <div >
                        <input type="date" class="box-edit-date-end input" value="${task.date2}">
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
        `;
        document.getElementById('editContainer').innerHTML = str;
    }

    // console.log(hideEdit);
}

function showEdit() {
    let hideEdit = document.querySelector('.box-edit').classList.add('d-none-edit');
}
// ket thuc phan an/hien

// change color tags


// ----------------- end color

// function addComment() {
//     let addComment = document.querySelector('.box-edit-comment').value;
//     document.querySelector('.comment').innerHTML = addComment;
// }
function getId() {
    let arrs = listTasks.concat(listTaskDoing).concat(listTaskToday).concat(listTaskDone);


    let taskID = [...arrs];
    let maxId = taskID.sort(function (task1, task2) {
        return task2.id - task1.id
    })[0].id
    console.log(maxId);
    return maxId;
    


}
function removetask(tasksId) {
    document.querySelector('.box-edit').classList.add('d-none-edit');
    let comfirm= window.confirm('Are you sure you want to delete ?');
    if(comfirm){
        let remove = listTasks.findIndex(function (pdt1) {
            return pdt1.id == tasksId;
        })
        listTasks.splice(remove, 1);
        setData(key_data, listTasks);
        renderTasks();
    }
    
}
function removetaskToDay(tasksId) {
    document.querySelector('.box-edit').classList.add('d-none-edit');
    let comfirm= window.confirm('Are you sure you want to delete ?');
    if(comfirm){
        let remove = listTaskToday.findIndex(function (taskId1) {
            return taskId1.id == tasksId;
        })
        listTaskToday.splice(remove, 1);
        setData(key_data, listTaskToday);
        renderlistTaskToday();
    }
}
function removetaskDoing(tasksId) {
    document.querySelector('.box-edit').classList.add('d-none-edit');
    let comfirm= window.confirm('Are you sure you want to delete ?');
    if(comfirm){
        let remove = listTaskDoing.findIndex(function (taskId1) {
            return taskId1.id == tasksId;
        })
        listTaskDoing.splice(remove, 1);
        setData(key_data, listTaskDoing);
        renderlistTaskDoing();
    }
}
function removetaskDone(tasksId) {
    document.querySelector('.box-edit').classList.add('d-none-edit');
    let comfirm= window.confirm('Are you sure you want to delete ?');
    if(comfirm){
        let remove = listTaskDone.findIndex(function (taskId1) {
            return taskId1.id == tasksId;
        })
        listTaskDone.splice(remove, 1);
        setData(key_data, listTaskDone);
        renderlistTaskDone();
    }
}
function addDate(tasksId) {
    let addDate = document.querySelector(`.add-date-${tasksId}`).value;
    // console.log(addDate);
    document.querySelector('.box-text-date').innerHTML = addDate;
    renderTasks();
    renderlistTaskToday();
    renderlistTaskDoing();
    renderlistTaskDone();
}

function gettaskById(tasksId) {
    return listTasks.find(function (pdt) {
        return pdt.id == tasksId;
    })
}
function gettaskByIdToDay(tasksId) {
    return listTaskToday.find(function (pdt) {
        return pdt.id == tasksId;
    })
}
function gettaskByIdDoing(tasksId) {
    return listTaskDoing.find(function (pdt) {
        return pdt.id == tasksId;
    })
}
function gettaskByIdDone(tasksId) {
    return listTaskDone.find(function (pdt) {
        return pdt.id == tasksId;
    })
}

function editTask(tasksId) {
    document.querySelector('.box-edit').classList.add('d-none-edit');
    let task = gettaskById(tasksId);
    let taskName = document.querySelector('.edit-name').value;
    if(taskName.trim() !== ''){
        task.name = taskName;   
    } else {    
        alert('Name is required!!!');
    }
    let color = document.querySelector('.box-edit-color').value;
    switch (color) {
        case 'Red':
            task.color = 'red';
            break;
        case 'Yellow':
            task.color = 'yellow';
            break;
        case 'Green':
            task.color = 'green';
            break;
    }
    let taskDate = document.querySelector('.box-edit-date-start').value;
    let taskDate2 = document.querySelector('.box-edit-date-end').value;
    let comments = document.querySelector('.box-edit-comment').value;
    task.comment = comments;
    document.querySelector('.comment').innerHTML = task.comment;
    task.date = taskDate;
    task.date2 = taskDate2;
    setData(key_data, listTasks);
    renderTasks();
}
function editTaskToDay(tasksId) {
    document.querySelector('.box-edit').classList.add('d-none-edit');
    let task = gettaskByIdToDay(tasksId);
    let taskName = document.querySelector('.edit-name').value;
    let color = document.querySelector('.box-edit-color').value;
    switch (color) {
        case 'Red':
            task.color = 'red';

            break;
        case 'Yellow':
            task.color = 'yellow';

            break;
        case 'Green':
            task.color = 'green';

            break;

    }
    let taskDate = document.querySelector('.box-edit-date-start').value;
    let taskDate2 = document.querySelector('.box-edit-date-end').value;
    let comments = document.querySelector('.box-edit-comment').value;
    task.comment = comments;
    document.querySelector('.comment').innerHTML = task.comment;
    task.name = taskName;
    task.date = taskDate;
    task.date2 = taskDate2;
    setData(key_data_today, listTaskToday);
    renderlistTaskToday();
}
function editTaskDoing(tasksId) {
    document.querySelector('.box-edit').classList.add('d-none-edit');
    let task = gettaskByIdDoing(tasksId);
    let taskName = document.querySelector('.edit-name').value;
    let color = document.querySelector('.box-edit-color').value;
    switch (color) {
        case 'Red':
            task.color = 'red';

            break;
        case 'Yellow':
            task.color = 'yellow';

            break;
        case 'Green':
            task.color = 'green';

            break;

    }
    let taskDate = document.querySelector('.box-edit-date-start').value;
    let taskDate2 = document.querySelector('.box-edit-date-end').value;
    let comments = document.querySelector('.box-edit-comment').value;
    task.comment = comments;
    document.querySelector('.comment').innerHTML = task.comment;
    task.name = taskName;
    task.date = taskDate;
    task.date2 = taskDate2;
    setData(key_data_Doing, listTaskDoing);
    renderlistTaskDoing();
}
function editTaskDone(tasksId) {
    document.querySelector('.box-edit').classList.add('d-none-edit');
    let task = gettaskByIdDone(tasksId);
    let taskName = document.querySelector('.edit-name').value;
    let color = document.querySelector('.box-edit-color').value;
    switch (color) {
        case 'Red':
            task.color = 'red';

            break;
        case 'Yellow':
            task.color = 'yellow';

            break;
        case 'Green':
            task.color = 'green';

            break;

    }
    let taskDate = document.querySelector('.box-edit-date-start').value;
    let taskDate2 = document.querySelector('.box-edit-date-end').value;
    let comments = document.querySelector('.box-edit-comment').value;
    task.comment = comments;
    document.querySelector('.comment').innerHTML = task.comment;
    task.name = taskName;
    task.date = taskDate;
    task.date2 = taskDate2;
    setData(key_data_Done, listTaskDone);
    renderlistTaskDone();
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
function editLink(tasksId) {
    let task = gettaskById(tasksId);
    let link = document.querySelector('.edit-link').value;
    task.href = link;
    document.querySelector('.link').innerHTML = task.href;
    document.querySelector('.edit-link').value = '';
    setData(key_data, listTasks)
    renderTasks();
}
function editLinkToDay(tasksId) {
    // let task = gettaskById(tasksId);
    let task = gettaskByIdToDay(tasksId)
    let link = document.querySelector('.edit-link').value;
    task.href = link;
    document.querySelector('.link').innerHTML = task.href;
    document.querySelector('.edit-link').value = '';
    // setData(key_data, listTasks)
    setData(key_data_today, listTaskToday)
    renderlistTaskToday();
}
function editLinkDoing(tasksId) {
    // let task = gettaskById(tasksId);
    // let task = gettaskByIdToDay(tasksId)
    let task = gettaskByIdDoing(tasksId)
    let link = document.querySelector('.edit-link').value;
    task.href = link;
    document.querySelector('.link').innerHTML = task.href;
    document.querySelector('.edit-link').value = '';
    // setData(key_data, listTasks)
    setData(key_data_Doing, listTaskDoing)
    renderlistTaskDoing();
}
function editLinkDone(tasksId) {
    // let task = gettaskById(tasksId);
    // let task = gettaskByIdToDay(tasksId)
    let task = gettaskByIdDone(tasksId)
    let link = document.querySelector('.edit-link').value;
    task.href = link;
    document.querySelector('.link').innerHTML = task.href;
    document.querySelector('.edit-link').value = '';
    // setData(key_data, listTasks)
    setData(key_data_Done, listTaskDone)
    renderlistTaskDone();
}


// keo thả
init();
init1();
init2();
init3();
renderTasks();
renderlistTaskToday();
renderlistTaskDoing()
renderlistTaskDone();
resetTasks();
hideEdit(null);
$(function () {
    $("#sortable1, #sortable2, #sortable3, #sortable4").sortable({
        connectWith: ".box-group",
        stop(event, ui) {
            let idContainerFrom = event.target.id; //ok
            let idItem = ui.item[0].id;
            let idContainerTo = ui.item[0].parentElement.id;



            // console.log("idContainerFrom: " + idContainerFrom);
            // console.log("idContainerTo: " + idContainerTo);
            // console.log("idItem: " + idItem);




            // tim vi tri cua idTem trong idContainerFrom

            let indexItemContainerFrom;

            let p;

            switch (idContainerFrom) {
                case 'sortable1':
                    {
                        indexItemContainerFrom = listTasks.findIndex(function (value) {
                            if (value.id == idItem) return true;
                        });

                        p = listTasks.find(function (value) {
                            if (value.id == idItem) return true;
                        });

                        listTasks.splice(indexItemContainerFrom, 1);
                        break;
                    }
                case 'sortable2':
                    {
                        indexItemContainerFrom = listTaskToday.findIndex(function (value) {
                            if (value.id == idItem) return true;
                        });

                        p = listTaskToday.find(function (value) {
                            if (value.id == idItem) return true;
                        });
                        listTaskToday.splice(indexItemContainerFrom, 1);
                        break;
                    }
                case 'sortable3':
                    {
                        indexItemContainerFrom = listTaskDoing.findIndex(function (value) {
                            if (value.id == idItem) return true;
                        });

                        p = listTaskDoing.find(function (value) {
                            if (value.id == idItem) return true;
                        });
                        listTaskDoing.splice(indexItemContainerFrom, 1);
                        break;
                    }
                case 'sortable4':
                    {
                        indexItemContainerFrom = listTaskDone.findIndex(function (value) {
                            if (value.id == idItem) return true;
                        });

                        p = listTaskDone.find(function (value) {
                            if (value.id == idItem) return true;
                        });
                        listTaskDone.splice(indexItemContainerFrom, 1);
                        break;
                    }

            }


            let indexItemContainerTo = findIndexInElementItems(ui.item[0].parentElement, idItem);

            // console.log(ui.item[0].parentElement);
            switch (idContainerTo) {
                case 'sortable1':
                    {
                        listTasks.splice(indexItemContainerTo, 0, p)
                        break;
                    }
                case 'sortable2':
                    {
                        listTaskToday.splice(indexItemContainerTo, 0, p)
                        break;
                    }
                case 'sortable3':
                    {
                        listTaskDoing.splice(indexItemContainerTo, 0, p)
                        break;
                    }
                case 'sortable4':
                    {
                        listTaskDone.splice(indexItemContainerTo, 0, p)
                        break;
                    }

            }

            // console.log(listTaskToday);
            setData(key_data, listTasks);
            renderTasks(listTasks);

            setData(key_data_today, listTaskToday);
            renderlistTaskToday(listTaskToday);

            setData(key_data_Doing, listTaskDoing);
            renderlistTaskDoing(listTaskDoing);
            setData(key_data_Done, listTaskDone);
            renderlistTaskDone(listTaskDone);


        }
    }).disableSelection();
});
function findIndexInElementItems(elementItems, id) {
    // console.log(elementItems);
    let items = elementItems.children;
    for (let i = 0; i < items.length; i++) {
        if (items[i].id == id) {
            return i;
        }
    }
}









