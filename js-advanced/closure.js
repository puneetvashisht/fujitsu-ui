

function person(){
    var name = "Puneet"
    function displayName(){
        console.log(name);
    }
    return displayName;
}

var inner = person();
inner();

inner();

