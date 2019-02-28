#! /bin/bash

function getnode(){
    node_url="https://nodejs.org/dist/v11.10.0/node-v11.10.0-linux-x64.tar.xz"
    d="node-v11.10.0-linux-x64"
    f=$d".tar.xz"
    wget $node_url
    tar xvf $f
    mv $d node
    mv node /bin/
    # /etc/profile
    # PATH=$PATH:/bin/node/bin/
    #. /etc/profile
    export PATH=$PATH:/bin/node/bin/
    npm install -g @vue/cli
    npm install -g @vue/cli-service-global
}


function download(){
    s_url="https://github.com/birdsofsummer/shop.git"
    git clone $s_url
    cd shop
}

function install(){
    npm install
}

function build(){
    npm run build
    cd dist
    cp index.html template.html
    cp index.html admin.html
    cd ..
    tar cvf dist.tar dist
    d="/opt/jiakai/static/"
    [[ -d $d  ]] &&  cp -R dist/* $d
}

function run(){
    npm run serve
    #http://localhost:8080
    #http://localhost:8080/#/login
}


function main(){
    getnode   #下載node
    download
    install   #安裝插件
    build     #打包
    #run      #本機預覽
}
build  #打包
