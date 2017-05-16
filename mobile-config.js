App.info({
  id: 'org.singularities.felicidades-marta',
  name: 'Felicidades Marta',
  version: "0.0.2"
});

App.icons({
  'android_mdpi': 'icons/icon-48.png', // (48x48)
  'android_hdpi':   'icons/icon-72.png', // (72x72)
  'android_xhdpi':  'icons/icon-96.png', // (96x96)
  'android_xxhdpi': 'icons/icon-144.png', // (144x144)
  'android_xxxhdpi': 'icons/icon-192.png' // (192x192)
});

App.launchScreens({
//  'android_ldpi_portrait': 'splash/android-ldpi.png', // 200x320
//  'android_mdpi_portrait': 'splash/android-mdpi.png', // 320x480
  'android_hdpi_portrait': 'splash/android-hdpi.png', // 480x800
  'android_xhdpi_portrait': 'splash/android-xhdpi.png' //  720x1280
});

App.accessRule('*youtube*', { type: 'navigation' });
App.accessRule('*ytimg*', { type: 'navigation' });

App.appendToConfig(`
  <preference name="AllowInlineMediaPlayback" value="true" />
  <preference name="MediaPlaybackRequiresUserAction" value="false" /> 
`);
