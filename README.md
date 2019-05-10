# New react app

###### Install eslint

- download eslint plugin
- add `.eslintrc` ( delete from package.json )
- add airbnb `npx install-peerdeps --dev eslint-config-airbnb`
- add airbnb extends `"extends": "airbnb"`

###### Eslint rules

- add

```
"rules": {
  "react/jsx-filename-extension": [1, { "extensions": [".js"] }]
}
```

- add auto fix on save

###### Prettier config

- install ** Prettier - Code formatter ** plugin
- add `.prettierrc` file
- add

```
{
    "singleQuote": true,
    "trailingComma": "all",
    "printWidth": 100,
}
```

- delete `"react-app"` from .eslintrc
- `npm install -D eslint-config-prettier prettier`
- add `"prettier", "prettier/react"` to .eslintrc extends
- - add auto format on save
