let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let input=document.querySelector("#url").value
    let image=document.querySelector("img")
    // console.dir(image)
    let qrurl=`https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${input}`
    image.src=qrurl;


})

