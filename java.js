$(document).ready(function(){
    $("button").on("click", function(){
        var artist = document.getElementById('artists').value;
        apiCall(artist);
    });

    function display(result) {
        var output = "<tr id='info'><td class='title' >" + "ARTIST NAME" + "</td>" + "<td class='title'>" + "SONG NAME" + "</td>" + "<td class='title'>" + "ALBUM NAME" + "</td>" + "<td class='title'>" + "ALBUM ART" + "</td>";
        console.log(result);
        document.getElementById("artistInfo").innerHTML = "";
        var number = parseInt(document.getElementById("number").value);
        console.log(number);
        for (var i = 0; i < number; i++){
            var artURL = result.results[i].artworkUrl100;
            output += "<tr class='clickable' id='" + i + "'><td>" + result.results[i].artistName + "</td>" + "<td>" + result.results[i].trackName + "</td>" + "<td>" + result.results[i].collectionName + "</td>"
                + "<td>" + "<img src='" + artURL + "'/>" + "</td>";
        }
        output += "</tr>";
        document.getElementById("artistInfo").innerHTML = output;
    }

    function apiCall(artist) {
        $.ajax({
            url: 'https://itunes.apple.com/search?term=' + artist,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                display(result);
            },
            error: function() { alert('Failed!'); }
        });
    }

});

function hideAll(){
    document.getElementById("artists").style.display = 'none';
    document.getElementById("number").style.display = 'none';
    document.getElementById("question2").style.display = 'none';
    document.getElementById("search").style.display = 'none';
}

function show(){
    document.getElementById("artists").style.display = 'inline';
    document.getElementById("number").style.display = 'inline-block';
    document.getElementById("question2").style.display = 'block';
    document.getElementById("search").style.display = 'inline-block';
}