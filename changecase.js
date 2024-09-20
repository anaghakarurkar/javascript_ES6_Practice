function capitalize() {
    var name = prompt("Please enter your name: ");

    if(name == null || name.trim().length == 0){
         name = "You haven't entered the name";
    }
    else {
        if(name.length == 1)
            name = name.toUpperCase();
        else {
            name = name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();
        }
        name = "Hello, " + name;
    }
    alert(name);
}