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
        await expect(page).toClick('.add-init');
         
    })
    it('Should see form modal', async () => {
        await expect(page).toMatchElement('.form-modal.shown');
    })
    it('Should click create with empty fields', async () => {
        // await expect(page).toClick('button', {text: 'Create'});
        await page.evaluate(() => {
            document.querySelector('.Button.primary').click();
        });
    })
    it('Should see error message for empty location.', async () => {
        await expect(page).toMatchElement('.msg.show.error', { text: 'Please enter the location!' })
    })
    it('Should fill "location" field', async () => {
        await page.evaluate(() => {
            document.querySelector('input[name="location"]').value = 'Baltimore';
        });
    })
    it('Should click create with empty Date field', async () => {
        await page.evaluate(() => {
            document.querySelector('.Button.primary').click();
        });
    })
    it('Should see error message for empty location.', async () => {
        await expect(page).toMatchElement('.msg.show.error', { text: 'Double check the date! (Cannot be in the past)' })
    })
    it('Should see error message for empty location.', async () => {        
        await page.evaluate(() => {
            document.querySelector('input[name="date"]').value = '2020-09-14';
        });
    })
    it('Should click create with filled out inputs', async () => {
        await page.evaluate(() => {
            document.querySelector('.Button.primary').click();
        });
    })
    it('Should see spinner with message "Loading..".', async () => {
        await expect(page).toMatchElement('.spinner h5', { text: 'Loading..' })
    })
    it('Should see new card for Baltimore.', async () => {
        await expect(page).toMatchElement('.card .location', { text: 'Baltimore, MD, USA' })
    })
})