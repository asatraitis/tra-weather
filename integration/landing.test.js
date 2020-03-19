describe('TraWeather', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000')
    })
    it('Should display logo', async () => {        
        await expect(page).toMatch('TraWeather')
    })
    it('Should see click area for "new location"', async () => {
        await expect(page).toMatchElement('.add-init', { text: 'Click to Add a Location' })
    })
    it('Should click "new location"', async () => {        
        await expect(page).toClick('.add-init') 
    })
    it('Should see form modal', async () => {
        await expect(page).toMatchElement('.form-modal.shown');
    })
})