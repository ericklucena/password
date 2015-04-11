<!doctype html>
<html lang="en">
<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Code Haven - Software development">
    <title>Code Haven</title>

<link rel="stylesheet" href="css/pure-min.css">
<link rel="stylesheet" href="css/layouts/haven.css">
<link rel="stylesheet" href="css/colors.css">
<script type="text/javascript" src="js/password.js"></script>
<script type="text/javascript" src="js/input.js"></script>


</head>
<body>

<div class="pure-menu pure-menu-open pure-menu-horizontal pure-menu-fixed">
    <a href="#" class="pure-menu-heading">
        <img class="haven-logo" src="img/codeHaven.png">
    </a>
    <ul>
        <li class="pure-menu-selected"><a href="#">Password Strength</a></li>
    </ul>
</div>

<div class="l-content">
    <div class="haven-tables pure-g-r">
        
    </div> <!-- end haven-tables -->

    <div class="information pure-g-r">
        <div class="pure-u-1">
        <!--
            <h1 class="section-head">
                Information<br>
            </h1>
        -->
            <form class="pure-form pure-form-aligned">
                <fieldset>
                    <legend>Basic Information</legend>
                    <div class="pure-control-group">
                        <label for="fullname">Full Name</label>
                        <input id="fullname" type="text" placeholder="Full Name">
                    </div>

                    <div class="pure-control-group">
                        <label for="birthday">Birthday</label>
                        <input id="birthday" type="date" placeholder="Birthday">
                    </div>

                    <legend>Address</legend>
                    <div class="pure-control-group">
                        <label for="line1">Address Line 1</label>
                        <input id="line1" type="text" placeholder="Address Line 1">
                    </div>

                    <div class="pure-control-group">
                        <label for="line2">Address Line 2</label>
                        <input id="line2" type="text" placeholder="Address Line 2">
                    </div>

                    <div class="pure-control-group">
                        <label for="city">City</label>
                        <input id="city" type="text" placeholder="City">
                    </div>

                    <div class="pure-control-group">
                        <label for="state">State</label>
                        <input id="state" type="text" placeholder="State">
                    </div>

                    <div class="pure-control-group">
                        <label for="postalCode">Postal Code</label>
                        <input id="postalCode" type="text" placeholder="Postal Code">
                    </div>

                    <div class="pure-control-group">
                        <label for="country">Country</label>
                        <input id="country" type="text" placeholder="Country">
                    </div>

                    <legend>Education - High School</legend>
                    <div class="pure-control-group">
                        <label for="highSchoolName">Institution Name</label>
                        <input id="highSchoolName" type="text" placeholder="Institution Name">
                    </div>

                    <div class="pure-control-group">
                        <label for="highSchoolStartYear">Start Year</label>
                        <input id="highSchoolStartYear" type="number" placeholder="Start Year">
                    </div>

                    <div class="pure-control-group">
                        <label for="highSchoolEndYear">End Year</label>
                        <input id="highSchoolEndYear" type="number" placeholder="End Year">
                    </div>

                    <legend>Education - College</legend>
                    <div class="pure-control-group">
                        <label for="collegeName">Institution Name</label>
                        <input id="collegeName" type="text" placeholder="Institution Name">
                    </div>

                    <div class="pure-control-group">
                        <label for="collegeStartYear">Start Year</label>
                        <input id="collegeStartYear" type="number" placeholder="Start Year">
                    </div>

                    <div class="pure-control-group">
                        <label for="collegeEndYear">End Year</label>
                        <input id="collegeEndYear" type="number" placeholder="End Year">
                    </div>

                    <legend>Password</legend>
                    <div class="pure-control-group">
                        <label for="password">Password</label>
                        <input id="password" type="text" placeholder="Password">
                    </div>
                </fieldset>
                <div class="pure-controls">
                    <input type="button" value="Calculate" onclick="createUser()" class="pure-button pure-button-primary"/>
                </div>
                <fieldset>
                    <legend>Results</legend>
                    <div class="pure-control-group">
                        <label for="nameScore">Name Score</label>
                        <input id="nameScore" readonly="readonly" type="text" placeholder="Name Score">
                    </div>
                    <div class="pure-control-group">
                        <label for="birthdayScore">Birthday Score</label>
                        <input id="birthdayScore" readonly="readonly" type="text" placeholder="Birthday Score">
                    </div>
                    <div class="pure-control-group">
                        <label for="addressScore">Address Score</label>
                        <input id="addressScore" readonly="readonly" type="text" placeholder="Address Score">
                    </div>
                    <div class="pure-control-group">
                        <label for="educationScore">Education Score</label>
                        <input id="educationScore" readonly="readonly" type="text" placeholder="Education Score">
                    </div>
                    <div class="pure-control-group">
                        <label for="totalScore">Total Score</label>
                        <input id="totalScore" readonly="readonly" type="text" placeholder="Total Score">
                    </div>
                </fieldset>
            </form>
        </div>
    </div> <!-- end information -->
</div> <!-- end l-content -->

<div class="footer">
    <p class="l-box">
        Code Haven - 2015
    </p>
</div>

</body>
</html>
