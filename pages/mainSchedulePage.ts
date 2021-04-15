import { Label } from '../elements';
import headerForm from '../forms/headerForm';
import BasePage from './basePage';

class MainSchedulePage extends BasePage {

    scheduleLabel: Label;

    constructor() {
        super(/web\/dashboard/);

        this.scheduleLabel = new Label('.schedule', 'Main page: Schedule label', { intoIFrame: true });
    }

    waitUntilScheduleIsDisplayed() {
        this.scheduleLabel.waitForDisplayed();
    }
}

export default new MainSchedulePage();