#!/bin/bash
declare -a project_folders=("server")
yarn docker:up
for i in "${project_folders[@]}"
do
  cd $i && yarn test:ci && cd ..
done
