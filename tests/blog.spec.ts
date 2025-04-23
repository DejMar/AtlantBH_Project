import { test, expect } from '@playwright/test';
import { BlogPage } from '../pages/blog/blogPage';
import { atlantURLs } from '../data/atlantURL';
import { blogPageLabels } from '../data/pageLabels';
import { SharedSteps } from '../shared/sharedSteps';

test.describe('Blog Page Tests', () => {
    let blogPage: BlogPage;

    test.beforeEach(async ({ page }) => {
        blogPage = new BlogPage(page);
        await page.goto(atlantURLs.blog);
    });
    test.afterEach(async ({ page }, testInfo) => {
        const sharedSteps = new SharedSteps(page);
        await sharedSteps.takeScreenshotOnFailure(page, { status: test.info().status ?? '', title: test.info().title });
    });

    test('should display correct header for All Blogs', async ({ page }) => {
        const title = await blogPage.checkBlogHeaderText(blogPageLabels.blog);
        const subheader = await blogPage.checkBlogSubheaderText(blogPageLabels.blogDescription);
        expect(title).toBe(true);
        expect(subheader).toBe(true);
    });
});
