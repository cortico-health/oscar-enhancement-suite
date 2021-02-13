# Oscar Enhancement Suite

A suite of tools developed by Cortico Health Technologies to improve the Oscar experience of Cortico users. It includes some oft-requested quality of life improvements for Oscar, unrelated to Cortico. Clinics who do not use Cortico may still use this plug-in, but support will be a best-effort basis since we only have a support contract with clinics who run [Cortico]().

# General Oscar Quality of Life Features:
  * Drag and drop functionality on the schedule (see screenshot below)
  * A quick way to check public health insurance eligibility for your whole schedule.
  * Prevents Oscar refreshing while you are actively working (which interrupts your work). Oscar will wait until your mouse stops moving for a minute.
  * Includes very subtle user interface improvements (see picture below).

# Cortico Specific Features (optional)
  * Allows joining a video call directly from the schedule page.
  * Allows you to see diagnostic questions that patients answered in the online booking system.


We hope this repository can provide a helpful testing ground for some new Oscar UI feaures and we would love to contribute them to the Oscar source code for various OSPs who may be interested! Please contact me at clark@cortico.health if you want assistance merging anything here into Oscar itself.


# Contributing

## How to package and update the Firefox extension

Sign in as clark@countable.ca into addons.mozilla.org, and submit an updated version.
  * you must increment the version in manifest.json

To package the add-on, do

```
cd browser-extension
zip -r * cortico.zip
```

Then, upload this on https://addons.mozilla.org/en-CA/developers/addon/

Indicate the plug-in does not use remote code (which is the case).


## How to package and update the Chrome extension

The Chrome developer account is shirley@countable.ca. In the Privacy tab:

Description:

```
Cortico extension for Oscar EMR quality-of-life improvements. Features include:
- "Cortico Video Call" button on the appointment page for video appointments that links to the Cortico video page.
- The "Resources" field has been turned into a dropdown, with the following options: "clinic", "video", "phone", and "other" (custom text) to allow for easier integration with Cortico's appointment types.
- Sticky headers (doctor names are fixed on top of the page while scrolling) on the doctor schedule for Juno and OpenOSP Oscar instances.
- Prevent the doctor schedule page from refreshing if you're in the middle of doing work.
```

Host permission justification:

```
This extension provides additional functionality to Cortico customers who use Oscar EMR, an open-source EMR software that is hosted by several popular providers. As such, we are unable to match on specific host or domain names. However, we have mitigated this by matching specific paths in the manifest.json, as well as in the extension (cortico.js) itself. This extension is intended to be unlisted in the Chrome store as it is not intended for the general public and we will be privately distributing it to Cortico customers.
```

Are you using remote code?

- No
