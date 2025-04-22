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
});

test.describe('Checking dropdown menu on Homepage', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('/');
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

test.describe('Navigating to Blog page', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('/');
  });

  test('should navigate to All Blogs page', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.blogMenuLocator, blogOptions.allBlogs);
    await expect(page).toHaveURL(atlantURLs.allBlogs);
  });

  test('should navigate to Software Development Blog page', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.blogMenuLocator, blogOptions.softwareDevelopment);
    await expect(page).toHaveURL(atlantURLs.softwareDevelopmentBlog);
  });

  test('should navigate to QA / Test Automation Blog page', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.blogMenuLocator, blogOptions.qaTestAutomation);
    await expect(page).toHaveURL(atlantURLs.qaTestAutomationBlog);
  });

  test('should navigate to Big Data Blog page', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.blogMenuLocator, blogOptions.bigData);
    await expect(page).toHaveURL(atlantURLs.bigDataBlog);
  });

  test('should navigate to Data Engineering Blog page', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.blogMenuLocator, blogOptions.dataEngineering);
    await expect(page).toHaveURL(atlantURLs.dataEngineeringBlog);
  });

  test('should navigate to Data Science & Analytics Blog page', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.blogMenuLocator, blogOptions.dataScienceAnalytics);
    await expect(page).toHaveURL(atlantURLs.dataScienceAnalyticsBlog);
  });

  test('should navigate to Product Management Blog page', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.blogMenuLocator, blogOptions.productManagement);
    await expect(page).toHaveURL(atlantURLs.productManagementBlog);
  });

  test('should navigate to UX/UI Design Blog page', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.blogMenuLocator, blogOptions.uxUi);
    await expect(page).toHaveURL(atlantURLs.uxUiDesignBlog);
  });

  test('should navigate to Tech Bites Blog page', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.blogMenuLocator, blogOptions.techBites);
    await expect(page).toHaveURL(atlantURLs.techBitesBlog);
  });

  test('should navigate to News Blog page', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.blogMenuLocator, blogOptions.news);
    await expect(page).toHaveURL(atlantURLs.newsBlog);
  });
});

test.describe('Navigating to Giving Back page', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('/');
  });

  test('should navigate to Community page', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.givingBackMenuLocator, givingBackOptions.community);
    await expect(page).toHaveURL(atlantURLs.community);
  });

  test('should navigate to Scholarships page', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.givingBackMenuLocator, givingBackOptions.scholarships);
    await expect(page).toHaveURL(atlantURLs.scholarships);
  });
});

test.describe('Navigating to Services page', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('/');
  });

  test('should navigate to Software Development service', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.servicesMenuLocator, serviceOptions.softwareDevelopment);
    await expect(page).toHaveURL(atlantURLs.softwareDevelopment);
  });

  test('should navigate to QA service', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.servicesMenuLocator, serviceOptions.qualityAssurance);
    await expect(page).toHaveURL(atlantURLs.qa);
  });

  test('should navigate to Big Data service', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.servicesMenuLocator, serviceOptions.bigData);
    await expect(page).toHaveURL(atlantURLs.bigData);
  });

  test('should navigate to Data Engineering service', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.servicesMenuLocator, serviceOptions.dataEngineering);
    await expect(page).toHaveURL(atlantURLs.dataEngineering);
  });

  test('should navigate to Data Science Analytics service', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.servicesMenuLocator, serviceOptions.dataScienceAnalytics);
    await expect(page).toHaveURL(atlantURLs.dataScienceAnalytics);
  });

  test('should navigate to UX/UI Design service', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.servicesMenuLocator, serviceOptions.uxUiDesign);
    await expect(page).toHaveURL(atlantURLs.uxUiDesign);
  });

  test('should navigate to Agile Product Management service', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.servicesMenuLocator, serviceOptions.agileProductManagement);
    await expect(page).toHaveURL(atlantURLs.agileProductManagement);
  });

  test('should navigate to Product Design service', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.servicesMenuLocator, serviceOptions.productDesign);
    await expect(page).toHaveURL(atlantURLs.productDesign);
  });

  test('should navigate to Cloud and On-Premises DevOps service', async ({ page }) => {
    await homePage.clickSubmenuItem(homePage.servicesMenuLocator, serviceOptions.cloudDevOps);
    await expect(page).toHaveURL(atlantURLs.cloudAndOnPremisesDevops);
  });
});