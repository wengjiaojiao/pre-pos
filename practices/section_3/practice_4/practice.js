function create_updated_collection(collection_a, object_b) {
  var sum={};
 var sum_list=[];
 var test=true;
 for (i=0;i<collection_a.length-1;i++){
   if(test){
     sum={key:collection_a[i],count:0};//生成（替换上一条）一条sum数据。
     test=false;
   }
   sum.count=sum.count+1;//统计相同字母的数量。
   if(collection_a[i]!=collection_a[i+1]){
     sum_list.push(sum);//将sum数据存入sum_list中。
     test=true;
     }
 }
 var letter=collection_a[collection_a.length-1].substring(0, 1);
 var num=parseInt(collection_a[collection_a.length-1].substring(collection_a[collection_a.length-1].length-1));
 var sum1={key:letter,count:num};
 sum_list.push(sum1);
 for(var i=0;i<sum_list.length;i++){
      for(var k=0;k<object_b.value.length;k++){
        var x=0;
           if(sum_list[i].key==object_b.value[k]){
                     x=  parseInt(sum_list[i].count/3);
                  sum_list[i].count= sum_list[i].count-x ;
           }
    }
 }
     return sum_list;
}
module.exports = create_updated_collection;
