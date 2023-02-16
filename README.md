# FitnessTracker_FrontEnd

render static site: https://fitness-trackr-uyp6.onrender.com

github backend repo: https://github.com/vincentpalomo/UNIV_FitnessTrackr_Starter

Common Requirements (30%)

As an instructor I want to see you demonstrate mastery (when appropriate) of:

    ReactJS Components
        Creating functional components ✔️
        Exporting & importing of components across files ✔️
        Passing data to components via props ✔️
        Correctly handling user interaction with components (onChange, onClick, etc) ✔️
    ReactJS Hooks
        Setting useful initial values for useState ✔️
        Setting state in correct components (closest to where it is necessary) ✔️
        Passing state values and state setters to the correct components ✔️
        Using useEffect to fetch API data in the correct components ✔️
        Making sure the useEffect callback is not async, but instead the code inside is set up for potential async calls ** ✔️
    Client-Side API Code
        Writing async functions using try/catch to make API calls ✔️
        Exporting functions from src/api to be consumed by src/components ✔️
        Setting correct headers & bodies for use by API, including the logged in user (if one exists) ✔️
    User Concerns
        Persisting the JWT in localstorage ✔️
        Passing down the logged in state to relevant components ✔️
    Deployment
        Site should be deployed to Netlify

As an engineering manager I want to see code that:

    is cleanly written, in separate files with a singular goal when possible
    has no unused functions or variables
    has expressive variable, function, and class names
    is organized into a coherent flow
    uses as many files as necessary to keep code compartmentalized and readable

FitnessTrac.kr: React Front-End Specific Requirements (70%)
MVP (Main Goals)

Routes

As any user when browsing the app, I want to

    click links/tabs that display different parts of the app. ** ✔️
    see the route I am visiting in the url bar (i.e. Routines tab should have a route https://example.com/routines) ✔️
    stay on the "same page", while seeing the content update (i.e. use React Router, no page refresh) ** ✔️
    see Components/Tabs with corresponding routes:
        Home ✔️
        Routines ✔️
        My Routines ✔️
        Activities ✔️
        Login/Register (optional. Could be alternatively created as a modal or part of the header/footer) ✔️ * (might need in footer)

User

As an unregistered visitor I want to:

    see a Sign Up/Sign In form in the header/footer, on a tab (with or without matching route) or in a modal ✔️
    be able to sign up for a new account with valid username/password combination ✔️
    see meaningful messages if there are errors during registration, so that I may correct them ✔️ ** (need to perhaps have a pop up)
    see tabbed navigation for Routines and Activities (with matching routes) ✔️

As a registered user I want to:

    be able to log in with my username/password combination ✔️
    see meaningful messages if there are errors during login, so that I may correct them ✔️ ** (might need a popup for signing in)
    stay logged in between page visits (for example, if I close my browser, and come back later) ✔️
    be able to log out if I am logged in ✔️
    see tabbed navigation for Routines, My Routines (once logged in), and Activities (with matching routes) ✔️ 1/2 ** (look into activities part of this)

Routines

As any user on the Routines tab, I want to:

    see a list of all public routines showing:
        The routine name, goal, and creator's username ✔️
        A list of activities for the routine, including their name, description, and duration and/or count ** (need more info on this) --> missing Duration & Count <--

As a registered user on the My Routines tab, I want to:

    be shown a form to create a new routine
        the form should have text fields for name and goal ✔️

    for each routine which is owned by me I should
        be able to update the name and goal for the routine
        be able to delete the entire routine ✔️
        be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
        be able to update the duration or count of any activity on the routine
        be able to remove any activity from the routine

Activities

As an unregistered visitor on the Activities tab, I want to:

    see a list of all activities which have been created ✔️

As a registered user on the Activities tab, I want to:

    be shown a form to create a new activity (by name and description) ✔️
    be shown an error if the activity already exists ✔️

Stretch Goals

Routines

As any user on the Routines tab, I want to:

    be able to click on a username (shown as a Routine creator), and see a list of all of their public routines
    be able to click on an activity name (shown in a list of activities on a routine), and see a list of all public routines which feature it

As a registered user, on the My Routines tab, I want to:

    expect the dropdown to add an activity to one of my routines not to include any activity which is already a part of the routine

Activities

As any user on the Activities tab, I want to:

    be able to click on an activity name and see a list of all public routines which feature it

As a registered user on the Activities tab, I want to:

    be able to edit an existing activity, and update the description, regardless of who owns it
