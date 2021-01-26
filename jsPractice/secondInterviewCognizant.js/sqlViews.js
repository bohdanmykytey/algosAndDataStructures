
//SQL View

/*
    A view is an object stored in the database.

    It's basically a saved SQL statement in the database.

    How to create a view:
    1) Write the select query you'd like to use for the view
    2) add CREATE VIEW view_name_goes_here before the SELECT statement
       also inluding the AS keyword

        Example:

        CREATE VIEW olympic_games_list AS 
        SELECT id, games_year, season
        FROM games;
    
    3) Run the command to create the view.
        A message along the lines of "View Created" will appear

    Using the View:

    SELECT * 
    FROM olympic_games_list;

    And then just run it.
    This is basically a shortcut to save a query as its own "View"

    The View adds security and dependability of queries, alongside other benefits
    depending on the database used
*/