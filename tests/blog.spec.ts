import { test, expect } from '@playwright/test';
import { BlogPage } from '../pages/blog/blogPage';
import { atlantURLs } from '../data/atlantURL';
import { blogPageLabels } from '../data/pageLabels';
import { SharedSteps } from '../shared/sharedSteps';
import { TestStep } from '../shared/testStep';
test.describe('Blog Page Tests', () => {
    let blogPage: BlogPage;
    let testStep: TestStep;
    test.beforeEach(async ({ page }) => {
        blogPage = new BlogPage(page);
        testStep = new TestStep();

        await page.goto(atlantURLs.blog);
    });
    test.afterEach(async ({ page }) => {
        const sharedSteps = new SharedSteps(page);
        await sharedSteps.takeScreenshotOnFailure(page, { status: test.info().status ?? '', title: test.info().title });
        await sharedSteps.saveTestSteps(test.info().title, testStep.getSteps());    

    });

    test('should display correct header for All Blogs', async ({ page }) => {
        const title = await testStep.log(blogPage.checkBlogHeaderText(blogPageLabels.blog), 'Checking blog header');
        const subheader = await testStep.log(blogPage.checkBlogSubheaderText(blogPageLabels.blogDescription), 'Checking blog subheader');
        expect(title).toBe(true);
        expect(subheader).toBe(true);
    });
});
