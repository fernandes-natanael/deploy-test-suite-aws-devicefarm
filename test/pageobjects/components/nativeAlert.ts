const SELECTORS = {
    ANDROID: {
        ALERT_TITLE: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]',
        ALERT_MESSAGE: '*//android.widget.TextView[@resource-id="android:id/message"]',
        ALERT_BUTTON: '*//android.widget.Button[@text="{BUTTON_TEXT}"]',
    },
    IOS: {
        ALERT: '-ios predicate string:type == \'XCUIElementTypeAlert\'',
    },
};

class NativeAlert {
    static async waitForIsShown (isShown = true) {
        const selector =  SELECTORS.ANDROID.ALERT_TITLE;
        return $(selector).waitForExist({
            timeout: 11000,
            reverse: !isShown,
        });
    }


    static async topOnButtonWithText (selector: string) {
        const buttonSelector = SELECTORS.ANDROID.ALERT_BUTTON.replace(/{BUTTON_TEXT}/, selector.toUpperCase())
        await $(buttonSelector).click();
    }

    static async text ():Promise<string> {
        return `${await $(SELECTORS.ANDROID.ALERT_TITLE).getText()}\n${await $(SELECTORS.ANDROID.ALERT_MESSAGE).getText()}`;
    }
}

export default NativeAlert;