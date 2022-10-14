// @ts-check
import { test, expect, Browser, Page } from '@playwright/test';
import generator from '../fixtures/randomGenerator';

const testNumber = generator.guid();
const storeName= `Test Store`;
test.describe("E2E Regression Tests for Athena", () => {
  test(`Regression Test`, async ({ page }) => {
    await page.goto('https://seller-experience-jx-staging.aws.athena-np.com/');
    await page.locator('[data-testid="create"]').click();
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill('pedro.silva+' + testNumber + '@moteefe.com');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('12345678aA');
    await page.locator('button[name="action"]').click();
    await page.locator('div[role="button"]:has-text("My stores")').click();
    await page.locator('[data-testid="createStoreBtn"]').click();
    await page.locator('#mui-2').click();
    await page.locator('#mui-2').fill(storeName);
    await page.locator('[data-testid="createStoreOnForm"]').nth(1).click();
    await page.locator('[data-testid="createProductBtn"]').click();
    await page.locator('[data-testid="product-Unisex TShirt"] img[alt="empty content"]').click();
    await page.locator('text=Monster DigitalSelect and continue >> [data-testid="startDesigningAction"]').click();
    await page.locator('text=Upload file').click();
   

    await page.setInputFiles('input[id="add-layer-image-upload"]', 'fixtures/wallhaven-j56g2m.jpg');
    await page.locator('[data-testid="addRemoveColours"]').click();
    await page.locator('input[type="checkbox"]').check();
    await page.locator('.MuiBackdrop-root').click();
    await page.locator('text=Continue to mockups').click();
    await page.locator('text=Main product ImageSelect the main product imageFlat-Lay FrontFlat-lay BackManneq >> [data-testid="select-mockup-pmhzuury3z6v1y36as28"]').click();
    await page.locator('text=Product ImagesSelect additional product imagesFlat-Lay FrontFlat-lay BackMannequ >> [data-testid="select-mockup-pmhzuury3z6v1y36as29"]').click();
    await page.locator('text=Product ImagesSelect additional product imagesFlat-Lay FrontFlat-lay BackMannequ >> [data-testid="select-mockup-pmhzuury3z6v1y36as2a"]').click();
    await page.locator('text=Product ImagesSelect additional product imagesFlat-Lay FrontFlat-lay BackMannequ >> [data-testid="select-mockup-pmhzuury3z6v1y36as2b"]').click();
    await page.locator('[data-testid="continue-to-details"]').click();
    await page.locator('#mui-9').click();
    await page.locator('#mui-9').fill('US$10.000');
    await page.locator('[data-testid="nextStep"]').click();
    await page.locator('textarea[name="description"]').click();
    await page.locator('textarea[name="description"]').fill('RandomDescription');
    await page.locator('text=Publish product').click();
    await page.locator('text=Publish storeAdd product').click();
    await page.locator(`div[role="button"]:has-text("${storeName}")`).click();
    await page.getByRole('button', { name: 'Publish store' }).click();
    await page.getByText('Catalog published! It may take up to 30 seconds to see the changes.');
    await page.waitForTimeout(5000);

    const [test, page1, test2] = await Promise.all([
      await page.getByRole('button', { name: storeName }).click(),
      page.waitForEvent('popup'),
      page.getByRole('button', { name: storeName }).getByRole('link').click()
    ]);
    
    
    await page1.locator('img[alt="Unisex TShirt"]').click();
    await page1.locator('[aria-label="size S"]').click();
    await page1.locator('text=Add to cart').click();
    await page1.locator('text=Proceed to checkout').click();
    await page1.locator('[placeholder="Your email address"]').click();
    await page1.locator('[placeholder="Your email address"]').fill('pedro@moteefe.com');
    await page1.locator('[placeholder="Your email address"]').press('Tab');
    await page1.locator('[placeholder="Your first name"]').fill('Pedro');
    await page1.locator('[placeholder="Your first name"]').press('Tab');
    await page1.locator('[placeholder="Your last name"]').fill('Silva');
    await page1.locator('[placeholder="Your last name"]').press('Tab');
    await page1.locator('[placeholder="Your address"]').click();
    await page1.locator('[placeholder="Your address"]').fill('rnadom');
    await page1.locator('[placeholder="Your address"]').press('Tab');
    await page1.locator('[placeholder="App or suite"]').fill('suite');
    await page1.locator('[placeholder="Your city"]').click();
    await page1.locator('[placeholder="Your city"]').fill('London');
    await page1.locator('[placeholder="Your region"]').click();
    await page1.locator('[placeholder="Your region"]').fill('London');
    await page1.locator('[placeholder="Your region"]').press('Tab');

    await page1.locator('[placeholder="Your post code"]').fill('WL8 GH8');

    await page1.locator('text=Proceed to payment').first().click();

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('[placeholder="Card number"]').click();

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('[placeholder="Card number"]').fill('4141 4141 4141 41411');

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('[placeholder="MM \\/ YY"]').click();

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('[placeholder="MM \\/ YY"]').fill('04 / 141');

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('[placeholder="CVC"]').click();

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('[placeholder="CVC"]').fill('4141');

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('div:has-text("41414141 4141 4141 4141CVC")').nth(2).dblclick();

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('div:has-text("41414141 4141 4141 4141CVC")').nth(2).click();

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('[placeholder="Card number"]').fill('4242 4242 4242 4242');

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('[placeholder="MM \\/ YY"]').fill('04 / 144');

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('[placeholder="MM \\/ YY"]').dblclick();

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('div:has-text("42424242 4242 4242 4242CVC")').nth(2).click();

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('[placeholder="Card number"]').fill('4242 4242 4242 42422');

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('[placeholder="MM \\/ YY"]').fill('');

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('[placeholder="Card number"]').fill('4242 4242 4242 4242');

    await page1.frameLocator('iframe[name="__privateStripeFrame7736"]').locator('[placeholder="MM \\/ YY"]').fill('04 / 24');

    await page1.locator('text=Place your order').click();

    await page1.locator('text=Order Confirmation').click();

  });
});