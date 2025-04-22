import { blogOptions, careerOptions, serviceOptions } from "../../data/pageLabels";

export class HomePage {
    page: any;
    logo: any;
    navigationMenu: any;
    homeLink: any;
    servicesLink: any;
    careersLink: any;
    givingBackLink: any;
    blogLink: any;
    contactLink: any;
    searchIcon: any;
    facebookLink: any;
    linkedinLink: any;
    instagramLink: any;
    careerMenu: any;
    servicesMenu: any;
    careerMenuSelector = 'li#menu-item-17838 > ul.sub-menu > li > a';
    servicesMenuSelector = 'li#menu-item-1451 > ul.sub-menu > li > a';
    blogMenuSelector = 'li#menu-item-13931 > ul.sub-menu > li > a';
    givingBackMenuSelector = 'li#menu-item-18684 > ul.sub-menu > li > a';
    constructor(page: any) {
        this.page = page;
        this.logo = page.locator('#logo');
        this.navigationMenu = page.locator('nav ul.sf-menu');
        this.homeLink = page.locator('li#menu-item-1081 > a');
        this.servicesLink = page.locator('li#menu-item-1451 > a');
        this.careersLink = page.locator('li#menu-item-17838 > a');
        this.givingBackLink = page.locator('li#menu-item-18684 > a');
        this.blogLink = page.locator('li#menu-item-13931 > a');
        this.contactLink = page.locator('li#menu-item-14574 > a');
        this.searchIcon = page.locator('.astm-search-menu a');
        this.facebookLink = page.locator('li#social-in-menu a[href="https://www.facebook.com/atlantbh"]');
        this.linkedinLink = page.locator('li#social-in-menu a[href="https://www.linkedin.com/company/1485526"]');
        this.instagramLink = page.locator('li#social-in-menu a[href="https://www.instagram.com/atlantbh/"]');

        this.careerMenu = this.page.locator('li#menu-item-17838 > ul.sub-menu > li > a');
        this.servicesMenu = this.page.locator('li#menu-item-1451 > ul.sub-menu > li > a');
    }

    async navigateToHome() {
        await this.homeLink.click();
    }

    async navigateToServices() {
        await this.servicesLink.click();
    }

    async navigateToCareers() {
        await this.careersLink.click();
    }

    async navigateToGivingBack() {
        await this.givingBackLink.click();
    }

    async navigateToBlog() {
        await this.blogLink.click();
    }

    async navigateToContact() {
        await this.contactLink.click();
    }

    async clickSearchIcon() {
        await this.searchIcon.click();
    }

    async clickFacebookLink() {
        await this.facebookLink.click();
    }

    async clickLinkedinLink() {
        await this.linkedinLink.click();
    }

    async clickInstagramLink() {
        await this.instagramLink.click();
    }
    
    async checkOptions(menuLocator: string, serviceOptions: string[]) {
        const expectedOptions = Object.values(serviceOptions);

        const servicesMenu = this.page.locator(menuLocator);
        const optionsCount = await servicesMenu.count();

        if (optionsCount !== expectedOptions.length) {
            return false;
        }

        for (let i = 0; i < optionsCount; i++) {
            const optionText = await servicesMenu.nth(i).innerText();
            if (!expectedOptions.includes(optionText)) {
                return false;
            }
        }

        return true;
    }
}
