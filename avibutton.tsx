function randImage(){
    let imgList = ['avinashjpg', 'img2', 'img3', 'img4']
    let randIndx = Math.floor(Math.random() * imgList.length);
    return imgList[randIndx]; 
}