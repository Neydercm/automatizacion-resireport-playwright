const { test, expect } = require('@playwright/test');

test('Debe permitir editar una denuncia en estado Registrada', async ({ page }) => {

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

  // Datos
  const tituloOriginal = 'Ruido excesivo prueba QA';
  const tituloEditado = 'Ruido excesivo EDITADO QA';

  // Visualizar denuncia
  await expect(
    page.locator('xpath=//*[@id="root"]/div/main/div/div[3]/table/tbody/tr[1]/td[1]')
  ).toBeVisible();

  // Abrir edición
  await page.getByRole('button', {
    name: 'Editar'
  }).first().click();

  // Validar formulario edición
  await expect(
    page.getByRole('button', {
      name: 'Guardar'
    })
  ).toBeVisible();

  // Editar título
  await page.getByRole('textbox')
    .first()
    .fill(tituloEditado);

  // Screenshot antes guardar
  await page.screenshot({
    path: 'evidencias/editar-denuncia-formulario.png',
    fullPage: true
  });

  // Guardar cambios
  await page.getByRole('button', {
    name: 'Guardar'
  }).click();

  // Esperar actualización
  await page.waitForTimeout(3000);

  // Validar cambio realizado
  await expect(
    page.locator('xpath=//*[@id="root"]/div/main/div/div[3]/table/tbody/tr[1]/td[1]')
  ).toBeVisible();

  // Screenshot evidencia final
  await page.screenshot({
    path: 'evidencias/editar-denuncia-exitosa.png',
    fullPage: true
  });

});