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

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = []
addButton.addEventListener("click", addTask)

function addTask() {
    let taskContent = taskInput.value
    taskList.push(taskContent)
    render();
}

function render() {
    let resultHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        resultHTML += `<div class="task">
                    <div>${taskList[i]}</div>
                    <div>
                        <button>Check</button>
                        <button>Delete</button>
                    </div>
                </div>`;
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}