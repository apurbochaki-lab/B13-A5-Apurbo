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

}