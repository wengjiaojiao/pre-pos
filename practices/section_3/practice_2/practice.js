function create_updated_collection(collection_a, object_b) {
  for(var i=0;i<collection_a.length;i++){
       for(var k=0;k<object_b.value.length;k++){
         var x=0;
            if(collection_a[i].key==object_b.value[k]){
                      x=  parseInt(collection_a[i].count/3);
                     collection_a[i].count= collection_a[i].count-x ;
            }
     }
  }
  return collection_a;
}
module.exports = create_updated_collection;
