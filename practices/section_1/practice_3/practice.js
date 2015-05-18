function collect_same_elements(collection_a, object_b) {
      var  collect= [];
      for (var  i = 0;  i < collection_a.length; i ++){
            for(var k = 0; k < object_b.value.length; k++){
           if(collection_a [i] ==object_b.value[k]){
                 collect.push(collection_a[i]);
           }
    }
}
       return collect;

}

module.exports = collect_same_elements;
