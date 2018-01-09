#!/bin/bash

bundle exec jekyll build
git add _site/*
git commit -m "New build"
git subtree push --prefix _site origin gh-pages
