const terminal = document.getElementById("terminal");

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("greeting").innerText += "Welcome to my website \nlandodero OS [version 1.0]\n\n To view available commands \n type 'help' and hit ENTER";
});

terminal.innerHTML += "<span>C:\\users\\landodero> </span>";
terminal.innerHTML += "<input id='cmd' type='text' value=''>";
document.getElementById('cmd').focus();

document.addEventListener('keydown', function(event) {

    if (event.key == 'Enter') {
        var data = document.getElementById('cmd').value;
        document.getElementById('cmd').replaceWith(data);
        if (data == 'help') {
            terminal.innerHTML += "<br>List of commands:";
            terminal.innerHTML += "<br>help:&nbsp&nbsp&nbsp&nbsp&#9hmm...";
            terminal.innerHTML += "<br>about:&nbsp&nbsp&nbsp&#9access my about me";
            terminal.innerHTML += "<br>projects: access my finished projects or view any WIP";
            terminal.innerHTML += "<br>links:&nbsp&nbsp&nbsp&nbspaccess any important links";
            terminal.innerHTML += "<br><br>There are hidden commands as well...";
        }
        else if (data == 'about') {
            terminal.innerHTML += "<br>under construction...";
        }
        else if (data == 'projects') {
            terminal.innerHTML += "<br>under construction...";
        }
        else if (data == 'links') {
            terminal.innerHTML += "<br>under construction...";
        }

        terminal.innerHTML += "<br><span>C:\\users\\landodero> </span>";
        terminal.innerHTML += "<input id='cmd' type='text' value=''>";
        document.getElementById('cmd').focus();
    }
});
