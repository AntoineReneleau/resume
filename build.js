fs = require('fs');
fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  fs.writeFile('index.html', data.replace('</head>', '<link rel="stylesheet" href="./resume-custom.css"/><script>(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');ga(\'create\',\'UA-42906805-1\',\'auto\');ga(\'send\',\'pageview\');</script></head>'), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log('Done');
  });
});
