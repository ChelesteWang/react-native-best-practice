# 搭建 react native 开发环境

## M1 无法使用 pod install

```shell
sudo gem install cocoapods
sudo arch -x86_64 gem install ffi
cd ios
arch -x86_64 pod install
```

## IOS 开发注意事项

1. 安装依赖后需要链接

推荐使用以下命令链接:

```shell
yarn pod
#  即 npx pod-install ios
```

或者 M1 使用以下命令链接:

```shell
cd ios
arch -x86_64 pod install
```

其他使用以下命令链接：

```shell
cd ios
pod install
```

## 配置项目 alias

安装 babel-plugin-module-resolver 插件

```js
yarn add --dev babel-plugin-module-resolver
```

配置 .babelrc

```js
{
  "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        '@/utils': './src/utils',
        '@/pages': './src/pages',
        '@/components': './src/components',
      }
    }]
  ]
}
```

配置 tsconfig.json

```js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/utils/*": ["./src/utils/*"],
      "@/styles/*": ["./src/styles/*"],
      "@/actions/*": ["./src/actions/*"],
      "@/components/*": ["./src/components/*"],
      "@/services/*": ["./src/services/*"],
    }
  }
}
```

## IOS 与 Android 调试

启动模拟器

```shell
yarn ios
yarn android
```

## 默认模板 App.tsx

```js
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

const Section: React.FC<{
  title: string,
}> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
```
