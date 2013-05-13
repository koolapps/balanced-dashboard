Balanced.Transaction = Balanced.Model.extend({
    web_uri: function() {
        return Balanced.MigrationUtils.convertApiUriIntoWebUri(this.get('uri'));
    }.property('uri'),

    embedded_iframe_url: function() {
        return this.get('web_uri') + Balanced.MigrationUtils.EMBEDDED_QUERY_APPEND;
    }.property('web_uri'),

    amount_dollars: function() {
      if(this.get('amount')) {
        return (this.get('amount')/100).toFixed(2);
      } else {
        return '';
      }
    }.property('amount')
});
