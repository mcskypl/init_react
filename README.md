# New react app

Init and config new create-react-app project.

#### Change yarn to npm

- remove `yarn.lock` file
- install npm `npm install`

#### Install eslint

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

#### Install prettier

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

#### Husky and Lint-staged config

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

#### Styled components

- `npm install --save styled-components`
- install **vscode-styled-components** plugin

### Author

**Sebastian Westfal**

Inspiration and idea: Adam (helloroman)

> Visit helloroman git [GitHub Page](https://github.com/helloroman)
