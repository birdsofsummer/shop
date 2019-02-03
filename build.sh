function getnode(){
    wget https://nodejs.org/dist/v11.9.0/node-v11.9.0-linux-x64.tar.xz
    tar node-v11.9.0-linux-x64.tar.xz
    mv node-v11.9.0-linux-x64 node
    mv node /bin/
    # /etc/profile
    # PATH=$PATH:/bin/node/bin/
    #. /etc/profile
    export PATH=$PATH:/bin/node/bin/
}
function install(){
    npm install -g @vue/cli
    npm install -g @vue/cli-service-global
    npm install
}
function build(){
    npm run build
}

function run(){
    npm run serve
    #http://localhost:8080
    #http://localhost:8080/login
}


