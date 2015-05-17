function collect_same_elements(collection_a, collection_b) {
  var collection=[];
  for( var i=0;i<collection_a.length;i++){
       for (var k=0;k<collection_b.length;i++){
          if(collection_a[i]==collection_b[k]){
                  collection[]=collection_a[i];
         }
       }
      return collection;
  }

module.exports = collect_same_elements;
