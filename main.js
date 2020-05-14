const txtName = document.getElementById("name");
const txtAddress = document.getElementById("address");
const btnBookTickets = document.getElementById("book");
const btnHomepage = document.getElementById("homepage");
const results = document.getElementById("result");
const txtSeats = document.getElementById("seats");
const txtOutput = document.getElementById("output");
const txtMovies = document.getElementById("movies");
btnBookTickets.addEventListener("click", book);
const txtOutput1 = document.getElementById("output1");
const txtOutput2 = document.getElementById("output2");
const movie2 = document.getElementsByName("movies");
btnHomepage.addEventListener("click", redirect)







const allContacts = document.querySelectorAll("input[name='contact']");

const selectedContact = document.querySelector("input[name='contact']:checked");

for (let i = 0; i < allContacts.length; i++) {
    allContacts[i].addEventListener("change", checkPreference);
}

txtOutput.innerText = "Contact preference: " + selectedContact.value;

function checkPreference() {
     
        event.preventDefault();
    txtOutput.innerText = "Contact preference: " + this.value;


}
let movie1 = 79.00;
let eticket = 0.00;
txtOutput2.innerText = "£"+parseFloat( movie1 + eticket);
function book(){
    event.preventDefault();
const allContacts = document.querySelectorAll("input[name='contact']");


const selectedContact = 
    document.querySelector("input[name='contact']:checked");

for (let i = 0; i < allContacts.length; i++) {
    allContacts[i].addEventListener("change", checkPreference);
}

     
        
        let Movie = txtMovies.options[txtMovies.selectedIndex].innerText;
        

txtOutput1.innerText = "Name: "+ txtName.value + "\nAddress: "+txtAddress.value+  " \nShow you want to watch: " + Movie   + "\n Number of seats " + txtSeats.value +
"\n Delivery Method: " + selectedContact.value;
if(selectedContact.value == "E-ticket: Free"){
    eticket = eticket + 0.00;
    txtOutput2.innerText ="Total cost:"+ "£"+parseFloat( movie1 + eticket)*parseFloat(txtSeats.value);
 }else if(selectedContact.value =="Collect From Box Office: £1.99"){
     eticket = eticket + 1.99;
     txtOutput2.innerText ="Total cost:"+ "£"+parseFloat( movie1 + eticket)*parseFloat(txtSeats.value);

 }else if(selectedContact.value == "Posted: £3.99"){
    eticket = eticket + 3.99;
    txtOutput2.innerText ="Total cost:"+ "£"+parseFloat( movie1 + eticket)*parseFloat(txtSeats.value);
 }
 



if(txtMovies.value == "phantomOfTheOpera" ){
    txtOutput2.innerText ="Total cost:"+ "£"+parseFloat( movie1 + eticket)*parseFloat(txtSeats.value);
}else if(txtMovies.value == "hamilton"){
    movie1 = 85.00;
    txtOutput2.innerText ="Total cost:"+ "£"+parseFloat( movie1 + eticket)*parseFloat(txtSeats.value);
}else if (txtMovies.value == "lionKing"){
    movie1 = 67.00;
    txtOutput2.innerText ="Total cost:"+ "£"+parseFloat( movie1 + eticket)*parseFloat(txtSeats.value);

}else if (txtMovies.value == "missSaigon"){
    movie1 = 83.00;
    txtOutput2.innerText ="Total cost:"+ "£"+parseFloat( movie1 + eticket)*parseFloat(txtSeats.value);
}


 if (parseFloat(txtSeats.value) >= 6){
     
     discount = parseFloat(txtSeats.value*movie1 + eticket)*0.90;
     txtOutput2.innerText ="Total cost:"+ "£"+parseFloat( movie1 + eticket)*parseFloat(txtSeats.value)+ "\n10% discount: £"+ discount;
 }else if(parseFloat(txtSeats.value) >= 10){
    
    discount = parseFloat(txtSeats.value*movie1 + eticket)*0.85;
    txtOutput2.innerText ="Total cost:"+ "£"+parseFloat( movie1 + eticket)*parseFloat(txtSeats.value)+ "\n15% discount: £"+ discount;
 }
       
}
function redirect(){
    location.href = "Programmingskills.html"
}

