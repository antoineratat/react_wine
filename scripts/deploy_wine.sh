#!/bin/sh

# VARIABLES 
green='\033[32m'
purple='\033[0;35m'
nc='\033[0m' 

# SCRIPT
echo -ne "\nPush ${purple}$PWD/build/*${nc} on ${purple}ws:/var/www/wine${nc}\n"
# rsync -avz --progress /home/templars/build/ ws:/var/www/
echo -e "${green}Done!${nc}\n"

echo -ne "Chown /var/www/wine to www-data:www-data\n"
# ssh ws "chown -R www-data:www-data /var/www/wines"
echo -e "${green}Done!${nc}\n"


read -p "Press [Enter] to continue..."