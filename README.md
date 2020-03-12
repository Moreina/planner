# [Planner](https://moreina.github.io/planner/)
Character Skill Planner for Diablo 2: Path of Diablo
### [Download](https://github.com/Moreina/planner/archive/v1.12.zip)
### Features So Far:
* all skill info up to level 60
* synergy calculation for all skills
* stat display with:
  * class-specific differences
  * stats gained from quests
  * difficulty differences (character resistances, summon skills)
  * stats gained from items
  * stats gained from buffs, minions, & auras
* equipment selection
* charm inventory
* character validation

### Upcoming Plans:
* display section for active skill(s)
* more items (all uniques, etc)
* tracking of more effects (item auras, debuffs, shrines)
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

If you'd like to to help develop, or just have some ideas for a different design/implementation, let's chat.

For anyone curious about the program code, the files (.html, .js, .css) can be edited with any text editor. Most of the program logic is in "all.js", with the skill data in the class files and item data in "all_equipment.js". The page layout is handled by "index.html" and style elements are included in "all.css".
