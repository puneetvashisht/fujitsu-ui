document.addEventListener("DOMContentLoaded", () => {
  const newItemInput = document.getElementById("newItem");
  const addItemButton = document.getElementById("addItem");
  const clearCompletedButton = document.getElementById("clearCompleted");
  const itemList = document.getElementById("itemList");

  function addItem() {
    const itemText = newItemInput.value.trim();
    if (!itemText) {
      alert("Please enter an item.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = itemText;
    li.classList.add("item");
    itemList.appendChild(li);
    newItemInput.value = "";

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
  }

  addItemButton.addEventListener("click", addItem);

  newItemInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  });

  function clearCompleted() {
    const completedItems = itemList.querySelectorAll(".completed");
    completedItems.forEach((item) => item.remove());
  }

  clearCompletedButton.addEventListener("click", clearCompleted);
});
