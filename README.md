# Automatización QA - ResiReport

Proyecto de automatización de pruebas funcionales End-to-End (E2E) desarrollado sobre la plataforma web **ResiReport**, utilizando Playwright como framework principal de automatización.

## Descripción

ResiReport es un sistema web de gestión de denuncias para conjuntos residenciales.  
Este proyecto automatiza los principales flujos funcionales del sistema desde la perspectiva de un residente.

Las pruebas automatizadas validan:
- autenticación de usuarios,
- creación de denuncias,
- edición de denuncias,
- validaciones visuales,
- persistencia de datos en interfaz.

---

# Tecnologías Utilizadas

- Node.js
- JavaScript
- Playwright
- Git
- GitHub

---

# Casos de Prueba Automatizados

## 1. Login exitoso de residente

### Validaciones
- acceso al sistema,
- ingreso de credenciales,
- autenticación exitosa,
- redirección al módulo "Mis Denuncias".

---

## 2. Creación de denuncia

### Validaciones
- apertura de modal,
- diligenciamiento de formulario,
- selección de tipo de denuncia,
- creación exitosa,
- visualización en tabla.

---

## 3. Edición de denuncia

### Validaciones
- visualización de denuncia,
- edición de información,
- guardado exitoso,
- persistencia de cambios en interfaz.

---

# Estructura del Proyecto

```bash
Automatizacion-ResiReport/
│
├── tests/
│   ├── login.spec.js
│   ├── crear-denuncia.spec.js
│   └── editar-denuncia.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

# Instalación del Proyecto

## 1. Clonar repositorio

```bash
git clone https://github.com/USUARIO/automatizacion-resireport-playwright.git
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Instalar navegadores Playwright

```bash
npx playwright install
```

---

# Ejecución de Pruebas

## Ejecutar todas las pruebas

```bash
npx playwright test --headed
```

---

## Ejecutar prueba específica

### Login

```bash
npx playwright test tests/login.spec.js --headed
```

### Crear denuncia

```bash
npx playwright test tests/crear-denuncia.spec.js --headed
```

### Editar denuncia

```bash
npx playwright test tests/editar-denuncia.spec.js --headed
```

---

# Evidencias

El proyecto genera screenshots automáticos como evidencia de ejecución de pruebas.

Carpeta:

```bash
evidencias/
```

---

# Reportes HTML

Playwright genera reportes automáticos de ejecución.

Abrir reporte:

```bash
npx playwright show-report
```

---

# Objetivo Académico

Este proyecto fue desarrollado como práctica académica de automatización de pruebas de software, aplicando técnicas de testing funcional E2E sobre una aplicación web moderna basada en React.

---

# Autor

Neyder Correa Magaña

Tecnólogo en Informática | Analista de Datos | QA Automation