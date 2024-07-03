// 유저는 할 일을 추가할 수 있다.
// 각 할 일에 삭제와 체크버튼이 있다.
// 삭제버튼을 누르면 할 일이 끝난 것으로 간주하고 밑 줄이 간다.
// 끝난 할 일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
// 탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
// 모바일 버전에서도 확인할 수 있는 반응형 웹이다.

// 유저가 값을 입력한다.
// + 버튼을 클릭하면, 할 일이 추가된다.
// delete 버튼을 누르면 할 일이 삭제된다.
// check 버튼을 누르면 할 일이 끝나면서 밑 줄이 간다.
// 진행중 끝남 탭을 누르면, 언더바가 이동한다.
// 끝남탭은, 끝난 아이템만, 진행중 탭은 진행중인 아이템만
// 전체탭을 누르면 다시 전체아이템으로 돌아옴

// 1. check 버튼을 클릭하는 순간 true false
// 2. true이면 끝난 걸로 간주하고 밑줄 보여주기
// 3. false이면 안 끝난 걸로 간주하고 그대로

// 1.check와 delete가 아이콘이어야 함 O
// 2.check버튼 클릭시 뒤에 배경이 회색으로 바뀌어야함
// 3.check버튼 클릭 후 되돌리기 버튼이 나오고 클릭하면 뒤에 배경이 다시 돌아오고 버튼도 다시 체크로 바꿈
// 4.삭제기능이 있어야함 O

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = []
addButton.addEventListener("click", addTask)

function addTask() {
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false
    }
    taskList.push(task)
    render();
}

function render() {
    let resultHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].isComplete == true) {
            resultHTML += `<div class="task">
                    <div class="task-done">${taskList[i].taskContent}</div>
                    <div>
                        <button class="check-On-Btn" onclick="toggleComplete('${taskList[i].id}')"></button>
                        <button class="delete-Btn" onclick="deleteTask('${taskList[i].id}')"></button>
                    </div>
                </div>`;
        } else {
            resultHTML += `<div class="task">
                    <div>${taskList[i].taskContent}</div>
                    <div>
                        <button class="check-Off-Btn" onclick="toggleComplete('${taskList[i].id}')"></button>
                        <button class="delete-Btn" onclick="deleteTask('${taskList[i].id}')"></button>
                    </div>
                </div>`;
        }
    }

    document.getElementById("task-board").innerHTML = resultHTML;   
}

function toggleComplete(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render()
}

function deleteTask(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList.splice(i, 1)
            break;
        }
    }
    render();
}

function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}