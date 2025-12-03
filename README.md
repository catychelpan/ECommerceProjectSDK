# Install NodeJs ( Ignore If Already Installed)
1. Visit the official Node.js website: https://nodejs.org/en/download/
2. Download the Node.js installer
3. Runtheinstaller.
4. Follow the prompts in the installer.

# First Run Backend then Frontend & Admin
## Steps To Setup Backend Of The Project
1. Open Project Folder In VS Code
2. Open Integrated Terminal
- Right Click on ‘backend’ > Select “Open In Integrated Terminal”
3. Type “npm install” and press Enter and Wait for Installation to be completed (requires Internet)

## SetupCloudinaryforfilestorage.
1.Create account and login to: https://cloudinary.com/
2. The go to Dashboard
3. Copy and paste the Cloud Name, API Key, And Secret Key in the backend / .env file.

## SetupTheMongoDB
1. Openthislink: https://www.mongodb.com/cloud/atlas/register
2. After that Sign Up on the website.
3. ClickonNewProjectOption
4. After Creating Project go to Database Section & Builda database
5. SelectM0&YourRegion&CreateDatabase
6. Setup Username & Password & Create User
7. Click on Finish & Close
8. Whitelist IP 0.0.0.0 & Click on Add Entry
9. Now Click on Connect
10. Now Select Compass Option
11. And Copy the Connection String
12. And Paste It in the backend / .env file and replace the <password> with the password you set previously in 4.F & save changes.

## Setup Stripe
1. Create a stripe account from here: https://dashboard.stripe.com/login_success?redirect=%2Facct_1OLXXAJUVYnKPT6Q
2. After creating account get the Stripe Secret Key from dashboard
3. Paste the Secret Key in backend / .env file and save file

## To Run Backend use npm run server command in Integrated Terminal



# Before Running Frontend or Admin Projects make sure Backend is Running in the background terminal
## Steps To Run FE of The Project:
1. Right Click on ‘frontend’ folder > Select “Open In Integrated Terminal”
2. Type “npminstall” and press Enter and Wait for Installation to be completed (requires Internet)
3. After that type “npm run dev” in terminal
4. Now you will see the ‘http://localhost:5173’link in that terminal. Open that link in the browser.


##Steps To Run Admin Panel of The Project:
1. Right Click on ‘admin’ folder > Select “Open In Integrated Terminal”
2. Type “npm install” and press Enter and Wait for Installation to be completed (requires Internet)
3. After that type “npm run dev” in terminal
4. Now you will see the ‘http://localhost:5174’ link in that terminal. Open that link in the browser.
