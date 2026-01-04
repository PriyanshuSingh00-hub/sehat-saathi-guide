import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';

/* =======================
   Types
======================= */

export type Language = 'hi' | 'en' | 'bn' | 'mr' | 'bho' | 'mai';

export interface Translations {
  appName: string;
  home: string;
  symptomTracker: string;
  healthTips: string;
  medicineStore: string;
  aiAssistant: string;
  sarkariYojana: string;
  nearbyHospitals: string;
  myProfile: string;
  login: string;
  register: string;
  logout: string;
  loading: string;
  addSymptom: string;
  symptomName: string;
  symptomDescription: string;
  addedOn: string;
  noSymptoms: string;
  emptySymptomError: string;
  search: string;
  addToCart: string;
  cart: string;
  checkout: string;
  total: string;
  address: string;
  payment: string;
  proceedToPayment: string;
  orderPlaced: string;
  askHealth: string;
  send: string;
  welcomeMessage: string;
  healthTipsTitle: string;
  governmentSchemes: string;
  freeHealthcare: string;
  schemes: string;
  eligibility: string;
  apply: string;
  email: string;
  password: string;
  otp: string;
  verifyOtp: string;
  name: string;
  phone: string;
  selectLanguage: string;
  changeLanguage: string;
  price: string;
  quantity: string;
  remove: string;
  emptyCart: string;
  continueShopping: string;
  viewCart: string;
  fullName: string;
  streetAddress: string;
  city: string;
  pincode: string;
  paymentMethod: string;
  cod: string;
  upi: string;
  placeOrder: string;
  orderSuccess: string;
  backToHome: string;
  description: string;
  date: string;
  time: string;
  deleteSymptom: string;
  quickLinks: string;
  legal: string;
  privacyPolicy: string;
  termsConditions: string;
  support: string;
  helpCenter: string;
  feedback: string;
  contact: string;
  followUs: string;
  rightsReserved: string;
}

/* =======================
   Translations (UNCHANGED)
======================= */

