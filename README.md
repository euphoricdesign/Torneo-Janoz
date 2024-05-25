
---

# Torneo Janoz

Página sencilla de registro a un torneo eSport patrocinado por RedBull Colombia.

## Descripción General

"Torneo Janoz" es una página web desarrollada para permitir a gamers registrarse en un torneo de eSports. Este torneo, patrocinado por RedBull Colombia, se realizó en agosto de 2021. La página de registro facilita el proceso de inscripción de los participantes, almacenando la información en una base de datos en Firebase y proporcionando a cada usuario un código único de registro.

## Características

- **Registro de Usuarios:** Permite a los usuarios inscribirse en el torneo mediante un formulario sencillo.
- **Almacenamiento en Firebase:** Guarda los registros de los participantes en una base de datos Firebase.
- **Código Único:** Devuelve un código único a cada usuario tras completar el registro.

## Tecnologías Utilizadas

- **React:** Para la construcción de la interfaz de usuario.
- **Firebase:** Para el almacenamiento de datos y autenticación.
- **CSS:** Para los estilos de la página.

## Instalación y Configuración

### Requisitos Previos

- Tener instalado Node.js.

### Pasos para la Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/torneo-janoz.git](https://github.com/euphoricdesign/Torneo-Janoz.git)
   ```
2. **Navegar al directorio del proyecto:**
   ```bash
   cd torneo-janoz
   ```
3. **Instalar las dependencias:**
   ```bash
   npm install
   ```
4. **Configurar Firebase:**
   - Crea un proyecto en Firebase.
   - Configura tu base de datos en Firebase.
   - Obtén las credenciales de Firebase y agrégalas en un archivo `.env` en la raíz del proyecto.
     ```
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_DATABASE_URL=your_database_url
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

5. **Iniciar la aplicación:**
   ```bash
   npm start
   ```

## Uso

La página de registro está disponible en la página principal de la aplicación. Los usuarios solo necesitan completar el formulario con su información y enviar el registro. La interfaz es intuitiva y fácil de usar.

## Contribución

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu función o corrección de errores (`git checkout -b feature/nueva-funcion`).
3. Haz commit de tus cambios (`git commit -am 'Añadir nueva función'`).
4. Haz push a la rama (`git push origin feature/nueva-funcion`).
5. Abre un Pull Request.

## Información Adicional

### Licencia

Este proyecto no tiene una licencia específica por el momento.

### Autores

- **Merlina Villecco**

### Contacto

- **LinkedIn:** [Merlina Villecco](https://www.linkedin.com/in/merlina-villecco-64149a214/)
---
