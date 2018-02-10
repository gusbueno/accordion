class AccordionManager {
    constructor(containerName) {
        this.accordionHeaders = [];
        this.accordionHeaders.push.apply(this.accordionHeaders, document.getElementById(containerName).getElementsByClassName(`${containerName}-header`));
        console.log(this.accordionHeaders);
        this.addOnclickEventToHeaders();
    }

    addOnclickEventToHeaders() {
        this.accordionHeaders.forEach((accordionHeader, index) => {
            accordionHeader.onclick = () => {
                console.log("click!");
                accordionHeader.classList.contains('is-open') ? accordionHeader.classList.remove('is-open') : accordionHeader.classList.add('is-open');
                const accordionContent = document.getElementsByClassName('accordion-content')[index];
                accordionContent.classList.contains('is-open') ? accordionContent.classList.remove('is-open') : accordionContent.classList.add('is-open');
            }
        })
    }
}

export default AccordionManager;