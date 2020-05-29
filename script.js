function thirtyOneDays() {
    document.getElementById("dayForm").innerHTML = '<option value="00">-day-</option><option value="01">1</option><option value="02">2</option><option value="03">3</option><option value="04">4</option><option value="05">5</option><option value="06">6</option><option value="07">7</option><option value="08">8</option><option value="09">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option>';
}
function thirtyNilDays() {
    document.getElementById("dayForm").innerHTML = '<option value="00">-day-</option><option value="01">1</option><option value="02">2</option><option value="03">3</option><option value="04">4</option><option value="05">5</option><option value="06">6</option><option value="07">7</option><option value="08">8</option><option value="09">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option>';
}
function twentyEightDays() {
    document.getElementById("dayForm").innerHTML = '<option value="00">-day-</option><option value="01">1</option><option value="02">2</option><option value="03">3</option><option value="04">4</option><option value="05">5</option><option value="06">6</option><option value="07">7</option><option value="08">8</option><option value="09">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option>';
}
function interpret() {
    var monthInfo = String(document.getElementById("monthForm").value);
    if (monthInfo === "00" || monthInfo === "02" || monthInfo === "04" || monthInfo === "06" ||  monthInfo === "07" || monthInfo === "09" || monthInfo === "11") {
        thirtyOneDays();
    } else if (monthInfo === "03" || monthInfo === "05" || monthInfo === "08" || monthInfo === "10") {
        thirtyNilDays();
    } else {
        twentyEightDays();
    }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~ */
function getDay() {
    var yearInfo = String(document.getElementById("yearForm").value);
    var monthInfo = String(document.getElementById("monthForm").value);
    var dayInfo = String(document.getElementById("dayForm").value);
    var getDate = new Date(yearInfo, monthInfo, dayInfo);
    var result = String(getDate).slice(0,3);
    var dayLong;
    if (result === "Mon") {
        dayLong = "Monday";
    } else if (result === "Tue") {
        dayLong = "Tuesday";
    } else if (result === "Wed") {
        dayLong = "Wednesday";
    } else if (result === "Thu") {
        dayLong = "Thursday";
    } else if (result === "Fri") {
        dayLong = "Friday";
    } else if (result === "Sat") {
        dayLong = "Saturday";
    } else if (result === "Sun" && yearInfo !== ""){
        dayLong = "Sunday";
    } else {
        dayLong = "Please enter a valid date";
    }
    document.getElementById("dayDisplay").innerHTML = dayLong + "!";
}
document.getElementById("yearForm").onkeydown = function(e){
    if(e.keyCode == 13){
        getDay();  
    }
};