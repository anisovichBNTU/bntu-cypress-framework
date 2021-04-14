import { Label } from '../elements';
import headerForm from '../forms/headerForm';
import BasePage from './basePage';

class MainSchedulePage extends BasePage {
    headerForm: typeof headerForm;
    
    scheduleLabel: Label;

    constructor() {
        super(/login/);
        this.headerForm = headerForm;

        this.scheduleLabel = new Label('.schedule', 'Main page: Schedule label', { intoIFrame: true });
    }

    waitUntilScheduleIsDisplayed() {
        this.scheduleLabel.waitForDisplayed();
    }
}

export default new MainSchedulePage();