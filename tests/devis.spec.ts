import {expect, test } from '@playwright/test'



test("US-05 : Création d'un devis @smoke @valide", async ({page}) => {
    // Visiter la 1ère page ...
    await page.goto("https://thrundrz.fr/gestion/")
    
    // cliquer sur la bouton creer un compt
    await page.getByRole("link", {name:"Se connecter"}).click()

    // Email 
    await page.locator("#email").fill("yahia2248@gmail.com")
    await page.locator("#password").fill("]DS+C@94!yUhxjd@3")

    await page.getByRole("button", {name: "Se connecter"}).click()
    await expect(page).toHaveURL(/EspaceClient/)

    await page.getByRole("button", {name: "Devis"}).click()
    await page.getByRole("button", {name: "Ajouter un devis"}).click()
    await page.getByRole("combobox").nth(0).selectOption("10")
    await page.getByRole("combobox").nth(1).selectOption("accepte")
    let date_=new Date()
    let date_2=date_.setMonth(date_.getMonth()+1)
    await page.getByRole("textbox").nth(0).fill(date_.toISOString().split("T")[0])
    await page.getByRole("textbox").nth(1).fill(date_.toISOString().split("T")[0])
    

    
})

