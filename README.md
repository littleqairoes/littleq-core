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
    - "aldeed:autoform"
  - Accounts
    - "accounts-base",
    - "accounts-ui",
  - Meteorhacks/Kadira
    - "meteorhacks:kadira",
    - "meteorhacks:kadira-profiler"
    - "kadira:debug",    
- Added in Oct 14, 2015
  - Security
    - "meteorhacks:sikka",
    - "matteodem:easy-security",
    - "ongoworks:security"
- Added in Oct 13, 2015
	- Basic
	  - "meteor-base",
	  - "mongo",
	  - "blaze-html-templates",
	  - "session",
	  - "jquery",
	  - "tracker",
	  - "standard-minifiers",
	  - "es5-shim",
	  - "ecmascript",
  - Extra Basic
	  - "reactive-var",
	  - "http",
	  - "email",
	  - "natestrauser:jquery-scrollto",
	  - "chuangbo:cookie",
  	- "less",
    - "underscore",
  - Collection helpers
    - "aldeed:simple-schema",
    - "aldeed:collection2",
    - "matb33:collection-hooks",
    - "dburles:collection-helpers",
  - Text formaters
    - "chuangbo:marked",
    - "ongoworks:speakingurl",
    - "momentjs:moment",
    - "djedi:sanitize-html",
  - Meteorhacks/Kadira
    - "meteorhacks:fast-render",
    - "meteorhacks:subs-manager",
    - "meteorhacks:zones",
    - "kadira:flow-router",
    - "kadira:blaze-layout"