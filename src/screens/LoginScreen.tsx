import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../services/supabase';
import { COLORS } from '../constants/colors';
import { useIntlayer } from 'react-intlayer';

const LoginForm = () => {
    const navigation = useNavigation<any>();
    const { auth, common } = useIntlayer('app');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert(common.error.value, "Please enter email and password.");
            return;
        }
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        setLoading(false);
        if (error) Alert.alert(auth.login_failed.value, error.message);
    };

    const handleForgotPassword = async () => {
        if (!email) {
            Alert.alert(common.error.value, "Please enter your email first to reset password.");
            return;
        }
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) Alert.alert(common.error.value, error.message);
        else Alert.alert(common.success.value, "Check your email for password reset link.");
    };

    return (
        <View className="mb-4">
            <Text className="text-gray-500 mb-1 ml-1 text-xs uppercase font-bold">{auth.email.value}</Text>
            <TextInput
                className="bg-gray-100 p-4 rounded-xl mb-3 text-gray-800 border border-gray-200"
                placeholder="hello@example.com"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />

            <Text className="text-gray-500 mb-1 ml-1 text-xs uppercase font-bold">{auth.password.value}</Text>
            <View className="mb-4">
                <TextInput
                    className="bg-gray-100 p-4 rounded-xl text-gray-800 border border-gray-200"
                    placeholder="••••••••"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity onPress={handleForgotPassword} className="absolute right-4 top-4">
                    <Text className="text-orange-500 text-xs font-bold">{auth.forgot_password.value}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={handleLogin}
                disabled={loading}
                className={`p-4 rounded-xl items-center shadow-sm ${loading ? 'bg-gray-400' : 'bg-gray-900'}`}
            >
                {loading ? <ActivityIndicator color="white" /> : <Text className="text-white font-bold text-lg">{auth.sign_in.value}</Text>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')} className="mt-4 items-center">
                <Text className="text-gray-500">{auth.no_account.value} <Text className="text-orange-500 font-bold">{auth.sign_up.value}</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

export const LoginScreen = () => {
    const { auth } = useIntlayer('app');

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 px-8 justify-center items-center">
                {/* Logo or Mascot */}
                <Image
                    source={require('../../assets/hellumi_logo.png')}
                    style={{ width: 140, height: 140, borderRadius: 30, marginBottom: 32 }}
                    resizeMode="contain"
                />

                <Text className="text-3xl font-bold text-gray-900 mb-12">Halloumi Map</Text>

                <View className="w-full">
                    {/* Access existing nav */}
                    {/* We need to useNavigation hook or prop if not present, but simplified here assuming standard component usage inside screen */}

                    <LoginForm />

                    {/* Guest Login for Testing */}
                    <TouchableOpacity
                        onPress={async () => {
                            const { error } = await import('../services/supabase').then(m => m.supabase.auth.signInAnonymously());
                            if (error) alert(error.message);
                        }}
                        className="mt-4 p-3 bg-gray-100 rounded-xl items-center"
                    >
                        <Text className="text-gray-500 font-bold text-xs">{auth.guest_login.value}</Text>
                    </TouchableOpacity>
                </View>

                <Text className="text-xs text-gray-400 mt-8 text-center px-8">
                    {auth.terms.value}
                </Text>
            </View>
        </SafeAreaView>
    );
};
