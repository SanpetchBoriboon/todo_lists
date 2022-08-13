#!/bin/bash
declare -a project_folders=("server")
for i in "${project_folders[@]}"
do
  cd $i && yarn migrate:latest && yarn seed:run && cd ..
done
