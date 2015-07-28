# git-emails [![Build Status](https://travis-ci.org/hemanth/git-emails.svg?branch=master)](https://travis-ci.org/hemanth/git-emails)

> Get all git contributors emails


## Install

```
$ npm install --save git-emails
```


## Usage

```js
var gitEmails = require('git-emails');

gitEmails(function(err,data){
	if(!err) console.log(data);
})
/* data would an array of emails */
```

## License

MIT © [Hemanth.HM](http://h3manth.com)
