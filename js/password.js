/* 
* @Author: Erick Lucena Palmeira Silva
* @Date:   2015-04-09 01:16:02
* @Last Modified by:   Erick Lucena Palmeira Silva
* @Last Modified time: 2015-04-09 02:51:04
*/

'use strict';

function Apple (type)
{
    this.type = type;
    this.color = 'red';
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };
}

function User (firstName, middleName, lastName, address, birthday, highSchool, college, password)
{
    this.firstName = firstName.toLowerCase();
    this.middleName = middleName.toLowerCase();
    this.lastName = lastName.toLowerCase();
    this.address = address;
    this.birthday = birthday;
    this.highSchool = highSchool;
    this.college = college;
    this.password = password;
    this.originalPassword = password;
}

function Date (day, month, year)
{
    this.day = day;
    this.month = month;
    this.year = year;
}

function Address(line1, line2, city, state, postalCode, country) 
{
    this.line1 = line1;
    this.line2 = line2;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.country = country;
}

function Education(name, startDate, endDate) 
{
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
}

    
function check(user)
{
    var totalMark = 0.0;
    
    totalMark += nameCheck(user);
    totalMark += birthdayCheck(user);
    
    return totalMark/2;
}

function nameCheck(user)
{
    
    var mark = 10.0;
    var hasFirstInitial = false;
    var hasMiddleInitial = false;
    var hasLastInitial = false;
    var hasInitials = false;
    var initials = '';
    
    if (user.firstName != '')
    {
        initials += user.firstName[0];
        hasFirstInitial = user.password.indexOf(user.firstName[0]) >= 0;
    }
    
    if (user.middleName != '')
    {
        initials += user.middleName[0];
        hasMiddleInitial = user.password.indexOf(user.middleName[0]) >=0 ;
    }
    
    if (user.lastName != '')
    {
        initials += user.lastName[0];
        hasLastInitial = user.password.indexOf(user.lastName[0]) >=0 ;
    }
    
    hasInitials = user.password.indexOf(initials) >= 0;
    
    if (hasFirstInitial)
    {
        mark -= 2;
    }
    
    if (hasMiddleInitial)
    {
        mark -= 2;
    }
    
    if (hasLastInitial)
    {
        mark -= 2;
    }
    
    if (hasInitials)
    {
        mark -= 4;
    }
    
    return mark;
}

function birthdayCheck(user)
{
    
    var mark = 10.0;
    var day = ''+user.birthday.day;
    var month = ''+user.birthday.month;
    var year = ''+user.birthday.year;
    var year2Digits = year.substring(2);
    var hasDay = false;
    var hasMonth = false;
    var hasYear = false;
    var hasYear2Digits = false;
    
    hasDay = user.password.indexOf(day) >= 0;
    hasMonth = user.password.indexOf(month) >= 0;
    hasYear = user.password.indexOf(year) >= 0;
    hasYear2Digits = user.password.indexOf(year2Digits) >= 0;
    
    if (hasDay){
        mark -= 2.5;
    }
    
    if (hasMonth){
        mark -= 2.5;
    }
    
    if (hasYear){
        mark -= 2.5;
    }
    
    if (hasYear2Digits){
        mark -= 2.5;
    }
    
    return mark;
}

function educationNameCheck(user)
{
    var mark = 10.0;
    var schoolName = user.highSchool.name.split(' ');
    var collegeName = user.college.name.split(' ');
    var hasSchoolName = false;
    var hasCollegeName = false;

    hasSchoolName = testArray(schoolName, user.password) > 0;
    hasCollegeName = testArray(collegeName, user.password) > 0;

    if (hasSchoolName) {
        mark -= 5; 
    }

    if (hasCollegeName) {
        mark -= 5;
    }

    return mark;
}

function testArray(stringArray, password)
{
    var ocurrences = 0;

    for (var i = 0; i< stringArray.length; i++)
    {
        if (password.indexOf(stringArray[i]) >= 0)
        {
            ocurrences++;
        }
    }

    return ocurrences;
}