const translations: Record<Language, Translations> = {
  hi: {
    appName: 'सेहत साथी',
    home: 'होम',
    symptomTracker: 'लक्षण ट्रैकर',
    healthTips: 'स्वास्थ्य टिप्स',
    medicineStore: 'दवा स्टोर',
    aiAssistant: 'एआई सहायक',
    sarkariYojana: 'सरकारी योजना',
    nearbyHospitals: 'नजदीकी अस्पताल',
    myProfile: 'मेरी प्रोफाइल',
    login: 'लॉगिन',
    register: 'रजिस्टर',
    logout: 'लॉगआउट',
    loading: 'लोड हो रहा है...',
    addSymptom: 'लक्षण जोड़ें',
    symptomName: 'लक्षण का नाम',
    symptomDescription: 'लक्षण का विवरण',
    addedOn: 'जोड़ा गया',
    noSymptoms: 'कोई लक्षण नहीं',
    emptySymptomError: 'कृपया लक्षण का नाम दर्ज करें',
    search: 'खोजें',
    addToCart: 'कार्ट में जोड़ें',
    cart: 'कार्ट',
    checkout: 'चेकआउट',
    total: 'कुल',
    address: 'पता',
    payment: 'भुगतान',
    proceedToPayment: 'भुगतान के लिए आगे बढ़ें',
    orderPlaced: 'ऑर्डर दिया गया',
    askHealth: 'स्वास्थ्य के बारे में पूछें',
    send: 'भेजें',
    welcomeMessage: 'नमस्ते! मैं आपकी स्वास्थ्य सहायक हूं',
    healthTipsTitle: 'स्वास्थ्य टिप्स',
    governmentSchemes: 'सरकारी योजनाएं',
    freeHealthcare: 'मुफ्त स्वास्थ्य सेवा',
    schemes: 'योजनाएं',
    eligibility: 'पात्रता',
    apply: 'आवेदन करें',
    email: 'ईमेल',
    password: 'पासवर्ड',
    otp: 'OTP',
    verifyOtp: 'OTP सत्यापित करें',
    name: 'नाम',
    phone: 'फोन',
    selectLanguage: 'भाषा चुनें',
    changeLanguage: 'भाषा बदलें',
    price: 'कीमत',
    quantity: 'मात्रा',
    remove: 'हटाएं',
    emptyCart: 'आपकी कार्ट खाली है',
    continueShopping: 'खरीदारी जारी रखें',
    viewCart: 'कार्ट देखें',
    fullName: 'पूरा नाम',
    streetAddress: 'सड़क का पता',
    city: 'शहर',
    pincode: 'पिनकोड',
    paymentMethod: 'भुगतान विधि',
    cod: 'कैश ऑन डिलीवरी',
    upi: 'UPI',
    placeOrder: 'ऑर्डर करें',
    orderSuccess: 'ऑर्डर सफल!',
    backToHome: 'होम पर वापस जाएं',
    description: 'विवरण',
    date: 'तारीख',
    time: 'समय',
    deleteSymptom: 'लक्षण हटाएं',
    quickLinks: 'त्वरित लिंक',
    legal: 'कानूनी',
    privacyPolicy: 'गोपनीयता नीति',
    termsConditions: 'नियम और शर्तें',
    support: 'सहायता',
    helpCenter: 'सहायता केंद्र',
    feedback: 'फीडबैक',
    contact: 'संपर्क',
    followUs: 'हमें फॉलो करें',
    rightsReserved: 'सर्वाधिकार सुरक्षित',
  },
  en: {
    appName: 'Sehat Saathi',
    home: 'Home',
    symptomTracker: 'Symptom Tracker',
    healthTips: 'Health Tips',
    medicineStore: 'Medicine Store',
    aiAssistant: 'AI Assistant',
    sarkariYojana: 'Government Schemes',
    nearbyHospitals: 'Nearby Hospitals',
    myProfile: 'My Profile',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    loading: 'Loading...',
    addSymptom: 'Add Symptom',
    symptomName: 'Symptom Name',
    symptomDescription: 'Symptom Description',
    addedOn: 'Added On',
    noSymptoms: 'No Symptoms',
    emptySymptomError: 'Please enter symptom name',
    search: 'Search',
    addToCart: 'Add to Cart',
    cart: 'Cart',
    checkout: 'Checkout',
    total: 'Total',
    address: 'Address',
    payment: 'Payment',
    proceedToPayment: 'Proceed to Payment',
    orderPlaced: 'Order Placed',
    askHealth: 'Ask about health',
    send: 'Send',
    welcomeMessage: 'Hello! I am your health assistant',
    healthTipsTitle: 'Health Tips',
    governmentSchemes: 'Government Schemes',
    freeHealthcare: 'Free Healthcare',
    schemes: 'Schemes',
    eligibility: 'Eligibility',
    apply: 'Apply',
    email: 'Email',
    password: 'Password',
    otp: 'OTP',
    verifyOtp: 'Verify OTP',
    name: 'Name',
    phone: 'Phone',
    selectLanguage: 'Select Language',
    changeLanguage: 'Change Language',
    price: 'Price',
    quantity: 'Quantity',
    remove: 'Remove',
    emptyCart: 'Your cart is empty',
    continueShopping: 'Continue Shopping',
    viewCart: 'View Cart',
    fullName: 'Full Name',
    streetAddress: 'Street Address',
    city: 'City',
    pincode: 'Pincode',
    paymentMethod: 'Payment Method',
    cod: 'Cash on Delivery',
    upi: 'UPI',
    placeOrder: 'Place Order',
    orderSuccess: 'Order Successful!',
    backToHome: 'Back to Home',
    description: 'Description',
    date: 'Date',
    time: 'Time',
    deleteSymptom: 'Delete Symptom',
    quickLinks: 'Quick Links',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    support: 'Support',
    helpCenter: 'Help Center',
    feedback: 'Feedback',
    contact: 'Contact',
    followUs: 'Follow Us',
    rightsReserved: 'All Rights Reserved',
  },
  bn: {
    appName: 'সেহত সাথী',
    home: 'হোম',
    // Add Bengali translations for all keys...
    // For now, falling back to English
    symptomTracker: 'Symptom Tracker',
    healthTips: 'Health Tips',
    medicineStore: 'Medicine Store',
    aiAssistant: 'AI Assistant',
    sarkariYojana: 'Government Schemes',
    nearbyHospitals: 'Nearby Hospitals',
    myProfile: 'My Profile',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    loading: 'Loading...',
    addSymptom: 'Add Symptom',
    symptomName: 'Symptom Name',
    symptomDescription: 'Symptom Description',
    addedOn: 'Added On',
    noSymptoms: 'No Symptoms',
    emptySymptomError: 'Please enter symptom name',
    search: 'Search',
    addToCart: 'Add to Cart',
    cart: 'Cart',
    checkout: 'Checkout',
    total: 'Total',
    address: 'Address',
    payment: 'Payment',
    proceedToPayment: 'Proceed to Payment',
    orderPlaced: 'Order Placed',
    askHealth: 'Ask about health',
    send: 'Send',
    welcomeMessage: 'Hello! I am your health assistant',
    healthTipsTitle: 'Health Tips',
    governmentSchemes: 'Government Schemes',
    freeHealthcare: 'Free Healthcare',
    schemes: 'Schemes',
    eligibility: 'Eligibility',
    apply: 'Apply',
    email: 'Email',
    password: 'Password',
    otp: 'OTP',
    verifyOtp: 'Verify OTP',
    name: 'Name',
    phone: 'Phone',
    selectLanguage: 'Select Language',
    changeLanguage: 'Change Language',
    price: 'Price',
    quantity: 'Quantity',
    remove: 'Remove',
    emptyCart: 'Your cart is empty',
    continueShopping: 'Continue Shopping',
    viewCart: 'View Cart',
    fullName: 'Full Name',
    streetAddress: 'Street Address',
    city: 'City',
    pincode: 'Pincode',
    paymentMethod: 'Payment Method',
    cod: 'Cash on Delivery',
    upi: 'UPI',
    placeOrder: 'Place Order',
    orderSuccess: 'Order Successful!',
    backToHome: 'Back to Home',
    description: 'Description',
    date: 'Date',
    time: 'Time',
    deleteSymptom: 'Delete Symptom',
    quickLinks: 'Quick Links',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    support: 'Support',
    helpCenter: 'Help Center',
    feedback: 'Feedback',
    contact: 'Contact',
    followUs: 'Follow Us',
    rightsReserved: 'All Rights Reserved',
  },
  mr: {
    appName: 'सेहत साथी',
    home: 'होम',
    // Add Marathi translations for all keys...
    // For now, falling back to English
    symptomTracker: 'Symptom Tracker',
    healthTips: 'Health Tips',
    medicineStore: 'Medicine Store',
    aiAssistant: 'AI Assistant',
    sarkariYojana: 'Government Schemes',
    nearbyHospitals: 'Nearby Hospitals',
    myProfile: 'My Profile',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    loading: 'Loading...',
    addSymptom: 'Add Symptom',
    symptomName: 'Symptom Name',
    symptomDescription: 'Symptom Description',
    addedOn: 'Added On',
    noSymptoms: 'No Symptoms',
    emptySymptomError: 'Please enter symptom name',
    search: 'Search',
    addToCart: 'Add to Cart',
    cart: 'Cart',
    checkout: 'Checkout',
    total: 'Total',
    address: 'Address',
    payment: 'Payment',
    proceedToPayment: 'Proceed to Payment',
    orderPlaced: 'Order Placed',
    askHealth: 'Ask about health',
    send: 'Send',
    welcomeMessage: 'Hello! I am your health assistant',
    healthTipsTitle: 'Health Tips',
    governmentSchemes: 'Government Schemes',
    freeHealthcare: 'Free Healthcare',
    schemes: 'Schemes',
    eligibility: 'Eligibility',
    apply: 'Apply',
    email: 'Email',
    password: 'Password',
    otp: 'OTP',
    verifyOtp: 'Verify OTP',
    name: 'Name',
    phone: 'Phone',
    selectLanguage: 'Select Language',
    changeLanguage: 'Change Language',
    price: 'Price',
    quantity: 'Quantity',
    remove: 'Remove',
    emptyCart: 'Your cart is empty',
    continueShopping: 'Continue Shopping',
    viewCart: 'View Cart',
    fullName: 'Full Name',
    streetAddress: 'Street Address',
    city: 'City',
    pincode: 'Pincode',
    paymentMethod: 'Payment Method',
    cod: 'Cash on Delivery',
    upi: 'UPI',
    placeOrder: 'Place Order',
    orderSuccess: 'Order Successful!',
    backToHome: 'Back to Home',
    description: 'Description',
    date: 'Date',
    time: 'Time',
    deleteSymptom: 'Delete Symptom',
    quickLinks: 'Quick Links',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    support: 'Support',
    helpCenter: 'Help Center',
    feedback: 'Feedback',
    contact: 'Contact',
    followUs: 'Follow Us',
    rightsReserved: 'All Rights Reserved',
  },
  bho: {
    appName: 'सेहत साथी',
    home: 'होम',
    // Add Bhojpuri translations for all keys...
    // For now, falling back to English
    symptomTracker: 'Symptom Tracker',
    healthTips: 'Health Tips',
    medicineStore: 'Medicine Store',
    aiAssistant: 'AI Assistant',
    sarkariYojana: 'Government Schemes',
    nearbyHospitals: 'Nearby Hospitals',
    myProfile: 'My Profile',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    loading: 'Loading...',
    addSymptom: 'Add Symptom',
    symptomName: 'Symptom Name',
    symptomDescription: 'Symptom Description',
    addedOn: 'Added On',
    noSymptoms: 'No Symptoms',
    emptySymptomError: 'Please enter symptom name',
    search: 'Search',
    addToCart: 'Add to Cart',
    cart: 'Cart',
    checkout: 'Checkout',
    total: 'Total',
    address: 'Address',
    payment: 'Payment',
    proceedToPayment: 'Proceed to Payment',
    orderPlaced: 'Order Placed',
    askHealth: 'Ask about health',
    send: 'Send',
    welcomeMessage: 'Hello! I am your health assistant',
    healthTipsTitle: 'Health Tips',
    governmentSchemes: 'Government Schemes',
    freeHealthcare: 'Free Healthcare',
    schemes: 'Schemes',
    eligibility: 'Eligibility',
    apply: 'Apply',
    email: 'Email',
    password: 'Password',
    otp: 'OTP',
    verifyOtp: 'Verify OTP',
    name: 'Name',
    phone: 'Phone',
    selectLanguage: 'Select Language',
    changeLanguage: 'Change Language',
    price: 'Price',
    quantity: 'Quantity',
    remove: 'Remove',
    emptyCart: 'Your cart is empty',
    continueShopping: 'Continue Shopping',
    viewCart: 'View Cart',
    fullName: 'Full Name',
    streetAddress: 'Street Address',
    city: 'City',
    pincode: 'Pincode',
    paymentMethod: 'Payment Method',
    cod: 'Cash on Delivery',
    upi: 'UPI',
    placeOrder: 'Place Order',
    orderSuccess: 'Order Successful!',
    backToHome: 'Back to Home',
    description: 'Description',
    date: 'Date',
    time: 'Time',
    deleteSymptom: 'Delete Symptom',
    quickLinks: 'Quick Links',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    support: 'Support',
    helpCenter: 'Help Center',
    feedback: 'Feedback',
    contact: 'Contact',
    followUs: 'Follow Us',
    rightsReserved: 'All Rights Reserved',
  },
  mai: {
    appName: 'सेहत साथी',
    home: 'होम',
    // Add Maithili translations for all keys...
    // For now, falling back to English
    symptomTracker: 'Symptom Tracker',
    healthTips: 'Health Tips',
    medicineStore: 'Medicine Store',
    aiAssistant: 'AI Assistant',
    sarkariYojana: 'Government Schemes',
    nearbyHospitals: 'Nearby Hospitals',
    myProfile: 'My Profile',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    loading: 'Loading...',
    addSymptom: 'Add Symptom',
    symptomName: 'Symptom Name',
    symptomDescription: 'Symptom Description',
    addedOn: 'Added On',
    noSymptoms: 'No Symptoms',
    emptySymptomError: 'Please enter symptom name',
    search: 'Search',
    addToCart: 'Add to Cart',
    cart: 'Cart',
    checkout: 'Checkout',
    total: 'Total',
    address: 'Address',
    payment: 'Payment',
    proceedToPayment: 'Proceed to Payment',
    orderPlaced: 'Order Placed',
    askHealth: 'Ask about health',
    send: 'Send',
    welcomeMessage: 'Hello! I am your health assistant',
    healthTipsTitle: 'Health Tips',
    governmentSchemes: 'Government Schemes',
    freeHealthcare: 'Free Healthcare',
    schemes: 'Schemes',
    eligibility: 'Eligibility',
    apply: 'Apply',
    email: 'Email',
    password: 'Password',
    otp: 'OTP',
    verifyOtp: 'Verify OTP',
    name: 'Name',
    phone: 'Phone',
    selectLanguage: 'Select Language',
    changeLanguage: 'Change Language',
    price: 'Price',
    quantity: 'Quantity',
    remove: 'Remove',
    emptyCart: 'Your cart is empty',
    continueShopping: 'Continue Shopping',
    viewCart: 'View Cart',
    fullName: 'Full Name',
    streetAddress: 'Street Address',
    city: 'City',
    pincode: 'Pincode',
    paymentMethod: 'Payment Method',
    cod: 'Cash on Delivery',
    upi: 'UPI',
    placeOrder: 'Place Order',
    orderSuccess: 'Order Successful!',
    backToHome: 'Back to Home',
    description: 'Description',
    date: 'Date',
    time: 'Time',
    deleteSymptom: 'Delete Symptom',
    quickLinks: 'Quick Links',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    support: 'Support',
    helpCenter: 'Help Center',
    feedback: 'Feedback',
    contact: 'Contact',
    followUs: 'Follow Us',
    rightsReserved: 'All Rights Reserved',
  },
};

