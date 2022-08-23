#!/bin/bash
declare -a project_folders=("server" "web-console")
for i in "${project_folders[@]}"
do
  cd $i && yarn && cd ..
done
