function contacts(inputSelector, counterSelector, maxLength) {
    const input = document.querySelector(`.${inputSelector}`),
          counter = document.querySelector(`.${counterSelector}`);

    input.addEventListener('input', function () {
        let length = input.value.length;

        if (length >= maxLength) {
            input.value = input.value.slice(0, 600);
        } else {
            counter.textContent = `
                ${length}/${maxLength}
            `;
        }
    });
}

export default contacts;