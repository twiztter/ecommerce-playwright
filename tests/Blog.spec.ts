import { expect, test } from "@playwright/test";
import { BlogPage } from "./Pages/Blog";

test('Blog tests', async ({ page }) => {
    await test.step('Goto the blog', async () => {
        await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home');
    });

    await test.step('Verify nav arrows', async () => {
        const blogPage = new BlogPage(page);
        await expect(blogPage.leftArrow).toBeVisible();
        await expect(blogPage.rightArrow).toBeVisible();
    });

    await test.step('Navigate using the arrows', async () => {
        const blogPage = new BlogPage(page);
        await blogPage.clickRightArrow();
        await blogPage.clickLeftArrow();
    });

    await test.step('Verify latest articles', async () => {
        const blogPage = new BlogPage(page);
        await expect(blogPage.latestArticles).toBeVisible();
        await expect(blogPage.latestArticles.locator('.swiper-slide-active')).toBeVisible();
        await expect(blogPage.latestArticles.locator('.swiper-slide-next')).toBeVisible();
    });

    await test.step('Verify most viewed articles', async () => {
        const blogPage = new BlogPage(page);
        await expect(blogPage.mostViewed).toBeVisible();
        await expect(blogPage.mostViewed.locator('.swiper-slide-active')).toBeVisible();
        await expect(blogPage.mostViewed.locator('.swiper-slide-next')).toBeVisible();
    });


});
