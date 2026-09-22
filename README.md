# Selfless CE Lira Website

A responsive, single-page website for Selfless CE Lira in northern Uganda. The project includes the original supplied event photography in `public/images/`.

## Run in VS Code

1. Install Node.js 18 or newer from https://nodejs.org/
2. Open this folder in VS Code.
3. Open the VS Code terminal and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview
```

The production files are created in `dist/`.

## Push to GitHub

Create a new repository on GitHub, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Create Selfless CE Lira website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own GitHub repository URL.

## Notes

- The map embed and Google Fonts need an internet connection in the browser.
- Donation and contact forms are presentation-ready interactions; connect them to your preferred email or form service before using them for real submissions.
- Replace the placeholder contact email in `src/App.tsx` if the organization has a confirmed address.