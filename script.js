function updateIframe() {
    
    var searchInput = document.getElementById('searchInput').value;

    var split_index = searchInput.indexOf("=");
    
    var vid_embed_code = searchInput.slice(split_index+1 , split_index+12);

    var vid="https://www.youtube.com/embed/"+vid_embed_code;

    console.log(vid);
    videoIframe.src = vid;
}