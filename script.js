// This connects to Garry's Mod's loading API
function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language) {
    // Set server name
    document.querySelector('h1').textContent = servername;
    
    // Start playing music with proper volume (0-1 value from GMod)
    var music = document.getElementById('background-music');
    music.volume = volume;
    music.play();
}

function SetFilesTotal(total) {
    this.filesTotal = total;
}

function SetFilesNeeded(needed) {
    this.filesNeeded = needed;
    updateProgress();
}

function DownloadingFile(fileName) {
    document.getElementById('status-text').textContent = "Downloading: " + fileName;
}

function SetStatusChanged(status) {
    document.getElementById('status-text').textContent = status;
}

function updateProgress() {
    if (this.filesTotal > 0) {
        var progress = Math.floor(((this.filesTotal - this.filesNeeded) / this.filesTotal) * 100);
        document.getElementById('progress').style.width = progress + "%";
    }
}