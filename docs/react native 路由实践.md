# react native 路由实践

## 初始化 react-navigation

1. 安装必要依赖

```shell
yarn add @react-navigation/native react-native-safe-area-context react-native-screens
```

2. 处理 IOS 环境

1. 链接依赖
   
```shell
npx pod-install ios
```

1. 处理 Android 环境

1. 在 `android/app/src/main/java/<your package name>/MainActivity.java` 中加入

```java
import android.os.Bundle;
```

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```

## 配置底部 Tab 导航与 header 标题