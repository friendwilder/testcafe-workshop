import { Selector } from testcafe;

class ThankyouPage {
    constructor() {
        this.title = Selector('.subheader')
        this.thankyouText = Selector('.complete-header')
        this.dispatchedText = Selector('.complete-text')
        this.ponyImage = Selector('.pony_express')
    }
}