---
kind: nginx
title: Making A File Extension Optional
description: It's common to, for example, serve a PHP page at `/index.php`. Instead, we can serve that same page at `/index`.
contributor: https://github.com/ryanwohara
snippet: |
  location ~* \.php {
      try_files                  $uri =404;
      include                    fastcgi_params;
      fastcgi_keep_conn          on;
      fastcgi_index              index.php;
      fastcgi_pass               unix:/var/run/php/php8.1-fpm.sock;
      fastcgi_param              HTTP_PROXY "";
      fastcgi_param              SCRIPT_FILENAME    $document_root$fastcgi_script_name;
      fastcgi_param              SCRIPT_NAME        $fastcgi_script_name;
      fastcgi_intercept_errors   on;
  }

  location / {
      try_files $uri $uri/ $uri.php;
  }
---

Using the `try_files` directive allows us to do the following:

- Serve `$uri` if the path is valid
- Serve the index file out of the directory `$uri/`
- Fall back to `$uri.php` if the URI does not match either a file or directory

When we fall back to `$uri.php`, we then verify it is a valid file or fallback to a 404 page.
