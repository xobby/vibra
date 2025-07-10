<br />

# 🌟 Vibra - The Official ChillSpot Social Platform

<p align="center">
  <img src="/public/logo.png" alt="Vibra by ChillSpot" width="200"/>
  
  [![Vibra](https://img.shields.io/badge/Visit-Vibra-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://chillspot.it)
</p>

<p align="center">
  The next-gen social experience for ChillSpot community. Connect, share, and vibe together! 🎵
</p>

## 🌟 Features

- **Authentic Connections** - Secure login with multiple providers
- **Express Yourself** - Share your thoughts, music, and moments
- **Vibing Together** - Like, comment, and share posts
- **Stay Updated** - Real-time notifications and trending content
- **Your Space** - Customizable profile with unique Vibra themes
- **Music First** - Integrated music sharing from ChillSpot playlists
- **Responsive Design** - Perfect on any device

## 🎵 Why Choose Vibra?

- **Exclusive Community** - Connect with fellow ChillSpot enthusiasts
- **Seamless Integration** - Works perfectly with your ChillSpot account
- **Privacy Focused** - Your data stays yours
- **Ad-Free Experience** - Focus on what matters - your vibes
- **Constantly Evolving** - Regular updates with new features

## 🛠️ Built With

- **Frontend**: Next.js & React
- **Styling**: Tailwind CSS
- **Backend**: Firebase
- **Type Safety**: TypeScript
- **Animations**: Framer Motion

## 🚀 Getting Started

Join the Vibra community today and start sharing your moments with ChillSpot!

1. Visit [Vibra](https://chillspot.it)
2. Sign up with your ChillSpot account
3. Set up your profile
4. Start connecting with friends and discover new content!

### For Developers

Want to contribute? Here's how to set up the development environment:

1. Clone the repository

   ```bash
   git clone https://github.com/chillspot/vibra.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables
   - Copy `.env.example` to `.env.local`
   - Fill in your Firebase configuration

4. Start the development server

   ```bash
   npm run dev
   ```

## 🤝 Contributing

We welcome contributions from the community! Please read our [contributing guidelines](CONTRIBUTING.md) before submitting pull requests.

## 📝 License

Vibra is developed and maintained by the ChillSpot team. All rights reserved.

## 🙏 Acknowledgments

Special thanks to the open-source community for their invaluable contributions and the original developers who made this project possible.

      1. Run the project

         ```bash
         npm run dev
         ```

   1. Using Firebase Local Emulator:

      1. Install [Java JDK version 11 or higher](https://jdk.java.net/) before proceeding. This is required to run the emulators.

      1. Set the environment variable `NEXT_PUBLIC_USE_EMULATOR` to `true` in `.env.development`. This will make the app use the emulators instead of the cloud backend.

      1. At this point, you can run the following command to have a fully functional Twitter clone running locally:

         ```bash
         npm run dev:emulators
         ```

> **_Note_**: When you deploy Firestore indexes rules, it might take a few minutes to complete. So before the indexes are enabled, you will get an error when you fetch the data from Firestore.<br><br>You can check the status of your Firestore indexes with the link below, replace `your-project-id` with your project ID: https://console.firebase.google.com/u/0/project/your-project-id/firestore/indexes

Optional:

- If you want to get trending data from Twitter API, you need to create a Twitter developer account and get your API keys. Then add your API keys to `.env.development`. I hope Elon Musk doesn't make this API paid 😅.
- If you want to make the user stats synced with the deleted tweets, you need to enable the Cloud Functions for Firebase. Then deploy the Cloud Functions.
