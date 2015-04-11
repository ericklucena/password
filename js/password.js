/* 
* @Author: Erick Lucena Palmeira Silva
* @Date:   2015-04-09 01:16:02
* @Last Modified by:   Erick Lucena Palmeira Silva
* @Last Modified time: 2015-04-11 02:42:52
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

function User (fullname, birthday, address, highSchool, college, password)
{
    this.fullname = fullname.toLowerCase();
    this.birthday = birthday;
    this.address = address;
    this.highSchool = highSchool;
    this.college = college;
    this.password = password.toLowerCase();
    this.originalPassword = password;

    this.address.line1 = this.address.line1.toLowerCase();
    this.address.line2 = this.address.line2.toLowerCase();
    this.address.city = this.address.city.toLowerCase();
    this.address.state = this.address.state.toLowerCase();
    this.address.postalCode = this.address.postalCode.toLowerCase();
    this.address.country = this.address.country.toLowerCase();

    this.highSchool.name = this.highSchool.name.toLowerCase();
    this.college.name = this.college.name.toLowerCase();
}

function Date (day, month, year)
{
    this.day = day;
    this.month = month;
    this.year = year;
}

function Date (date)
{
    this.day = date.split('-')[2];
    this.month = date.split('-')[1];
    this.year = date.split('-')[0];
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

function Education(name, startYear, endYear) 
{
    this.name = name;
    this.startYear = startYear;
    this.endYear = endYear;
}

    
function check(user)
{
    var totalMark = 0.0;
    
    totalMark += nameCheck(user);
    totalMark += birthdayCheck(user);
    totalMark += addressCheck(user);
    totalMark += educationCheck(user);
    
    return totalMark/4;
}

function nameCheck(user)
{
    
    var mark = 10.0;
    var numberOfInitials = 0;
    var hasFirstInitial = false;
    var hasMiddleInitial = false;
    var hasLastInitial = false;
    var hasInitials = false;
    var initials = '';
    var initialsArray = user.fullname.split(' ');

    for (var i=0; i<initialsArray.length; i++)
    {
        initialsArray[i] = initialsArray[i][0];
        initials += initialsArray[i];
    }
    
    numberOfInitials = testArray(initialsArray, user.password);
    hasInitials = user.password.indexOf(initials) >= 0;
    
    if (hasInitials)
    {
        mark -= 10;
    }

    if (numberOfInitials > 0)
    {
        mark -= (numberOfInitials/initialsArray.length) * 10;
    }
    
    return mark<0?0:mark;
}

function addressCheck(user)
{
    var mark = 10.0;
    var numberOfInitials = 0;
    var hasInitials = false;
    var initials = '';

    //Line 1 Checking

    var initialsArray = user.address.line1.split(' ');

    for (var i=0; i<initialsArray.length; i++)
    {
        initialsArray[i] = initialsArray[i][0];
        initials += initialsArray[i];
    }
    
    numberOfInitials = testArray(initialsArray, user.password);
    hasInitials = user.password.indexOf(initials) >= 0;
    
    if (hasInitials)
    {
        mark -= 2.5;
    }

    if (numberOfInitials > 0)
    {
        mark -= (numberOfInitials/initialsArray.length) * 10;
    }

    //Line 2 Checking

    initialsArray = user.address.line2.split(' ');

    for (var i=0; i<initialsArray.length; i++)
    {
        initialsArray[i] = initialsArray[i][0];
        initials += initialsArray[i];
    }
    
    numberOfInitials = testArray(initialsArray, user.password);
    hasInitials = user.password.indexOf(initials) >= 0;
    
    if (hasInitials)
    {
        mark -= 2.5;
    }

    if (numberOfInitials > 0)
    {
        mark -= (numberOfInitials/initialsArray.length) * 10;
    }

    //City Checking

    initialsArray = user.address.city.split(' ');

    for (var i=0; i<initialsArray.length; i++)
    {
        initialsArray[i] = initialsArray[i][0];
        initials += initialsArray[i];
    }
    
    numberOfInitials = testArray(initialsArray, user.password);
    hasInitials = user.password.indexOf(initials) >= 0;
    
    if (hasInitials)
    {
        mark -= 2.5;
    }

    if (numberOfInitials > 0)
    {
        mark -= (numberOfInitials/initialsArray.length) * 10;
    }

    //State Checking

    initialsArray = user.address.state.split(' ');

    for (var i=0; i<initialsArray.length; i++)
    {
        initialsArray[i] = initialsArray[i][0];
        initials += initialsArray[i];
    }
    
    numberOfInitials = testArray(initialsArray, user.password);
    hasInitials = user.password.indexOf(initials) >= 0;
    
    if (hasInitials)
    {
        mark -= 2.5;
    }

    if (numberOfInitials > 0)
    {
        mark -= (numberOfInitials/initialsArray.length) * 10;
    }

    //Postal code Checking

    initials = user.address.postalCode.split(' ');

    
    hasInitials = user.password.indexOf(initials) >= 0;
    
    if (hasInitials)
    {
        mark -= 2.5;
    }

    //Country Checking

    initialsArray = user.address.country.split(' ');

    for (var i=0; i<initialsArray.length; i++)
    {
        initialsArray[i] = initialsArray[i][0];
        initials += initialsArray[i];
    }
    
    numberOfInitials = testArray(initialsArray, user.password);
    hasInitials = user.password.indexOf(initials) >= 0;
    
    if (hasInitials)
    {
        mark -= 2.5;
    }

    if (numberOfInitials > 0)
    {
        mark -= (numberOfInitials/initialsArray.length) * 10;
    }

    
    return mark<0?0:mark;
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
    
    return mark<0?0:mark;
}

function educationCheck(user)
{
    var mark = 10.0;

    var hasSchoolName = false;
    var hasSchoolStartYear = false;
    var hasSchoolStartYear2Digits = false;
    var hasSchoolEndYear = false;
    var hasSchoolEndYear2Digits = false;
    var hasCollegeName = false;
    var hasCollegeStartYear = false;
    var hasCollegeStartYear2Digits = false;
    var hasCollegeEndYear = false;
    var hasCollegeEndYear2Digits = false;
    
    var schoolName = user.highSchool.name.split(' ');
    var collegeName = user.college.name.split(' ');

    var highSchoolStartYear = ''+user.highSchool.startYear;
    var highSchoolStartYear2Digits = highSchoolStartYear.substring(2);
    var highSchoolEndYear = ''+user.highSchool.endYear;
    var highSchoolEndYear2Digits = highSchoolEndYear.substring(2);

    var collegeStartYear = ''+user.college.startYear;
    var collegeStartYear2Digits = collegeStartYear.substring(2);
    var collegeEndYear = ''+user.college.endYear;
    var collegeEndYear2Digits = collegeEndYear.substring(2);

    hasSchoolName = testArray(schoolName, user.password) > 0;
    hasSchoolStartYear = user.password.indexOf(highSchoolStartYear) >= 0;
    hasSchoolStartYear2Digits = user.password.indexOf(highSchoolStartYear2Digits) >= 0;
    hasSchoolEndYear = user.password.indexOf(highSchoolEndYear) >= 0;
    hasSchoolEndYear2Digits = user.password.indexOf(highSchoolEndYear2Digits) >= 0;

    hasCollegeName = testArray(collegeName, user.password) > 0;
    hasCollegeStartYear = user.password.indexOf(collegeStartYear) >= 0;
    hasCollegeStartYear2Digits = user.password.indexOf(collegeStartYear2Digits) >= 0;
    hasCollegeEndYear = user.password.indexOf(collegeEndYear) >= 0;
    hasCollegeEndYear2Digits = user.password.indexOf(collegeEndYear2Digits) >= 0;

    if (hasSchoolName) {
        mark -= 2.5;
    }

    if (hasSchoolStartYear) {
        mark -= 2.5;
    }

    if (hasSchoolStartYear2Digits) {
        mark -= 2.5;
    }

    if (hasSchoolEndYear) {
        mark -= 2.5;
    }

    if (hasSchoolEndYear2Digits) {
        mark -= 2.5;
    }

    if (hasCollegeName) {
        mark -= 2.5;
    }

    if (hasCollegeStartYear) {
        mark -= 2.5;
    }

    if (hasCollegeStartYear2Digits) {
        mark -= 2.5;
    }

    if (hasCollegeEndYear) {
        mark -= 2.5;
    }

    if (hasCollegeEndYear2Digits) {
        mark -= 2.5;
    }

    return mark<0?0:mark;
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
