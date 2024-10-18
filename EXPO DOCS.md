# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

## Create Expo Project 
```sh
      npx create-expo-app expo-gluestack-ui
      cd expo-gluestack-ui
      npx expo start
```
- Install nativewind and tailwindcss
 ```sh
   npm install nativewind
   npm install --save-dev tailwindcss@3.3.2
 ```
- Create tailwindcss config
 ```sh
   npx tailwindcss init
 ```
- edit file **tailwindcss.config.js**. Add the paths to all of your component files, edit on the content remember to replace **<custom directory>** with the actual name of your directory e.g. below :
 ```sh
     content: [
      "./App.{js,jsx,ts,tsx}",
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
   ],
 ```
- Add the Babel plugin. Modify your **babel.config.js**.
 ```sh
   presets: ["babel-preset-expo"],
   plugins: ["nativewind/babel"],
 ```



## Router Navigation In EXPO

> Expo navigation consist of **_layout.tsx** for manage navigation. 
> Root navigation is located in app folder
> structure like below

```sh
    app
      - _layout.tsx
```

> **File _layout.tsx** consist of ThemeProvider like below. And its consist of Stack Screen, 
> where Screen Name must consist in the same directori with file **_layout.tsx**
> its may be consist of file or directory like below that **(tabs)** is a directory and **+not-found** is file of **+not-found.tsx**

```sh
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
```

### Navigation Screen

> Every folder of navigation must consist of **_layout.tsx** to manage navigation. 
> for example directory **(tabs)** consist of file for manage bottom tabs menu like below:
> **index.tsx** is initial screen that running first

```sh
  (tabs)
      - _layout.tsx
      - index.tsx
      - setting.tsx
```

> If we look at **_layout.tsx** its configure of screen navaigation. 
> the **nama** is the file name. the file name its must exists in the same recent directory
```sh
      // _layout.tsx
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="setting"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
```


```sh
    app
      - (tabs)
          - _layout.tsx
          - index.tsx
          - MyProfile.tsx
          - settings.tsx
      - _layout.tsx
      - +html.tsx
      - +not-found.tsx
    components
    assets
    hooks
```
