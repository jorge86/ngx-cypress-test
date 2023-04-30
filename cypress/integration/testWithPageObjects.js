const { onDatePickerPage } = require("../support/page_objects/datePickerPage")
const { onFormLayoutsPage } = require("../support/page_objects/formLayoutsPage")
const { navigateTo } = require("../support/page_objects/navigationPage")
const { onSmartTablePage} = require("../support/page_objects/smartTablePage")


describe ('Test wtih Page Objects', () =>{
    beforeEach('open application', ()=>{
        cy.openHomePage()
    })

    it('verify navigation across the pages', () =>{
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.tooltipPage()
    })

    it.only('should submit inline and basic form and select tomorrow date in the calendar', ()=>{
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Tsiribim','linos@kokotos.com')
        onFormLayoutsPage.submitBasicFormWithNameAndEmail('trel@lela.com','123')
        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7,14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordByFirstAndLastName('tryfon','platanias')
        onSmartTablePage.updateAgeByFirstName('tryfon','35')
        onSmartTablePage.deleteRowByIndex(1)
    
    })

})