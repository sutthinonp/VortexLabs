const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// ====================
// ปรับเพิ่มสำหรับ SVG
// ====================

// เอา .svg ออกจาก assetExts
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== "svg");

// เพิ่ม .svg เข้าไปใน sourceExts
config.resolver.sourceExts.push("svg");

// ใช้ react-native-svg-transformer สำหรับไฟล์ .svg
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

// ====================
// Apply Nativewind config ต่อไป
// ====================

module.exports = withNativeWind(config, { input: "./app/global.css" });
