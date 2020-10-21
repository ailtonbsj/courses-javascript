# History of commands

Requisitos: Node e Yarn

```bash
# Entra na pasta do projeto
cd curso-es6

# Cria arquivo package.json
yarn init

# Adiciona o babel como dev dependência
yarn add @babel/cli -D

# Adiciona core e preset do babel
yarn add @babel/core @babel/preset-env -D

# Executa script adicionado no package.json
yarn dev

# Adiciona suporte não oficial de rest/spread ao babel
yarn add @babel/plugin-proposal-object-rest-spread -D

# Instala o Webpack
yarn add webpack webpack-cli -D

# Instala Babel loader
yarn add babel-loader -D

# Instala Webpack dev server com Live reloading
yarn add webpack-dev-server -D

# Adiciona suporte a async-await no babel
yarn add @babel/plugin-transform-async-to-generator -D
yarn add @babel/polyfill -D

# Adiciona lib axios
yarn add axios
```