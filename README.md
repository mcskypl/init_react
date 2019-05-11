# Init new react app

Init and config create-react-app project.

### Install eslint

- install eslint plugin
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

### Prettier config

- install **Prettier - Code formatter** plugin
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
- add auto format on save

### Husky and Lint-staged config

- `npm install -D husky lint-staged`
- add to package.json

```
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "prettier --config .prettierrc --write",
      "eslint --fix",
      "git add"
    ]
  }
```

- add to .eslintrc

```
  "env": {
    "jest": true
  },

  "globals": {
    "document": true
  },
```

## Author

**Sebastian Westfal**

<<<<<<< HEAD
Inspiration and idea: Adam (helloroman)

=======
> Inspiration and idea: Adam (helloroman)
>>>>>>> 259404acf1c927267e67caf63eccf12ca7bbd838
> Visit helloroman git [GitHub Page](https://github.com/helloroman)
