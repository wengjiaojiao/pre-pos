function collect_same_elements(collection_a, object_b) {
      var  collection= [];
      for (var  i = 0;  i < collection_a.length; i ++){
            for(var k = 0; k< object_b.value.length;k++){
                    if(collection_a[i].key ==object_b.value[k]){
                          collection.push(object_b.value[k]);
                     }
             }
       }
       return collection;
}
module.exports = collect_same_elements;
