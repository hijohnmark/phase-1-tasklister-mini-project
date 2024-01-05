document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let ntd = document.getElementById('new-task-description')
    buildToDo(ntd.value)
    form.reset()

  })
});

function buildToDo(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  
  let dropDown = document.createElement('select')
  let optionA = document.createElement('option')
  let optionB = document.createElement('option')
  let optionC = document.createElement('option')
  optionA.textContent = "high priority"
  optionB.textContent = "medium priority"
  optionC.textContent = "low priority"

  btn.addEventListener('click', handleDelete)
  btn.textContent = "X"
  p.textContent = `${todo} `
  p.appendChild(dropDown)
  dropDown.appendChild(optionA)
  dropDown.appendChild(optionB)
  dropDown.appendChild(optionC)
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}

