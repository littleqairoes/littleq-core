# Little Qairoe Core Package

Essential Core packages for all Little Qairoe projects.

This includes the meteor base packages and some essentail packages that would be used in all projects by Little Qairoe dev house.

## Comments:
- Oct 15, 2015
  - Added aldeed:autoform to make it easier to create forms.
  - Added accounts-base and accounts-ui. Basically adding the Accounts package because I think all of Little Qairoe project would need some form of accounts management. Still thinking if accounts management should be done here or not.
  - Added Service Config package
  - Added Kadira profilers as well. It should always be part of all projects of Little Qairoe 
- Oct 14, 2015
  - Added Security packages based on Discover Meteor Podcast Episode 3: Security: http://www.discovermeteor.com/blog/episode-03-security
  - Need to add/understand matteodem:easy-security and add it to core
- Oct 13, 2015
  - Removed the packages for the using a particular design. Decided to just use a separate package if the project wants to use Bootstrap, Materialize or MDL.

## Logs:
- Added in Oct 15, 2015
  - Collection helpers
    - "aldeed:autoform@5.7.1"
  - Accounts
    - "accounts-base@1.2.1",
    - "accounts-ui@1.1.6",
  - Meteorhacks/Kadira
    - "meteorhacks:kadira@2.23.6",
    - "meteorhacks:kadira-profiler@1.2.1"
    - "kadira:debug@2.2.4",    
- Added in Oct 14, 2015
  - Security
    - "meteorhacks:sikka@1.0.1",
    - "matteodem:easy-security@0.1.4",
    - "ongoworks:security@1.3.0"
- Added in Oct 13, 2015
	- Basic
	  - "meteor-base@1.0.1",
	  - "mongo@1.1.2",
	  - "blaze-html-templates@1.0.1",
	  - "session@1.1.1",
	  - "jquery@1.11.4",
	  - "tracker@1.0.9",
	  - "standard-minifiers@1.0.1",
	  - "es5-shim@4.1.13",
	  - "ecmascript@0.1.5",
  - Extra Basic
	  - "reactive-var@1.0.6",
	  - "http@1.1.1",
	  - "email@1.0.7",
	  - "natestrauser:jquery-scrollto@1.4.7",
	  - "chuangbo:cookie@1.1.0",
  	- "less@2.5.0_3",
    - "underscore@1.0.3",
  - Collection helpers
    - "aldeed:simple-schema@1.3.3",
    - "aldeed:collection2@2.3.3",
    - "matb33:collection-hooks@0.7.13",
    - "dburles:collection-helpers@1.0.3",
  - Text formaters
    - "chuangbo:marked@0.3.2_4",
    - "ongoworks:speakingurl@5.0.1",
    - "momentjs:moment@2.10.6",
    - "djedi:sanitize-html@1.7.0",
  - Meteorhacks/Kadira
    - "meteorhacks:fast-render@2.7.1",
    - "meteorhacks:subs-manager@1.5.2",
    - "meteorhacks:zones@1.6.0",
    - "kadira:flow-router@2.0.2",
    - "kadira:blaze-layout@2.0.0"