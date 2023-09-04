# Digis Angular Test

This is a simple workspace for the patient application. Contains following projects:
- `patients-app` - simple patients monitoring angular application.
- `patients-billing` - billing library to track time spent observing single patient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Task requirements

Develop simple time tracker with following behavior:
- Any time user opens any patient from the list, time tracker should appread on the screen and start counting the time.
- As soon as patient gets closed - tracker should be stopped and removed from the screen.
- Each patient should have own time tracking data saved locally in a runtime within a single session. Means, any time application gets restarted, or browser's page refreshed, history should be erased.

To develop such tracker use already prepared `patients-billing` library. General goal to achieve - is to make `patients-billing` plug'n'play and as much independent from the main application as possible.
To achieve this, `patients-app` needs to be updated providing common interface to work with any kind of time trackers on the patient. On the other side `patients-billing` should implement this interface,
and as soon as it gets imported into the application - time tracking should start working, extending `patients-app` with tracking functionality.  

## Acceptance criteria

- `patients-app` should contain common tracking interface
- `patients-billing` should contain all required functionality for time tracking
- `patients-billing` should be imported into the `patients-app`
- time tracking should start when patient's overview page is visible for the user
- time tracking widget should appear during time tracking, containing patient's tracking time
- each patient should have own time to track (should not be persistent between page refreshes)
- time tracking should stop when patients list page is visible for the user

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

