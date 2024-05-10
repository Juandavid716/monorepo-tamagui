# Tamagui app


## How to run?

Steps:

1. Clone this repository
2. Setup dependencies with the next command (You have to use yarn as your package manager)

```sh
yarn install 
```

3. Set the .env file located on ```apps/next``` route in the next way in order to initialize ```firebase``` and ```next-auth```.

```sh
IGNORE_TS_CONFIG_PATHS=true
TAMAGUI_TARGET=web
TAMAGUI_DISABLE_WARN_DYNAMIC_LOAD=1

NEXTAUTH_URL=your_port #http://localhost:3000
NEXTAUTH_SECRET=your_personal_key #You can create a random key with the commmand openssl rand -base64 32 or use any random string.

NEXT_PUBLIC_REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_API_DOMAIN
NEXT_PUBLIC_REACT_APP_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
NEXT_PUBLIC_REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_SENDER_ID
NEXT_PUBLIC_REACT_APP_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
NEXT_PUBLIC_REACT_APP_FIREBASE_MEASUREMENT_ID=YOUR_FIREBASE_MEASUREMENT_ID
```

4. Run the project with the command ```yarn web``` on the root.

5. Start to navigate!

## 🔦 About

This monorepo is a starter for an Expo + Next.js + Tamagui + Solito app, created with ```npm create tamagui@latest```.

## 📦 Included packages

- [Tamagui](https://tamagui.dev) 🪄
- [solito](https://solito.dev) for cross-platform navigation
- Expo SDK
- Next.js
- Expo Router
- Next auth
- Firebase

## API Useds


## 🗂 Folder layout

The main apps are:

- `next` (web)
  - `pages`
      - `api` (contains next-auth configuration)
      - `dashboard`
      - `sign-in`
      - `sign-up`

  - `middleware` (used for protect routes)

- `packages` shared packages across apps
  - `app` 
    - `auth` (firebase settings)
    - `components`
       - `navbar`
       - `pagination` 
    - `features` (Divided by each folder screen)
        - `dashboard`
        - `sign-in`
        - `sign-up`
        - `home`
    - `provider` (all the providers such as the session provider)


## Demo

![demo_final](https://github.com/Juandavid716/monorepo-tamagui/assets/42303342/e725ad2c-6c0b-42b6-8bc0-20ee91055de6)

### Screenshots

![image](https://github.com/Juandavid716/monorepo-tamagui/assets/42303342/98bacb19-4e11-416c-ae85-ba8b48e30ae5)

![image](https://github.com/Juandavid716/monorepo-tamagui/assets/42303342/d70c6977-b37b-4b7f-95f3-75ae1ba70d9c)

![image](https://github.com/Juandavid716/monorepo-tamagui/assets/42303342/e689d1ee-58c4-40b8-a1cf-aacae69e0359)

![image](https://github.com/Juandavid716/monorepo-tamagui/assets/42303342/94fbc590-5c9e-48ab-97cb-124201294997)




