const allTabBtn = document.getElementById("all-tab-btn");
const openTabBtn = document.getElementById("open-tab-btn");
const closedTabBtn = document.getElementById("closed-tab-btn");

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

// All Cards Fetching
async function loadAllCards() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    const allData = data.data;

    const cardsContainer = document.getElementById("cards-container");
    const totalCount = document.getElementById("total-count");
    let total = 0;

    allData.forEach(details => {
        total += 1;
        // console.log(details);

        const card = document.createElement("div");
        card.className = "card bg-white shadow-md p-5";

        // Labels to Badge
        let badges = "";
        for (const label of details.labels) {
            // badges = badges + `<h2>${label}</h2>`;
            badges += `<h2 class="badge bg-neutral text-white p-4 rounded-full text-[12px] font-medium">${label.toUpperCase()}</h2>`;
            console.log(badges)
        };

        card.innerHTML = `<div class="flex justify-between items-center">
                    <img class="w-8" src="./assets/Open-Status.png" alt="">
                    <h2 id="priority" class="badge badge-outline font-semibold">${details.priority}</h2>
                </div>
                <div class="mt-5 space-y-3 border-b-1 border-b-gray-300 pb-4">
                    <h2 class="text-xl font-semibold">${details.title}</h2>
                    <p class="text-[#64748B] text-[14px] line-clamp-2">${details.description}}</p>

                    <div class="badge-container flex gap-4">
                       ${badges}
                    </div>

                </div>
                <div class="mt-5 space-y-2"> 
                    <p class="text-[#64748B]">#${details.id} by ${details.author}</p>
                    <p class="text-[#64748B]">${new Date(details.createdAt).toLocaleDateString("en-US")}</p>
                </div>`;

        cardsContainer.appendChild(card);
        
    })
    // badgeUpdater()
    console.log(total)
    totalCount.innerText = total;

}

// async function badgeUpdater() {
//     const badgeContainer = document.getElementById("badge-container");
//     console.log(badgeContainer)

//     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
//     const data = await res.json();
//     const allData = data.data
//     // console.log(allData)

//     for (const label of allData) {
//         const labelData = label.labels;
//         console.log(labelData[])

//     }

// }

loadAllCards()