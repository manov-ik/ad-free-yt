function updateIframe() {
    var searchInput = document.getElementById('searchInput').value;

    if (searchInput !== "") {
        var split_index = searchInput.indexOf("=");

        if (split_index !== -1) {
            var vid_embed_code = searchInput.slice(split_index + 1, split_index + 12);

            var vid = "https://www.youtube.com/embed/" + vid_embed_code;

            console.log(vid);
            videoIframe.src = vid;
        } else {
            alert("Invalid YouTube video URL");
        }
    } else {
        alert("Enter a YouTube video URL");
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        updateIframe();
    }
}

var searchInput = document.getElementById('searchInput');
searchInput.addEventListener("keypress", handleKeyPress);
