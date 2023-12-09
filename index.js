function addUser() {
  var usernameInput = document.getElementById("usernameInput").value;
  if (usernameInput !== "") {
    var userList = JSON.parse(localStorage.getItem("users")) || [];
    userList.push(usernameInput);
    localStorage.setItem("users", JSON.stringify(userList));
    displayUsers();
    document.getElementById("usernameInput").value = "";
  }
}

function displayUsers() {
  var userList = JSON.parse(localStorage.getItem("users")) || [];
  var userListHTML = "<ul>";
  for (var i = 0; i < userList.length; i++) {
    userListHTML +=
      "<li>" +
      userList[i] +
      " <button class='update' onclick='updateUser(" +
      i +
      ")'>Update</button> <button class='delete' onclick='deleteUser(" +
      i +
      ")'>Delete</button></li>";
  }
  userListHTML += "</ul>";
  document.getElementById("userList").innerHTML = userListHTML;
}

function updateUser(index) {
  var userList = JSON.parse(localStorage.getItem("users")) || [];
  var updatedUsername = prompt("Enter the updated username:", userList[index]);
  if (updatedUsername !== null) {
    userList[index] = updatedUsername;
    localStorage.setItem("users", JSON.stringify(userList));
    displayUsers();
  }
}

function deleteUser(index) {
  var userList = JSON.parse(localStorage.getItem("users")) || [];
  userList.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(userList));
  displayUsers();
}
displayUsers();
