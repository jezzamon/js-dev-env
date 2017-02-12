import './index.css';
import { getUsers, deleteUser } from './api/userApi';

//import numeral from 'numeral';

//const courseValue = numeral(1000).format('$0,0.00');
//console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console

// Populate table of getUsers
getUsers().then( result => {
  let usersBody= "";

  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`;
  });
  global.document.getElementById('users').innerHTML = usersBody;


  const deleteLinks = global.document.getElementsByClassName('deleteUser');



  const testArray = Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;  //move up two levels for row
      row.parentNode.removeChild(row);
    };
  });



});
