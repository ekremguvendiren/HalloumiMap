import * as Speech from 'expo-speech';

export const VoiceService = {
    /**
     * Speak a warning message to the user
     * @param message Text to speak
     * @param language Optional language code
     */
    speak: (message: string, language: string = 'en') => {
        Speech.speak(message, {
            language: language,
            pitch: 1.0,
            rate: 0.9,
        });
    },

    /**
     * Stop any current speech
     */
    stop: () => {
        Speech.stop();
    },
};
