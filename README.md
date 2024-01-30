# ad-free-yt

This project is a YouTube video player designed to play videos without ads. It's a fun project. In my testing, I found that many videos did not display ads. Please note that ads may still be played. Additionally, some videos may not play due to restrictions set by the video's channel owner. Feel free to fork this project!

## Introduction

Ad-Free YouTube Player is a project that utilizes the embedded format of YouTube videos to provide an ad-free viewing experience. While most videos should play without interruptions, it's important to be aware that some videos might not work due to restrictions imposed by the channel owner.

## How to Use

1. Download the zip file of this repository and extract it.
2. Open the 'index.html' file and paste the YouTube link into the 'paste link' section on the page. Then, click '>' .
3. The video will appear on the screen. Simply click 'Play' and that's it!

## How it Works ?

The JavaScript function "updateIframe" takes an input, which is a YouTube link. It then slices the input from the characters following "="+1 to the next 11 characters.

For example:
If the YouTube link is https://www.youtube.com/watch?v=vnudW84AFRI, the function slices the string "vnudW84AFRI".

The sliced string is then added after "https://www.youtube.com/embed/", creating the embedded string for that video.

For example:
The embedded link for that video would be "https://www.youtube.com/embed/vnudW84AFRI".

Then, the iframe is updated using this link.

## Disclaimer

The project is built with my knowledge in HTML, CSS, and JavaScript, so there may be some bugs.
