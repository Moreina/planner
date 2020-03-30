<!------------------------------------------
Path of Diablo Planner

* Click on the character's level or class to change them
* Use right click to remove points or items
* Shift and ctrl modify the amount of points added or removed

Current Known Bugs:
* Charms can't be moved into a new space below the original space if they overlap eachother
* Shift + Right Click in Firefox doesn't work (and still opens the default menu)
* No testing has been done on IE, Safari, or mobile

To report a bug - edit the planner wiki, post in the reddit thread, or send a direct message.

https://github.com/Moreina/planner#planner
------------------------------------------>

# [Planner](https://moreina.github.io/planner/)

Character Skill Planner for Diablo 2: Path of Diablo

### [Download](https://github.com/Moreina/planner/archive/v1.13.zip)

### Features So Far:
* all skill info up to level 60
* synergy calculation for all skills
* display section for active skill(s)
* stat display with:
  * class-specific differences
  * stats gained from quests
  * difficulty differences (character resistances, summon skills)
  * stats gained from items
  * stats gained from effects (buffs, minions, auras, shrines, etc)
* equipment selection with most items
* charm inventory
* character validation

### Upcoming Plans:
* tracking of more effects (item auras, debuffs)
* breakpoints
* mercenary info
* item socketing/corrupting
* interface niceties

### Longterm Goals:
* full GUI inventory/stash
* custom item creation & editing
* item description tooltips
* options for individual quests
* option for strict character validation (prevent invalid character states instead of just making text red)
* character saving/sharing
* character importing
* custom item-pool saving
* monster stat calculations
* pvp info
* character comparison tool
* comparison to original D2 skills/stats
* comparison of skill effectiveness per level/class
* dynamic item/skill recommendations

### Feedback:
[Reddit Thread](https://www.reddit.com/r/pathofdiablo/comments/f81e5u/character_skill_calculator_with_skill_info_up_to/)

[Planner Wiki](https://github.com/Moreina/planner/wiki) (report bugs or add suggestions)

If you'd like to to help develop, or just have an idea for a different design/implementation, let's chat.

For anyone curious about the program code, the files can be edited with any text editor:
* **index.html**
  * Handles page layout
* **all.css**
  * Defines style elements
* **all.js**
  * Holds most of the program logic
* **all_equipment.js**
  * Contains item data
* **class .js files**  *(amazon, assassin, barbarian, druid, necromancer, paladin, sorceress)*
  * Contains skill data