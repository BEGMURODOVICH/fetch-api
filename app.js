const cardList = document.getElementById("user_info");
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    data.map((user) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <div class="user_cardTop">
            <p class="status">${user.completed}</p>
            <p class="user_id">${user.id}</p>
          </div>
          <img src="user.svg" alt="">
          <h3 class="user_title">${user.title}</h3>
      `;
      cardList.appendChild(li);
    });
  })
  .catch((error) => console.log("Xato yuz berdi:", error))
  .finally(() => console.log("So'rov yakunlandi"));
