function main() {
    const editForms = document.querySelectorAll(".edit-form");
    
    editForms.forEach((item) => {
        const toggler = item.querySelector(".edit-form__toggler");
        const target = item.querySelector(".edit-form__form");

        toggler.addEventListener("click", () => {
            target.classList.toggle("hidden");
        })
    })
}

main();