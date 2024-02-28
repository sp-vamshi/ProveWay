const radioBtns = document.querySelectorAll(".radio-btn");

for (let btn of radioBtns) {
  btn.addEventListener("change", (e) => {
    e.target.labels[0].children[1].classList.add("selected-plan");
    // e.target.labels[0].children[1].classList.remove("un-selected-plan");

    e.target.labels[0].classList.add("selected-plan-card")

    const otherLabels = document.querySelectorAll(".plan-card");
    console.log(e);
    console.log(otherLabels);

    for(let plan of otherLabels){
      if(plan.id !== e.target.labels[0].id){
        plan.children[1].classList.add("un-selected-plan");
        plan.children[1].classList.remove("selected-plan");
        plan.classList.remove("selected-plan-card")
      }
    }

    const planPrice = document.getElementById("selected-plan-price");
    planPrice.textContent = `Total:$  ${e.target.value}.00 USD`;
  });
}
