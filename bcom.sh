#!/bin/bash
user_name=mabur
if grep user_name /etc/passwd
then 
echo "Пользователь в системе найден"
fi
