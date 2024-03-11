Steps on VM Instance:
1. installations
	a. xampp
	b. vs code
	c. npm
2. copy the source files
3. open source files in vs-code 
	a. for SERVER
	b. for GUI
4. npm i --save in both
5. if compatibility errors, npm i --force --save

XAMPP:
5. open xampp control panel in admin mode
6. open localhost/phpmyadmin
7. create new database - website
8. import website.sql from 
9. xampp control panel > config > service and port settings > Apaceh > mainport-81 > save
10. Apache Module > config > open httpd.conf > listen 81 > save
11. start Apache module and mysql module.

VS-CODE:
12. npm start both SERVER and GUI.