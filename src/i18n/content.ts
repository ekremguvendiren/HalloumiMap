import { type Dictionary, Locales } from 'intlayer';

const content = {
    key: 'app',
    content: {
        common: {
            loading: {
                en: 'Loading...',
                tr: 'Yükleniyor...',
                el: 'Φόρτωση...',
                ru: 'Загрузка...',
            },
            error: {
                en: 'Error',
                tr: 'Hata',
                el: 'Σφάλμα',
                ru: 'Ошибка',
            },
            success: {
                en: 'Success',
                tr: 'Başarılı',
                el: 'Επιτυχία',
                ru: 'Успешно',
            },
        },
        map: {
            radar_ahead: {
                en: 'Attention! {speed}km speed camera ahead.',
                tr: "Dikkat, {speed}'lik radar var!",
                el: 'Προσοχή! Κάμερα ταχύτητας {speed} χλμ μπροστά.',
                ru: 'Внимание, радар на {speed}!',
            },
            police_ahead: {
                en: 'Caution! Police control point ahead.',
                tr: 'Dikkat! İleride polis kontrolü var.',
                el: 'Προσοχή! Σημείο ελέγχου αστυνομίας μπροστά.',
                ru: 'Осторожно! Впереди полицейский пост.',
            },
            hazard_ahead: {
                en: 'Warning! Road hazard approaching.',
                tr: 'Uyarı! Yolda tehlike var.',
                el: 'Προειδοποίηση! Κίνδυνος στο δρόμο.',
                ru: 'Предупреждение! Опасность на дороге.',
            },
            traffic_ahead: {
                en: 'Traffic congestion ahead.',
                tr: 'İleride trafik sıkışıklığı var.',
                el: 'Κυκλοφοριακή συμφόρηση μπροστά.',
                ru: 'Впереди пробка. Возможны задержки.',
            },
            still_there: {
                en: 'Is the {type} still there?',
                tr: 'Bu {type} hâlâ orada mı?',
                el: 'Είναι το {type} ακόμα εκεί;',
                ru: '{type} все еще там?',
            },
            yes_verify: {
                en: 'Yes (+5 XP)',
                tr: 'Evet (+5 XP)',
                el: 'Ναι (+5 XP)',
                ru: 'Да (+5 XP)',
            },
            no_verify: {
                en: 'No',
                tr: 'Hayır',
                el: 'Όχι',
                ru: 'Нет',
            },
            test_mode: {
                en: 'TEST MODE ACTIVE',
                tr: 'TEST MODU AKTİF',
                el: 'ΛΕΙΤΟΥΡΓΙΑ ΔΟΚΙΜΗΣ',
                ru: 'РЕЖИМ ТЕСТИРОВАНИЯ',
            },
            recenter: {
                en: 'Recenter',
                tr: 'Ortala',
                el: 'Επανακεντράρισμα',
                ru: 'Центрировать',
            },
            permission_denied: {
                en: 'Location Required',
                tr: 'Konum İzni Gerekli',
                el: 'Απαιτείται Τοποθεσία',
                ru: 'Требуется геолокация',
            },
        },
        clans: {
            territory_owner: {
                en: 'Territory Owner',
                tr: 'Bölge Hakimi',
                el: 'Κάτοχος Περιοχής',
                ru: 'Владелец территории',
            },
            join_clan: {
                en: 'Join Clan',
                tr: 'Klana Katıl',
                el: 'Εγγραφή σε Ομάδα',
                ru: 'Вступить в клан',
            },
            create_clan: {
                en: 'Create Clan',
                tr: 'Klan Oluştur',
                el: 'Δημιουργία Ομάδας',
                ru: 'Создать клан',
            },
        },
        profile: {
            settings: {
                en: 'Settings',
                tr: 'Ayarlar',
                el: 'Ρυθμίσεις',
                ru: 'Настройки',
            },
            ghost_mode: {
                en: 'Ghost Mode',
                tr: 'Hayalet Modu',
                el: 'Λειτουργία Φάντασμα',
                ru: 'Призрачный режим',
            },
            language: {
                en: 'Language',
                tr: 'Dil',
                el: 'Γλώσσα',
                ru: 'Язык',
            },
            stats: {
                en: 'Stats',
                tr: 'İstatistikler',
                el: 'Στατιστικά',
                ru: 'Статистика',
            },
            badges: {
                en: 'Badges',
                tr: 'Rozetler',
                el: 'Σήματα',
                ru: 'Значки',
            },
        },
        // Adding optional keys found in RU that were missing in others, defaulting to sensible values
        auth: {
            login_title: {
                en: 'Login to HellumiMap',
                tr: 'HellumiMap\'e Giriş Yap',
                el: 'Σύνδεση στο HellumiMap',
                ru: 'Войти в HellumiMap',
            },
            google_continue: {
                en: 'Continue with Google',
                tr: 'Google ile Devam Et',
                el: 'Συνέχεια με Google',
                ru: 'Продолжить с Google',
            },
            email: {
                en: 'Email',
                tr: 'E-posta',
                el: 'Email',
                ru: 'Эл. почта',
            },
            password: {
                en: 'Password',
                tr: 'Şifre',
                el: 'Κωδικός',
                ru: 'Пароль',
            },
            sign_in: {
                en: 'Sign In',
                tr: 'Giriş Yap',
                el: 'Σύνδεση',
                ru: 'Войти',
            },
            login_failed: {
                en: 'Login Failed',
                tr: 'Giriş Başarısız',
                el: 'Αποτυχία Σύνδεσης',
                ru: 'Ошибка входа',
            },
            forgot_password: {
                en: 'Forgot?',
                tr: 'Unuttun mu?',
                el: 'Ξεχάσατε;',
                ru: 'Забыли?',
            },
            no_account: {
                en: "Don't have an account?",
                tr: 'Hesabın yok mu?',
                el: 'Δεν έχετε λογαριασμό;',
                ru: 'Нет аккаунта?',
            },
            sign_up: {
                en: 'Sign Up',
                tr: 'Kayıt Ol',
                el: 'Εγγραφή',
                ru: 'Регистрация',
            },
            guest_login: {
                en: 'Guest / Test Login 🕵️',
                tr: 'Misafir Girişi 🕵️',
                el: 'Είσοδος Επισκέπτη 🕵️',
                ru: 'Гостевой вход 🕵️',
            },
            terms: {
                en: 'By continuing, you agree to our Terms of Service and Privacy Policy.',
                tr: 'Devam ederek Hizmet Şartları ve Gizlilik Politikamızı kabul etmiş olursunuz.',
                el: 'Συνεχίζοντας, συμφωνείτε με τους Όρους Χρήσης και την Πολιτική Απορρήτου.',
                ru: 'Продолжая, вы соглашаетесь с нашими Условиями использования и Политикой конфиденциальности.',
            }
        }
    },
} satisfies Dictionary;

export default content;
