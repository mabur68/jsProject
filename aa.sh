#!/bin/bash
dir=/mnt/c/Project/JSstart/JSBeOnMax/*
for file in $dir
do
if [ -d "$file" ]
then
echo "$file - дирректория(папка)"
elif [ -f "$file" ]
then
echo "$file - файл"
else
echo "Неизвестный файл"
fi
done
for ((i=1;i<=10;i++))
do
echo "Значение i= $i"
done