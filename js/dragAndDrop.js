$( function() {
    $( "#sortable" ).sortable({
        placeholder: "ui-state-highlight",
        update: function( event, ui ) {
            const sortedIDs = $( "#sortable" ).sortable( "toArray" );
            console.log(sortedIDs)
            game.check()
        }
    });
    $( "#sortable" ).disableSelection();
} );