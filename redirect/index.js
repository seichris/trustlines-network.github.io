// (function () {

//   function openAppIos(deepPath) {

//     //window.location = 'trustlines://' + deepPath;
//     document.getElementById('loader').src = 'trustlines://' + deepPath;
//     console.log('open ios ', deepPath)
//   }

//   function openAppAndroid() {
//     console.log('open android ', deepPath)
//   }

//   function getDeepPath(location) {
//     return location && location.hash && location.hash.replace(/^\#/, '').replace(/^\//, '') || 'index/home'
//   }

//   function openApp(deepPath) {

//     var fallbackLink = 'https://trustlines.network';
//     var isiOS = navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod'),
//       isAndroid = navigator.userAgent.match('Android'),
//       isWindow = navigator.userAgent.match('Windows Phone');

//     var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

//     if (isiOS || isAndroid || isWindow) {
//       var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
//       var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

//       if (isChrome) {
//         isiOS ? openAppIos(deepPath) : openAppAndroid(deepPath)
//       } else {
//         isiOS ? openAppIos(deepPath) : openAppAndroid(deepPath)
//       }

//       fallbackLink = isAndroid ?
//         //'https://play.google.com/store/apps/details?id=com.mycompany.myapp' :
//         'https://google.de/search#q=android' :
//         'https://google.de/search#q=ios';
//     }

// // Now we just wait for everything to execute, if the user is redirected to your custom app
// // the timeout below will never fire, if a custom app is not present (or the user is on the Desktop)
// // we will replace the current URL with the fallbackLink (store URL or desktop URL as appropriate)
//     window.setTimeout(function () {
//       console.log("fallback timeout", fallbackLink)
//       //window.location = fallbackLink;
//     }, 1000);
//   };

//   window.onload = function () {
//     var deepPath = getDeepPath(window.location)
//     openApp(deepPath)
//   };
// })()
function start () {
  setTimeout(function() {
    console.log('No app installed')
  }, 500);

  window.location = "trustlines://trustlines.network" + location.pathname;
}


window.addEventListener('load', function() {
  start()
});


// setTimeout(function() {
//   window.location = "https://itunes.apple.com/app/trustlines-network/id1274919729";
// }, 25);

// // If "custom-uri://" is registered the app will launch immediately and your
// // timer won't fire. If it's not set, you'll get an ugly "Cannot Open Page"
// // dialogue prior to the App Store application launching
// window.location = "custom-uri://";