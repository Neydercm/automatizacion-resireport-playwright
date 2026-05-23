const { test, expect } = require('@playwright/test');

test('Debe permitir crear una denuncia exitosamente', async ({ page }) => {

  // Abrir login
  await page.goto('https://resi-report.vercel.app/login');

  // Login
  await page.getByRole('textbox', {
    name: 'correo@ejemplo.com'
  }).fill('residente@resireport.com');

  await page.getByRole('textbox', {
    name: '••••••••'
  }).fill('Resident1234');

  await page.getByRole('button', {
    name: 'Ingresar'
  }).click();

  // Validar dashboard
  await expect(
    page.getByRole('heading', {
      name: 'Mis Denuncias'
    })
  ).toBeVisible();

  // Abrir modal crear denuncia
  await page.getByRole('button', {
    name: 'Crear denuncia'
  }).click();

  // Validar modal visible
await expect(
  page.getByRole('heading', {
    name: 'Crear denuncia'
  })
).toBeVisible();

  // Datos denuncia
  const titulo = 'Ruido excesivo prueba QA';

  // Título
  await page.getByRole('textbox')
    .first()
    .fill(titulo);

  // Descripción
  await page.locator('textarea')
    .fill('Esta gente esta insoportable, YA NO AGUANTO MÁS');

  // Ubicación
  await page.getByRole('textbox')
    .nth(2)
    .fill('Torre B, piso 5');

  // Tipo denuncia
  await page.getByRole('combobox')
    .selectOption('69bc4aa4a736014171f2c488');

    // Screenshot llenar formulario
  await page.screenshot({
    path: 'evidencias/llenar-formulario.png',
    fullPage: true
  });

  // Crear denuncia
  await page.getByRole('button', {
    name: 'Crear'
  }).click();

  // Esperar actualización tabla
  await page.waitForTimeout(3000);

  // Validar denuncia creada

  await expect(
    page.locator('xpath=//*[@id="root"]/div/main/div/div[3]/table/tbody/tr[1]/td[1]')
  ).toBeVisible();

  // Screenshot evidencia
  await page.screenshot({
    path: 'evidencias/crear-denuncia.png',
    fullPage: true
  });

});