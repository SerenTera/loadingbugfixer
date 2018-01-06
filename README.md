# loadingbugfixer
Fixes that 'memory insufficient' bug when u try to load in due to server bugs. Caused by non-matching server location and S_LOAD_TOPO packet info sent by server

Write your event.zone id of the map location on server in 'eventzonecorrect', this is the one that is displayed on your character profile info thing on the character select screen. After that, use a telescroll or some teleportation function to get yourself to a safe location (velika, highwatch, etc) then quit game, remove this module and relog again.



Put fix.js in module folder and restart proxy and game. Does not help with doomzones btw.
