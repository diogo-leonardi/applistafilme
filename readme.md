# App Lista Filmes

App List Movies is an application of the Android Platform based in Cordova. The application is written with web technology: HTML, CSS and JavaScript.



## Requires

- Java JDK 1.8 or greater
- Android Studio 3.2.1
- Node.js 11.8.0



## Development

The app was developed as per instructions received.

The index.html page is the main one and contains the data that displays the first part of the requirements, such as the name of the movie and some information about it.

On the main page, at the end of the first 20, there is a button where you can move forward with the list displaying the next 20 movies available in the API.

The movie-detail page is called from the movie selection on the main page. The details, as required, are displayed on this page.

At the end of the details, there is a button called Voltar, where when you click, you can go back to the main page.

Special libraries used in this application:

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />
    --> It was the front-end framework used to create the app's interface.


​    
    <link rel="stylesheet" href="css/custom.css" />
    --> In custom .css, in order to facilitate future maintenance, I include the main formatting used.


​    
    <link href="https://fonts.googleapis.com/css?family=Coiny|Sarabun" rel="stylesheet" />
    --> This reference was required to use the fonts in the App.



## Others informations

1. I used Android Studio 3.2.1. to tested the aplication
2. To compile and create the application executable I used Cordova ($ cordova run android)
