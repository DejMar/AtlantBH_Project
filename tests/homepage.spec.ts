import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home/homePage';
import { atlantURLs } from '../data/atlantURL';
import { careerOptions, serviceOptions, blogOptions, givingBackOptions } from '../data/pageLabels';

test.describe('Homepage Navigation', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await page.goto('/');
    });

    test('should navigate to Home page', async ({ page }) => {
        await homePage.navigateToHome();
        await expect(page).toHaveURL(atlantURLs.home);
    });

    test('should navigate to Services page', async ({ page }) => {
        await homePage.navigateToServices();
        await expect(page).toHaveURL(atlantURLs.services);
    });

    test('should navigate to Blog page', async ({ page }) => {
        await homePage.navigateToBlog();
        await expect(page).toHaveURL(atlantURLs.blog);
    });

    test('should navigate to Contact page', async ({ page }) => {
        await homePage.navigateToContact();
        await expect(page).toHaveURL(atlantURLs.contact);
    });

    test('should open Facebook link', async ({ page }) => {
        await homePage.clickFacebookLink();
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            homePage.clickFacebookLink()
        ]);
        await newPage.waitForLoadState();
        await expect(newPage.url()).toBe(atlantURLs.facebook);
    });

    test('should open LinkedIn link', async ({ page }) => {
        await homePage.clickLinkedinLink();
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            homePage.clickLinkedinLink()
        ]);
        await expect(newPage).toHaveURL(atlantURLs.linkedin);
    });

    test('should open Instagram link', async ({ page }) => {
        await homePage.clickInstagramLink();
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            homePage.clickInstagramLink()
        ]);
        await expect(newPage).toHaveURL(atlantURLs.instagram);
    });
    

    test('should check services options', async ({ page }) => {
        const result = await homePage.checkOptions(homePage.servicesMenuSelector, Object.values(serviceOptions));
        expect(result).toBe(true);
    });

    test('should check career options', async ({ page }) => {
        const result = await homePage.checkOptions(homePage.careerMenuSelector, Object.values(careerOptions));
        expect(result).toBe(true);
    });

    test('should check blog options', async ({ page }) => {
        const result = await homePage.checkOptions(homePage.blogMenuSelector, Object.values(blogOptions));
        expect(result).toBe(true);
    });

    test('should check giving back options', async ({ page }) => {
        const result = await homePage.checkOptions(homePage.givingBackMenuSelector, Object.values(givingBackOptions));
        expect(result).toBe(true);
    });
});

