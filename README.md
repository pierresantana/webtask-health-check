# webtask.io health-check

Simple app that use tcp connection to check host available.

## Setup

Firstly we need to install the command line application, to make task management easier. To set it up all we need is:

```bash
$ npm i -g wt-cli
$ wt init
$ wt create webtask-health-check.js
```

After installing wt-cli, login and create the webtask, just run it.

```bash
curl 'https://<your-session>.sandbox.auth0-extend.com/webtask-health-check?host=google.com'
{"code":200,"details":"ONLINE"}
```

## Parameters

- **host**: required
- **port**: default 80
- **timeout**: default 10 sec
