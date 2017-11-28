#!/bin/bash

bundle exec jekyll build
git commit -a -m "New build"
git subtree push --prefix _site origin gh-pages
