var searchInput = document.getElementById('searchInput');

window.onload = function () {
    searchInput.focus();
};

function updateIframe() {
    var inputValue = searchInput.value;

    if (inputValue !== "") {
        var split_index = inputValue.indexOf("=");

        if (split_index !== -1) {
            var vid_embed_code = inputValue.slice(split_index + 1, split_index + 12);
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

searchInput.addEventListener("keypress", handleKeyPress);
