---
kind: nginx
title: Including Files In Nginx
description: Organize common configuration snippets into their own separate files, making maintainability and readability easy.
contributor: https://github.com/ryanwohara
snippet: |
  server {
    server_name example.com www.example.com *.example.com example.co www.example.co *.example.co;

    root   /var/www/example.com/www/html;

    include ssl.conf;
    include php.conf;
    include general.conf;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
  }
---

Nginx has the `include` directive that can include the contents of a configuration file where it is run. This can be very useful for things like common fastcgi_pass directives or SSL configuration.

Extracting common configuration snippets into their own configuration allows you to, as an example, maintain your SSL ciphers and HSTS settings in a single place for all of the projects on the system.

As another example, you can upgrade all your PHP websites to the next version of PHP seamlessly. By updating a single file to point to the newer version and reloading nginx, you will not face any downtime during the upgrade and no projects were missed.
