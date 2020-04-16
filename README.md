<!------------------------------------------
Path of Diablo Planner

* Click on the character's level or class to change them
* Use right click to remove points or items
* Shift and ctrl modify the amount added or removed

Current Known Bugs:
* Charms can't be moved into a new space below the original space if they overlap eachother
* Shift + Right Click in Firefox doesn't work (and still opens the default menu)
* Auras may override eachother if multiples of the same one are added
* Buffs from oskills aren't added (eg Battle Command from CtA, Enflame from Lava Gout)

To report a bug - edit the planner wiki, post in the reddit thread, or send a direct message.

https://github.com/Moreina/planner#planner
------------------------------------------>

# [Planner](https://moreina.github.io/planner/)

Character Skill Planner for Diablo 2: Path of Diablo

### [Download](https://github.com/Moreina/planner/archive/v1.18.zip)

### Features So Far:
* all skill info up to level 60
* synergy calculation for all skills
* display section for active skill(s)
* stat display with:
  * class-specific differences
  * stats gained from quests
  * game difficulty differences
  * stats gained from items
  * stats gained from effects (buffs, minions, auras, shrines, etc)
* mercenary selection
* equipment selection (all unique/set/runeword items)
* equipment corrupting
* socketing
* charm inventory
* character validation

### Upcoming Plans:
* more validation for socketed items
* item-base upgrading (for uniques/rares)
* breakpoints
* mercenary stats & validation
* interface niceties

### Longterm Goals:
* character saving/sharing
* full GUI inventory/stash
* custom item creation & editing
* item description tooltips
* options for individual quests
* option for strict character validation (prevent invalid character states instead of just making text red)
* character importing
* custom item-pool saving
* monster stat calculations
* debuff tracking
* party tracking/planning
* pvp info
* character comparison tool
* comparison to original D2 skills/stats
* comparison of skill effectiveness per level/class
* dynamic item/skill recommendations

### Feedback:
[Reddit Thread](https://www.reddit.com/r/pathofdiablo/comments/f81e5u/character_skill_calculator_with_skill_info_up_to/)

[Planner Wiki](https://github.com/Moreina/planner/wiki) (report bugs or add suggestions)

If you'd like to to help develop, or just have an idea for a different design/implementation, let's chat. Should the project be made public?

For anyone curious about the program code, the files can be edited with any text editor:
* **index.html**
  * Handles page layout
* **all.css**
  * Defines style elements
* **all.js**
  * Holds most of the program logic
* **all_equipment.js**
  * Contains item data
* **class .js files**  *(amazon, assassin, barbarian, druid, necromancer, paladin, sorceress, universal_skills)*
  * Contains skill data
