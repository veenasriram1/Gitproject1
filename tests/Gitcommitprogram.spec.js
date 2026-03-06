import {test, expect} from '@playwright/test'

test("Test case1", async({page})=>
{
 console.log("this is Testcase1")
})

test("Test case 2", async({page})=>
{
 console.log("this is Testcase2")
})

test("Test case 3", async({page})=>
{
console.log(" this is Testcase3")
})

test("Test case 4", async({page})=>
{
 console.log("this is Testcase4")
})
test("Test case 5", async({page})=>
{
console.log("this is Testcase5")
})
test("Checking amazon title" ,async({page})=>
{
    await page.goto("https://www.snapdeal.com/");
    await page.waitForTimeout(3000);
    const T= await page.title();
    console.log("The snapdeal title is " +T);
})