
let users = JSON.parse(localStorage.getItem("users")) || [];

function submitForm() {
    const form = document.getElementById("myForm");
    

    const firstName = form.elements["firstname"].value;
    const lastName = form.elements["lastname"].value;
    const sideOfFamily = form.elements["country"].value;
    const fileUpload = form.elements["fileUpload"].files[0]; 

    if (fileUpload) {
        
        const reader = new FileReader();
        reader.onload = function(event) {
            const base64Image = event.target.result;

            
            const userData = {
                firstName,
                lastName,
                sideOfFamily,
                fileUpload: base64Image, 
            };

            
           // users.push(...users,userData);
           users = [...users,userData];

           
            form.reset();

            localStorage.setItem ("users", JSON.stringify(users));

            renderUsers();
        };
        reader.readAsDataURL(fileUpload); 
    } else {
        
        const userData = {
            firstName,
            lastName,
            sideOfFamily,
            fileUpload: null,
        };

        users.push(userData);
        form.reset();
        renderUsers();
    }
}






const CustomMembersDiv = document.getElementById("CustomDiv");
console.log(CustomMembersDiv);

const CustomMembers = localStorage.getItem("users");
const CustomUsers = JSON.parse(CustomMembers);
console.log(CustomUsers);

if (!CustomUsers || CustomUsers.length === 0) {
  console.log("Response: No users found. Try adding a user."); 
} else {
  console.log(`Response: Found ${CustomUsers.length} user(s)!`); 
}



const CustomUsersFiltered = CustomUsers.filter(user => user.sideOfFamily === "Custom");
console.log(CustomUsersFiltered);

let htmlCustom = '';
CustomUsersFiltered.forEach((Member, index) => {
    htmlCustom += `
    <div class="MemberDiv" id="CustomMember-${index}">
        <div class="Member-container">
            <img class="Member-Img" src="${Member.fileUpload}" alt="Member Image" />
            <p><strong>First Name:</strong> ${Member.firstName}</p>
            <p><strong>Last Name:</strong> ${Member.lastName}</p>
            <p><strong>Side of Family:</strong> ${Member.sideOfFamily}</p>
            <button 
                style="background-color:#333; color:#fff; border-radius:20px;" 
                onclick="deleteCustomMember(${index})"
            >
                Delete
            </button>
        </div>
    </div>
    `;
});


CustomMembersDiv.innerHTML = htmlCustom;


function deleteCustomMember(index) {

    CustomUsersFiltered.splice(index, 1);


    const updatedUsers = CustomUsers.filter(user => user.sideOfFamily !== "Custom" || CustomUsersFiltered.includes(user));
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    const memberDiv = document.getElementById(`CustomMember-${index}`);
    if (memberDiv) {
        memberDiv.remove();
    }
    Toastify({
        text: "Member deleted!!!",
        duration: 3000,
        backgroundColor: "green",
        }).showToast();

}
console.log(htmlCustom)
CustomMembersDiv.innerHTML = htmlCustom;







