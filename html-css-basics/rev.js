function handleClick(){
    console.log('button clicked!!')
    // var str = document.getElementsByTagName('h2')[0].innerText
    var str = document.getElementById('message').innerText
    console.log(str);
    var revStr = str.split('').reverse().join('')
    console.log(revStr);
    document.getElementsByTagName('h2')[0].innerText = revStr
}