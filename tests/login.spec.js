const { test, expect } = require('@playwright/test');

test('Login exitoso residente', async ({ page }) => {

  // Abrir login
  await page.goto('https://resi-report.vercel.app/login');

  // Ingresar correo
  await page.getByRole('textbox', {
    name: 'correo@ejemplo.com'
  }).fill('residente@resireport.com');

  // Ingresar contraseña
  await page.getByRole('textbox', {
    name: '••••••••'
  }).fill('Resident1234');

  // Click login
  await page.getByRole('button', {
    name: 'Ingresar'
  }).click();

  // Esperar unos segundos
  await page.waitForTimeout(3000);

  // Validar URL actual
  await expect(page).toHaveURL(
    'https://resi-report.vercel.app/mis-denuncias'
  );

  // Validar contenido visible
  await expect(
    page.locator('xpath=//*[@id="root"]/div/main/div/div[1]/h1')
  ).toBeVisible();

    // Screenshot evidencia
  await page.screenshot({
    path: 'evidencias/Login-exitoso.png',
    fullPage: true
  });

});