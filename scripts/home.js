const allTabBtn = document.getElementById("all-tab-btn");
const openTabBtn = document.getElementById("open-tab-btn");
const closedTabBtn = document.getElementById("closed-tab-btn");

let openList = [];
let closeList = [];

// Function for Tab Buttons Active Effect
function tabActiveEffect(id) {
    // console.log("Clicked -->", id)
    // Remove first
    allTabBtn.classList.remove("bg-primary", "text-white");
    openTabBtn.classList.remove("bg-primary", "text-white");
    closedTabBtn.classList.remove("bg-primary", "text-white");
    // Now add
    const clickedBtn = document.getElementById(id);
    clickedBtn.classList.add("bg-primary", "text-white");

};

// Mange Loading Spinner
function manageLoading(status) {
    const loadingSpinner = document.getElementById("loading-spinner");
    const cardsContainer = document.getElementById("cards-container");

    if (status == true) {
        loadingSpinner.classList.remove("hidden");
        cardsContainer.classList.add("hidden");
    }
    if (status == false) {
        loadingSpinner.classList.add("hidden");
        cardsContainer.classList.remove("hidden");
    }
}

// Function for innerHTML badge part
const createHtmlElement = (arr) => {
    const htmlElement = arr.map(ele => `<h2 class="badge bg-neutral text-white p-4 rounded-full text-[12px] font-medium"><i class="fa-solid fa-bug"></i>${ele.toUpperCase()}</h2>`)
    return (htmlElement.join(" "));
}



// All Cards Fetching
async function loadAllCards() {
    manageLoading(true)
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    // const allData = data.data;
    displayAllData(data.data);
}

function displayAllData(allData) {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";

    const totalCount = document.getElementById("total-count");
    let total = 0;

    allData.forEach(details => {
        total += 1;
        // console.log(details.status);

        const card = document.createElement("div");
        card.className = "card bg-white shadow-md p-5";

        // Conditional Styling
        const status = details.status;
        let imgSrc = ""

        if (status == 'open') {
            card.classList.add("border-t-4", "border-t-green-500")
            imgSrc = "./assets/Open-Status.png"

            // No duplicate data 
            const dataExist = openList.find(item => item.id == details.id)
            if (!dataExist) {
                openList.push(details)
            }

        }
        if (status == 'closed') {
            card.classList.add("border-t-4", "border-t-purple-500")
            imgSrc = "./assets/Closed-Status.png"

            // No duplicate data 
            const dataExist = closeList.find(item => item.id == details.id)
            if (!dataExist) {
                closeList.push(details)
            }
          
        }

        card.innerHTML = `<div class="flex justify-between items-center">
                    <img class="w-8" src="${imgSrc}" alt="">
                    <h2 id="priority" class="badge badge-outline font-semibold">${details.priority}</h2>
                </div>
                <div class="mt-5 space-y-3 border-b-1 border-b-gray-300 pb-4">
                    <h2 onclick="openModal(${details.id})" class="text-xl font-semibold cursor-pointer">${details.title}</h2>
                    <p class="text-[#64748B] text-[14px] line-clamp-2">${details.description}}</p>

                    <div class="badge-container flex gap-4">
                       ${createHtmlElement(details.labels)}
                    </div>

                </div>
                <div class="mt-5 space-y-2"> 
                    <p class="text-[#64748B]">#${details.id} by ${details.author}</p>
                    <p class="text-[#64748B]">${new Date(details.createdAt).toLocaleDateString("en-US")}</p>
                </div>`;

        cardsContainer.appendChild(card);     
        manageLoading(false)
    });

    // console.log(openList)
    // console.log(closeList)

    // console.log(total)
    totalCount.innerText = total;
};

loadAllCards()


// Open Modal Function
const mainModal = document.getElementById("main-modal");

const openModal = (id) => {
    console.log(id)

   const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
   fetch(url)
   .then(res => res.json())
   .then(data => setModal(data.data))

}

const setModal = (apiData) => {

    // Conditional Card Styling
    const status = apiData.status;
    let bgColor = "bg-green-600";

    if(status == 'open') {
        bgColor = "bg-green-600"
    }
    if (status == 'closed') {
        bgColor = "bg-red-600"
    }

    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = "";
    modalContainer.innerHTML = ` <div class="space-y-4 p-5">
                        <h2 class="text-2xl font-bold">${apiData.title}</h2>
                        <div class="flex items-center gap-5">

                            <span class="badge ${bgColor} text-white font-semibold p-4 rounded-full">${apiData.status}</span>

                            <span class="text-[#64748B]">Opened By ${apiData.author}</span>
                            <span class="text-[#64748B]">${new Date(apiData.updatedAt).toLocaleDateString("en-US")}</span>
                        </div>
                        <div class="badge-container flex gap-4">                           
                             ${createHtmlElement(apiData.labels)}
                        </div>
                        <p class="text-[#64748B]">${apiData.description}</p>
                        <div class="bg-slate-50 rounded-md p-5 flex justify-between">
                            <div class="left-content">
                                <h2 class="text-[#64748B]">Assignee:</h2>
                                <h2 class="text-md font-semibold">${apiData.assignee? apiData.assignee : "No Assignee Found!"}</h2>
                            </div>

                            <div class="right-content">
                                <h2 class="text-[#64748B]">Priority:</h2>
                                <span class="badge bg-neutral text-white p-4 rounded-full font-semibold">${apiData.priority.toUpperCase()}</span>
                            </div>
                        </div>
                    </div>`
    


    mainModal.showModal()
}


// Tab Button Switch function
allTabBtn.addEventListener("click", function() {
    loadAllCards()
})
openTabBtn.addEventListener("click", function(){
    // console.log("Clicked")
    displayAllData(openList)
})
closedTabBtn.addEventListener("click", function() {
    displayAllData(closeList)
})


// Search feature
async function searchMe() {
    const searchInput = document.getElementById("search-input");
    let searchValue = searchInput.value.trim().toLowerCase();
    console.log(searchValue)

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`)
    const data = await res.json();
    const apiData = data.data;
    // console.log(apiData)
    displayAllData(apiData)
    searchInput.value = ""    
}


