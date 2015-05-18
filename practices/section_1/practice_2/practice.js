function collect_same_elements(collection_a, collection_b) {
  var  collect= [];
  for (var  i = 0;  i < collection_a.length; i ++){
     for(var k= 0; k< collection_b[0].length;k++){
           if(collection_a [i] ==collection_b[0][k]){
                 collect.push(collection_a[i]);
           }
       }
   }
       return collect;
}
module.exports = collect_same_elements;
