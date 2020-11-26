# alfred-instapaper
> Easily add URLs to [Instapaper](https://www.instapaper.com/) via [Alfred 3](https://www.alfredapp.com)

## Installation
To install, [download](https://github.com/derBingle/alfred-instapaper/raw/master/alfred-instapaper.alfredworkflow) the workflow, and open it in Alfred.

*Note: Custom workflows require the [Alfred Powerpack](https://www.alfredapp.com/powerpack/).*

## Setup
After installing, add your Instapaper email and password [(find here)](https://www.instapaper.com/user) to to the file `~/.netrc`: 

**Example .netrc file:**

``` sh
machine www.instapaper.com
  login <instapaper username>
  password <instapaper password>

```

## Usage
To add a URL, simply type `instapaper <URL>` in your Alfred window.

To add the current URL from your browser, just call `instapaper` without the URL. Both Safari, Chrome, Opera and Vivaldi are supported.

## Related
-  [alfred-graphcool](https://github.com/derBingle/alfred-graphcool) - Quick links to the [graph.cool](https://www.graph.cool) console + docs
-  [alfred-firebase-links](https://github.com/derBingle/alfred-firebase-links) - Quick links to the [firebase](https://firebase.google.com) console + live docs search

## License
MIT 
