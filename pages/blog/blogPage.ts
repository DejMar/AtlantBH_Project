import { Page } from 'playwright';

export class BlogPage {
    page: Page;
    blogHeader: any;
    blogSubheader: any;

    constructor(page: Page) {
        this.page = page;
        this.blogHeader = page.locator('div.inner-wrap > h1');
        this.blogSubheader = page.locator('div.inner-wrap > span.subheader');
    }

    async checkBlogHeaderText(expectedText: string): Promise<boolean> {
        const headerText = await this.blogHeader.innerText();
        return headerText.trim() === expectedText.trim();
    }

    async checkBlogSubheaderText(expectedText: string): Promise<boolean> {
        const subheaderText = await this.blogSubheader.innerText();
        return subheaderText.trim() === expectedText.trim();
    }
}
