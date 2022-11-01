let count_inp = document.getElementById('count')
let count = 0
let problem_view = document.getElementById('problem')
let operands_div = document.getElementById('operands')
let operation_div = document.getElementById('operations')
let operations = ['&', 'v', '->', '<->']
let operands = ['x', 'y', 'z']
let problem = []
let remove = document.getElementById('remove')
let clear = document.getElementById('clear')
let submit = document.getElementById('submit')
let answer = document.getElementById('result')


remove.addEventListener('click', () => {
  problem.pop()
  setProblemView(problem)
})
clear.addEventListener('click', () => {
  problem = []
  setProblemView(problem)
  answer.innerHTML = ''
})

count_inp.addEventListener('input', (e) => {
  operands_div.innerHTML = ''
  const min = 1
  const max = 3
  if (e.target.value < min) {
    count_inp.value = min
  }
  else if (e.target.value > max) {
    count_inp.value = max
  }
  else {
    count = e.target.value
    setNewOperands()
  }
})




operations.forEach(i => {
  let oper_btn = document.createElement('div')
  oper_btn.innerText = i
  oper_btn.className = 'oper-btn'
  oper_btn.style.width = '70px'
  operation_div.append(oper_btn)
  oper_btn.addEventListener('click', () => {
    if (operations.includes(problem[problem.length - 1])) {
      alert('Введите операнд')
    }
    else {
      problem.push(oper_btn.innerText)
      setProblemView(problem);
    }
  })
});


function setProblemView(arr) {
  problem_view.innerHTML = ''
  let prob = document.createElement('span')
  prob.innerText = arr.join(' ')
  problem_view.append(prob)
}

function setNewOperands() {
  let new_operands = [...operands]
  new_operands.length = count
  new_operands.forEach(i => {
    let operand = document.createElement('div')
    operand.innerText = i
    operand.className = 'oper-btn'
    operand.addEventListener('click', () => {
      if (operands.includes(problem[problem.length - 1])) {
        alert('Введите операцию')
      }
      else {
        problem.push(operand.innerText)
        setProblemView(problem);
      }
    })
    operands_div.append(operand)
  });
}


function get_answer(x, y) {
  let result = 0
  let new_problem = []
  problem.forEach((i) => {
    if (i == 'x') {
      new_problem.push(x)
    }
    else if (i == 'y') {
      new_problem.push(y)
    }
    else {
      new_problem.push(i)
    }
  })

  for (let i = 0; i < new_problem.length; i++) {
    if (new_problem.includes('&')) {
      result = new_problem[new_problem.indexOf('&') - 1] * new_problem[[new_problem.indexOf('&') + 1]]
      new_problem[new_problem.indexOf('&')] = result
      delete new_problem[new_problem.indexOf('&') - 1]
      delete new_problem[new_problem.indexOf('&') + 1]
    }


    else if (new_problem.includes('v')) {
      result = Math.max(new_problem[new_problem.indexOf('v') - 1], new_problem[[new_problem.indexOf('v') + 1]])
      new_problem[new_problem.indexOf('v')] = result
      delete new_problem[new_problem.indexOf('v') - 1]
      delete new_problem[new_problem.indexOf('v') + 1]
    }

    else if (new_problem.includes('->')) {
      if (new_problem[new_problem.indexOf('->') - 1] > new_problem[new_problem.indexOf('->') + 1]) {
        result = 0
      }
      else {
        result = 1
      }
      new_problem[new_problem.indexOf('->')] = result
      delete new_problem[new_problem.indexOf('->') - 1]
      delete new_problem[new_problem.indexOf('->') + 1]
    }

    else if (new_problem.includes('<->')) {
      if (new_problem[new_problem.indexOf('<->') - 1] == new_problem[new_problem.indexOf('<->') + 1]) {
        result = 1
      }
      else {
        result = 0
      }
      new_problem[new_problem.indexOf('<->')] = result
      delete new_problem[new_problem.indexOf('<->') - 1]
      delete new_problem[new_problem.indexOf('<->') + 1]
    }


  }

  return new_problem[1]

}

