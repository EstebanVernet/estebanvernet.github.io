const state = document.getElementById('state'),
      current_file = document.getElementById('current_file'),
      files_remaining = document.getElementById('files_remaining'),
      files_total = document.getElementById('files_total'),
      loading_bar = document.getElementById('loading_bar');

var total_files = 0,
    total_files_remaining = 0;

// Files related
function SetFilesTotal( total ) {
    files_total.innerHTML = total;
    total_files = total;
}

function SetFilesNeeded( needed ) {
    files_remaining.innerHTML = needed;
    total_files_remaining = needed;
}

function DownloadingFile( fileName ) {
    current_file.innerHTML = fileName;
}

// Status
function SetStatusChanged( status ) {
    state.innerHTML = status;
}

// Progress
function SetProgress() {
    var progress = ( ( total_files - total_files_remaining ) / total_files ) * 100;
    loading_bar.style.width = progress + '%';
}

