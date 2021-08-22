#!/bin/sh
# Copy build directory to server
# Start from deploy_wine.bat
# Start with yarn run deploy:ws

# VARIABLES 
green='\033[32m'
purple='\033[0;35m'
nc='\033[0m' 

# SCRIPT
echo -ne "\nPush ${purple}./build/*${nc} on ${purple}ws:/var/www/wine${nc}\n"
rsync -avz --progress /cygdrive/c/git/react_wine/build/ ws:/var/www/wine
echo -e "${green}Done!${nc}\n"

echo -ne "Chown /var/www/wine to www-data:www-data\n"
ssh ws "chown -R www-data:www-data /var/www/wine"
echo -e "${green}Done!${nc}\n"