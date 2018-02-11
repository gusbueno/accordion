import AccordionManager from '../src/js/AccordionManager';

describe('AccordionManager class', () => {
    beforeAll(() => {
        document.body.innerHTML = `<dl id="accordion">
            <dt class="accordion-header">Section 1</dt>
            <dd class="accordion-content">
                <p class="accordion-content-text">Section 1 Content...</p>
            </dd>
            <dt class="accordion-header">Section 2</dt>
            <dd class="accordion-content">
                <p class="accordion-content-text">Section 2 Content...</p>
            </dd>
            <dt class="accordion-header">Section 3</dt>
            <dd class="accordion-content">
                <p class="accordion-content-text">Section 3 Content...</p>
            </dd>
            <dt class="accordion-header">Bonus section</dt>
            <dd class="accordion-content">
                <p class="accordion-content-text"></p>
            </dd>
        </dl>`;
    });

    it('should open the first element', () => {
        const accordionManager = new AccordionManager('accordion');
        accordionManager.accordionHeaders[0].click();

        expect(accordionManager.accordionHeaders[0].classList.contains('is-open')).toEqual(true);
        expect(document.getElementsByClassName('accordion-content')[0].classList.contains('is-open')).toEqual(true);
        expect(accordionManager.accordionHeaders[1].classList.contains('is-open')).toEqual(false);
        expect(document.getElementsByClassName('accordion-content')[1].classList.contains('is-open')).toEqual(false);
        expect(accordionManager.accordionHeaders[2].classList.contains('is-open')).toEqual(false);
        expect(document.getElementsByClassName('accordion-content')[2].classList.contains('is-open')).toEqual(false);
        expect(accordionManager.accordionHeaders[3].classList.contains('is-open')).toEqual(false);
        expect(document.getElementsByClassName('accordion-content')[3].classList.contains('is-open')).toEqual(false);
    });

    it('should open only the second element after open the first', () => {
        const accordionManager = new AccordionManager('accordion');
        accordionManager.accordionHeaders[0].click();

        expect(accordionManager.accordionHeaders[0].classList.contains('is-open')).toEqual(true);
        expect(document.getElementsByClassName('accordion-content')[0].classList.contains('is-open')).toEqual(true);
        expect(accordionManager.accordionHeaders[1].classList.contains('is-open')).toEqual(false);
        expect(document.getElementsByClassName('accordion-content')[1].classList.contains('is-open')).toEqual(false);
        expect(accordionManager.accordionHeaders[2].classList.contains('is-open')).toEqual(false);
        expect(document.getElementsByClassName('accordion-content')[2].classList.contains('is-open')).toEqual(false);
        expect(accordionManager.accordionHeaders[3].classList.contains('is-open')).toEqual(false);
        expect(document.getElementsByClassName('accordion-content')[3].classList.contains('is-open')).toEqual(false);

        accordionManager.accordionHeaders[1].click();

        expect(accordionManager.accordionHeaders[0].classList.contains('is-open')).toEqual(false);
        expect(document.getElementsByClassName('accordion-content')[0].classList.contains('is-open')).toEqual(false);
        expect(accordionManager.accordionHeaders[1].classList.contains('is-open')).toEqual(true);
        expect(document.getElementsByClassName('accordion-content')[1].classList.contains('is-open')).toEqual(true);
        expect(accordionManager.accordionHeaders[2].classList.contains('is-open')).toEqual(false);
        expect(document.getElementsByClassName('accordion-content')[2].classList.contains('is-open')).toEqual(false);
        expect(accordionManager.accordionHeaders[3].classList.contains('is-open')).toEqual(false);
        expect(document.getElementsByClassName('accordion-content')[3].classList.contains('is-open')).toEqual(false);
    })
});