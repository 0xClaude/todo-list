document.querySelector(".btn-primary").onclick = () => {
  // get the data written in the input field
  let input = document.querySelector(".form-control").value;

  // create new list item
  let node = document.createElement("li");
  // add the class so it's displayed correctly
  node.className = "list-group-item";
  // Add the checkbox and the added item
  node.innerHTML = '<input class="form-check-input me-1" type="checkbox" value="" aria-label="..."> <span>' + input + '</span>';
  // add it to the list
  document.querySelector(".shoppingList").appendChild(node);

  // find the button
  let addItem = document.querySelector(".addItem");
  // find the list
  let list = document.querySelector(".shoppingList");
  // add the new item in front of the list
  list.insertBefore(node, addItem);

  let textfield = document.querySelector(".form-control");
  textfield.value = "";
  textfield.focus();
}
