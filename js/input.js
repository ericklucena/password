/* 
* @Author: Erick Lucena Palmeira Silva
* @Date:   2015-04-09 03:43:09
* @Last Modified by:   Erick Lucena Palmeira Silva
* @Last Modified time: 2015-04-09 04:11:13
*/

'use strict';

function createUser()
{
    var firstName = document.getElementById('firstName').value;
    var middleName = document.getElementById('middleName').value;
    var lastName = document.getElementById('lastName').value;
    var birthday = document.getElementById('birthday').value;
    var addressLine1 = document.getElementById('line1').value;
    var addressLine2 = document.getElementById('line2').value;
    var addressCity = document.getElementById('city').value;
    var addressState = document.getElementById('state').value;
    var addressPostalCode = document.getElementById('postalCode').value;
    var addressCountry = document.getElementById('country').value;
    var highSchoolName = document.getElementById('highSchoolName').value;
    var highSchoolStartDate = document.getElementById('highSchoolStartDate').value;
    var highSchoolEndDate = document.getElementById('highSchoolEndDate').value;
    var collegeName = document.getElementById('collegeName').value;
    var collegeStartDate = document.getElementById('collegeStartDate').value;
    var collegeEndDate = document.getElementById('collegeEndDate').value;
    var password = document.getElementById('password').value;

    var address = new Address(addressLine1, addressLine2, addressCity, addressState, addressPostalCode, addressCountry);
    var highSchool = new Education(highSchoolName, new Date(highSchoolStartDate), new Date(highSchoolEndDate));
    var college = new Education(collegeName, new Date(collegeStartDate), new Date(collegeEndDate));

    var user = new User(firstName, middleName, lastName, birthday, address, highSchool, college, password);

    document.getElementById('nameScore').value = nameCheck(user);
    document.getElementById('birthdayScore').value = birthdayCheck(user);
    document.getElementById('educationScore').value = educationNameCheck(user);
    document.getElementById('totalScore').value = check(user);
}