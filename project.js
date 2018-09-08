/* This function extracts data from the resume.json */ 
function loadInfo(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','resume.json',true);
    xhr.onload = function(){
        if(this.status == 200){
            var users = JSON.parse(this.responseText);
            /*  Introduction Part */
            document.getElementById("name").innerHTML=users.name;
            document.getElementById("profession").innerHTML=users.profession;
            document.getElementById("desc").innerHTML=users.description;
            /*Personal Highlights*/ 
            document.getElementById("highlights").innerHTML=users.highlights;
            document.getElementById("h1").innerHTML=users.highlightscontent[0];
            document.getElementById("h2").innerHTML=users.highlightscontent[1];
            document.getElementById("h3").innerHTML=users.highlightscontent[2];
            document.getElementById("h4").innerHTML=users.highlightscontent[3];
            document.getElementById("h5").innerHTML=users.highlightscontent[4];
            document.getElementById("h6").innerHTML=users.highlightscontent[5];
            /*Contact Details*/
            document.getElementById("detai").innerHTML=users.detail;
            document.getElementById("address1").innerHTML=users.contactdetails.address;
            document.getElementById("address2").innerHTML=users.contactdetails.city;
            document.getElementById("country").innerHTML=users.contactdetails.country;
            document.getElementById("email").innerHTML=users.email;
            document.getElementById("tel").innerHTML=users.tel;
            /*Basic Information*/
            document.getElementById("basic").innerHTML=users.basic;
            document.getElementById("summary").innerHTML=users.basicinformation;
            /*Education Section*/
            document.getElementById("eduhead").innerHTML=users.edutitle;
            document.getElementById("e1").innerHTML=users.education.school1;
            document.getElementById("e2").innerHTML=users.education.class1;
            document.getElementById("e3").innerHTML=users.education.degree1;
            document.getElementById("e4").innerHTML=users.education.association;
            document.getElementById("e5").innerHTML=users.education.rank;
            document.getElementById("e6").innerHTML=users.education.school2;
            document.getElementById("e7").innerHTML=users.education.degree2;
            document.getElementById("e8").innerHTML=users.education.honors;
            document.getElementById("e9").innerHTML=users.education.title;
            /*Experience Section*/
            document.getElementById("protitle").innerHTML=users.exptitle;
            document.getElementById("exp1").innerHTML=users.experience.job1;
            document.getElementById("exp2").innerHTML=users.experience.location1.city + ", " + users.experience.location1.country;
            document.getElementById("exp3").innerHTML=users.experience.location1.description;

            document.getElementById("exp4").innerHTML=users.experience2;
            document.getElementById("exp5").innerHTML=users.location2;
            document.getElementById("exp6").innerHTML=users.description1;
        }
    }
    xhr.send();
}