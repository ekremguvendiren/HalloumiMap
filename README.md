# HalloumiMap 
 
> Real-time collaborative navigation, clan territories, and community-driven road safety.

HellumiMap is a social mapping application built specifically for the unique driving culture of Cyprus. It combines real-time hazard reporting (Speed Cameras, Police, Traffic) with gamification elements like XP, Tiers, and Clan Territories.

## ✨ Features

- **📍 Real-Time Reporting**: Users can pin hazards (Speed Cams, Police, Traffic) on the map.
- **🛡️ Geofencing & Voice Alerts**: Get spoken warnings when approaching a reported hazard (even in background).
- **🏰 Clan System**: Join a clan (e.g., "Orange Rebels"), capture territories, and see your clan's color dominating the map.
- **🎮 Gamification (Müdavim)**: Earn XP, unlock tiers (Traveler -> Explorer -> Müdavim), and collect badges for your profile.
- **🌍 Multi-Language**: Fully localized in **Turkish (TR)**, **English (EN)**, **Greek (EL)**, and **Russian (RU)**.
- **😎 Emoji Avatars**: Use custom emojis as your map marker with clan-colored borders.
- **🔋 Live EV Charging**: Real-time status of charging stations (Open Charge Map).
- **🚧 Green Line Zone**: UN Buffer Zone simulation with Elite Guardian Bots.
- **🔐 Social Auth**: Seamless "Continue with Google" integration.
- **👻 Ghost Mode**: Browse the map anonymously without sharing your location.

## 🛠 Tech Stack

- **Framework**: [React Native (Expo SDK 50+)](https://expo.dev)
- **Language**: TypeScript
- **Styling**: [NativeWind (Tailwind CSS)](https://www.nativewind.dev/)
- **Maps**: `react-native-maps` (Google Maps Provider)
- **Backend & Realtime**: [Supabase](https://supabase.com) (PostgreSQL)
- **Auth**: `expo-auth-session` + Supabase Auth (Google)
- **I18n**: `i18next` + `expo-localization`

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- Expo Go app on your phone (iOS/Android)
- Supabase Account

## 🗄️ Database Schema

The project uses Supabase. Run the following SQL scripts (found in `docs/` or generated artifacts) to set up your database:
1.  **Profiles**: Custom user profiles with XP and Emoji Avatars.
2.  **Reports**: Geolocation data for hazards.
3.  **Clans**: Territory management tables.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](LICENSE)
