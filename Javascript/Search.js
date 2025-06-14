const SearchMembers = JSON.parse(localStorage.getItem("users"))

function searchItems(SearchTerms) {
    console.log(SearchMembers)
    if (!SearchMembers) {
        console.log("no users found");
        return;
    }
    const SearchResults = SearchMembers.filter(item => item.firstName.toLowerCase().includes(SearchTerms.toLowerCase()))
    console.log(SearchResults)
    DisplaySearch(SearchResults)
}
// searchItems("Onyedikachim")
// console.log(searchItems("Onyedikachim"))
const ResultsContainer = document.getElementById("SearchResults")

function DisplaySearch(Result) {
    ResultsContainer.classList.add("grid-container")
    ResultsContainer.innerHTML = ""
    if (Result.length === 0) {
        ResultsContainer.innerHTML = "<p>no results found</p>"
    } else {
        Result.forEach(item => {
            const ResultElement = document.createElement("div")
            // ResultElement.textContent = item.firstName
            ResultElement.innerHTML = `
            <div class="MemberDiv">
            <img class="Member-Img" src="${item.fileUpload}" alt="Member Image" />
            <p><strong>First Name:</strong> ${item.firstName}</p>
            <p><strong>Last Name:</strong> ${item.lastName}</p>
            <p><strong>Side of Family:</strong> ${item.sideOfFamily}</p>
            
            </div>
            `

            console.log(ResultElement)
            ResultsContainer.appendChild(ResultElement)
        })
    }
    console.log(ResultsContainer)
    console.log(Result)
}
const CustomSearchDiv = document.getElementById('CustomDiv')

document.getElementById("Search").addEventListener("keydown", (e) => {
    // const SearchTerms = e.target.value
    // if (SearchTerms !== '') {
    //     searchItems(SearchTerms)
    //     e.target.value = ''
    //     CustomSearchDiv.style.display = 'none'
    // } 
    // else {
    //     CustomSearchDiv.style.display = 'flex'
    // }
    if (e.key === "Enter"){
         e.preventDefault()
         const SearchTerms = e.target.value
              searchItems(SearchTerms)
        e.target.value = ''
        CustomSearchDiv.style.display = 'none'
    } 
    else {
        CustomSearchDiv.style.display = 'flex'
    }
    })

const ResetBtn = document.querySelector("reset-btn")
ResetBtn.addEventListener("click", () => {
    DisplaySearch(SearchMembers)
    const GridContainer = document.getElementById("grid-container")
    GridContainer.style.display = 'none'
})

function refreshPage() {
    location.reload();
}


