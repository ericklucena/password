/* 
* @Author: Erick Lucena Palmeira Silva
* @Date:   2015-04-09 03:43:09
* @Last Modified by:   Erick Lucena Palmeira Silva
* @Last Modified time: 2015-04-11 02:33:21
*/

'use strict';

function createUser()
{
    var fullname = document.getElementById('fullname').value;
    var birthday = document.getElementById('birthday').value;
    var addressLine1 = document.getElementById('line1').value;
    var addressLine2 = document.getElementById('line2').value;
    var addressCity = document.getElementById('city').value;
    var addressState = document.getElementById('state').value;
    var addressPostalCode = document.getElementById('postalCode').value;
    var addressCountry = document.getElementById('country').value;
    var highSchoolName = document.getElementById('highSchoolName').value;
    var highSchoolStartYear = document.getElementById('highSchoolStartYear').value;
    var highSchoolEndYear = document.getElementById('highSchoolEndYear').value;
    var collegeName = document.getElementById('collegeName').value;
    var collegeStartYear = document.getElementById('collegeStartYear').value;
    var collegeEndYear = document.getElementById('collegeEndYear').value;
    var password = document.getElementById('password').value;

    var address = new Address(addressLine1, addressLine2, addressCity, addressState, addressPostalCode, addressCountry);
    var highSchool = new Education(highSchoolName, highSchoolStartYear, highSchoolEndYear);
    var college = new Education(collegeName, collegeStartYear, collegeEndYear);

    var user = new User(fullname, new Date(birthday), address, highSchool, college, password);

    document.getElementById('nameScore').value = nameCheck(user);
    document.getElementById('birthdayScore').value = birthdayCheck(user);
    document.getElementById('addressScore').value = addressCheck(user);
    document.getElementById('educationScore').value = educationCheck(user);
    document.getElementById('totalScore').value = check(user);
}