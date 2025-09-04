define(['pipAPI','https://baranan.github.io/minno-tasks/quiat8.js'], 
function(APIConstructor, iatExtension){
  var API = new APIConstructor();
  return iatExtension({
    // isTouch: true, // uncomment if you allow phones/tablets

    category1: {
      name: 'Black people',
      title: { media:{word:'Black people'}, css:{color:'#31940F','font-size':'2em'}, height:4 },
      stimulusMedia: [
        {word:'WordA1'},{word:'WordA2'},{word:'WordA3'},{word:'WordA4'},{word:'WordA5'},{word:'WordA6'}
      ],
      stimulusCss: {color:'#31940F','font-size':'1.8em'}
    },

    category2: {
      name: 'White people',
      title: { media:{word:'White people'}, css:{color:'#31940F','font-size':'2em'}, height:4 },
      stimulusMedia: [
        {word:'WordB1'},{word:'WordB2'},{word:'WordB3'},{word:'WordB4'},{word:'WordB5'},{word:'WordB6'}
      ],
      stimulusCss: {color:'#31940F','font-size':'1.8em'}
    },

    // No base_url needed when using words only
    // base_url: { image: '' }
  });
});
