let songList=[];
songList=["ROXANNE", "Black Swan"];
let songArtist=[];
songArtist=["Arizona","BTS"]
let songLength=[];
songLength=[2.44,5.31];

$('button').click(function() {
    songList.forEach(function(song) {
    $('#song').append('<p>' + song + '</p>');
    });
    songArtist.forEach(function(artist) {
    $('#playlist').append('<p>' + artist + '</p>');
    });
    songLength.forEach(function(length) {
    $('#playlist').append('<p>' + length + '</p>');
    });
    
});