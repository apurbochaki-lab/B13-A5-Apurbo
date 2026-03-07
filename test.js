// Expected formate : 1/15/2024

const date = '2024-01-15T10:30:00Z';
// const d = new Date(date);
// const format = d.toLocaleDateString("en-US")
// console.log(format)

// const d = new Date(date).toLocaleDateString("en-US")
// console.log(d)

// console.log(new Date(date).toLocaleDateString("en-US"));




const labels = ['bug', 'help wanted'];

const createHtmlElement = (arr) => {
    // const element = arr.map(ele => `<h2 class="badge">${ele}</h2>`)
    const htmlElement = arr.map(ele => `<h2 class="badge bg-neutral text-white p-4 rounded-full text-[12px] font-medium"><i class="fa-solid fa-bug"></i>${ele.toUpperCase()}</h2>`)
    // console.log(htmlElement.join(" "))
}

createHtmlElement(labels)








// All Cards Fetching
async function loadAllCards() {
    manageLoading(true)

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    const allData = data.data;

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

// loadAllCards()


// name convert
const name = "jhon_doe"
// Expected Jhon Doe

console.log(`${name
    .split("_")
    .map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}`)

// console.log(
//   `${name
//     .split("_")
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(" ")}`
// );




