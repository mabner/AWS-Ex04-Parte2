# Exercício 4 - Parte 2

Código utilizado em tutoriais de GraphQL pra servidor de base pra fazer a parte 2 do exercício 4.

------

GraphiQL tool: http://localhost:4000/graphql



#### Tutoriais:

- Passagem de objetos

https://graphql.org/graphql-js/object-types/



- Mutations

https://graphql.org/graphql-js/mutations-and-input-types/



### Códigos para testar a API

#### Passagem de objetos

```javascript
{
  getDie(numSides: 6) {
    rollOnce
    roll(numRolls: 3)
  }
}
```



#### Mutations

```javascript
mutation {
  createMessage(input: {
    author: "andy",
    content: "hope is a good thing",
  }) {
    id
  }
}
```

