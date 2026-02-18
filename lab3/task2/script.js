'use strict';

const formEl = document.getElementById('todoForm');
const inputEl = document.getElementById('taskInput');
const listEl = document.getElementById('todoList');

function createTodoItem(text) {
  const li = document.createElement('li');
  li.className = 'item';

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  // Task text
  const span = document.createElement('span');
  span.className = 'text';
  span.textContent = text;

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.className = 'delete';
  delBtn.setAttribute('aria-label', 'Delete task');
  delBtn.textContent = '🗑';

  // Events
  checkbox.addEventListener('change', () => {
    li.classList.toggle('done', checkbox.checked);
  });

  delBtn.addEventListener('click', () => {
    li.remove(); 
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);

  return li;
}

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = inputEl.value.trim();
  if (!value) return;

  const item = createTodoItem(value);
  listEl.appendChild(item);

  inputEl.value = '';
  inputEl.focus();
});

['First item', 'Second item', 'Third item'].forEach((t, i) => {
  const item = createTodoItem(t);
  if (i === 0) {
    const checkbox = item.querySelector('.checkbox');
    checkbox.checked = true;
    item.classList.add('done');
  }
  listEl.appendChild(item);
});
