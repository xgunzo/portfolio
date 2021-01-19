

function zegar()
{
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('time').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(zegar, 500)
}


function checkTime(i)
{
    if(i<10)
        {
            i="0"+i;
        }
        return i;
}

function zoom()
{
    var photo = document.getElementsByClassName('my_photo');
    

}
