# Hi,

Dieses Beispiel soll euch demonstrieren wie es zu einer SQL Injection kommen kann.

Der Datenbank wurde ein Admin User hinzugefügt:

```
username: admin
password: admin123
``` 

Normalerweise sollte es nur möglich sein sich mit diesem Zugang einzuwählen.
Dennoch kann man sich bei unvorsichtiger Programmierweise auf andere Arten Zugang verschaffen.

Solltet ihr genug mit dieser kleinen App gespielt haben probiert diese Zungangsdaten aus:

```
username: admin
password: unknown' or '1'='1
``` 

# Hands-on Demo

@[Beispiel APP]({ "stubs": ["server.js", "index.html", "style.css"], "command": "node server.js" })



