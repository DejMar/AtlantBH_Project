import { Page, test } from '@playwright/test';
import fs from 'fs/promises';
import path from 'path';

export class SharedSteps {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  private acceptCookiesButton = 'button.careersite-button[data-action="click->common--cookies--alert#acceptAll"]';

  // Methodss
  
  async takeScreenshotOnFailure(page: Page, testInfo: { status: string; title: string }) {
    if (testInfo.status !== 'passed') {
      const screenshotPath = `screenshots/${testInfo.title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Screenshot saved: ${screenshotPath}`);
    }
  }
  async acceptCookiesIfPresent() {
    try {
      const cookieButton = this.page.locator(this.acceptCookiesButton);
      if (await cookieButton.isVisible({ timeout: 5000 })) {
        await cookieButton.click();
        console.log('Cookies accepted');
      }
    } catch (error) {
      console.log('Cookie banner not found or already accepted');
    }
  }


  
  async saveTestSteps(testTitle: string, steps: string[]) {
      const testName = testTitle.replace(/\s+/g, '_');
      const testResultsDir = 'test-results';
      await fs.mkdir(testResultsDir, { recursive: true });
      const status = test.info().status === 'passed' ? 'PASSED' : 'FAILED';
      await fs.writeFile(`${testResultsDir}/${status}_${testName}_steps_${new Date().toISOString().split('T')[0]}.txt`, steps.join('\n'));
  }
}