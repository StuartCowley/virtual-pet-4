This is a readme for the Virtual Pet Project as per the Software Engineer Fasttrack course at Manchester Codes.

At this stage, the read-me will be very bare, but I will update in due time as I move through the project.

From 16th December onwards, I will try to provide updates done on that day. Once I've finished, a more thorough read-me will be in place and I may move this to a journal-type file, but these updates should provide a better description of what's been done. One reason for this is the commit messages when committing to GitHub have to be rather brief.

Updates 16Dec2021: Previously, the pet object was empty. Now it contains a name, an age and the growUp function, which ages the pet 1 year when called. A few tests have also been written, asking whether the pet is an object, and whether that object has a name and age and whether the growUp function actually increases the age.

Updates 18Dec2021: Added fitness and hunger levels to the pet function, which also changes as a result of growUp(). Parameters are tested. Added walk() function, and ensured that fitness cannot pass above 10 when walk() is called. Added feed() function and ensured that hunger can't fall below 0 when feed() is called. Added a checkUp() function which checks the pet's fitness/hunger levels and changes the pet's mood accordingly.

Update 21Dec2021: Function is more or less finished. Death conditions have been set, along with the growUp(), walk() and feed() functions throwing an error if the pet dies (ie. guard clauses).