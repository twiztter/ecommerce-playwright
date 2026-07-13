import { Locator, Page } from "@playwright/test";

export class BlogPage {
    readonly page: Page;
    readonly rightArrow: Locator;
    readonly leftArrow: Locator;
    readonly latestArticles: Locator;
    readonly articles: Locator;
    readonly mostViewed: Locator;
    readonly mostViewedArticles: Locator;

    constructor(page: Page) {
        this.page = page;
        this.rightArrow = page.locator('.mz-swiper-nav-next').first();
        this.leftArrow = page.locator('.mz-swiper-nav-prev').first();
        this.latestArticles = page.locator('.mz-tab-listing', { hasText: 'Latest Articles' }).locator('.swiper-wrapper');
        this.articles = this.latestArticles.locator('.swiper-slide');
        this.mostViewed = page.locator('.mz-tab-listing', { hasText: 'Most viewed' }).locator('.swiper-wrapper');
        this.mostViewedArticles = this.mostViewed.locator('.swiper-slide');
    }


    async clickRightArrow() {
        await this.rightArrow.click();
    }

    async clickLeftArrow() {
        await this.leftArrow.click();
    }
}



