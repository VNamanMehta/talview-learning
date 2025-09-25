const taskinput = document.getElementById("taskbox")
const addbtn = document.getElementById("addbtn")
const tasklist = document.getElementById("tasklist")

const getTask = () => {
  return JSON.parse(localStorage.getItem('tasks')) || []
}

const saveTask = (tasks) => {
  localStorage.setItem('tasks',JSON.stringify(tasks))
}

const deleteTask = (index) => {
  const tasks = getTask()
  tasks.splice(index, 1)
  saveTask(tasks)
  renderTasks()
}

const toggleTask = (index) => {
  const tasks = getTask()
  tasks[index].completed = !tasks[index].completed
  saveTask(tasks)
  renderTasks()
}

const renderTasks = () => {

  tasklist.innerHTML = ''
  const tasks = getTask()

  if (tasks.length === 0) {
    tasklist.innerHTML = '<p>No tasks yet. Add one above!!</p>';
    return;
  }

  tasks.forEach((task, index) => {
    const li = document.createElement('li')
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add('completed')
    }
    
    const delbtn = document.createElement('button')
    delbtn.textContent = 'delete';
    delbtn.classList.add('delbtn')
    delbtn.addEventListener('click', (e) => {
      e.stopPropagation()
      deleteTask(index)
    })

    li.addEventListener('click',() => {
      toggleTask(index)
    })

    li.appendChild(delbtn)

    tasklist.appendChild(li)
  })
}

const addtask = () => {
  const tasktxt = taskinput.value.trim()
  if (tasktxt === '') {
    alert("Please enter a task")
    return;
  }
  const tasks = getTask()
  tasks.push({text: tasktxt, completed: false})
  saveTask(tasks)
  taskinput.value = '';
  renderTasks()
}

addbtn.addEventListener('click',addtask)

taskinput.addEventListener('keypress',(e) => {
  
  if (e.key === 'Enter') {
    e.preventDefault();
    addtask()
  }
}) 
renderTasks()