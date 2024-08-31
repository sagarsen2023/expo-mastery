# React Native App Documentation with Expo

## Introduction

This document provides guidelines and best practices for developing React Native applications using Expo. Expo simplifies the development process with a range of tools and services, making it easier to build and test React Native apps.

## Table of Contents

1. [Setting Up Your Development Environment](#setting-up-your-development-environment)
2. [Basic Commands](#basic-commands)
3. [Using `console.log`](#using-consolelog)
4. [Error Handling](#error-handling)
5. [Debugging Tips](#debugging-tips)
6. [Best Practices](#best-practices)
7. [Additional Resources](#additional-resources)

## Setting Up Your Development Environment

1. **Install Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Install Expo CLI**: Open your terminal and run:
   ```bash
   npm install -g expo-cli
   ```

3. **Initialize a New Project**: Run the following command to create a new Expo project:
   ```bash
   expo init MyNewProject
   ```
   Follow the prompts to choose a template and set up your project.

4. **Run the Project**: Navigate to your project directory and start the development server:
   ```bash
   cd MyNewProject
   expo start
   ```

## Basic Commands

Here are some basic Expo CLI commands you will frequently use:

- **Start Development Server**: 
   ```bash
   expo start
   ```

- **Build for Android**:
   ```bash
   expo build:android
   ```

- **Build for iOS**:
   ```bash
   expo build:ios
   ```

- **Publish Project**:
   ```bash
   expo publish
   ```

## Using `console.log`

Using `console.log` is a common way to debug React Native apps:

1. **Logging Data**: You can log variables and expressions to inspect their values:
   ```javascript
   console.log('User Data:', userData);
   ```

2. **Conditional Logging**: Log messages based on conditions:
   ```javascript
   if (error) {
       console.log('Error occurred:', error);
   }
   ```

3. **Remove Logs for Production**: Ensure all `console.log` statements are removed from production code to avoid performance issues and potential data leakage.

## Error Handling

Effective error handling is crucial in React Native apps:

1. **Use `try-catch`**: Wrap potentially problematic code in `try-catch` blocks to handle exceptions:
   ```javascript
   try {
       const response = await fetchData();
   } catch (error) {
       console.error('Fetch error:', error);
   }
   ```

2. **Global Error Handling**: Set up a global error handler to catch unhandled exceptions:
   ```javascript
   import { setJSExceptionHandler } from 'react-native-exception-handler';

   setJSExceptionHandler((error, isFatal) => {
       console.error(isFatal ? 'Fatal Error' : 'Error', error);
   }, true);
   ```

## Debugging Tips

Here are some tips to effectively debug your React Native app:

1. **Enable Remote Debugging**: Use Chrome DevTools by enabling remote debugging in the Expo menu (shake your device or press `d` in the terminal).

2. **Use React Developer Tools**: Install and use React Developer Tools to inspect component hierarchies and state.

3. **Leverage `react-native-debugger`**: This standalone app integrates with React Developer Tools and Redux DevTools for enhanced debugging.

4. **Use Breakpoints**: Set breakpoints in your code using Chrome DevTools or Visual Studio Code to pause execution and inspect variables.

5. **Monitor Network Requests**: Use the "Network" tab in Chrome DevTools to inspect network requests and their responses.

6. **Inspect Layouts**: Use the "Inspector" feature in Expo to check the layout and style of components in your app.

## Best Practices

1. **Keep Components Small and Focused**: Break down your UI into small, reusable components that handle a single responsibility.

2. **Use Functional Components and Hooks**: Prefer functional components and React Hooks over class components for simplicity and better performance.

3. **Optimize Images**: Use appropriately sized images and consider using tools like `react-native-fast-image` for optimized image loading.

4. **Follow a Consistent Style Guide**: Adhere to a consistent style guide, such as Airbnb's JavaScript style guide, to maintain code readability and consistency.

5. **Manage State Effectively**: Use Context API or state management libraries like Redux or Recoil for managing global state.

## Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/)
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
