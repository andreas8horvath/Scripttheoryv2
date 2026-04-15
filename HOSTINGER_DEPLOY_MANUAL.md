# How to Deploy Script Theory to Hostinger

This guide will help you deploy your React application to Hostinger.

## Prerequisites

1.  **Source Code:** You need the files from this project.
2.  **Node.js:** Ensure you have Node.js installed on your computer to build the project.
3.  **Hostinger Account:** You need access to your Hostinger control panel (hPanel).

## Step 1: Prepare the Build

1.  **Download the Code:** Export or download the project files to your local computer.
2.  **Open Terminal:** Navigate to the project folder.
3.  **Install Dependencies:** Run the following command:
    ```bash
    npm install
    ```
4.  **Build the Project:** Run the build command to generate the production files:
    ```bash
    npm run build
    ```
    *   This will create a **`dist`** folder in your project directory.
    *   This folder contains everything you need to upload (HTML, CSS, JavaScript, and images).
    *   *Note:* I have already included a `.htaccess` file in the `public` folder, which will be automatically copied to `dist`. This file is crucial for fixing "404 Not Found" errors when refreshing pages like `/about` or `/contact`.

## Step 2: Upload to Hostinger

1.  **Log in to Hostinger:** Go to your hPanel.
2.  **File Manager:** Navigate to **Files > File Manager**.
3.  **Access public_html:** Open the `public_html` folder. (If you are hosting on a subdomain, open the folder for that subdomain).
4.  **Delete Default Files:** If there is a `default.php` or empty `index.php` file, delete it.
5.  **Upload Files:**
    *   Open the **`dist`** folder on your computer.
    *   Select **ALL** files and folders inside `dist` (including `assets`, `index.html`, `.htaccess`, etc.).
    *   Drag and drop them into the Hostinger File Manager window inside `public_html`.
    *   *Alternatively:* Zip the contents of the `dist` folder, upload the zip file, and then right-click > Extract it in Hostinger.

## Step 3: Verify Deployment

1.  **Visit Your Website:** Go to your domain name (e.g., `www.yourdomain.com`).
2.  **Check Navigation:** Click on links like "About" or "Contact".
3.  **Test Refresh:** While on a page like `/about`, refresh the browser. If the page reloads correctly without a 404 error, the deployment is successful!

## Troubleshooting

*   **404 Errors on Refresh:** If you get a 404 error when refreshing a page, ensure the `.htaccess` file was uploaded correctly. It is a hidden file, so make sure your computer (and Hostinger's File Manager) is set to show hidden files.
*   **Blank Page:** If you see a blank page, check the "Console" tab in your browser's Developer Tools (F12) for errors. It usually means a missing file or incorrect path.

## Summary of Files to Upload

Your `public_html` folder on Hostinger should look something like this:

*   `assets/` (Folder)
*   `.htaccess` (File)
*   `index.html` (File)
*   `vite.svg` (File)
*   ... any other files from the `dist` folder.
