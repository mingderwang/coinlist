# run command

```
yarn
yarn start
```

result
```
Received data: { name: 'John', age: 30 }
```


# test command

```
curl -X POST -H "Content-Type: application/json" -d '{"name":"John", "age":30}' http://localhost:3000
```
