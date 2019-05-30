#!/bin/bash
git clone -b dist https://github.com/birdsofsummer/shop.git /tmp/shop
cp -R /tmp/shop/static /opt/jiakai/
rm -rf /tmp/shop
