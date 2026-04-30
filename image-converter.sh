process (){
    echo $1
    if [ -f "${1%.*}.jpg" ]; then
        echo "file exists"
    else
        magick mogrify -format jpg -quality 90 -resize '1200x1200>' "$1"
    fi
    
}
export -f process 
find work/ -name '*.png' -not -path '*/ignore/*' -exec bash -c 'process "$@"' bash {} \;
