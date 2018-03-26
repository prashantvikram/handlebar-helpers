Handlebars.registerHelper("searchsort", function (context, options) {

    //get all the data we'll need from options
    var data = options.data.root.data,
        sortOrder = options.data.root.sortOrder,
        sortBy = options.data.root.sortBy,
        keywords = options.data.root.keyphrase.trim().split(/[\s]+/), //converts the space separated phrase into an array of keywords
        searchIn = options.data.root.searchIn;

    
    //getting results that match the entered keywords
    if (typeof (searchIn) == 'string') { //only one category e.g. search only in title
        var searchResults = []; //a temp variable
        //accumulate matching data for each keyword in the temp variable.
        //note that the 'searchIn'variable is used as key in entry[searchIn]
        //this means that a search can only be performed by keys that are
        // at the 'first level' in terms of hierarchy and do not have any children
        
        keywords.forEach(keyword => {
            searchResults = searchResults.concat(
                //the .toLowerCase() is to make the search case insensitive
                data.filter(entry => entry[searchIn].toLowerCase().indexOf(keyword.trim().toLowerCase()) !== -1)
            )
        });

        //filter out repeated entries
        searchResults = searchResults.filter((value, index, self) => self.indexOf(value) === index);
        data = searchResults;
    }
    else { //search in more than one category e.g. search in both title and body
        var searchResults = [];

        //does the exact same thing as above but for each searchIn entry
        searchIn.forEach(identifier => {
            searchResults = searchResults.concat(
                keywords.forEach(keyword => {
                    searchResults = searchResults.concat(
                        data.filter(entry => entry[searchIn].toLowerCase().indexOf(keyword.trim().toLowerCase()) !== -1)
                    )
                })
            );
        });
        searchResults = searchResults.filter((value, index, self) => self.indexOf(value) === index);
        data = searchResults;
    }

    //sorting results. a very simple method to sort items in an object, I came across on StackOverflow
    if (sortOrder === "ASC" || sortOrder === "asc") {
        data.sort(function (a, b) { return (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0); });
    }
    else if (sortOrder === "DESC" || sortOrder === "desc") {
        data.sort(function (a, b) { return (a[sortBy] < b[sortBy]) ? 1 : ((b[sortBy] < a[sortBy]) ? -1 : 0); });
    }

    //preparing the result
    if(Object.keys(data).length != 0){
        var finalResult = '';
        for (var i = 0; i < Object.keys(data).length; i++)
            finalResult += options.fn(data[i]);
        return finalResult;
    }
    else{
        return 'No Results Found'
    }
    
    
    
});

