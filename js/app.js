$(document).ready(function() {

const directory = document.getElementById("directory");

// connect to API and fetch data
const connectToAPIs = () =>{
  fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  .then(data => {
    const empList = data.results;
    createEmployee(empList);
    $('.modal').modaal();
  })
};

const createEmployee = (emp) =>{
  let empHTML = '';
  emp.forEach( emp =>{
    const empName = emp.name.first+emp.name.last
    empHTML += `<a href="#${empName}" class="modal" data-group="modal">
                  <div class="employee">
                    <img src="${emp.picture.medium}" alt="${empName}" class="img">
                    <div class="right">
                      <h3 class="name">${empName}</h3>
                      <p class="email">${emp.email}</p>
                      <p class="place">${emp.location.city}</p>
                    </div>
                  </div>
                  <div id="${empName}" style="display:none;">
                    <div class="modalContainer">
                      <img src="${emp.picture.medium}" alt="${empName}" class="img">
                      <h3 class="name">${empName}</h3>
                      <p class="emailModal">${emp.email}</p>
                      <p class="placeModal">${emp.location.city}</p>
                      <hr>
                      <p class="cell">${emp.cell}</p>
                      <p class="address">${emp.location.street},${emp.location.state}, ${emp.location.postcode}</p>
                    </div>
                  </div>
                </a>`;
  });
  directory.innerHTML = empHTML;
}


connectToAPIs();

 });
