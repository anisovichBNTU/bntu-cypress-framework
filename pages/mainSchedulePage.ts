import { Label } from '../elements';
import BasePage from './basePage';

class MainSchedulePage extends BasePage {
    scheduleLabel: Label;

    constructor() {
        super(/login/);

        this.scheduleLabel = new Label('.schedule', 'Main page: Schedule label', { intoIFrame: true, frameSelector: 'iframe' });
    }

    waitUntilScheduleIsDisplayed() {
        this.scheduleLabel.waitForDisplayed();
    }
}

export default new MainSchedulePage();