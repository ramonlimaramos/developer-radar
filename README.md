# DevRadar

Developers radar a fullstack POC Javascript.

![web](https://github.com/ramonlimaramos/developer-radar/blob/develop/assets/devRadar_web.png?raw=true)
![mobile](https://github.com/ramonlimaramos/developer-radar/blob/develop/assets/devRadar_mobile.png?raw=true)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- nodejs
- yarn

```
git clone https://github.com/ramonlimaramos/developer-radar.git
```

### Installing locally

Following the steps to get up and running the project locally. We will need to install the required libraries of each project such as web, mobile and API, from the terminal:

```shell
cd developer-radar/backend
```

Executes yarn for installing the libraries

```shell
$developer-radar/backend >> yarn
```

do the same for folders **web** and **mobile**

```shell
$developer-radar/web >> yarn
```

```shell
$developer-radar/mobile >> yarn
```

### Creating the your locally .env file

In order to run the application locally you need to provide a **.env** file providing the following attributes:

#### backend

```shell
$developer-radar/backend >> vim .env
```

```javascript
MONGODB_ATLAS_SVR_URL=[your mongo db connection url it can be whatever dabase you name you want]
PORT=3333
```

#### mobile

```shell
$developer-radar/mobile >> vim env.js
```

```javascript
export const baseURL = "http://yourLocalIp:portDefinedBackendEnv"
```

#### web

```shell
$developer-radar/web/src >> vim env.js
```

```javascript
export const baseURL = "http://yourLocalIp:portDefinedBackendEnv"
```

## Running

Well after all the env files configured let's run the three projects:

#### backend
```shell
$developer-radar/backend >> yarn dev
```
#### web
```shell
$developer-radar/web >> yarn start
```
#### mobile
```shell
$developer-radar/mobile >> yarn start
```

## Built With

* [NodeJS](https://nodejs.org/en/)
* [ReactJS](https://pt-br.reactjs.org/)
* [React-Native](https://reactnative.dev/)
* [Expo](https://expo.io/)
* [MongoDB](https://www.mongodb.com/)
* [Socket.io](https://socket.io/)

## Authors

* **Ramon Ramos** - [DevRadar](https://github.com/ramonlimaramos)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
