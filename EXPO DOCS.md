# React Native With Expo and gluestack-ui 👋

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin           | README                                                                                                               |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| nativewind       | [https://www.nativewind.dev/] is uses Tailwind CSS as scripting language to create a universal styling system        |
| Ionicons         | [https://iconduck.com/sets/ionicons] Icon of apps                                                                    |
| Expo             | [https://expo.dev/] Universal native apps with React that run on Android, iOS, and the web. Iterate with confidence. |
| OneDrive         | [plugins/onedrive/README.md] asdasd                                                                                  |
| Medium           | [plugins/medium/README.md][PlMe]                                                                                     |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa]                                                                            |

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

### Setup entry point

    For the property main, use the expo-router/entry as its value in the **package.json**. The initial client file is **app/_layout.js**.

```sh
      {
        "main": "expo-router/entry"
      }
```

### Create pages with Expo Router
When a file is created in the **app** directory, it **automatically** becomes a route in the **app**. For example, the following files will create the following routes:

![expo router.](/assets/docs/route-expo.png "Router in Expo")



> Expo navigation consist of **\_layout.tsx** for manage navigation.
> Root navigation is located in app folder
> structure like below

```sh
    app
      - _layout.tsx
```

> **File \_layout.tsx** consist of ThemeProvider like below. And its consist of Stack Screen,
> where Screen Name must consist in the same directori with file **\_layout.tsx**
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

> Every folder of navigation must consist of **\_layout.tsx** to manage navigation.
> for example directory **(tabs)** consist of file for manage bottom tabs menu like below:
> **index.tsx** is initial screen that running first

```sh
  (tabs)
      - _layout.tsx
      - index.tsx
      - setting.tsx
```

> If we look at **\_layout.tsx** its configure of screen navaigation.
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
