const buttons = Array.from(document.querySelectorAll(".button_modal"));
const modal = document.querySelector("#modal");

const drawModal = () => {
    const clone = modal.content.cloneNode(true);
    const closeButton = clone.querySelector(".button-close");
    
    document.body.prepend(clone);
    
    closeButton.addEventListener("click", () => document.body.querySelector(".popup-form-wrapper").remove());

    const form = document.querySelector(".form3");

    const getFormData = (e) => {
        e.preventDefault();

        const name = form.querySelector('[name="name"]').value;
        const number = form.querySelector('[name="number"]').value;
        const mail = form.querySelector('[name="mail"]').value;

        const data = {
            name: name,
            number: number,
            mail: mail,
        };

        console.log(data);
    }

    form.addEventListener('submit', getFormData);
};

buttons.forEach(button => button.addEventListener("click", drawModal));

