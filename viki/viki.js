var vm = new Vue({
el: "#app",
data:{
  query:"Википедия",
  description:"",
  downloading: false
  
},
methods:{
  search:function() {
  var self=this;
  self.downloading= true;
  $.ajax({
    url:"https://ru.wikipedia.org/w/api.php",
    jsonp:"callback",
    dataType:"jsonp",
    data: {
      action:"query",
      prop:"extracts",
      format:"json",
      exintro:"",
      redirects:"1",
      titles:self.query
    },
    success:function(response){
      var pages = response.query.pages,pageId,page;
      for(pageId in pages){
        if(pageId == -1){
          self.description = "NO";
} else {
          page = pages[pageId];
          self.description =page.extract;
        }
        break;
      }
      self.downloading = false;
}

});
}
}
});

vm.search();
