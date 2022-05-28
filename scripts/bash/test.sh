#!/bin/bash

testfunction(){
   echo "My first function"
   echo $1
}
testfunction $1

funciontestparametrolocaldiferentealglobal(){
   echo $1
}
funciontestparametrolocaldiferentealglobal $2

parsejsonfile(){
    grep -o '"MAC_Address": "[^"]*' ../nmap_results.json | grep -o '^C"]*$'
}
parsejsonfile