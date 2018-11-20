import { NativeModules } from 'react-native';

const { RNCustomerly } = NativeModules;

module.exports = {
  openSupport: callback => {
    if (callback) {
      RNCustomerly.openSupport(callback);
    } else {
      RNCustomerly.openSupport();
    }
  },
  registerUser: (email, userId, name, callback) => {
    RNCustomerly.registerUser(email, String(userId), name, callback);
  }
};

// export default function configure(appId, widgetColor) {
//     NativeModules.RNCustomerly.configure(appId, widgetColor);
// }

// registerUser(email, userId, name, attributes, company, callback) {
//   RNCustomerly.registerUser(email, userId, name, attributes, company, callback);
// }

// logoutUser() {
//   RNCustomerly.logoutUser((_null_) => { });
// }

// openSupport() {
//   RNCustomerly.openSupport((_null_) => { });
// }

// isSdkAvailable(callback) {
//   RNCustomerly.isSdkAvailable(callback);
// }

// setAttributes(attributes, callback) {
//   RNCustomerly.setAttributes(attributes, callback);
// }

// setCompany(company, callback) {
//   RNCustomerly.setCompany(attributes, callback);
// }

// setSupportEnabled(enabled, callback) {
//   RNCustomerly.setSupportEnabled(enabled, callback);
// }

// isSupportEnabled(callback) {
//   RNCustomerly.isSupportEnabled(callback);
// }

// setSurveyEnabled(enabled, callback) {
//   RNCustomerly.setSurveyEnabled(enabled, callback);
// }

// isSurveyEnabled(callback) {
//   RNCustomerly.isSurveyEnabled(callback);
// }

// trackEvent(eventName, callback) {
//   RNCustomerly.trackEvent(eventName, callback);
// }

// update(callback) {
//   RNCustomerly.update(callback);
// }

// setVerboseLogging(enabled, callback) {
//   RNCustomerly.setVerboseLogging(enabled, callback);
// }

// setAttachmentsAvailable(enabled, callback) {
//   RNCustomerly.setAttachmentsAvailable(enabled, callback);
// }
