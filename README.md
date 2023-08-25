### Link
https://music-shop.jakecarlson.me/

### resubmit questions

### 1 Where did you register your domain and what your domain name is?
I registered my domain via namecheap.com and my domain name is jakecarlson.me


### 2 How did you transfer DNS to Digital Ocean from that domain registrar?
By adding the custom name servers to namecheap.com
ns1.digitalocean.com
ns2.digitalocean.com
ns3.digitalocean.com


### 3 In Digital Ocean how did you create the A Record for the subdomain you deployed to?
Clicked on create then Domains/DNS. Then I cliked on the domain name and created a new hostname that directs to a custom IP address.


### 4 In your Virtual Machine what program did you use to setup your reverse proxy?
I used neovin as well as nginx to set up reverse proxy.


### 5 How did you create your SSL Certificate?
I created it by runnig the command certbot --nginx in the terminal.


