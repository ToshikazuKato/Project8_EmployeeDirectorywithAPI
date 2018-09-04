$(document).ready(function() {

const directory = document.getElementById("directory");
const search = document.getElementById("search");

// connect to API and fetch data
const connectToAPIs = () =>{
  fetch('https://randomuser.me/api/?results=12&nat=us,au,br,ca,us,nz')
  .then(response => response.json())
  .then(data => {
    const empList = data.results;
    createEmployee(empList);
    $('.modal').modaal();
    searchEmp();
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
                      <h3 class="nameModal">${empName}</h3>
                      <p class="emailModal">${emp.email}</p>
                      <p class="placeModal">${emp.location.city}</p>
                      <hr>
                      <p class="cell">${emp.cell}</p>
                      <p class="address">${emp.location.street},${emp.location.state}, ${emp.location.postcode}</p>
                      <p class="birthday">Birthday: ${emp.dob.date.slice(5,7)}/${emp.dob.date.slice(8,10)}/${emp.dob.date.slice(0,4)}</p>
                    </div>
                  </div>
                </a>`;
  });
  directory.innerHTML = empHTML;
}

const searchEmp = () => {

  search.addEventListener('keyup', (event)=>{
    event.preventDefault();
    const name = document.getElementsByClassName('name');
    const searchedWord = search.value.toUpperCase();
    const href = document.getElementsByClassName('modal');

    // get employee's name from objects
    const empArrForSearch = Object.keys(name).map((val,index) => {
      return name[index].innerHTML.toUpperCase();
    });

    // search function
    empArrForSearch.forEach((val,index)=>{

      if( val.indexOf(searchedWord) > -1 ){
        href[index].style.display = 'block';
      }else{
        href[index].style.display = 'none';

      }

    });

  });
}

connectToAPIs();

 });