/* =======================
 
   Language Names
======================= */

const languageNames: Record<Language, string> = {
  hi: 'हिंदी',
  en: 'English',
  bn: 'বাংলা',
  mr: 'मराठी',
  bho: 'भोजपुरी',
  mai: 'मैथिली',
};

/* =======================
   Context Type
======================= */

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;

  /** ✅ Old usage supported: t.home */
  t: Translations;

  /** ✅ New safer usage: translate('home') */
  translate: (key: keyof Translations) => string;

  languageNames: Record<Language, string>;
  availableLanguages: Language[];
  currentLanguageName: string;
}

/* =======================
   Context
======================= */

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

/* =======================
   Helper: Safe Translation
======================= */

const safeTranslate = (
  lang: Language,
  key: keyof Translations
): string => {
  const value =
    translations[lang]?.[key] ?? translations.en[key];

  if (!value && import.meta.env.DEV) {
    console.warn(
      `[i18n] Missing translation key "${key}" for language "${lang}"`
    );
  }

  return value ?? key;
};

/* =======================
   Provider
======================= */

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'hi';
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'hi';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  /* 🔒 Create safe proxy so old code (t.home) never crashes */
  const safeT = useMemo(() => {
    return new Proxy(translations[language], {
      get(target, prop: string) {
        return safeTranslate(language, prop as keyof Translations);
      },
    }) as Translations;
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t: safeT,
    translate: (key) => safeTranslate(language, key),
    languageNames,
    availableLanguages: ['hi', 'en', 'bn', 'mr', 'bho', 'mai'],
    currentLanguageName: languageNames[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

/* =======================
   Hook
======================= */

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider'
    );
  }
  return context;
};
