# Digis Angular Test

This is a simple workspace for the patient application. Contains following projects:
- `patients-app` - simple patients monitoring angular application.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Task requirements

As we already have existing `patients-app` to manage patients, we would like to extend the functionality of this app to allow user's to track how much time they spend on each patient.
So the goal of this task is to develop independent `patients-tracking` library that will provide full set of required services/components to work with time tracking for the patient.

How the time tracking widget for a patients works:
- Time tracker should be started any time user user opens patients overview page and widget should be visible for a user while tracking is ongoing.
- Once user goes to the patients list the tracker should be stopped and widget should disappear.
- Each patient should be tracked separately. Meaning that time tracking should depend on which patient gets observed by the user.
- We should store how much time we spent for each patient in a runtime. Any page refresh or app restart should reset the data (no need to store it in browser for simplicity).
- If user opens the same patient that was observed before - the time tracking should be restored where it was left off.

## Acceptance criteria

- `patients-app` should integrate patients tracking functionality
- `patients-tracking` should contain all required functionality for time tracking
- `patients-tracking` should be imported into the `patients-app`
- time tracking should start when patient's overview page is visible for the user
- time tracking widget should appear during time tracking, containing patient's tracking time
- each patient should have own time to track
- time tracking should stop when patients list page is visible for the user

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

