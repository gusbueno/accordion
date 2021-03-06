class AccordionManager {
    constructor(containerName) {
        this.accordionHeaders = [];
        this.accordionHeaders.push.apply(this.accordionHeaders, document.getElementById(containerName).getElementsByClassName(`${containerName}-header`));
        this.addOnclickEventToHeaders();
    }

    closeAllElements() {
        this.accordionHeaders.forEach((accordionHeader, index) => {
            const accordionContent = document.getElementsByClassName('accordion-content')[index];
            accordionHeader.classList.remove('is-open');
            accordionContent.classList.remove('is-open')
        });
    }


    toggleAccordion(accordionHeader, accordionContent) {
        this.closeAllElements();
        accordionHeader.classList.contains('is-open') ? accordionHeader.classList.remove('is-open') : accordionHeader.classList.add('is-open');
        accordionContent.classList.contains('is-open') ? accordionContent.classList.remove('is-open') : accordionContent.classList.add('is-open');
    }

    addOnclickEventToHeaders() {
        this.accordionHeaders.forEach((accordionHeader, index) => {
            accordionHeader.onclick = () => {
                const accordionContent = document.getElementsByClassName('accordion-content')[index];
                // bonus section
                if(this.accordionHeaders.length === index +1 && !accordionHeader.classList.contains('is-open')) {
                    const textElement = accordionContent.getElementsByClassName('accordion-content-text')[0];
                    textElement.innerHTML = 'Getting data, please wait...';
                    const xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) { // readyState 4 means the request is done.
                            if (xhr.status === 200) { // status 200 is a successful return.
                                const jsonData = JSON.parse(xhr.responseText);
                                textElement.innerHTML = `The temperature on ${jsonData.title} is ${jsonData.temp}º`;
                            }
                        } else {
                            console.log('Error: ' + xhr.status); // An error occurred during the request.
                            textElement.innerHTML = 'Error on getting data...';
                        }
                    };

                    xhr.open('GET', 'data.json'); // weather in Barcelona
                    xhr.send();
                }

                this.toggleAccordion(accordionHeader, accordionContent);
            }
        })
    }
}

export default AccordionManager;