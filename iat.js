// iat.js (AMD module)
define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'],
function(APIConstructor, iatExtension){
  var API = new APIConstructor();

  return iatExtension({
    category1: {
      name: 'Flowers',
      title: { media: {word:'Flowers'}, css:{color:'#31940F','font-size':'2em'}, height:4 },
      stimulusMedia: [{word:'Rose'},{word:'Tulip'},{word:'Daffodil'},{word:'Orchid'}],
      stimulusCss: {color:'#31940F','font-size':'1.8em'}
    },
    category2: {
      name: 'Insects',
      title: { media: {word:'Insects'}, css:{color:'#31940F','font-size':'2em'}, height:4 },
      stimulusMedia: [{word:'Ant'},{word:'Beetle'},{word:'Wasp'},{word:'Moth'}],
      stimulusCss: {color:'#31940F','font-size':'1.8em'}
    },
    // If you use images, host them (https) and set:
    // base_url: { image: 'https://maikeschl.github.io/IAT/images/' },
    // isTouch: true,    // if you allow phones/tablets
    // fullscreen: true  // optional
  });
});
