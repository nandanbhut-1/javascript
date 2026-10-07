const arr = ["https://wallpapercat.com/w/full/b/e/7/5819275-3840x2160-desktop-hd-pc-background.jpg",
    "https://wallpapercat.com/w/full/6/2/3/5819406-3840x2160-desktop-hd-pc-wallpaper-image.jpg",
    "https://microsoft.design/wp-content/uploads/2025/12/Opaline_blue_DM.jpg",
    "https://images.wallpapersden.com/image/download/windows-11-4k-glowing_bWtoamaUmZqaraWkpJRobWllrWdpZWU.jpg"];

let index = 0;

document.getElementById("back").style.backgroundImage = `url(${arr[index]})`;

document.getElementById("b1").onclick = function (){
    index--;
    if (index<0){
        index=arr.length-1;
    }
    document.getElementById("back").style.backgroundImage = `url(${arr[index]})`;
}

document.getElementById("b2").onclick = () => {
    index++;
    if (index >= arr.length) {
        index = 0;
    }
    document.getElementById("back").style.backgroundImage = `url(${arr[index]})`;
}
