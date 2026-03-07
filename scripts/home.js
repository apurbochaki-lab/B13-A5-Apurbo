const allTabBtn = document.getElementById("all-tab-btn");
const openTabBtn = document.getElementById("open-tab-btn");
const closedTabBtn = document.getElementById("closed-tab-btn");

let openList = [];
let closeList = [];

// Function for Tab Buttons Active Effect
function tabActiveEffect(id) {
    console.log("Clicked -->", id)
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
    const totalCount = document.getElementById("total-count");
    let total = 0;

    allData.forEach(details => {
        total += 1;
        // console.log(details.status);

        const card = document.createElement("div");
        card.className = "card bg-white shadow-md p-5";

        // Conditional Styling
        const status = details.status;
        let imgSrc = "./assets/Open-Status.png"

        if (status == 'open') {
            card.classList.add("border-t-4", "border-t-green-500")
            imgSrc = "./assets/Open-Status.png"

        }
        if (status == 'closed') {
            card.classList.add("border-t-4", "border-t-purple-500")
            imgSrc = "./assets/Closed-Status.png"
        }

        card.innerHTML = `<div class="flex justify-between items-center">
                    <img class="w-8" src="${imgSrc}" alt="">
                    <h2 id="priority" class="badge badge-outline font-semibold">${details.priority}</h2>
                </div>
                <div class="mt-5 space-y-3 border-b-1 border-b-gray-300 pb-4">
                    <h2 class="text-xl font-semibold">${details.title}</h2>
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

    })
    // console.log(total)
    totalCount.innerText = total;
}

loadAllCards()






