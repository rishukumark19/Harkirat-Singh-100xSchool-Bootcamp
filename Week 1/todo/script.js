function addTodo() {
  // 1. Get input element
  const input = document.getElementById("newTodo");

  // 2. Get input value (text user typed)
  const value = input.value;

  // prevent empty adds
  if (value === "") {
    alert("Please enter something");
    return;
  }

  // 3. Get the list
  const list = document.getElementById("todoList");

  // 4. Create a new <li>
  const newItem = document.createElement("li");

  // 5. Put text inside <li>
  newItem.innerText = value;

  // 6. Add <li> to <ul>
  list.appendChild(newItem);

  // 7. Clear input box
  input.value = "";
}