function get_answer_three(x, y, z) {
  let result = 0
  let new_problem = []
  problem.forEach((i) => {
    if (i == 'x') {
      new_problem.push(x)
    }
    else if (i == 'y') {
      new_problem.push(y)
    }
    else if (i == 'y') {
      new_problem.push(z)
    }
    else {
      new_problem.push(i)
    }
  })

  for (let i = 0; i < new_problem.length; i++) {
    if (new_problem.includes('&')) {
      result = new_problem[new_problem.indexOf('&') - 1] * new_problem[[new_problem.indexOf('&') + 1]]
      new_problem[new_problem.indexOf('&')] = result
      delete new_problem[new_problem.indexOf('&') - 1]
      delete new_problem[new_problem.indexOf('&') + 1]
    }


    else if (new_problem.includes('v')) {
      result = Math.max(new_problem[new_problem.indexOf('v') - 1], new_problem[[new_problem.indexOf('v') + 1]])
      new_problem[new_problem.indexOf('v')] = result
      delete new_problem[new_problem.indexOf('v') - 1]
      delete new_problem[new_problem.indexOf('v') + 1]
    }

    else if (new_problem.includes('->')) {
      if (new_problem[new_problem.indexOf('->') - 1] > new_problem[new_problem.indexOf('->') + 1]) {
        result = 0
      }
      else {
        result = 1
      }
      new_problem[new_problem.indexOf('->')] = result
      delete new_problem[new_problem.indexOf('->') - 1]
      delete new_problem[new_problem.indexOf('->') + 1]
    }

    else if (new_problem.includes('<->')) {
      if (new_problem[new_problem.indexOf('<->') - 1] == new_problem[new_problem.indexOf('<->') + 1]) {
        result = 1
      }
      else {
        result = 0
      }
      new_problem[new_problem.indexOf('<->')] = result
      delete new_problem[new_problem.indexOf('<->') - 1]
      delete new_problem[new_problem.indexOf('<->') + 1]
    }


  }

  return new_problem[1]

}






submit.addEventListener('click', () => {
  answer.innerHTML = ''
  let table = document.createElement('table')
  table.className = 'table'
  table.append()
  let table_titles = document.createElement('tr')
  table.append(table_titles)
  let table_title_x = document.createElement('th')
  let table_title_y = document.createElement('th')
  let table_title_z = document.createElement('th')
  let table_title_a = document.createElement('th')
  table_title_x.innerText = 'x'
  table_title_y.innerText = 'y'
  table_title_z.innerText = 'z'
  table_title_a.innerText = 'a'
  let output = []
  if (count == 2) {
    let combo1 = {
      x: 0,
      y: 0,
      answer() {
        return ([this.x, this.y, get_answer(this.x, this.y),])
      }

    }
    let combo2 = {
      x: 0,
      y: 1,
      answer() {
        return ([this.x, this.y, get_answer(this.x, this.y),])
      }

    }
    let combo3 = {
      x: 1,
      y: 0,
      answer() {
        return ([this.x, this.y, get_answer(this.x, this.y),])
      }

    }
    let combo4 = {
      x: 1,
      y: 1,
      answer() {
        return ([this.x, this.y, get_answer(this.x, this.y),])
      }

    }
    output = [combo1.answer(), combo2.answer(), combo3.answer(), combo4.answer()]

    table_titles.append(table_title_x, table_title_y, table_title_a)
  }
  else if (count == 3) {
    let combo1 = {
      x: 0,
      y: 0,
      z: 0,
      answer() {
        return ([this.x, this.y, get_answer_three(this.x, this.y, this.z)])
      }

    }
    let combo2 = {
      x: 0,
      y: 0,
      z: 1,
      answer() {
        return ([this.x, this.y, get_answer_three(this.x, this.y, this.z),])
      }
    }
    let combo3 = {
      x: 0,
      y: 1,
      z: 0,
      answer() {
        return ([this.x, this.y, get_answer_three(this.x, this.y, this.z),])
      }


    }
    let combo4 = {
      x: 0,
      y: 1,
      z: 1,
      answer() {
        return ([this.x, this.y, get_answer_three(this.x, this.y, this.z),])
      }
    }
    let combo5 = {
      x: 1,
      y: 0,
      z: 0,
      answer() {
        return ([this.x, this.y, get_answer_three(this.x, this.y, this.z),])
      }
    }
    let combo6 = {
      x: 1,
      y: 0,
      z: 1,
      answer() {
        return ([this.x, this.y, get_answer_three(this.x, this.y, this.z),])
      }
    }
    let combo7 = {
      x: 1,
      y: 1,
      z: 0,
      answer() {
        return ([this.x, this.y, get_answer_three(this.x, this.y, this.z),])
      }
    }
    let combo8 = {
      x: 1,
      y: 1,
      z: 1,
      answer() {
        return ([this.x, this.y, get_answer_three(this.x, this.y, this.z),])
      }
    }

    output = [combo1.answer(), combo2.answer(), combo3.answer(), combo4.answer(), combo5.answer(), combo6.answer(), combo7.answer(), combo8.answer()]

    table_titles.append(table_title_x, table_title_y, table_title_z, table_title_a)
  }
  console.log(output);
  output.forEach((i) => {
    let row = document.createElement('tr')
    table.append(row)
    i.forEach((j) => {
      let cell = document.createElement('td')
      cell.innerText = j
      row.append(cell)
    })
  })
  answer.append(table)
})






