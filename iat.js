define(['pipAPI','https://baranan.github.io/minno-tasks/quiat8.js'],
function(APIConstructor, iatExtension){
  var API = new APIConstructor();

  // auto-detect touch so one file works for desktop + mobile
  var isTouch =
    ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0) ||
    (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);

  return iatExtension({
    isTouch,               // tap UI on touch; keyboard on desktop
    fullscreen: isTouch,   // optional: cleaner UX on phones


    // ---- Your categories (words) ----
    category1: {
      name: 'Black people',
      title: { media:{word:'Black people'}, css:{color:'#31940F','font-size':'2em'}, height:4 },
      stimulusMedia: [
        {word:'WordA1'},{word:'WordA2'},{word:'WordA3'},
        {word:'WordA4'},{word:'WordA5'},{word:'WordA6'}
      ],
      stimulusCss: {color:'#31940F','font-size':'1.8em'}
    },

    category2: {
      name: 'White people',
      title: { media:{word:'White people'}, css:{color:'#31940F','font-size':'2em'}, height:4 },
      stimulusMedia: [
        {word:'WordB1'},{word:'WordB2'},{word:'WordB3'},
        {word:'WordB4'},{word:'WordB5'},{word:'WordB6'}
      ],
      stimulusCss: {color:'#31940F','font-size':'1.8em'}
    }

    // Note: no base_url needed for words
    // Optional: fullscreen on phones to reduce distractions:
    // fullscreen: isTouch
  });
});
