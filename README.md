# React Native Sample App

[React Native Documentation](https://dev.wsc-sports.com/docs/react-native-sdk-init "React Native  Documentation")


Use this repo as a reference for integrating Blaze sdk in your React Native App.

## Building the Sample App

### Android
### GitHub Package Authentication
GitHub Packages require authentication to download Android libraries hosted on GitHub, whether they are public or private.

**Step 1: Generate a Personal Access Token for GitHub**

1. Log in to your GitHub account.
2. Go to **Settings -> Developer Settings -> Personal Access Tokens**.
3. Generate a new token with the "read:packages" scope.
4. Copy your new personal access token. Remember, you cannot view it again; you can only generate a new key.
You can find more detailed instructions on creating a GitHub Personal Access Token [here]([https://docs.github.com/en/authentication/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)).

** Step 2: Store Your GitHub Personal Access Token Details**


Within your root Android project, locate the gradle.properties file. Ensure that you add this file to your .gitignore to keep the token private.

Add the following properties:

`gprUsr=GITHUB_USERID`
`gprKey=PERSONAL_ACCESS_TOKEN`
Replace GITHUB_USERID with your personal or organization GitHub User ID, and replace PERSONAL_ACCESS_TOKEN with the token generated in Step 1.

Alternatively, you can also add the properties and values to your environment variables on your local machine or build server to avoid adding them to the gradle.properties file.

### Install the Package
To install the package, run the following command in your terminal:

`yarn`
## iOS Environment Setup
In the iOS environment, follow these steps:

In the project's root folder, run:

`bundle install`
Navigate to the example/ios folder and execute:

`bundle exec pod install`
Running the Sample App
Once the setup is complete, you can run the sample app as follows:

Return to the example folder and open Metro:
`yarn start`

With Metro running, you have two options for building the sample app:

- Open example.xcworkspace with Xcode to build the iOS sample app.
- Open the example/android folder with Android Studio to build the Android sample app.

Integration with Your SDK
In the React App component, you'll need to replace <API_KEY> with your actual API key to initialize your SDK.

Replace <API_KEY> with your actual API key for SDK initialization.

`const apiKey = "<API_KEY>";`

With these organized and clear instructions, users should be able to set up and use your React Native SDK sample app with ease.

App also uses Github packages for SDK and before using the app you are required 
To setup an access token. 
Further details can be found here
[Getting Started](https://dev.wsc-sports.com/docs/sdk-integration-android)

For help with Blaze, please check our [Documentation and User Guide](https://dev.wsc-sports.com/docs/getting-started)

## License

```
Copyright 2023 WSC Sports

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
