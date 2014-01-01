gremlins.createHorde()
    .before(function(done) {
        var horde = this;
        setTimeout(function(){
            horde.log('async');
            done();
        }, 500);
    })
    .before(function() {
        this.log('sync');
    })
    .breed(gremlins.type.formFiller())
    .breed(gremlins.type.clicker().clickTypes(['click']))
    .breed(gremlins.type.scroller())
    .breed(function() {
        alert('here');
    })
    .after(function() {
        this.log('finished!');
    })
    .watch(gremlins.watcher.alert())
    .unleash(10);