

character = {};
var skill_bonuses = {stamina_skillup:0, frw_skillup:0, defense_skillup:0, resistance_skillup:0, cstrike_skillup:0, ar_skillup:0, pierce_skillup:0, fRes_skillup:0, cRes_skillup:0, lRes_skillup:0, pRes_skillup:0, edged_skillup:[0,0,0], pole_skillup:[0,0,0], blunt_skillup:[0,0,0], thrown_skillup:[0,0,0], claw_skillup:[0,0,0], mana_regen_skillup:0, cPierce_skillup:0, lPierce_skillup:0, fPierce_skillup:0, cDamage_skillup:0, lDamage_skillup:0, fDamage_skillup:0, block_skillup:0, velocity_skillup:0};
var base_stats = {level:1, skillpoints:0, statpoints:0, quests_completed:-1, running:-1, difficulty:3, strength_added:0, dexterity_added:0, vitality_added:0, energy_added:0, fRes_penalty:100, cRes_penalty:100, lRes_penalty:100, pRes_penalty:100, mRes_penalty:100, fRes:0, cRes:0, lRes:0, pRes:0, mRes:0, fRes_max_base:75, cRes_max_base:75, lRes_max_base:75, pRes_max_base:75, mRes_max_base:75, set_bonuses:[0,0,{},{},{},{},{}]}

var effects = {};
var skillList = []; var skillOptions = [];
var selectedSkill = [" ­ ­ ­ ­ Skill 1", " ­ ­ ­ ­ Skill 2"];

var mercenary = {name:"",level:1,base_aura:"",base_aura_level:1};
var offhandType = "none";
var lastCharm = "";
var lastSocketable = "";
var lastSelected = "";
var settings = {coupling:1, autocast:1}
var MAX = 20;	// Highest Skill Hardpoints
var LIMIT = 60; // Highest Skill Data
var RES_CAP = 95;

var socketed = {
	helm:{sockets:0, socketsFilled:0, items:[{id:"",name:""},{id:"",name:""},{id:"",name:""}]},
	armor:{sockets:0, socketsFilled:0, items:[{id:"",name:""},{id:"",name:""},{id:"",name:""},{id:"",name:""}]},
	weapon:{sockets:0, socketsFilled:0, items:[{id:"",name:""},{id:"",name:""},{id:"",name:""},{id:"",name:""},{id:"",name:""},{id:"",name:""}]},
	offhand:{sockets:0, socketsFilled:0, items:[{id:"",name:""},{id:"",name:""},{id:"",name:""},{id:"",name:""},{id:"",name:""},{id:"",name:""}]},
};

// Charm Inventory
var inv = [
{onpickup:"?",pickup_x:0,pickup_y:0,empty:1,charms:[],in:["",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
{x:1,y:1,empty:1,id:"h11"},{x:1,y:1,empty:1,id:"h21"},{x:1,y:1,empty:1,id:"h31"},{x:1,y:1,empty:1,id:"h41"},{x:1,y:1,empty:1,id:"h51"},{x:1,y:1,empty:1,id:"h61"},{x:1,y:1,empty:1,id:"h71"},{x:1,y:1,empty:1,id:"h81"},{x:1,y:1,empty:1,id:"h91"},{x:1,y:1,empty:1,id:"h01"},
{x:1,y:1,empty:1,id:"h12"},{x:1,y:1,empty:1,id:"h22"},{x:1,y:1,empty:1,id:"h32"},{x:1,y:1,empty:1,id:"h42"},{x:1,y:1,empty:1,id:"h52"},{x:1,y:1,empty:1,id:"h62"},{x:1,y:1,empty:1,id:"h72"},{x:1,y:1,empty:1,id:"h82"},{x:1,y:1,empty:1,id:"h92"},{x:1,y:1,empty:1,id:"h02"},
{x:1,y:1,empty:1,id:"h13"},{x:1,y:1,empty:1,id:"h23"},{x:1,y:1,empty:1,id:"h33"},{x:1,y:1,empty:1,id:"h43"},{x:1,y:1,empty:1,id:"h53"},{x:1,y:1,empty:1,id:"h63"},{x:1,y:1,empty:1,id:"h73"},{x:1,y:1,empty:1,id:"h83"},{x:1,y:1,empty:1,id:"h93"},{x:1,y:1,empty:1,id:"h03"},
{x:1,y:1,empty:1,id:"h14"},{x:1,y:1,empty:1,id:"h24"},{x:1,y:1,empty:1,id:"h34"},{x:1,y:1,empty:1,id:"h44"},{x:1,y:1,empty:1,id:"h54"},{x:1,y:1,empty:1,id:"h64"},{x:1,y:1,empty:1,id:"h74"},{x:1,y:1,empty:1,id:"h84"},{x:1,y:1,empty:1,id:"h94"},{x:1,y:1,empty:1,id:"h04"}
];

// updateAll - updates everything
// ---------------------------------
function updateAll() {
	// TODO: Implement. Use parameter(s) if needed updates are known?
	
	// character level changed
		// update mercenary
		mercenary.level = Math.max(1,character.level-1)
		if (mercenary.base_aura != "") {
			removeAura(mercenary.base_aura)
			mercenary.base_aura_level = getMercenaryAuraLevel(mercenary.level)
			addAura(mercenary.base_aura, mercenary.base_aura_level, "mercenary")
		}
}

// loadEquipment - Loads equipment/charm info to the appropriate dropdowns
//	className: name of character class
// ---------------------------------
function loadEquipment(className) {
	var equipmentTypes = ["helm", "armor", "gloves", "boots", "belt", "amulet", "ring1", "ring2", "weapon", "offhand", "charms"];
	var equipmentDropdowns = ["dropdown_helm", "dropdown_armor", "dropdown_gloves", "dropdown_boots", "dropdown_belt", "dropdown_amulet", "dropdown_ring1", "dropdown_ring2", "dropdown_weapon", "dropdown_offhand", "dropdown_charms"]
	for (let i = 0; i < equipmentTypes.length; i++) { loadItems(equipmentTypes[i], equipmentDropdowns[i], className) }
	loadMisc()
	loadMerc()
	loadCorruptions()
	loadSocketables()
}

// loadItems - Creates a dropdown menu option
//	type: equipment type
//	dropdown: name of the dropdown to edit
//	className: name of the character class
// ---------------------------------
function loadItems(type, dropdown, className) {
	if (type.length == 0) { document.getElementById(dropdown).innerHTML = "<option></option>" }
	else {
		var choices = "";
		for (item in equipment[type]) {
			if (typeof(equipment[type][item].only) == 'undefined' || equipment[type][item].only == className) {
				var halt = 0;
				if (className == "clear") { halt = 1 }
				if (typeof(equipment[type][item].not) != 'undefined') {
					for (let l = 0; l < equipment[type][item].not.length; l++) {
						if (equipment[type][item].not[l] == className) { halt = 1 }
					}
				}
				if (className == "Rogue Scout") {
					if (type == "offhand") { halt = 1 }
					if (type == "weapon" && equipment[type][item].type != "bow" && equipment[type][item].type != "crossbow" && equipment[type][item].name != "Weapon") { halt = 1 }
				}
				if (className == "Desert Guard") {
					if (type == "offhand") { halt = 1 }
					if (type == "weapon" && equipment[type][item].type != "polearm" && equipment[type][item].type != "spear" && equipment[type][item].name != "Weapon") { halt = 1 }
				}
				if (className == "Iron Wolf") {
					if (type == "offhand" && equipment[type][item].type != "shield" && equipment[type][item].name != "Offhand") { halt = 1 }
					if (type == "weapon" && (equipment[type][item].type != "sword" || typeof(equipment[type][item].twoHanded) != 'undefined') && equipment[type][item].name != "Weapon") { halt = 1 }
				}
				if (className == "Barb (merc)") {
					if (type == "offhand") { halt = 1 }
					if (type == "weapon" && equipment[type][item].type != "sword" && equipment[type][item].name != "Weapon") { halt = 1 }
				}

				if (halt == 0) {
					if (item > 0) {
						if (typeof(equipment[type][item].set_bonuses) != 'undefined') {
							choices += "<option class='dropdown-set'>" + equipment[type][item].name + "</option>"
						} else if (typeof(equipment[type][item].debug) != 'undefined'){
							choices += "<option class='dropdown-debug'>" + equipment[type][item].name + "</option>"
						} else if (typeof(equipment[type][item].rarity) != 'undefined' && equipment[type][item].rarity == "magic"){
							choices += "<option class='dropdown-magic'>" + equipment[type][item].name + "</option>"
						} else if (typeof(equipment[type][item].rarity) != 'undefined' && equipment[type][item].rarity == "rare"){
							choices += "<option class='dropdown-rare'>" + equipment[type][item].name + "</option>"
						} else if (typeof(equipment[type][item].rarity) != 'undefined' && equipment[type][item].rarity == "crafted"){
							choices += "<option class='dropdown-crafted'>" + equipment[type][item].name + "</option>"
						} else if (typeof(equipment[type][item].rarity) != 'undefined' && equipment[type][item].rarity == "common"){
							choices += "<option class='dropdown-common'>" + equipment[type][item].name + "</option>"
						} else if (typeof(equipment[type][item].rw) != 'undefined'){
							choices += "<option class='dropdown-runeword'>" + equipment[type][item].name + "</option>"
						} else {
							choices += "<option class='dropdown-unique'>" + equipment[type][item].name + "</option>"
						}
					} else {
						if (type != "charms") {
							choices += "<option selected>" + "­ ­ ­ ­ " + equipment[type][item].name + "</option>"
						} else {
							choices += "<option disabled selected>" + "­ ­ ­ ­ " + equipment[type][item].name + "</option>"
						}
					}
				}
			}
		}
		if (type == "offhand" && className == "barbarian") {		// TODO: reduce code duplication
			type = "weapon"
			for (item in equipment[type]) {
				if (typeof(equipment[type][item].only) == 'undefined' || equipment[type][item].only == className) {
					var halt = 0
					if (typeof(equipment[type][item].not) != 'undefined') {
						for (let m = 0; m < equipment[type][item].not.length; m++) {
							if (equipment[type][item].not[m] == className) { halt = 1 }
						}
					}
					if (equipment[type][item].type != "sword") { if (typeof(equipment[type][item].twoHanded) != 'undefined') { if (equipment[type][item].twoHanded == 1) { halt = 1 } } }
					if (halt == 0) {
						if (item > 0) {
							if (typeof(equipment[type][item].set_bonuses) != 'undefined') {
								choices += "<option class='dropdown-set'>" + equipment[type][item].name + "</option>"
							} else if (typeof(equipment[type][item].rarity) != 'undefined' && equipment[type][item].rarity == "magic"){
								choices += "<option class='dropdown-magic'>" + equipment[type][item].name + "</option>"
							} else if (typeof(equipment[type][item].rarity) != 'undefined' && equipment[type][item].rarity == "rare"){
								choices += "<option class='dropdown-rare'>" + equipment[type][item].name + "</option>"
							} else if (typeof(equipment[type][item].rarity) != 'undefined' && equipment[type][item].rarity == "crafted"){
								choices += "<option class='dropdown-crafted'>" + equipment[type][item].name + "</option>"
							} else if (typeof(equipment[type][item].rarity) != 'undefined' && equipment[type][item].rarity == "common"){
								choices += "<option class='dropdown-common'>" + equipment[type][item].name + "</option>"
							} else if (typeof(equipment[type][item].rw) != 'undefined'){
								choices += "<option class='dropdown-runeword'>" + equipment[type][item].name + "</option>"
							} else {
								choices += "<option class='dropdown-unique'>" + equipment[type][item].name + "</option>"
							}
						}
					}
				}
			}
		}
		document.getElementById(dropdown).innerHTML = choices
	}
}

// loadMisc - Loads non-item effects to the 'Miscellaneous' dropdown menu
// ---------------------------------
function loadMisc() {
	var choices = "<option class='gray' disabled selected>­ ­ ­ ­ Miscellaneous</option>";
	for (let m = 1; m < non_items.length; m++) { choices += "<option>" + non_items[m].name + "</option>" }
	document.getElementById("dropdown_misc").innerHTML = choices
}

// loadSocketables - Loads jewels, runes, and gems to the 'Socketables' dropdown menu
// ---------------------------------
function loadSocketables() {
	var choices = "<option class='gray' disabled selected>­ ­ ­ ­ Socketables</option>";
	for (let m = 1; m < socketables.length; m++) {
		if (socketables[m].type == "rune") { choices += "<option class='dropdown-crafted'>" + socketables[m].name + "</option>" }
		else if (socketables[m].rarity == "unique") { choices += "<option class='dropdown-unique'>" + socketables[m].name + "</option>" }
		else if (socketables[m].rarity == "magic") { choices += "<option class='dropdown-magic'>" + socketables[m].name + "</option>" }
		else if (socketables[m].rarity == "rare") { choices += "<option class='dropdown-rare'>" + socketables[m].name + "</option>" }
		else { choices += "<option>" + socketables[m].name + "</option>" }
	}
	document.getElementById("dropdown_socketables").innerHTML = choices
}

// loadMerc - Loads mercenaries to the 'Mercenary' dropdown menu
// ---------------------------------
function loadMerc() {
	var choices = "<option>­ ­ ­ ­ Mercenary</option>";
	for (let m = 1; m < mercenaries.length; m++) { choices += "<option>" + mercenaries[m].name + "</option>" }
	document.getElementById("dropdown_mercenary").innerHTML = choices
}

// setMercenary - Handles mercenary selection, including adding auras and loading mercenary items to the appropriate dropdown menus
//	merc: selected mercenary name
// ---------------------------------
function setMercenary(merc) {
	var mercEquipmentTypes = ["helm", "armor", "weapon", "offhand"];
	var mercEquipmentDropdowns = ["dropdown_merc_helm", "dropdown_merc_armor", "dropdown_merc_weapon", "dropdown_merc_offhand"];
	if (document.getElementById("dropdown_merc_helm").innerHTML != "") { equipMerc('helm', 'helm'); }
	if (document.getElementById("dropdown_merc_armor").innerHTML != "") { equipMerc('armor', 'armor'); }
	if (document.getElementById("dropdown_merc_weapon").innerHTML != "") { equipMerc('weapon', 'weapon'); }
	if (document.getElementById("dropdown_merc_offhand").innerHTML != "") { equipMerc('offhand', 'offhand'); }
	if (mercenary.base_aura != "") { removeAura(mercenary.base_aura); mercenary.base_aura = ""; }
	if (merc == "­ ­ ­ ­ Mercenary") {
		for (let i = 0; i < mercEquipmentTypes.length; i++) { loadItems(mercEquipmentTypes[i], mercEquipmentDropdowns[i], "clear") }
		document.getElementById("dropdown_mercenary").selectedIndex = 0;
	} else {
		var mercType = merc;
		if (merc == mercenaries[1].name) { mercType = "Rogue Scout" }
		if (merc == mercenaries[2].name || merc == mercenaries[3].name || merc == mercenaries[4].name) { mercType = "Desert Guard" }
		if (merc == mercenaries[5].name || merc == mercenaries[6].name || merc == mercenaries[7].name) { mercType = "Iron Wolf" }
		if (merc == mercenaries[8].name) { mercType = "Barb (merc)" }
		for (let i = 0; i < mercEquipmentTypes.length; i++) { loadItems(mercEquipmentTypes[i], mercEquipmentDropdowns[i], mercType) }
		for (let m = 1; m < mercenaries.length; m++) {
			if (merc == mercenaries[m].name) { if (mercenary.base_aura == "") {
				mercenary.level = Math.max(1,character.level-1)
				mercenary.base_aura_level = getMercenaryAuraLevel(mercenary.level)
				mercenary.base_aura = mercenaries[m].aura
				addAura(mercenary.base_aura, mercenary.base_aura_level, "mercenary")
			} }
		}
	}
	mercenary.name = merc
}

// getMercenaryAuraLevel - Get mercenary aura level
//	hlvl: level of mercenary (must be lower than clvl)
// return: aura level of mercenary
// ---------------------------------
function getMercenaryAuraLevel(hlvl) {
	var result = 1;
	var diff = 0.23;
	result = Math.min(18,Math.floor((1-diff)+diff*hlvl));
//	old calculation for aura level:
//	if (hlvl > 9 && hlvl < 31) { result = (3+((hlvl-9)*10/32)) }
//	else if (hlvl > 30 && hlvl < 55) { result = (10+((hlvl-31)*10/32)) }
//	else if (hlvl > 54) { result = 18 }
	return result;
}

// loadCorruptions - Loads corruption options
// ---------------------------------
function loadCorruptions() {
	var types = ["helm", "armor", "gloves", "boots", "belt", "amulet", "ring1", "ring2", "weapon", "offhand"];
	for (let i = 0; i < types.length; i++) {
		var choices = "<option>­ ­ ­ ­ Corruption</option>";
		for (let m = 1; m < corruptions[types[i]].length; m++) { choices += "<option>" + corruptions[types[i]][m].name + "</option>" }
		document.getElementById("corruptions_"+types[i]).innerHTML = choices
	}
}

// startup - Resets everything and starts a new character
//	choice: name of new character class
// ---------------------------------
function startup(choice) {
	setMercenary("­ ­ ­ ­ Mercenary")
	loadEquipment(choice)
	clearIconSources()
	resetSkills()
	resetEquipment()
	resetMisc()
	calculateSkillAmounts()
	updateSkills()
	updateEffectList()
	document.getElementById("quests").checked = 0
	document.getElementById("running").checked = 0
	document.getElementById("difficulty3").checked = 1
	skills = skills_all[choice]
	character_setup = character_all[choice]
	for (stat in base_stats) { character[stat] = base_stats[stat] }
	for (stat in unequipped) { character[stat] = unequipped[stat] }
	for (stat in character_setup) { character[stat] = character_setup[stat] }
	setIconSources(choice)
	updateSkillIcons()
	updateStats()
	document.getElementById("skill_tree").src = character_setup.skill_layout
	init()
}

// reset - Calls startup() with the specified class name
//	name: string class name
// ---------------------------------
function reset(name) { startup(name.toLowerCase()); }

// init - Initiates mouse functions
// ---------------------------------
function init() {
	var stats = ["btn_strength", "btn_dexterity", "btn_vitality", "btn_energy"];
	document.getElementById("skillmap").onmouseout = function() {skillOut()};
	for (let s = 0, len = skills.length; s < len; s++) {
		document.getElementById("s"+skills[s].key).onmouseover = function() {skillHover(skills[s])};
		document.getElementById("s"+skills[s].key).onclick = function() {skillUp(event, skills[s])};
		document.getElementById("s"+skills[s].key).oncontextmenu = function() {skillDown(event, skills[s])};
	}
	for (let t = 0; t < stats.length; t++) {
		document.getElementById(stats[t]).onclick = function() {addStat(event, stats[t])};
		document.getElementById(stats[t]).oncontextmenu = function() {removeStat(event, stats[t])};
	}
	document.getElementById("dropdown_item").onchange = function() {var selected = document.getElementById("dropdown_item").selectedIndex};
	document.getElementById("quests").onchange = function() {toggleQuests()};
}

// clearIconSources - Removes all active skill icons
// ---------------------------------
function clearIconSources() {
	for (let s = 0; s < skills.length; s++) {
		var iconId = "i"+skills[s].key
		document.getElementById(iconId).src = "./images/skills/none.png"
		document.getElementById(iconId).style.visibility = "hidden"
	}
}

// setIconSources - Sets new active skill icons based on character class
//	className: name of character class
// ---------------------------------
function setIconSources(className) {
	var prefix = "./images/skills/"+className+"/";
	for (let s = 0, len = skills.length; s < len; s++) {
		var iconId = "i"+skills[s].key;
		document.getElementById(iconId).src = prefix+skills[s].name+".png"
	}
}

// updateSkillIcons - Handles whether active skill icons are hidden or shown
// ---------------------------------
function updateSkillIcons() {
	for (let s = 0; s < skills.length; s++) {
		var iconId = "i"+skills[s].key;
		var show = 1;
		if (skills[s].req.length > 0) { for (let i = 0; i < skills[s].req.length; i++) {
			if (skills[skills[s].req[i]].level == 0) { show = 0; }
		} }
		if (character.level < skills[s].reqlvl) { show = 0; }
		if (show == 1) { document.getElementById(iconId).style.visibility = "visible" }
		else { document.getElementById(iconId).style.visibility = "hidden" }
	}
}

// changeLevel - Modifies the character's level
//	input: positive or negative change (-1 or 1)
// ---------------------------------
function changeLevel(input) {
	var levels = 1
	if (event.shiftKey) { levels = 10 }
	if (event.ctrlKey) { levels = 100 }
	if (input < 0) {
		if (levels > character.level-1) { levels = (character.level-1) }
		if (levels > character.skillpoints) { levels = character.skillpoints }
		if (levels*5 > character.statpoints) { levels = Math.floor(character.statpoints/5) }
		levels *= input
	}
	var maxup = 99 - character.level
	if (levels > maxup) { levels = maxup }
	if (levels != 0) {
		character.level += levels
		character.skillpoints += levels
		character.statpoints += 5*levels
		character.stamina += character.levelup_stamina*levels
		character.life += character.levelup_life*levels
		character.mana += character.levelup_mana*levels
	}
	updateAll()
	updateEffectList()
	calculateSkillAmounts()
	//for (let s = 0; s < skills.length; s++) { modifyEffect(skills[s]) }
	updateStats()
	updateSkills()
	if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
	if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
}

// reloadOffhandCorruptions - reloads corruption options for offhands (when the selected type changes)
// ---------------------------------
function reloadOffhandCorruptions() {
	corrupt("offhand", "offhand")
	var choices = "<option>­ ­ ­ ­ Corruption</option>";
	if (offhandType == "shield" || offhandType == "quiver") {
		for (let m = 1; m < corruptions["offhand"].length; m++) { if (corruptions["offhand"][m].base == offhandType) { choices += "<option>" + corruptions["offhand"][m].name + "</option>" } }
	} else if (offhandType == "weapon") {
		for (let m = 1; m < corruptions["weapon"].length; m++) { choices += "<option>" + corruptions["weapon"][m].name + "</option>" }
		choices = ""
	} else {
		for (let m = 1; m < corruptions["offhand"].length; m++) { choices += "<option>" + corruptions["offhand"][m].name + "</option>" }
	}
	document.getElementById("corruptions_offhand").innerHTML = choices
}

// adjustCorruptionSockets - Adjusts the sockets granted by corruptions
//	group: item group (helm, armor, weapon, offhand)
// ---------------------------------
function adjustCorruptionSockets(group) {
	var max = 0;
	if (equipped[group].max_sockets > 0 && corruptsEquipped[group].name != group) {
		max = ~~equipped[group].max_sockets;
		if (equipped[group].ethereal > 0 || equipped[group].sockets > 0 || equipped[group].rw > 0 || equipped[group].rarity == "common" || equipped[group].type == "quiver") { max = 0 }
		if (max != corruptsEquipped[group].sockets) {
			character.sockets -= corruptsEquipped[group].sockets
			corruptsEquipped[group].sockets = max
			character.sockets += max
			// TODO: update equipment display (number of sockets available for jewels/runes/gems)
		}
	}
	if (max == 0 && equipped[group].name != "none" && corruptsEquipped[group].name == "+ Sockets") { corrupt(group, group) }
	updateStats()
}

// corrupt - Sets a corruption outcome for an item
//	group: name of item's group
//	val: name of corruption
// ---------------------------------
function corrupt(group, val) {
	// TODO: Allow ethereal items to get one socket? (from Larzuk, not corruption)
	for (old_affix in corruptsEquipped[group]) {
		character[old_affix] -= corruptsEquipped[group][old_affix]
		corruptsEquipped[group][old_affix] = unequipped[old_affix]
	}
	if (val == "­ ­ ­ ­ Corruption" || val == "none" || val == group || equipped[group].ethereal > 0 || equipped[group].sockets > 0 || equipped[group].rw > 0 || equipped[group].rarity == "common") { document.getElementById("corruptions_"+group).selectedIndex = 0 }
	else {
		//if (group == "offhand" && offhandType == "weapon") { group = "weapon" }
		for (outcome in corruptions[group]) {
			if (corruptions[group][outcome].name == val) {
				for (affix in corruptions[group][outcome]) {
					corruptsEquipped[group][affix] = corruptions[group][outcome][affix]
					character[affix] += corruptsEquipped[group][affix]
				}
			}
		}
		if (val == "+ Sockets") { adjustCorruptionSockets(group) }
		if (group == "offhand") { if (equipped[group].type == "shield" || equipped[group.type == "quiver"]) { if (equipped[group].type != corruptsEquipped[group].base) { corrupt(group, group) } } }
	}
	calculateSkillAmounts()
	updateEffectList()
	updateStats()
	checkRequirements()
	updateSkills()
	if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
	if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
}

// mercEquip - Equips or unequips a mercenary item
//	type: name of item's type
//	val: name of item
// ---------------------------------
function equipMerc(type, val) {
	for (old_affix in mercEquipped[type]) {
		mercenary[old_affix] -= mercEquipped[type][old_affix]
		if (old_affix == "aura") {
			removeAura(mercEquipped[type][old_affix])
		}
		if (old_affix != "set_bonuses") { mercEquipped[type][old_affix] = unequipped[old_affix] }
	}
	if (type == val) { document.getElementById(("dropdown_merc_"+type)).selectedIndex = 0 }
	else {
		for (item in equipment[type]) {
			if (equipment[type][item].name == val) {
				// add affixes from base item
				if (typeof(equipment[type][item]["base"]) != 'undefined') { if (equipment[type][item]["base"] != "") {
					var base = equipment[type][item].base; base = base.split(' ').join('_'); base = base.split('-').join('_'); base = base.split("'s").join("s");	// spaces, hypens, and apostrophes converted to match named entry in bases{}
					if (typeof(bases[base]) != 'undefined') { for (affix in bases[base]) { if (affix == "base_damage_min" || affix == "base_damage_max" || affix == "base_defense" || affix == "req_strength" || affix == "req_dexterity") {
						var multEth = 1;
						var multED = 1;
						var multReq = 1;
						if (typeof(equipment[type][item]["ethereal"]) != 'undefined') { if (equipment[type][item]["ethereal"] == 1) { multEth = 1.5; } }
						if (affix == "base_defense") { if (typeof(equipment[type][item]["e_def"]) != 'undefined') { multED += (equipment[type][item]["e_def"]/100) } }
						if (affix == "base_damage_min" || affix == "base_damage_max") { if (typeof(equipment[type][item]["e_damage"]) != 'undefined') { multED += (equipment[type][item]["e_damage"]/100) } }
						if (affix == "req_strength" || affix == "req_dexterity") { if (typeof(equipment[type][item]["req"]) != 'undefined') { multReq += (equipment[type][item]["req"]/100) } }
						//TODO: ethereal reduces strength/dexterity requirements by 10
						if (typeof(mercEquipped[type][affix]) == 'undefined') { mercEquipped[type][affix] = 0 }	// undefined (new) affixes get initialized to zero
						if (affix == "base_damage_min" || affix == "base_damage_max" || affix == "base_defense") {
							mercEquipped[type][affix] = Math.ceil(multEth*multED*bases[base][affix])
							mercenary[affix] += Math.ceil(multEth*multED*bases[base][affix])
						}
						if (affix == "req_strength" || affix == "req_dexterity") {
							mercEquipped[type][affix] += Math.ceil(multReq*bases[base][affix])
							mercenary[affix] += Math.ceil(multReq*bases[base][affix])
						}
					} } }
				} }
				// add regular affixes
				for (affix in equipment[type][item]) {
					if (affix == "aura" || affix == "name" || affix == "type" || affix == "base" || affix == "only" || affix == "not" || affix == "rw") {
						if (affix == "aura" && equipment[type][item][affix] != mercenary.base_aura) {
							mercEquipped[type][affix] = equipment[type][item][affix]
							addAura(equipment[type][item][affix], equipment[type][item].aura_lvl, type)
						}
					} else {
						mercEquipped[type][affix] = equipment[type][item][affix]
						mercenary[affix] += mercEquipped[type][affix]
					}
				}
			}
		}
	}
	updateStats()
}
	
// equip - Equips an item by adding its stats to the character, or unequips it if it's already equipped			// TODO: consider renaming... switchItem()?  Also, split into multiple smaller functions
//	group: equipment group
//	val: name of item
// ---------------------------------
function equip(group, val) {
	var auraName = "";
	var auraLevel = "";
	//var selected = document.getElementById("dropdown_"+group).selectedIndex;	// consider using if unequipping weapon/offhand due to equipping a new incompatible item
	var old_set_bonuses = "";
	var old_set = "";
	var old_set_before = 0;
	var old_set_after = 0;
	var set_bonuses = "";
	var set = "";
	var set_before = 0;
	var set_after = 0;
	
	// check if item was imported from a different category
	var src_group = group;
	var found = 0;
	for (item in equipment[group]) { if (equipment[group][item].name == val) { found = 1 } }
	if (found == 0 && group == "offhand") {
		src_group = "weapon"
		for (item in equipment[src_group]) { if (equipment[src_group][item].name == val) { twoHanded = equipment[src_group][item].twoHanded; if (typeof(equipment[src_group][item].type) != 'undefined') itemType = equipment[src_group][item].type } }
	}
	
	for (old_affix in equipped[group]) { if (old_affix == "set_bonuses") { old_set_bonuses = equipped[group].set_bonuses } }
	for (item in equipment[src_group]) { if (equipment[src_group][item].name == val) { if (typeof(equipment[src_group][item].set_bonuses) != 'undefined') { set_bonuses = equipment[src_group][item].set_bonuses } } }
	if (set_bonuses != "") { set = set_bonuses[0]; set_before = character[set]; }
	if (old_set_bonuses != "") { old_set = old_set_bonuses[0]; old_set_before = character[old_set]; }
	
	// remove effects
	for (old_affix in equipped[group]) {			// old_affix isn't used...?
		for (let s = 0; s < skills.length; s++) {
			if (skills[s].level == 0 && skills[s].force_levels > 0) {
				disableEffect(s)
			}
		}
	}
	// if replacing an item, previous item's affixes are removed from character
	for (old_affix in equipped[group]) {
		// TODO: delete buff effect if oskill removed
		character[old_affix] -= equipped[group][old_affix]
		if (old_affix == "aura") {
			removeAura(equipped[group][old_affix])
		}
		if (old_affix != "set_bonuses" && old_affix != "aura" && old_affix != "aura_lvl") { equipped[group][old_affix] = unequipped[old_affix] }
	}
	// remove set bonuses from previous item
	if (old_set_bonuses != "") {
		old_set_after = character[old_set];
		if (old_set_before > old_set_after) {
			var before = Math.round(old_set_before,0)
			var after = Math.round(old_set_after,0)
			// remove set bonuses for old item
			for (let i = 1; i <= before; i++) {
				for (affix in equipped[group]["set_bonuses"][i]) {
					character[affix] -= equipped[group]["set_bonuses"][i][affix]
				}
			}
			equipped[group]["set_bonuses"][1] = 0	// save "state" for invalid/outdated set info
			if (before > after) {
				// remove old set bonus for other equipped items in the set (only if the removed set item wasn't a duplicate of another set item, i.e. ring)
				for (set_group in equipped) {
					if (set_group != group && equipped[set_group]["set_bonuses"] != null) {
						if (equipped[set_group]["set_bonuses"][0] == old_set && equipped[set_group]["set_bonuses"][1] == 1) {	// same set as removed item & set info is valid
							for (affix in equipped[set_group]["set_bonuses"][before]) {
								character[affix] -= equipped[set_group]["set_bonuses"][before][affix]
							}
						}
					}
				}
				// remove shared set bonuses
				for (affix in sets[old_set][before]) {
					if (character.class_name == "Sorceress" && (affix == "oskill_Fire_Ball" || affix == "oskill_Fire_Wall" || affix == "oskill_Meteor")) {
						character[affix] -= 3
					} else {
						character[affix] -= sets[old_set][before][affix]
					}
				}
			}
		}
	}
	
	var twoHanded = 0;
	var itemType = "";
	for (item in equipment[src_group]) { if (equipment[src_group][item].name == val) { twoHanded = equipment[src_group][item].twoHanded; if (typeof(equipment[src_group][item].type) != 'undefined') itemType = equipment[src_group][item].type } }

	// add affixes to character
	for (item in equipment[src_group]) {
		if (equipment[src_group][item].name == val) {
			// add affixes from base item
			if (typeof(equipment[src_group][item]["base"]) != 'undefined') { if (equipment[src_group][item]["base"] != "") {
				var base = equipment[src_group][item].base; base = base.split(' ').join('_'); base = base.split('-').join('_'); base = base.split("'s").join("s");	// spaces, hypens, and apostrophes converted to match named entry in bases{}
				if (typeof(bases[base]) != 'undefined') { for (affix in bases[base]) { if (affix != "group" || affix != "type" || affix != "upgrade" || affix != "downgrade" || affix != "subtype" || affix != "only") {
					var multEth = 1;
					var multED = 1;
					var multReq = 1;
					var reqEth = 0;
					
					if (typeof(equipment[src_group][item]["ethereal"]) != 'undefined') { if (equipment[src_group][item]["ethereal"] == 1) { multEth = 1.5; reqEth = 10; } }
					if (affix == "base_defense") { if (typeof(equipment[src_group][item]["e_def"]) != 'undefined') { multED += (equipment[src_group][item]["e_def"]/100) } }
				//	else if (affix == "base_damage_min" || affix == "base_damage_max" || affix == "throw_min" || affix == "throw_max" || affix == "base_min_alternate" || affix == "base_max_alternate") { if (typeof(equipment[src_group][item]["e_damage"]) != 'undefined') { multED += (equipment[src_group][item]["e_damage"]/100) } }	// enhanced damage should be calculated elsewhere
					else if (affix == "req_strength" || affix == "req_dexterity") { if (typeof(equipment[src_group][item]["req"]) != 'undefined') { multReq += (equipment[src_group][item]["req"]/100) } }
					
					if (typeof(equipped[group][affix]) == 'undefined') { equipped[group][affix] = 0 }	// undefined (new) affixes get initialized to zero
					
					if (affix == "base_damage_min" || affix == "base_damage_max" || affix == "throw_min" || affix == "throw_max" || affix == "base_min_alternate" || affix == "base_max_alternate" || affix == "base_defense") {
						equipped[group][affix] = Math.ceil(multEth*multED*bases[base][affix])
						character[affix] += Math.ceil(multEth*multED*bases[base][affix])
						// TODO: Implement superior ED
					}
					else if (affix == "req_strength" || affix == "req_dexterity") {
						equipped[group][affix] += Math.ceil(multReq*bases[base][affix] - reqEth)
						character[affix] += Math.ceil(multReq*bases[base][affix] - reqEth)
					}
					else {
						equipped[group][affix] += bases[base][affix]
						character[affix] += bases[base][affix]
					}
				} } }
			} }
			// add regular affixes
			for (affix in equipment[src_group][item]) {
				equipped[group][affix] = equipment[src_group][item][affix]
				if (affix == "aura" || affix == "name" || affix == "type" || affix == "base" || affix == "only" || affix == "not" || affix == "rw") {
					if (affix == "aura") {
			//			equipped[group].aura_lvl = equipment[src_group][item].aura_lvl	// redundant?
						auraName = equipment[src_group][item][affix]
						auraLevel = equipment[src_group][item].aura_lvl
						//addAura(equipment[src_group][item][affix], equipment[src_group][item].aura_lvl, group)
					}
				} else {
					var oskill_info = "";
					for (let o = 0; o < oskills.length; o++) {
						if (affix == oskills[o]) {
							oskill_info = oskills_info[oskills[o]]
						}
					}
					if (oskill_info != "") {
						if (oskill_info.native_class == character.class_name.toLowerCase()) {
							if (equipment[src_group][item][affix] > 3) { equipped[group][affix] -= (equipment[src_group][item][affix]-3) }	// oskills are capped at 3 for 'native' classes
						} else { if (oskill_info.native_class != "none") {
							var skill = skills_all[oskill_info.native_class][oskill_info.i];
							if (typeof(skill.effect) != 'undefined') { if (skill.effect > 3) {
								if (character[affix] == 0 && typeof(effects["e"+skill.key]) == 'undefined') {
									// TODO: create new buff effect for oskill
								}
							} }
						} }
					}
					character[affix] += equipped[group][affix]
				}
			}
		}
	}
	// add set bonuses
	if (set_bonuses != "") {
		set_after = character[set];
		if (set_before < set_after) {
			var before = Math.round(set_before,0)
			var after = Math.round(set_after,0)
			// add set bonuses for new item
			for (let i = 1; i <= after; i++) {
				for (affix in set_bonuses[i]) {
					character[affix] += set_bonuses[i][affix]
				}
			}
			equipped[group]["set_bonuses"][1] = 1	// valid set info
			if (before < after) {
				// add new set bonus for other equipped items in the set
				for (set_group in equipped) {
					if (set_group != group && equipped[set_group]["set_bonuses"] != null) {
						if (equipped[set_group]["set_bonuses"][0] == set && equipped[set_group]["set_bonuses"][1] == 1) {
							for (affix in equipped[set_group]["set_bonuses"][after]) {
								character[affix] += equipped[set_group]["set_bonuses"][after][affix]
							}
						}
					}
				}
				// add shared set bonuses
				for (affix in sets[set][after]) {
					if (character.class_name == "Sorceress" && (affix == "oskill_Fire_Ball" || affix == "oskill_Fire_Wall" || affix == "oskill_Meteor")) {
						character[affix] += 3
					} else {
						character[affix] += sets[set][after][affix]
					}
				}
			}
		}
	}
	// prevent incompatible weapon/offhand combinations
	if (equipped.weapon.name != "none" && equipped.offhand.name != "none") {
		if (group == "offhand") {
			if (itemType == "quiver" && equipped.weapon.type != "bow" && equipped.weapon.type != "crossbow") { equip('weapon', 'none') }
			else if (itemType != "quiver" && equipped.weapon.twoHanded == 1 && (equipped.weapon.type != "sword" || character.class_name != "Barbarian")) { equip('weapon', 'none') }
			else if (itemType == "claw" && equipped.weapon.type != "claw") { equip('weapon', 'none') }
			else if (src_group == "weapon") {
				// TODO: Offhand attacks are separate
				for (affix in equipped.offhand) {
					if (affix == "damage_min" || affix == "damage_max" /*|| ...many affixes*/) {
						// TODO: prevent offhand attack stats from affecting mainhand attacks
					}
				}
			}
		} else if (group == "weapon") {
			if (equipped.offhand.type == "quiver" && itemType != "bow" && itemType != "crossbow") { equip('offhand', 'none') }
			else if (equipped.offhand.type != "quiver" && twoHanded == 1 && (itemType != "sword" || character.class_name != "Barbarian")) { equip('offhand', 'none') }
			else if (itemType != "claw" && equipped.offhand.type == "claw") { equip('offhand', 'none') }
		}
	}
	// adjust damage for 2-handed swords if wielded differently
	if (character.class_name == "Barbarian") {
		if (equipped.weapon.name != "none" && equipped.offhand.name != "none") {
			if (equipped.weapon.type == "sword" && equipped.weapon.twoHanded == 1) { checkWield("weapon", 1) }
			if (equipped.offhand.type == "sword" && equipped.offhand.twoHanded == 1) { checkWield("offhand", 1) }
		} else {
			if (equipped.weapon.type == "sword" && equipped.weapon.twoHanded == 1) { checkWield("weapon", 2) }
			if (equipped.offhand.type == "sword" && equipped.offhand.twoHanded == 1) { checkWield("offhand", 2) }
		}
	}
	// remove incompatible corruptions
	if (equipped[group].ethereal > 0 || equipped[group].sockets > 0 || equipped[group].rw > 0 || equipped[group].rarity == "common" || (group == "offhand" && (equipped[group].type == "shield" || equipped[group].type == "quiver") && equipped[group].type != corruptsEquipped[group].base)) { corrupt(group, group) }
	if (corruptsEquipped[group].name == "+ Sockets") { adjustCorruptionSockets(group) }
	if (group == "offhand") {
		// reload corruption options when the selected type changes
		if (equipped[group].type == "shield") { if (offhandType != "shield") { offhandType = "shield"; reloadOffhandCorruptions(); } }
		else if (equipped[group].type == "quiver") { if (offhandType != "quiver") { offhandType = "quiver"; reloadOffhandCorruptions(); } }
		else if (equipped[group].name != "none") { if (offhandType != "weapon") { offhandType = "weapon"; reloadOffhandCorruptions(); } }	// TODO: Add weapon corruptions for dual-wielding
		else { if (offhandType != "none") { offhandType = "none"; reloadOffhandCorruptions(); } }
	}
	if (val == group || val == "none") { document.getElementById(("dropdown_"+group)).selectedIndex = 0; }
	// set inventory image
	if (equipped[group].name != "none") {
		var src = "";
		var base = "";
		if (typeof(equipped[group].img) != 'undefined') { src = equipped[group].img }
		if (typeof(equipped[group].base) != 'undefined') { base = equipped[group].base }
		document.getElementById(group+"_image").src = getItemImage(group,base,src)
	} else {
		document.getElementById(group+"_image").src = "./images/items/none.png"
	}
	
	if (auraName != "" && auraLevel != "") { addAura(auraName, auraLevel, group); }		// TODO: Why does this break things if called earlier? (item image wasn't appearing)
	// update
	calculateSkillAmounts()
	updateEffectList()
	updateStats()
	checkRequirements()
	updateSkills()
	if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
	if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
}

// checkWield - Adjust base damage for two-handed swords (dependent on whether wielded with 1 or 2 hands)
//	group: item's group (weapon or offhand)
//	hands_used: number of hands used to wield the weapon
// ---------------------------------
function checkWield(group, hands_used) {
		var base_min = equipped[group].base_damage_min;
		var base_max = equipped[group].base_damage_max;
		var min_alt = equipped[group].base_min_alternate;
		var max_alt = equipped[group].base_max_alternate;
		var swap = 0;
		if (hands_used == 2) { if (base_min < min_alt) { swap = 1 } }
		else { if (base_min > min_alt) { swap = 1 } }
		if (swap == 1) {
			character.base_damage_min -= base_min
			character.base_damage_max -= base_max
			equipped[group].base_damage_min = min_alt
			equipped[group].base_damage_max = max_alt
			equipped[group].base_min_alternate = base_min
			equipped[group].base_max_alternate = base_max
			character.base_damage_min += min_alt
			character.base_damage_max += max_alt
		}
}

// addAura - Adds an aura of the specified level to the character
//	name: aura name
//	lvl: aura level
//	type: item type which the aura is granted by
// ---------------------------------
function addAura(name, lvl, type) {
	if (document.getElementById(name) == null && lvl > 0) {
		var newEffect = document.createElement("img")
		var effectIcon = "./images/effects/dark/"+name+" dark.png"
		
		var eClass = document.createAttribute("class");	eClass.value = "effect";	newEffect.setAttributeNode(eClass);
		var eId = document.createAttribute("id");	eId.value = name;		newEffect.setAttributeNode(eId);	// should the name be codified, without spaces?
		var eSrc = document.createAttribute("src");	eSrc.value = effectIcon;	newEffect.setAttributeNode(eSrc);
		
		var eHoverOn = document.createAttribute("onmouseover");		eHoverOn.value = "hoverAura("+name+")";		newEffect.setAttributeNode(eHoverOn);
		var eHoverOff = document.createAttribute("onmouseout");		eHoverOff.value = "auraOut("+name+")";		newEffect.setAttributeNode(eHoverOff);
		var eToggle = document.createAttribute("onclick");		eToggle.value = "toggleAura("+name+")";		newEffect.setAttributeNode(eToggle);
		var eRemove = document.createAttribute("oncontextmenu");	eRemove.value = "removeAura("+name+")";		newEffect.setAttributeNode(eRemove);
		
		var effectGUI = document.getElementById("side");
		effectGUI.appendChild(newEffect);
		
		if (typeof(effects[name]) == 'undefined') { effects[name] = {} }
		var data = getAuraData(name, lvl);
		for (affix in data) { effects[name][affix] = data[affix] }
		effects[name]["enabled"] = 0
		toggleAura(name) 	// settings.autocast ignored
	}
	calculateSkillAmounts()
	updateStats()
}

// removeAura - Removes an aura from the character
//	name: aura name
// ---------------------------------
function removeAura(name) {
	if (typeof(effects[name]) != 'undefined') {
		if (document.getElementById(name) != null) {
//			for (affix in effects[name]) { effects[name][affix] = 0 }
			if (effects[name].enabled == 1) { toggleAura(name) }
			document.getElementById(name).remove();
		}
	}
}

// toggleAura - Enable or disable an aura without removing it from the character
//	name: aura name
// ---------------------------------
function toggleAura(name) {
	if (effects[name].enabled == 1) {
		for (affix in effects[name]) {
			character[affix] -= effects[name][affix]
		}
		effects[name].enabled = 0
		document.getElementById(name).src = "./images/effects/dark/"+name+" dark.png"
	} else {
		for (affix in effects[name]) {
			character[affix] += effects[name][affix]
		}
		effects[name]["enabled"] = 1
		document.getElementById(name).src = "./images/effects/"+name+".png"
	}
	calculateSkillAmounts()
	updateStats()
	if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
	if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
}

// hoverAura - display aura info on mouseover
//	name: aura name
// ---------------------------------
function hoverAura(name) {}	// TODO: implement

// auraOut - remove mouseover info
//	name: aura name
// ---------------------------------
function auraOut(name) {}	// TODO: implement

// resetSkills - Resets functionality for skills
// ---------------------------------
function resetSkills() {
	for (bonus in skill_bonuses) { character[bonus] = skill_bonuses[bonus] }
	for (s = 0, len = skills.length; s < len; s++) {
		skills[s].level = 0
		skills[s].extra_levels = 0
		skills[s].force_levels = 0
		document.getElementById("p"+skills[s].key).innerHTML = ""
		document.getElementById("s"+skills[s].key).onmouseover = function() {mouseOut};
		document.getElementById("s"+skills[s].key).onclick = function() {mouseOut};
		document.getElementById("s"+skills[s].key).oncontextmenu = function() {mouseOut};
	}
	document.getElementById("dropdown_skill1").innerHTML = "<option class='gray' disabled selected>" + " ­ ­ ­ ­ Skill 1" + "</option>"
	document.getElementById("dropdown_skill2").innerHTML = "<option class='gray' disabled selected>" + " ­ ­ ­ ­ Skill 2" + "</option>"
}

// resetEquipment - Resets all items
// ---------------------------------
function resetEquipment() {
	var equipmentTypes = ["helm", "armor", "gloves", "boots", "belt", "amulet", "ring1", "ring2", "weapon", "offhand"];
	var equipmentDropdowns = ["dropdown_helm", "dropdown_armor", "dropdown_gloves", "dropdown_boots", "dropdown_belt", "dropdown_amulet", "dropdown_ring1", "dropdown_ring2", "dropdown_weapon", "dropdown_offhand"]
	for (let e = 0; e < equipmentTypes.length; e++) {
		equip(equipmentTypes[e], "none")
		document.getElementById(equipmentDropdowns[e]).selectedIndex = 0
	}
	resetCharms()
}

// resetCharms - Resets all charms
// ---------------------------------
function resetCharms() {
	var type = "charms"
	for (val in equipped[type]) {
		for (old_affix in equipped[type][val]) {
			character[old_affix] -= equipped[type][val][old_affix]
			equipped[type][val][old_affix] = unequipped[old_affix]
		}
	}
	for (let s = 1; s < inv[0]["in"].length; s++) { inv[0]["in"][s] = "" }
	for (let t = 1; t < inv.length; t++) {
		inv[t].empty = 1
		inv[t].id
		document.getElementById(inv[t].id).innerHTML = ""
	}
}

// addCharm - Adds a charm to the inventory
//	val: the name of the charm
// ---------------------------------
function addCharm(val) {
	var charm_img = {prefix:"./images/items/charms/", small:["charm1_paw.png","charm1_disc.png","charm1_coin.png"], large:["charm2_page.png","charm2_horn.png","charm2_lantern.png"], grand:["charm3_lace.png","charm3_eye.png","charm3_monster.png"]};
	var charmImage = charm_img.prefix+"debug_plus.png";
	var charmHeight = "";
	var charmWidth = "29";
	var type = "";
	var charm_y = 1;
	var nameVal = val;
	var charmItem = "";
	for (item in equipment["charms"]) {
		if (equipment["charms"][item].name == val) {
			charmItem = equipment["charms"][item]
			type = charmItem.type
		}
	}
	var r = Math.floor((Math.random() * 3));
	if (type == "grand") { charmHeight = "88"; charmImage = charm_img.prefix+charm_img.grand[r]; charm_y = 3; }
	else if (type == "large") { charmHeight = "59"; charmImage = charm_img.prefix+charm_img.large[r]; charm_y = 2; }
	else if (type == "small") { charmHeight = "29"; charmImage = charm_img.prefix+charm_img.small[r]; charm_y = 1; }
	if (typeof(charmItem.debug) != 'undefined') {
		if (val == "+20 skills") { charmHeight = "29"; charmImage = charm_img.prefix+"debug_II.png"; charm_y = 1; }
		else if (val == "+1 skill") { charmHeight = "29"; charmImage = charm_img.prefix+"debug_D.png"; charm_y = 1; }
		else if (val == "+1 (each) skill") { charmHeight = "29"; charmImage = charm_img.prefix+"debug_P.png"; charm_y = 1; }
		else if (val == "everything") { charmHeight = "29"; charmImage = charm_img.prefix+"debug_face.png"; charm_y = 1; }
		else { charmHeight = "29"; charmImage = charm_img.prefix+"debug_skull.png"; charm_y = 1; }
	}
	
	var allow = 1;
	for (let c = 1; c <= inv[0].in.length; c++) {
		if (inv[0].in[c] == val) {
			if (val == "Annihilus" || val == "Hellfire Torch" || val == "Gheed's Fortune") { allow = 0 } }
	}
	if (allow == 1) {
		if (val != "Annihilus" && val != "Hellfire Torch" && val != "Gheed's Fortune") {
			var append = "" + Math.floor((Math.random() * 999999) + 1);	// generate "unique" ID for charm
			val = val + "_" + append
		}
		if (nameVal == "Annihilus") { charmImage = charm_img.prefix+"charm1u.png"; }
		if (nameVal == "Hellfire Torch") { charmImage = charm_img.prefix+"charm2u.png"; }
		if (nameVal == "Gheed's Fortune") { charmImage = charm_img.prefix+"charm3u.png"; }
		if (nameVal == "Horadric Sigil") { charmImage = charm_img.prefix+"charm3s.png"; }
		var charmHTML = '<img style="width: ' + charmWidth + '; height: ' + charmHeight + '; pointer-events: auto;" id="' + val + '" src="' + charmImage + '" draggable="true" ondragstart="drag(event)" width="' + charmWidth + '" height="' + charmHeight + '" oncontextmenu="trash(event)" onmouseover="itemHover(event, this.value)" onmouseout="itemOut()" onclick="itemSelect(event)">';
		var insertion = "";
		var space_found = 0;
		var empty = 1;
		var i = 0;
		for (let x = 1; x <= 10; x++) {
			for (let y = 0; y < 4; y++) {
				i = y*10 + x
				empty = 1
				if (space_found == 0 && charm_y + (y+1) <= 5) {
					if (inv[i].empty == 0) { empty = 0 }
					if (charm_y > 1 && inv[i+10].empty == 0) { empty = 0 }
					if (charm_y > 2 && inv[i+20].empty == 0) { empty = 0 }
				} else { empty = 0 }
				if (empty == 1) { space_found = i }
			}
		}
		if (space_found > 0) {
			var i = space_found;
			insertion = inv[i].id;
			inv[i].empty = 0
			inv[0].in[i] = val
			if (charm_y > 1) { inv[i+10].empty = 0; inv[0].in[i+10] = val; }
			if (charm_y > 2) { inv[i+20].empty = 0; inv[0].in[i+20] = val; }
			document.getElementById(insertion).innerHTML += charmHTML;
			var ch = "charms";
			equipped[ch][val] = {}
			for (item in equipment[ch]) {
				if (equipment[ch][item].name == nameVal) {
					for (affix in equipment[ch][item]) {
						character[affix] += equipment[ch][item][affix]
						equipped[ch][val][affix] = equipment[ch][item][affix]
					}
				}
			}
			if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
			if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
		}
	}
	document.getElementById("dropdown_charms").selectedIndex = 0
	updateEffectList()
	calculateSkillAmounts()
	for (let s = 0; s < skills.length; s++) { modifyEffect(skills[s]) }
	updateStats()
	updateSkills()
}

// addSocketable - Adds a jewel, rune, or gem to the inventory
//	val: the name of the socketable item
// ---------------------------------
function addSocketable(val) {
	var prefix = "./images/items/socketables/";
	var jewels = ["Jewel_blue.gif","Jewel_green.gif","Jewel_peach.gif","Jewel_purple.gif","Jewel_red.gif","Jewel_white.gif",];
	var itemImage = "";
	var nameVal = val;
	var item = "";
	for (sock in socketables) { if (socketables[sock].name == val) { item = socketables[sock] } }
	var r = Math.floor((Math.random() * 6));
	if (item.type == "jewel") { itemImage = prefix + "jewel/" + jewels[r] }
	else if (item.type == "rune") { itemImage = prefix + "rune/" + item.name.split(' ').join('_') + ".png" }
	else if (item.type == "gem") { itemImage = prefix + "gem/" + item.name.split(' ').join('_') + ".gif" }
	else if (item.name == "Standard of Heroes") { itemImage = prefix + "Standard of Heroes.png" }
	else { itemImage = prefix + "debug_plus.png" }
	
	var append = "_" + Math.floor((Math.random() * 999999) + 1);	// generate "unique" ID for item
	val = val + append
	
	var socketable = 'socketable';
	var itemHTML = '<img style="width: 28; height: 28; pointer-events: auto; z-index:5;" id="' + val + '" src="' + itemImage + '" draggable="true" ondragstart="dragSocketable(event)" width="28" height="28" oncontextmenu="trashSocketable(event)" onmouseover="itemHover(event, this.value)" onmouseout="itemOut()" onclick="socketableSelect(event)">';
	var insertion = "";
	var space_found = 0;
	var empty = 1;
	var i = 0;
	for (let x = 1; x <= 10; x++) {
		for (let y = 0; y < 4; y++) {
			i = y*10 + x
			empty = 1
			if (space_found == 0 && 1 + (y+1) <= 5) {
				if (inv[i].empty == 0) { empty = 0 }
			} else { empty = 0 }
			if (empty == 1) { space_found = i }
		}
	}
	if (space_found > 0) {
		var i = space_found;
		insertion = inv[i].id;
		inv[i].empty = 0
		inv[0].in[i] = val
		document.getElementById(insertion).innerHTML += itemHTML;
	}
	document.getElementById("dropdown_socketables").selectedIndex = 0
}

// addMisc - Adds miscellaneous effect
//	val: name of the chosen effect
// ---------------------------------
function addMisc(val) {
	document.getElementById("dropdown_misc").selectedIndex = 0
	for (let m = 1; m < non_items.length; m++) {
		if (val == non_items[m].name) {
			if (typeof(effects[non_items[m].effect]) == 'undefined') { effects[non_items[m].effect] = {} }
			initiateMiscEffect(non_items[m].effect, m)
			// update
			updateEffectList()
			calculateSkillAmounts()
			//for (let s = 0; s < skills.length; s++) { modifyEffect(skills[s]) }
			updateStats()
			updateSkills()
			if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
			if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
		}
	}
}

// initiateMiscEffect - Handles adding of miscellaneous effects
//	name: name of the effect
//	i: array index for the effect
// ---------------------------------
function initiateMiscEffect(name, i) {
	if (document.getElementById(name) == null) {
		var newEffect = document.createElement("img")
		var effectIcon = "./images/misc/dark/"+name+".png";
		
		var eClass = document.createAttribute("class");	eClass.value = "effect";	newEffect.setAttributeNode(eClass);
		var eId = document.createAttribute("id");	eId.value = name;		newEffect.setAttributeNode(eId);
		var eSrc = document.createAttribute("src");	eSrc.value = effectIcon;	newEffect.setAttributeNode(eSrc);
		
		var eToggle = document.createAttribute("onclick");		eToggle.value = "toggleMiscEffect("+name+", "+i+")";	newEffect.setAttributeNode(eToggle);
		var eRemove = document.createAttribute("oncontextmenu");	eRemove.value = "removeMiscEffect("+name+", "+i+")";	newEffect.setAttributeNode(eRemove);
		
		var effectGUI = document.getElementById("side");
		effectGUI.appendChild(newEffect);
		
		if (typeof(effects[name]) == 'undefined') { effects[name] = {} }
		effects[name]["enabled"] = 0
		if (settings.autocast == 1) {
			toggleMiscEffect(name, i)
		}
	}
}

// removeMiscEffect - Removes miscellaneous effect
//	name: name of the effect
//	i: array index for the effect
// ---------------------------------
function removeMiscEffect(name, i) {
	if (i > 0) { name = non_items[i].effect } else { i = non_items[i].i }
	if (typeof(effects[name]) != 'undefined') {
		if (document.getElementById(name) != null) { document.getElementById(name).remove(); }
		for (affix in effects[name]) {
			character[affix] -= effects[name][affix]
			effects[name][affix] = 0
		}
		// update
		updateEffectList()
		calculateSkillAmounts()
		//for (let s = 0; s < skills.length; s++) { modifyEffect(skills[s]) }
		updateStats()
		updateSkills()
		if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
		if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
	}
}

// toggleMiscEffect - Enables or disables miscellaneous effects without removing them from the character
//	name: name of the effect
//	i: array index for the effect
// ---------------------------------
function toggleMiscEffect(name, i) {
	if (i > 0) { name = non_items[i].effect } else { i = non_items[i].i }
	if (effects[name]["enabled"] == 1) {
		for (affix in effects[name]) {
			character[affix] -= effects[name][affix]
			effects[name][affix] = 0
		}
		effects[name]["enabled"] = 0
		document.getElementById(name).src = "./images/misc/dark/"+name+".png"
	} else {
		for (affix in non_items[i]) {
			if (affix != "enabled" && affix != "name" && affix != "duration" && affix != "recharge" && affix != "effect" && affix != "i") {
				effects[name][affix] = non_items[i][affix]
				character[affix] += non_items[i][affix]
			}
		}
		effects[name]["enabled"] = 1
		document.getElementById(name).src = "./images/misc/"+name+".gif"
	}
	// update
	updateEffectList()
	calculateSkillAmounts()
	//for (let s = 0; s < skills.length; s++) { modifyEffect(skills[s]) }
	updateStats()
	updateSkills()
	if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
	if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
}

// resetMisc - Removes all miscellaneous effects
// ---------------------------------
function resetMisc() {
	for (name in effects) {
		removeMiscEffect(name, 0)
	}
}

// toggleQuests - Toggles the completion of all quests and their rewards
//	quests: name identifier for 'Quests Completed' checkbox element
// ---------------------------------
function toggleQuests(quests) {
	if (quests.checked == false && (character.skillpoints < 12 || character.statpoints < 15)) { quests.checked = true }
	else {
		character.quests_completed *= -1
		var toggle = character.quests_completed
		character.skillpoints += (12*toggle)
		character.statpoints += (15*toggle)
		character.life += (60*toggle)
		character.fRes += (30*toggle)
		character.cRes += (30*toggle)
		character.lRes += (30*toggle)
		character.pRes += (30*toggle)
		updatePrimaryStats()
		updateMisc()
	}
}

// toggleRunning - Toggles whether the character is running or walking/standing
//	running: name identifier for 'Running' checkbox element
// ---------------------------------
function toggleRunning(running) {
	if (running.checked) { character.running = 1 } else { character.running = 0 }
	updateStats()
}

// changeDifficulty - Changes the game difficulty
//	diff: game difficulty (1-3)
// ---------------------------------
function changeDifficulty(diff) {
	character.difficulty = diff
	var penalties = ["fRes_penalty", "cRes_penalty", "lRes_penalty", "pRes_penalty", "mRes_penalty"]
	for (let p = 0; p < penalties.length; p++) {
		if (diff == 1) { character[penalties[p]] = 0 }
		else if (diff == 2) { character[penalties[p]] = 40 }
		else if (diff == 3) { character[penalties[p]] = 100 }
	}
	updatePrimaryStats()
	updateMisc()
}

// toggleCoupling - Changes whether adding/removing skill points can affect character level
//	coupling: name identifier for 'Skill Level Coupling' checkbox element
// ---------------------------------
function toggleCoupling(coupling) {
	if (coupling.checked) { settings.coupling = 1 } else { settings.coupling = 0 }
}

// toggleAutocast - Changes whether buffs and auras are automatically enabled when added
//	autocast: name identifier for 'New Effects Begin Enabled' checkbox element
// ---------------------------------
function toggleAutocast(autocast) {
	if (autocast.checked) { settings.autocast = 1 } else { settings.autocast = 0 }
}

// updateStats - Updates all stats
// ---------------------------------
function updateStats() { updatePrimaryStats(); updateMisc(); updateSecondaryStats(); updateTertiaryStats(); }

// updateStats - Updates stats shown by the default (original D2) stat page
// ---------------------------------
function updatePrimaryStats() {
	var c = character;
	var strTotal = (c.strength + c.all_attributes + (c.level-1)*c.strength_per_level);
	var dexTotal = (c.dexterity + c.all_attributes + (c.level-1)*c.dexterity_per_level);
	var vitTotal = (c.vitality + c.all_attributes + (c.level-1)*c.vitality_per_level);
	var energyTotal = (c.energy + c.all_attributes)*(1+c.max_energy);
	var statBonus = 1;
	var statBonus_offhand = 1;
	var weaponType = equipped.weapon.type;
	var weaponType_offhand = "";
	if (offhandType == "weapon") { weaponType_offhand = equipped.offhand.type }
	if (typeof(weaponType) != 'undefined') { 
		if (weaponType == "hammer") { statBonus = (strTotal*1.1/100) }
		else if (weaponType == "bow" || weaponType == "crossbow") { statBonus = (dexTotal/100) }
		else if (typeof(equipped.weapon.only) != 'undefined') { if (weaponType == "spear" || weaponType == "javelin" || equipped.weapon.only == "amazon") { statBonus = ((strTotal*0.8/100)+(dexTotal*0.5/100)) } }
		else if (weaponType == "dagger" || weaponType == "thrown" || weaponType == "claw" || weaponType == "javelin") { statBonus = ((strTotal*0.75/100)+(dexTotal*0.75/100)) }
		else  { statBonus = (strTotal/100) }
		if (offhandType == "weapon") {
			if (weaponType_offhand == "hammer") { statBonus_offhand = (strTotal*1.1/100) }
			else if (weaponType_offhand == "dagger" || weaponType_offhand == "thrown" || weaponType_offhand == "claw" || weaponType_offhand == "javelin") { statBonus_offhand = ((strTotal*0.75/100)+(dexTotal*0.75/100)) }
			else  { statBonus_offhand = (strTotal/100) }
		}
	}
	var weapon_skillup = 0;
	var weapon_skillup_offhand = 0;
	var ar_skillup_offhand = 0;
	var cstrike_skillup_offhand = 0;
	var pierce_skillup_offhand = 0;
	if (c.class_name == "Barbarian" || c.class_name == "Assassin") {
		if (weaponType == "sword" || weaponType == "axe" || weaponType == "dagger") { weapon_skillup = c.edged_skillup[0]; c.ar_skillup = c.edged_skillup[1]; c.cstrike_skillup = c.edged_skillup[2]; }
		else if (weaponType == "polearm" || weaponType == "spear") { weapon_skillup = c.pole_skillup[0]; c.ar_skillup = c.pole_skillup[1]; c.cstrike_skillup = c.pole_skillup[2]; }
		else if (weaponType == "mace" || weaponType == "scepter" || weaponType == "staff" || weaponType == "hammer" || weaponType == "club") { weapon_skillup = c.blunt_skillup[0]; c.ar_skillup = c.blunt_skillup[1]; c.cstrike_skillup = c.blunt_skillup[2]; }
		else if (weaponType == "thrown") { weapon_skillup = c.thrown_skillup[0]; c.ar_skillup = c.thrown_skillup[1]; c.pierce_skillup = c.thrown_skillup[2]; }
		else if (weaponType == "claw") { weapon_skillup = c.claw_skillup[0]; c.ar_skillup = c.claw_skillup[1]; c.cstrike_skillup = c.claw_skillup[2]; }
		else { weapon_skillup = 0; c.ar_skillup = 0; c.cstrike_skillup = 0; c.pierce_skillup = 0; }
		if (offhandType == "weapon") {
			if (weaponType_offhand == "sword" || weaponType_offhand == "axe" || weaponType_offhand == "dagger") { weapon_skillup_offhand = c.edged_skillup[0]; ar_skillup_offhand = c.edged_skillup[1]; cstrike_skillup_offhand = c.edged_skillup[2]; }
			else if (weaponType_offhand == "mace" || weaponType_offhand == "scepter" || weaponType_offhand == "hammer" || weaponType_offhand == "club") { weapon_skillup_offhand = c.blunt_skillup[0]; ar_skillup_offhand = c.blunt_skillup[1]; cstrike_skillup_offhand = c.blunt_skillup[2]; }
			else if (weaponType_offhand == "thrown") { weapon_skillup_offhand = c.thrown_skillup[0]; ar_skillup_offhand = c.thrown_skillup[1]; pierce_skillup_offhand = c.thrown_skillup[2]; }
			else if (weaponType_offhand == "claw") { weapon_skillup_offhand = c.claw_skillup[0]; ar_skillup_offhand = c.claw_skillup[1]; cstrike_skillup_offhand = c.claw_skillup[2]; }
			else { weapon_skillup_offhand = 0; ar_skillup_offhand = 0; cstrike_skillup_offhand = 0; pierce_skillup_offhand = 0; }
		}
	}
	var life_addon = (vitTotal-c.starting_vitality)*c.life_per_vitality;
	var stamina_addon = (vitTotal-c.starting_vitality)*c.stamina_per_vitality;
	var mana_addon = (energyTotal-c.starting_energy)*c.mana_per_energy;

	var def = (c.base_defense + c.defense + c.level*c.defense_per_level + Math.floor(dexTotal/4)) * (1 + (c.defense_bonus + c.defense_skillup)/100);
	var ar = ((dexTotal - 7) * 5 + c.ar + c.level*c.ar_per_level + c.ar_const) * (1+(c.ar_skillup + c.ar_bonus + c.level*c.ar_bonus_per_level)/100) * (1+c.ar_shrine_bonus/100);	// TODO: Add c.ar_per_socketed
	var wisp = 1+~~Math.round(c.wisp/20,0)/10
	
	// combine socket affixes
	var socket_affixes = {};
	var socket_eDamage = 0;
	var socket_eDamage_offhand = 0;
	for (group in socketed) {
		for (let i = 0; i < socketed[group].items.length; i++) {
			for (affix in socketed[group].items[i]) {
				if (typeof(socket_affixes[affix]) == 'undefined') { socket_affixes[affix] = 0 }
				if (group == "weapon" && (affix == "e_damage" || affix == "damage_bonus")) { socket_eDamage += socketed[group].items[i][affix] }
				else if (group == "offhand" && (affix == "e_damage" || affix == "damage_bonus")) { socket_eDamage_offhand += socketed[group].items[i][affix] }
				socket_affixes[affix] += socketed[group].items[i][affix]
			}
		}
	}
	var socket_eDamage_offWeapon = ~~socket_affixes.e_damage + ~~socket_affixes.damage_bonus;
	if (offhandType == "weapon") { socket_eDamage_offWeapon -= socket_eDamage_offhand }
	// TODO: Weapon corruptions granting ED or ED per level are not yet included
	//var phys_min = ((1+statBonus+(c.e_damage+c.damage_bonus+weapon_skillup)/100)*((c.level-1)*c.min_damage_per_level+c.base_damage_min))+c.damage_min;	// deprecated
	//var phys_max = ((1+statBonus+(c.e_damage+c.damage_bonus+weapon_skillup)/100)*((c.level-1)*c.max_damage_per_level+c.base_damage_max))+c.damage_max;	// deprecated
	var sup = 0;	// TODO: Remove this and add superior ED stat to character stat list (so far, no weapons are superior)
	var e_damage_offWeapon = c.e_damage - ~~equipped.weapon.e_damage;
	if (offhandType == "weapon") { e_damage_offWeapon -= ~~equipped.offhand.e_damage }
	var phys_min = ((~~equipped.weapon.base_damage_min * (1+(~~equipped.weapon.e_damage+sup+socket_eDamage)/100) + c.damage_min + (c.level-1)*c.min_damage_per_level) * (1+statBonus+(c.damage_bonus+e_damage_offWeapon+weapon_skillup+socket_eDamage_offWeapon)/100));
	var phys_max = ((~~equipped.weapon.base_damage_max * (1+(~~equipped.weapon.e_damage+sup+socket_eDamage+(c.level*c.e_max_damage_per_level))/100) + c.damage_max + (c.level-1)*c.max_damage_per_level) * (1+statBonus+(c.damage_bonus+e_damage_offWeapon+weapon_skillup+socket_eDamage_offWeapon)/100));
	var phys_min_offhand = ((~~equipped.offhand.base_damage_min * (1+(~~equipped.offhand.e_damage+sup+socket_eDamage_offhand)/100) + c.damage_min + (c.level-1)*c.min_damage_per_level) * (1+statBonus_offhand+(c.damage_bonus+e_damage_offWeapon+weapon_skillup_offhand+socket_eDamage_offWeapon)/100));
	var phys_max_offhand = ((~~equipped.offhand.base_damage_max * (1+(~~equipped.offhand.e_damage+sup+socket_eDamage_offhand)/100) + c.damage_max + (c.level-1)*c.max_damage_per_level) * (1+statBonus_offhand+(c.damage_bonus+e_damage_offWeapon+weapon_skillup_offhand+socket_eDamage_offWeapon)/100));

// TODO: Most code above this is duplicated in checkSkill(). Duplicated code should be added to its own function or otherwise merged

	var fMin = c.fDamage_min*(1+(c.fDamage+c.fDamage_skillup)/100)*wisp;
	var fMax = (c.fDamage_max+(c.level*c.fDamage_max_per_level))*(1+(c.fDamage+c.fDamage_skillup)/100)*wisp;
	var cMin = c.cDamage_min*(1+(c.cDamage+c.cDamage_skillup)/100)*wisp;						// TODO: Add c.cDamage_per_charge_ice & c.cDamage_per_socketed
	var cMax = (c.cDamage_max+(c.level*c.cDamage_max_per_level))*(1+(c.cDamage+c.cDamage_skillup)/100)*wisp;	// TODO: Add c.cDamage_per_charge_ice & c.cDamage_per_socketed
	var lMin = c.lDamage_min*(1+(c.lDamage+c.lDamage_skillup)/100)*wisp;
	var lMax = (c.lDamage_max+(Math.floor(energyTotal/2)*c.lDamage_max_per_2_energy))*(1+(c.lDamage+c.lDamage_skillup)/100)*wisp;
	var pMin = (c.pDamage_all+c.pDamage_min)*(1+c.pDamage/100)*wisp;	// TODO: Damage over time should be separate from regular damage. Calculate poison bitrate.
	var pMax = (c.pDamage_all+c.pDamage_max)*(1+c.pDamage/100)*wisp;	//	 Also, poison doesn't overlap from different sources?
	
	var basic_min = Math.floor(phys_min*wisp + fMin + cMin + lMin + pMin + c.mDamage_min);
	var basic_max = Math.floor(phys_max*wisp + fMax + cMax + lMax + pMax + c.mDamage_max);
	//var basic_min = Math.floor(wisp*(phys_min + c.fDamage_min*(1+c.fDamage_skillup/100) + c.cDamage_min*(1+c.cDamage_skillup/100) + c.lDamage_min*(1+c.lDamage_skillup/100)) + c.mDamage_min);	// deprecated
	//var basic_max = Math.floor(wisp*(phys_max + c.fDamage_max*(1+c.fDamage_skillup/100) + c.cDamage_max*(1+c.cDamage_skillup/100) + c.lDamage_max*(1+c.lDamage_skillup/100)) + c.mDamage_max + wisp*(c.pDamage_all+c.pDamage_max));	// deprecated
	if (basic_min > 0 || basic_max > 0) { document.getElementById("basic_attack").innerHTML = basic_min + "-" + basic_max }
	else { document.getElementById("basic_attack").innerHTML = "" }
	// TODO: Create display for offhand attacks (separate damage & AR)
	
	var block = c.block + c.ibc;	// TODO: ibc isn't affected by corruption?
	if (c.class_name != "Paladin") { block -= 5; if (c.class_name == "Druid" || c.class_name == "Necromancer" || c.class_name == "Sorceress") { block -= 5 } }
	block = (Math.max(0,block) + c.block_skillup)*(dexTotal-15)/(c.level*2)
	if (c.running > 0) { block = block / 3 }
	if (c.block > 0) {
		document.getElementById("block_label").style.visibility = "visible"
		document.getElementById("block").innerHTML = Math.floor(Math.min(75,c.block,block))+"%"
	} else {
		document.getElementById("block_label").style.visibility = "hidden"
		document.getElementById("block").innerHTML = ""
	}
/*
	TODO: Hit chance calculations
	var monsterDefense = def;
	var monsterLevel = c.level;
	var hit = Math.max(5,Math.min(95,Math.round(200 * (ar/(ar+monsterDefense)) * (c.level/(c.level+monsterLevel)),0)));
	if (hit > 0) { document.getElementById("hit").innerHTML = hit+"%" }
	else { document.getElementById("hit").innerHTML = "" }
/**/
	document.getElementById("strength").innerHTML = Math.floor(strTotal)
	document.getElementById("dexterity").innerHTML = Math.floor(dexTotal)
	document.getElementById("vitality").innerHTML = Math.floor(vitTotal)
	document.getElementById("energy").innerHTML = Math.floor(energyTotal)
	document.getElementById("strength2").innerHTML = Math.floor(strTotal)
	document.getElementById("dexterity2").innerHTML = Math.floor(dexTotal)
	document.getElementById("vitality2").innerHTML = Math.floor(vitTotal)
	document.getElementById("energy2").innerHTML = Math.floor(energyTotal)
	if (c.running > 0) { document.getElementById("defense").innerHTML = "" }
	else {
		document.getElementById("defense").innerHTML = Math.floor(def + c.melee_defense)
		if (c.missile_defense > 0) { document.getElementById("defense").innerHTML += " (+" + c.missile_defense + ")" }
	}
	document.getElementById("ar").innerHTML = Math.floor(ar)
	document.getElementById("stamina").innerHTML = Math.floor((c.stamina + (c.level-1)*c.stamina_per_level + stamina_addon) * (1+c.stamina_skillup/100) * (1+c.max_stamina/100))
	document.getElementById("life").innerHTML = Math.floor((c.life + (c.level-1)*c.life_per_level + life_addon) * (1 + c.max_life/100))
	document.getElementById("mana").innerHTML = Math.floor((c.mana + (c.level-1)*c.mana_per_level + mana_addon) * (1 + c.max_mana/100))
	document.getElementById("level").innerHTML = c.level
	document.getElementById("class_name").innerHTML = c.class_name
	document.getElementById("remainingstats").innerHTML = c.statpoints
	document.getElementById("remainingskills").innerHTML = c.skillpoints
	document.getElementById("fres").innerHTML = (c.fRes + c.all_res - c.fRes_penalty + c.resistance_skillup) + " / " + Math.min(RES_CAP,(c.fRes_max_base + c.fRes_max + c.fRes_skillup))
	document.getElementById("cres").innerHTML = (c.cRes + c.all_res - c.cRes_penalty + c.resistance_skillup) + " / " + Math.min(RES_CAP,(c.cRes_max_base + c.cRes_max + c.cRes_skillup))
	document.getElementById("lres").innerHTML = (c.lRes + c.all_res - c.lRes_penalty + c.resistance_skillup) + " / " + Math.min(RES_CAP,(c.lRes_max_base + c.lRes_max + c.lRes_skillup))
	document.getElementById("pres").innerHTML = (c.pRes + c.all_res - c.pRes_penalty + c.resistance_skillup) + " / " + Math.min(RES_CAP,(c.pRes_max_base + c.pRes_max + c.pRes_skillup))
	var magicRes = (c.mRes - c.mRes_penalty)+"%";
	if (c.mDamage_reduced > 0) { magicRes += (" +"+c.mDamage_reduced) }
	document.getElementById("mres").innerHTML = magicRes
	
//	var weapon_speed = Math.ceil(256 * (charWpnSpeed + 1) / Math.floor(256 * (100 + wpnIAS + Math.floor(charIAS /(1 + charIAS/120)))/100)) - 1
	var ias = c.ias;
	if (offhandType == "weapon") { if (typeof(equipped.offhand.ias) != 'undefined') { ias -= equipped.offhand.ias } } else { ias += (Math.floor(dexTotal/8)*c.ias_per_8_dexterity) }
	document.getElementById("ias").innerHTML = ias
}

// updateSecondaryStats - Updates stats shown on the secondary (Path of Diablo) stat page
// ---------------------------------
function updateSecondaryStats() {
	var c = character;
	var physRes = c.pdr+"%";
	if (c.damage_reduced > 0) { physRes += (" +"+c.damage_reduced) }
	document.getElementById("pdr").innerHTML = physRes
	var fAbs = c.fAbsorb+"%";
	if (c.fAbsorb_flat > 0 || c.fAbsorb_flat_per_level > 0) { fAbs += (" +"+Math.floor(c.fAbsorb_flat + (c.level*c.fAbsorb_flat_per_level))) }
	document.getElementById("fabsorb").innerHTML = fAbs
	var cAbs = c.cAbsorb+"%";
	if (c.cAbsorb_flat > 0 || c.cAbsorb_flat_per_level > 0) { cAbs += (" +"+Math.floor(c.cAbsorb_flat + (c.level*c.cAbsorb_flat_per_level))) }
	document.getElementById("cabsorb").innerHTML = cAbs
	var lAbs = c.lAbsorb+"%";
	if (c.lAbsorb_flat > 0) { lAbs += (" +"+c.lAbsorb_flat) }
	document.getElementById("labsorb").innerHTML = lAbs
	document.getElementById("mabsorb").innerHTML = c.mAbsorb_flat
	
	document.getElementById("cdr").innerHTML = c.cdr
	document.getElementById("fcr").innerHTML = c.fcr + Math.floor(c.level*c.fcr_per_level)
	document.getElementById("fbr").innerHTML = c.fbr
	document.getElementById("fhr").innerHTML = c.fhr
	
	// actual movespeed
	//var speed = Math.floor((150*c.frw)/(150+c.frw)) + Math.floor((9*100)/6) + (1+(c.frw_skillup/100)) - (100+c.velocity);	// calculation for actual speed (units travelled per second), seems flawed?
	document.getElementById("frw").innerHTML = Math.floor(c.frw + c.frw_skillup)
	
	document.getElementById("life_leech").innerHTML = c.life_leech
	document.getElementById("mana_leech").innerHTML = c.mana_leech
	var LPH = c.life_per_hit + "m , " + c.life_per_ranged_hit + "r";
	if (LPH == "0m , 0r") { LPH = 0 }
	document.getElementById("life_per_hit").innerHTML = LPH
	var MPH = c.mana_per_hit + "m , " + c.mana_per_ranged_hit + "r";
	if (MPH == "0m , 0r") { MPH = 0 }
	document.getElementById("mana_per_hit").innerHTML = MPH
	
	document.getElementById("fdamage").innerHTML = c.fDamage + c.fDamage_skillup
	document.getElementById("cdamage").innerHTML = c.cDamage + c.cDamage_skillup
	document.getElementById("ldamage").innerHTML = c.lDamage + c.lDamage_skillup
	document.getElementById("pdamage").innerHTML = c.pDamage
	document.getElementById("fpierce").innerHTML = c.fPierce + c.fPierce_skillup
	document.getElementById("cpierce").innerHTML = c.cPierce + c.cPierce_skillup
	document.getElementById("lpierce").innerHTML = c.lPierce + c.lPierce_skillup
	document.getElementById("ppierce").innerHTML = c.pPierce
	
	document.getElementById("pierce").innerHTML = c.pierce + c.pierce_skillup
	document.getElementById("cblow").innerHTML = c.cblow
	document.getElementById("dstrike").innerHTML = c.dstrike + Math.floor(c.level*c.dstrike_per_level)
	document.getElementById("cstrike").innerHTML = c.cstrike + c.cstrike_skillup
	document.getElementById("owounds").innerHTML = c.owounds
	
	document.getElementById("mf").innerHTML = Math.floor(c.mf + c.level*c.mf_per_level)
	document.getElementById("gf").innerHTML = c.gf
	
	document.getElementById("damage_vs_demons").innerHTML = c.damage_vs_demons
	document.getElementById("damage_vs_undead").innerHTML = Math.floor(c.damage_vs_undead + c.level*c.damage_vs_undead_per_level)
	document.getElementById("ar_vs_demons").innerHTML = c.ar_vs_demons
	document.getElementById("ar_vs_undead").innerHTML = Math.floor(c.ar_vs_undead + c.level*c.ar_vs_undead_per_level)
	
	if (c.life_per_demon_kill > 0) { document.getElementById("life_per_kill").innerHTML = c.life_per_kill + " , " + c.life_per_demon_kill + " (demons)" } else { document.getElementById("life_per_kill").innerHTML = c.life_per_kill }
	document.getElementById("mana_per_kill").innerHTML = c.mana_per_kill
	var lifeRegen = "";
	if (c.life_regen > 0) { lifeRegen = c.life_regen+"% " }
	lifeRegen += ("+"+c.life_replenish)
	document.getElementById("life_regen").innerHTML = lifeRegen
	document.getElementById("mana_regen").innerHTML = round(c.mana_regen + c.mana_regen_skillup)+"%"
	
	document.getElementById("damage_to_mana").innerHTML = c.damage_to_mana
	
	document.getElementById("enemy_fres").innerHTML = c.enemy_fRes
	document.getElementById("enemy_cres").innerHTML = c.enemy_cRes
	document.getElementById("enemy_lres").innerHTML = c.enemy_lRes
	document.getElementById("enemy_pres").innerHTML = c.enemy_pRes
}

// updateTertiaryStats - Updates other stats
// ---------------------------------
function updateTertiaryStats() {
	var c = character;
	document.getElementById("velocity").innerHTML = (100 + c.velocity) + "%"
	document.getElementById("poison_reduction").innerHTML = Math.min(75,c.poison_length_reduced) + "%"
	document.getElementById("curse_reduction").innerHTML = Math.min(75,c.curse_length_reduced) + "%"
	var thorns = c.thorns_reflect;
	if (c.thorns_reflect == 0) { thorns = Math.floor(c.thorns_lightning + c.thorns + c.level*c.thorns_per_level) } else { thorns += "%"; if (c.thorns > 0 || c.thorns_per_level > 0) { thorns += (" +"+Math.floor(c.thorns_lightning + c.thorns + c.level*c.thorns_per_level)) } }
	document.getElementById("thorns").innerHTML = thorns
	var lightRadius = "";
	if (c.light_radius > 0) { lightRadius = "+"+c.light_radius + " to Light Radius<br>" } else if (c.light_radius < 0) { lightRadius = c.light_radius + " to Light Radius<br>" } else { lightRadius = "" }
	document.getElementById("light_radius").innerHTML = lightRadius
	if (c.slower_stam_drain > 0) { document.getElementById("slower_stam_drain").innerHTML = "+"+c.slower_stam_drain+"% Slower Stamina Drain<br>" } else { document.getElementById("slower_stam_drain").innerHTML = "" }
	if (c.heal_stam > 0) { document.getElementById("heal_stam").innerHTML = "Heal Stamina +" + Math.floor(c.heal_stam + c.level*c.heal_stam_per_level)+"%<br>" } else { document.getElementById("heal_stam").innerHTML = "" }
	var enemyDef = "";
	if (c.enemy_defense != 0 || c.target_defense != 0) { enemyDef += (Math.min(99,(c.enemy_defense + c.target_defense))+"%"); if (c.enemy_defense_flat != 0 || c.monster_defense_per_hit != 0) { enemyDef += ", " } }
	if (c.enemy_defense_flat != 0) { enemyDef += c.enemy_defense_flat; if (c.monster_defense_per_hit != 0) { enemyDef += ", " } }
	if (c.monster_defense_per_hit != 0) { enemyDef += (c.monster_defense_per_hit+" per hit") }
	if (enemyDef == "") { enemyDef = "0"}
	document.getElementById("enemy_defense").innerHTML = enemyDef
//	if (c.monster_defense_per_hit != 0) { document.getElementById("enemy_defense_per_hit").innerHTML = ("Enemy Def: "+c.monster_defense_per_hit+" (per hit)") } else { document.getElementById("enemy_defense_per_hit").innerHTML = "" }	// temporary second line for enemy defense stats (to fit allocated area)
	var enemyBlind = "";
	if (c.blind_on_hit > 0) { enemyBlind = "Hit Blinds Target"; if (c.blind_on_hit > 1) { enemyBlind += (" +"+c.blind_on_hit+"<br>"); } else { enemyBlind += "<br>" } }
	document.getElementById("blind_on_hit").innerHTML = enemyBlind
	if (c.flee_on_hit > 0) { document.getElementById("flee_on_hit").innerHTML = "Hit Causes Monster to Flee " + Math.min(100,c.flee_on_hit) + "%<br>" } else { document.getElementById("flee_on_hit").innerHTML = "" }
	if (c.discount > 0) { document.getElementById("discount").innerHTML = "Vendor Prices Reduced by " + c.discount + "%<br>" } else { document.getElementById("discount").innerHTML = "" }
	
	if (c.itd > 0) { document.getElementById("itd").innerHTML = "Ignore Target Defense<br>" } else { document.getElementById("itd").innerHTML = "" }
	if (c.pmh > 0) { document.getElementById("pmh").innerHTML = "Prevent Monster Heal<br>" } else { document.getElementById("pmh").innerHTML = "" }
	if (c.cbf > 0) { document.getElementById("cbf").innerHTML = "Cannot Be Frozen<br>" }
	else if (c.half_freeze_duration > 0) { document.getElementById("cbf").innerHTML = "Half Freeze Duration<br>" }
	else { document.getElementById("cbf").innerHTML = "" }
	if (c.knockback > 0) { document.getElementById("knockback").innerHTML = "Knockback<br>" } else { document.getElementById("knockback").innerHTML = "" }
	if (c.melee_splash > 0) { document.getElementById("melee_splash").innerHTML = "Melee Attacks deal Splash Damage<br>" } else { document.getElementById("melee_splash").innerHTML = "" }
	if (c.slow_target > 0 || c.slow_enemies > 0) { document.getElementById("slow_target").innerHTML = "Targets Slowed " + (c.slow_target + c.slow_enemies)+"%<br>" } else { document.getElementById("slow_target").innerHTML = "" }
	if (c.freezes_target > 1) { document.getElementById("freezes_target").innerHTML = "Freezes Target +" + c.freezes_target + "<br>" }
	else if (c.freezes_target > 0) { document.getElementById("freezes_target").innerHTML = "Freezes Target<br>" }
	else { document.getElementById("freezes_target").innerHTML = "" }
	if (c.peace > 0) { document.getElementById("peace").innerHTML = "Slain Monsters Rest in Peace<br>" } else { document.getElementById("peace").innerHTML = "" }
	if (c.glow > 0) { document.getElementById("glow").innerHTML = "Character is Glowing<br>" } else { document.getElementById("glow").innerHTML = "" }
}

// updateMisc - Updates other interface elements
// ---------------------------------
function updateMisc() {
	var c = character;
	if (c.statpoints == 0) {
		document.getElementById("remainingstats").innerHTML = ""
		document.getElementById("hide_statpoints").style.visibility = "visible"
	} else {
		document.getElementById("hide_statpoints").style.visibility = "hidden"
	}
	if (c.skillpoints == 0) {
		document.getElementById("remainingskills").innerHTML = ""
		document.getElementById("hide_skillpoints").style.visibility = "visible"
	} else {
		document.getElementById("hide_skillpoints").style.visibility = "hidden"
	}
	if (c.level == 1 && c.statpoints == 0 && c.quests_completed < 0) {
		document.getElementById("hide_stats").style.visibility = "visible"
	} else {
		document.getElementById("hide_stats").style.visibility = "hidden"
	}
	updateSkillIcons()
	checkRequirements()
	
	// update available sockets - TODO: move this to a more suitable 'update' function
	for (group in socketed) {
		socketed[group].sockets = (~~equipped[group].sockets + ~~corruptsEquipped[group].sockets)
		removeInvalidSockets(group)
	}
}

// calculateSkillAmounts - Updates skill levels
// ---------------------------------
function calculateSkillAmounts() {
	for (s = 0; s < skills.length; s++) {
		skills[s].extra_levels = 0
		skills[s].extra_levels += character.all_skills
		var display = skills[s].level;
	//	var temp = 0;
		var skillSolo = "skill_" + skills[s].name.split(" ").join("_");
		skills[s].force_levels = character[skillSolo]
	//	var oskillSolo = "oskill_" + skills[s].name.split(" ").join("_");
	//	skills[s].force_levels += character[oskillSolo]
		var oskillSolo = "o"+skillSolo;
		if (typeof(character[oskillSolo]) != 'undefined') { skills[s].force_levels += character[oskillSolo] }
	//	offskills[skills[s].code] = skills[s].level + skills[s].extra_levels + skills[s].force_levels
		if (character.class_name == "Amazon") {
			skills[s].extra_levels += character.skills_amazon
			if (s < 10) { skills[s].extra_levels += character.skills_javelins
			} else if (s > 19) { skills[s].extra_levels += character.skills_bows
				if (s == 23 || s == 26 || s == 28) { skills[s].extra_levels += character.skills_fire_all }
				if (s == 20 || s == 24 || s == 29) { skills[s].extra_levels += character.skills_cold_all }
			} else { skills[s].extra_levels += character.skills_passives
			}
		} else if (character.class_name == "Assassin") {
			skills[s].extra_levels += character.skills_assassin
			if (s == 1 || s == 6 || s == 20 || s == 24 || s == 27) { skills[s].extra_levels += character.skills_fire_all }
			if (s < 9) { skills[s].extra_levels += character.skills_martial
				if (s == 3 || s == 8) { skills[s].extra_levels += character.skills_cold_all }
			} else if (s > 19) { skills[s].extra_levels += character.skills_traps
			} else { skills[s].extra_levels += character.skills_shadow
			}
		} else if (character.class_name == "Barbarian") {
			skills[s].extra_levels += character.skills_barbarian
			if (s < 10) { skills[s].extra_levels += character.skills_warcries
			} else if (s > 17) { skills[s].extra_levels += character.skills_combat_barbarian
			} else { skills[s].extra_levels += character.skills_masteries
			}
		} else if (character.class_name == "Druid") {
			skills[s].extra_levels += character.skills_druid
			if (s == 0 || s == 1 || s == 2 || s == 4 || s == 7 || s == 9 || s == 17) { skills[s].extra_levels += character.skills_fire_all }
			if (s < 11) { skills[s].extra_levels += character.skills_elemental
				if (s == 3 || s == 10) { skills[s].extra_levels += character.skills_cold_all }
			} else if (s > 20) { skills[s].extra_levels += character.skills_summoning_druid
			} else { skills[s].extra_levels += character.skills_shapeshifting
			}
		} else if (character.class_name == "Necromancer") {
			skills[s].extra_levels += character.skills_necromancer
			if (s < 11) { skills[s].extra_levels += character.skills_summoning_necromancer
				if (s == 9) { skills[s].extra_levels += character.skills_fire_all }
			} else if (s > 19) { skills[s].extra_levels += character.skills_curses
			} else { skills[s].extra_levels += character.skills_poisonBone
			}
		} else if (character.class_name == "Paladin") {
			skills[s].extra_levels += character.skills_paladin
			if (s < 10) { skills[s].extra_levels += character.skills_defensive
			} else if (s > 19) { skills[s].extra_levels += character.skills_combat_paladin
			} else { skills[s].extra_levels += character.skills_offensive
				if (s == 11) { skills[s].extra_levels += character.skills_fire_all }
				if (s == 15) { skills[s].extra_levels += character.skills_cold_all }
			}
		} else if (character.class_name == "Sorceress") {
			skills[s].extra_levels += character.skills_sorceress
			if (s < 11) { skills[s].extra_levels += character.skills_cold
				skills[s].extra_levels += character.skills_cold_all
			} else if (s > 21) { skills[s].extra_levels += character.skills_fire
				skills[s].extra_levels += character.skills_fire_all
			} else { skills[s].extra_levels += character.skills_lightning
			}
		}
		skills[s].extra_levels += skills[s].force_levels
		display += skills[s].extra_levels
		if (skills[s].level > 0 || skills[s].force_levels > 0) {
			document.getElementById("p"+skills[s].key).innerHTML = display
		} else { document.getElementById("p"+skills[s].key).innerHTML = "" }
	}
	calculateSkillPassives(character.class_name)
	var skillChoices = "";
	for (let s = 0; s < skills.length; s++) {
		if (skills[s].level > 0 || skills[s].force_levels > 0) { skillChoices += '<option class="gray">'+skills[s].name+'</option>' }
	}
}

// calculateSkillPassives - Updates passive skills
//	className: name of the character class
// ---------------------------------
function calculateSkillPassives(className) {
	if (className == "Amazon") {
		if (skills[11].level > 0 || skills[11].force_levels > 0) { character.cstrike_skillup = ~~skills[11].data.values[0][skills[11].level+skills[11].extra_levels]; } else { character.cstrike_skillup = 0 }
		if (skills[15].level > 0 || skills[15].force_levels > 0) { character.ar_skillup = ~~skills[15].data.values[0][skills[15].level+skills[15].extra_levels]; } else { character.ar_skillup = 0 }
		if (skills[19].level > 0 || skills[19].force_levels > 0) { character.pierce_skillup = ~~skills[19].data.values[0][skills[19].level+skills[19].extra_levels]; } else { character.pierce_skillup = 0 }
		//if (skills[13].level > 0 || skills[13].force_levels > 0) { character.dodge_skillup = ~~skills[13].data.values[0][skills[13].level+skills[13].extra_levels]; } else { character.dodge_skillup = 0 }
		//if (skills[14].level > 0 || skills[14].force_levels > 0) { character.avoid_skillup = ~~skills[14].data.values[0][skills[14].level+skills[14].extra_levels]; } else { character.avoid_skillup = 0 }
		//if (skills[16].level > 0 || skills[16].force_levels > 0) { character.evade_skillup = ~~skills[16].data.values[0][skills[16].level+skills[16].extra_levels]; } else { character.evade_skillup = 0 }
	} else if (className == "Assassin") {
		if ((skills[13].level > 0 || skills[13].force_levels > 0) && equipped.weapon.type == "claw" && equipped.offhand.type == "claw") { character.block_skillup = ~~skills[13].data.values[0][skills[13].level+skills[13].extra_levels]; } else { character.block_skillup = 0 }
		if (skills[9].level > 0 || skills[9].force_levels > 0) {
			character.claw_skillup[0] = ~~skills[9].data.values[0][skills[9].level+skills[9].extra_levels];
			character.claw_skillup[1] = ~~skills[9].data.values[1][skills[9].level+skills[9].extra_levels];
			character.claw_skillup[2] = ~~skills[9].data.values[2][skills[9].level+skills[9].extra_levels];
		} else { character.claw_skillup = [0,0,0] }
	} else if (className == "Barbarian") {
		if (skills[10].level > 0 || skills[10].force_levels > 0) {
			character.edged_skillup[0] = ~~skills[10].data.values[0][skills[10].level+skills[10].extra_levels];
			character.edged_skillup[1] = ~~skills[10].data.values[1][skills[10].level+skills[10].extra_levels];
			character.edged_skillup[2] = ~~skills[10].data.values[2][skills[10].level+skills[10].extra_levels];
		} else { character.edged_skillup = [0,0,0] }
		if (skills[11].level > 0 || skills[11].force_levels > 0) {
			character.pole_skillup[0] = ~~skills[11].data.values[0][skills[11].level+skills[11].extra_levels];
			character.pole_skillup[1] = ~~skills[11].data.values[1][skills[11].level+skills[11].extra_levels];
			character.pole_skillup[2] = ~~skills[11].data.values[2][skills[11].level+skills[11].extra_levels];
		} else { character.pole_skillup = [0,0,0] }
		if (skills[12].level > 0 || skills[12].force_levels > 0) {
			character.blunt_skillup[0] = ~~skills[12].data.values[0][skills[12].level+skills[12].extra_levels];
			character.blunt_skillup[1] = ~~skills[12].data.values[1][skills[12].level+skills[12].extra_levels];
			character.blunt_skillup[2] = ~~skills[12].data.values[2][skills[12].level+skills[12].extra_levels];
		} else { character.blunt_skillup = [0,0,0] }
		if (skills[13].level > 0 || skills[13].force_levels > 0) {
			character.thrown_skillup[0] = ~~skills[13].data.values[0][skills[13].level+skills[13].extra_levels];
			character.thrown_skillup[1] = ~~skills[13].data.values[1][skills[13].level+skills[13].extra_levels];
			character.thrown_skillup[2] = ~~skills[13].data.values[2][skills[13].level+skills[13].extra_levels];
		} else { character.thrown_skillup = [0,0,0] }
		if (skills[14].level > 0 || skills[14].force_levels > 0) { character.stamina_skillup = ~~skills[14].data.values[0][skills[14].level+skills[14].extra_levels]; } else { character.stamina_skillup = 0 }
		if (skills[15].level > 0 || skills[15].force_levels > 0) { character.defense_skillup = ~~skills[15].data.values[0][skills[15].level+skills[15].extra_levels]; } else { character.defense_skillup = 0 }
		if (skills[16].level > 0 || skills[16].force_levels > 0) { character.frw_skillup = ~~skills[16].data.values[0][skills[16].level+skills[16].extra_levels]; } else { character.frw_skillup = 0 }
		if (skills[17].level > 0 || skills[17].force_levels > 0) { character.resistance_skillup = ~~skills[17].data.values[0][skills[17].level+skills[17].extra_levels]; } else { character.resistance_skillup = 0 }
	} else if (className == "Sorceress") {
		if (skills[23].level > 0 || skills[28].level > 0 || skills[23].force_levels > 0 || skills[28].force_levels > 0) { character.ar_skillup = ~~skills[23].data.values[0][skills[23].level+skills[23].extra_levels] + ~~skills[28].data.values[3][skills[28].level+skills[28].extra_levels]; } else { character.ar_skillup = 0; }
		if (skills[23].level > 0 || skills[23].force_levels > 0) { character.mana_regen_skillup = ~~skills[23].data.values[1][skills[23].level+skills[23].extra_levels]; } else { character.mana_regen_skillup = 0; }
		if (skills[10].level > 0 || skills[10].force_levels > 0) {
			character.cPierce_skillup = ~~skills[10].data.values[0][skills[10].level+skills[10].extra_levels];
			character.cDamage_skillup = ~~skills[10].data.values[1][skills[10].level+skills[10].extra_levels];
		} else { character.cPierce_skillup = 0; character.cDamage_skillup = 0; }
		if (skills[20].level > 0 || skills[20].force_levels > 0) {
			character.lPierce_skillup = ~~skills[20].data.values[0][skills[20].level+skills[20].extra_levels];
			character.lDamage_skillup = ~~skills[20].data.values[1][skills[20].level+skills[20].extra_levels];
		} else { character.lPierce_skillup = 0; character.lDamage_skillup = 0; }
		if (skills[30].level > 0 || skills[30].force_levels > 0) {
			character.fPierce_skillup = ~~skills[30].data.values[0][skills[30].level+skills[30].extra_levels];
			character.fDamage_skillup = ~~skills[30].data.values[1][skills[30].level+skills[30].extra_levels];
		} else { character.fPierce_skillup = 0; character.fDamage_skillup = 0; }
	}
}

// updateEffectList - Updates all effects based on their levels
// ---------------------------------
function updateEffectList() { for (let s = 0; s < skills.length; s++) { updateEffect(skills[s]); } }

// updateEffect - Creates or deletes effects corresponding to a skill, based on the skill's level
//	skill: skill object in question
// ---------------------------------
function updateEffect(skill) {
	if (typeof(skill.effect) != 'undefined') { if (skill.effect > 3) {
		var eff = "e"+skill.key;
		var effectElem = document.getElementById(eff);
		if (skill.level > 0 || skill.force_levels > 0) {
			if (effectElem == null) {
				
				var newEffect = document.createElement("img")
				var effectIcon = "./images/skills/"+character.class_name.toLowerCase()+"/dark/"+skill.name+" dark.png";
				
				var eClass = document.createAttribute("class");	eClass.value = "effect";	newEffect.setAttributeNode(eClass);
				var eId = document.createAttribute("id");	eId.value = eff;		newEffect.setAttributeNode(eId);
				var eSrc = document.createAttribute("src");	eSrc.value = effectIcon;	newEffect.setAttributeNode(eSrc);
				
				var eHoverOn = document.createAttribute("onmouseover");		eHoverOn.value = "hoverEffect("+skill.i+")";	newEffect.setAttributeNode(eHoverOn);
				var eHoverOff = document.createAttribute("onmouseout");		eHoverOff.value = "effectOut("+skill.i+")";	newEffect.setAttributeNode(eHoverOff);
				var eEnable = document.createAttribute("onclick");		eEnable.value = "enableEffect("+skill.i+")";	newEffect.setAttributeNode(eEnable);
				var eDisable = document.createAttribute("oncontextmenu");	eDisable.value = "disableEffect("+skill.i+")";	newEffect.setAttributeNode(eDisable);
				
				var effectGUI = document.getElementById("side");
				effectGUI.appendChild(newEffect);
				
				effects[eff] = {}
				effects[eff]["enabled"] = 0
				effects[eff]["skill"] = skill.i

				if (settings.autocast == 1) { enableEffect(skill.i) }
			}
		} else {
			if (effectElem != null) {
				effects[eff].enabled = 0
				effectElem.remove();
			}
			if (typeof(effects[eff]) != 'undefined') { if (effects[eff]["enabled"] == 1) {
				disableEffect(skill.i)
			} }
		}
	} }
}

// hoverEffect - display effect info on mouseover
//	s: skill effect element
// ---------------------------------
function hoverEffect(s) {}

// effectOut - hide mouseover info
//	s: skill effect element
// ---------------------------------
function effectOut(s) {}

// disableEffect - 
//	s: 
// ---------------------------------
function disableEffect(s) {
	var eff = "e"+skills[s].key;
	if (typeof(effects[eff]) != 'undefined') {
	if (effects[eff]["enabled"] == 1) {
		effects[eff]["enabled"] = 0
		document.getElementById(eff).src = "./images/skills/"+character.class_name.toLowerCase()+"/dark/"+skills[s].name+" dark.png";
		removeEffect(effects[eff])
		// update
		updateEffectList()
		calculateSkillAmounts()
		updateStats()
		updateSkills()
		if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
		if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
	}
	}
}

// enableEffect - 
//	s: 
// ---------------------------------
function enableEffect(s) {
	var eff = "e"+skills[s].key;
	if (typeof(effects[eff]) != 'undefined') {
	if (effects[eff]["enabled"] == 0) {
		effects[eff]["enabled"] = 1
		document.getElementById(eff).src = "./images/skills/"+character.class_name.toLowerCase()+"/"+skills[s].name+".png";	
		addEffect(effects[eff])
		// update
		updateEffectList()
		calculateSkillAmounts()
		updateStats()
		updateSkills()
		if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
		if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
	}
	}
}

// removeEffect - 
//	effect: the effects[] element being removed
// ---------------------------------
function removeEffect(effect) {
	for (affix in effect) {
		character[affix] -= effect[affix]
		if (affix != "enabled" && affix != "skill") { effect[affix] = 0 }
	}
}

// addEffect - 
//	effect: the effects[] element being added
// ---------------------------------
function addEffect(effect) {
//	var selfbuff = 1;
//	buffData = character.getBuffData(effect, selfbuff)
	buffData = character.getBuffData(effect)
	for (affix in buffData) {
		character[affix] += buffData[affix]
		if (effect[affix] != "enabled" && affix != "skill") { effect[affix] = buffData[affix] }
	}
}

// modifyEffect - 
//	skill: skill object
// ---------------------------------
function modifyEffect(skill) {
	if (typeof(skill.effect) != 'undefined') { if (skill.effect > 3) {
		updateEffect(skill);
		if (typeof(effects["e"+skill.key]) != 'undefined') { if (effects["e"+skill.key].enabled == 1) {
			disableEffect(skill.i);
			updateEffect(skill);
			enableEffect(skill.i);
			updateEffect(skill);
		} }
	} }
}

// checkRequirements - Recolors stats/skills based on unmet item/skill/level requirements
// ---------------------------------
function checkRequirements() {
	var highest_level = 1; var highest_str = 1; var highest_dex = 1;
	for (type in equipped) {
		if (type == "charms") { for (item in equipped[type]) {
			if (equipped[type][item].req_level > highest_level) { highest_level = equipped[type][item].req_level }
			if (equipped[type][item].req_strength > highest_str) { highest_str = equipped[type][item].req_strength }
			if (equipped[type][item].req_dexterity > highest_dex) { highest_dex = equipped[type][item].req_dexterity }
		} }
		if (equipped[type].req_level > highest_level) { highest_level = equipped[type].req_level }
		if (equipped[type].req_strength > highest_str) { highest_str = equipped[type].req_strength }
		if (equipped[type].req_dexterity > highest_dex) { highest_dex = equipped[type].req_dexterity }
	}
	character.req_level = highest_level
	character.req_strength = highest_str
	character.req_dexterity = highest_dex
	if (character.req_level > character.level) {
		document.getElementById("level").style.color = "#ff8080" }
	else { document.getElementById("level").style.color = "white" }
	if (character.req_strength > (character.strength+character.all_attributes+(character.level*character.strength_per_level))) {
		document.getElementById("strength").style.color = "#ff8080" }
	else { document.getElementById("strength").style.color = "white" }
	if (character.req_dexterity > (character.dexterity+character.all_attributes)) {
		document.getElementById("dexterity").style.color = "#ff8080" }
	else { document.getElementById("dexterity").style.color = "white" }
	for (let s = 0; s < skills.length; s++) {
		var req_met = 1;
		if (skills[s].level > Math.max(0,(character.level - skills[s].reqlvl + 1))) { req_met = 0 }
		if (skills[s].force_levels == 0 && skills[s].req.length > 0 && req_met == 1) { for (let r = 0; r < skills[s].req.length; r++) {
			if (skills[skills[s].req[r]].level == 0) { req_met = 0 }
		} }
		if (req_met == 0) {
			document.getElementById("p"+skills[s].key).style.color = "#ff8080"; }	// red
		else if (skills[s].extra_levels > 0) {
			document.getElementById("p"+skills[s].key).style.color = "#8080ff"; }	// blue
		else { document.getElementById("p"+skills[s].key).style.color = "white"; }
		if (skills[s].level > 0 || skills[s].force_levels > 0) {
			document.getElementById("p"+skills[s].key).innerHTML = (skills[s].level + skills[s].extra_levels);
		}
	}
}

// addStat - Raises the selected stat
//	stat: button identifier (string) for corresponding stat
// ---------------------------------
function addStat(event, stat) {
	var points = 1
	if (event.shiftKey) { points = 10 }
	if (event.ctrlKey) { points = 100 }
	if (character.statpoints < points) { points = character.statpoints }
	if (character.statpoints >= points) {
		if (stat == "btn_strength") {		character.strength += points;	character.strength_added += points; }
		else if (stat == "btn_dexterity") {	character.dexterity += points;	character.dexterity_added += points; }
		else if (stat == "btn_vitality") {	character.vitality += points;	character.vitality_added += points; }
		else if (stat == "btn_energy") {	character.energy += points;	character.energy_added += points; }
		character.statpoints -= points
		// update
		updateEffectList()
		calculateSkillAmounts()
		//for (let s = 0; s < skills.length; s++) { modifyEffect(skills[s]) }
		updateStats()
		updateSkills()
		if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
		if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
	}
}

// removeStat - Lowers the selected stat
//	stat: button identifier (string) for corresponding stat
// ---------------------------------
function removeStat(event, stat) {
	var points = 1
	if (event.shiftKey) { points = 10 }
	if (event.ctrlKey) { points = 100 }
	if ((stat == "btn_strength")) {
		if (points > character.strength_added) { points = character.strength_added }
		character.strength -= points
		character.strength_added -= points
	} else if ((stat == "btn_dexterity")) {
		if (points > character.dexterity_added) { points = character.dexterity_added }
		character.dexterity -= points
		character.dexterity_added -= points
	} else if ((stat == "btn_vitality")) {
		if (points > character.vitality_added) { points = character.vitality_added }
		character.vitality -= points
		character.vitality_added -= points
	} else if ((stat == "btn_energy")) {
		if (points > character.energy_added) { points = character.energy_added }
		character.energy -= points
		character.energy_added -= points
	} else { points = 0 }
	character.statpoints += points
	// update
	updateEffectList()
	calculateSkillAmounts()
	//for (let s = 0; s < skills.length; s++) { modifyEffect(skills[s]) }
	updateStats()
	updateSkills()
	if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
	if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
}

// skillUp - Raises the skill level
//	skill: the skill to modify
// ---------------------------------
function skillUp(event, skill) {
	if (typeof(skill.effect) != 'undefined') { if (skill.effect > 3) {
		if (skill.level == 0 && skill.force_levels == 0 && typeof(effects["e"+skill.key]) == 'undefined') { enableEffect(skill.i) }
	} }
	var old_level = skill.level;
	var levels = 1;
	if (event.shiftKey) { levels = 10 }
	if (event.ctrlKey) { levels = 20 }
	if (old_level+levels > MAX) { levels = MAX-old_level }
	if (levels > (99-character.level) + character.skillpoints) { levels = (99-(character.level) + character.skillpoints) }
	if (settings.coupling == 0 && levels > character.skillpoints) { levels = character.skillpoints }
	if (character.level <= 99-levels || character.skillpoints >= levels) {
		skill.level += levels
		if (skill.level > old_level) {
			if (levels <= character.skillpoints) {
				character.skillpoints -= levels
				levels = 0
			} else {
				levels -= character.skillpoints
				character.skillpoints = 0
			}
			if (levels > 0) {
				character.level += levels
				character.statpoints += (5*levels)
				character.life += (character.levelup_life*levels)
				character.stamina += (character.levelup_stamina*levels)
				character.mana += (character.levelup_mana*levels)
			}
		}
	}
	if (typeof(skill.effect) != 'undefined') { if (skill.effect > 3) {
		skillHover(skill)
		modifyEffect(skill)
	} }
	skillHover(skill)
    if (skill.bindable > 0 && (old_level == 0 || (old_level > 0 && skill.level == 0 && skill.force_levels == 0))) {
	updateSkills()
	if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
	if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
    } else {
	if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
	if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
    }
	updateAll()
}

// skillDown - Lowers the skill level
//	skill: the skill to modify
// ---------------------------------
function skillDown(event, skill) {
	var old_level = skill.level
	var levels = 1
	if (event.shiftKey) { levels = 10 }
	if (event.ctrlKey) { levels = 20 }
	if (old_level-levels < 0) { levels = old_level }
	var maxdown = character.level - 1
	var maxstatdown = character.statpoints
	var levels_temp = 0;
	if (character.quests_completed > 0 && character.skillpoints < 12) { levels_temp = 12 - character.skillpoints; maxdown += levels_temp; maxstatdown += (levels_temp*5) }
	if (levels > maxdown) { levels = maxdown }
	if (character.quests_completed < 0 && levels > character.statpoints/5) { levels = Math.floor(character.statpoints/5) }
	if (character.quests_completed > 0 && levels > maxstatdown/5) { levels = Math.floor(maxstatdown/5) }
	if (settings.coupling == 1) {
		if (levels <= maxdown && 5*levels <= maxstatdown) {
			if (character.quests_completed > 0 && character.skillpoints < 12) {
				if (levels_temp > levels) { levels_temp = levels }
				skill.level -= levels_temp
				character.skillpoints += levels_temp
				levels -= levels_temp
			}
			skill.level -= levels
			if (skill.level < old_level) {
				character.level -= levels
				character.statpoints -= 5*levels
				character.life -= (character.levelup_life*levels)
				character.stamina -= (character.levelup_stamina*levels)
				character.mana -= (character.levelup_mana*levels)
			}
		}
	} else {
		skill.level -= levels
		character.skillpoints += levels
	}
	if (typeof(skill.effect) != 'undefined') { if (skill.effect > 3) {
		skillHover(skill)
		if (skill.level == 0 && skill.force_levels == 0 && typeof(effects["e"+skill.key]) != 'undefined') { if (effects["e"+skill.key].enabled == 1) { disableEffect(skill.i) } }
		modifyEffect(skill)
	} }
	skillHover(skill)
    if (skill.bindable > 0 && (old_level == 0 || (old_level > 0 && skill.level == 0 && skill.force_levels == 0))) {
	updateSkills()
	if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
	if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
    } else {
	if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
	if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
    }
	updateAll()
}

// skillHover - Shows skill description tooltip on mouse-over
//	skill: the mouse-over'ed skill
// ---------------------------------
function skillHover(skill) {
	document.getElementById("title").innerHTML = skill.name
	document.getElementById("description").innerHTML = skill.description
	document.getElementById("graytext").innerHTML = skill.graytext
	document.getElementById("syn_title").innerHTML = skill.syn_title
	document.getElementById("syn_text").innerHTML = skill.syn_text
	document.getElementById("tooltip").style = skill.style
	var levels = 0;
	var next_display = "";
	var current_display = "";
	var pre_display = "";
	var next_value = 0;
	var current_value = 0;
	for (let i = 0, len = skill.data.values.length; i < len; i++) {
		next_display += skill.text[i]
		if (skill.level == 0 && skill.force_levels == 0) {
			next_value = character.getSkillData(skill, skill.level+1, i)
		} else {
			next_value = character.getSkillData(skill, (skill.level+skill.extra_levels+1), i)
		}
		next_value = round(next_value)
		next_display += next_value
		
		current_display += skill.text[i]
		//if (skill.level+skill.extra_levels <= LIMIT) { levels = skill.level+skill.extra_levels } else { levels = LIMIT }
		levels = skill.level+skill.extra_levels
		current_value = character.getSkillData(skill, levels, i)
		current_value = round(current_value)
		current_display += current_value
		
		if (skill.data.index[0] == (i+1)) {
			if (skill.level > 0) { pre_display += current_display } else { pre_display += next_display }
			current_display = ""
			next_display = ""
		}
	}
	pre_display += skill.data.index[1]
	if (skill.level > 0 || skill.force_levels > 0) {
		if (skill.data.index[0] > 0) { pre_display = "<br>" + pre_display }
		if (skill.level > 0) { pre_display += "<br>" }
		pre_display += "<br>Current Skill Level: " + (levels) + "<br>"
		current_display += skill.text[skill.data.values.length] + "<br>"
		document.getElementById("next_level_text").innerHTML = "<br>Next Level"
	} else {
		document.getElementById("next_level_text").innerHTML = "<br>First Level"
		current_display = ""
		if (skill.data.index[0] > 0) { pre_display = "<br>" + pre_display + "<br>" }
	}
	if (skill.level < MAX && (skill.level+skill.extra_levels < LIMIT)) { next_display += skill.text[skill.data.values.length] } else { next_display = "(maximum level reached)" }
	document.getElementById("next").innerHTML = next_display
	document.getElementById("current").innerHTML = current_display
	document.getElementById("pretext").innerHTML = pre_display
	
	if (skill.level == 0 || (skill.level > 0 && skill.data.index[0] > 0)) {
		document.getElementById("description").innerHTML = skill.description + "<br>"
	}
	calculateSkillAmounts()
	updateStats()
	showBaseLevels(skill)
}

// showBaseLevels - Shows base levels for a skill
//	skill: the skill to use
// ---------------------------------
function showBaseLevels(skill) {
	if ((skill.extra_levels > 0 && skill.level > 0) || skill.force_levels > 0) {
		document.getElementById("p"+skill.key).style.color = "#999999";
		document.getElementById("p"+skill.key).innerHTML = skill.level;
	}
}

// updateSkills - 
// ---------------------------------
function updateSkills() {
	var choices = "";
	var k = 1;
	var oskillList = [];
	var oskillOptions = [];
	for (let o = 0; o < oskills.length; o++) {
		if (character[oskills[o]] > 0) {
			var natClass = oskills_info[oskills[o]].native_class;
			if (character.class_name.toLowerCase() != natClass) {
				var natIndex = oskills_info[oskills[o]].i;
				var addSkill = 0;
				if (natClass != "none") { if (skills_all[natClass][natIndex].bindable > 0) { addSkill = 1 } } else { addSkill = 1 }
				if (addSkill == 1) {
					oskillList[k] = oskills_info[oskills[o]].name
					oskillOptions[k] = "<option>" + oskills_info[oskills[o]].name + "</option>"
					choices += oskillOptions[k]
					k++
				}
			}
		}
	}
	skillList = oskillList;
	skillOptions = oskillOptions;
	for (let s = 0; s < skills.length; s++) {
		if (skills[s].bindable > 0 && (skills[s].level > 0 || skills[s].force_levels > 0)) {
			skillList[k] = skills[s].name
			skillOptions[k] = "<option>" + skills[s].name + "</option>"
			choices += skillOptions[k]
			k++
		}
	}
	
	// TODO: make less inefficient, include oskills
	for (let s = 0; s < skills.length; s++) {
		if (skills[s].level == 0 && skills[s].force_levels == 0) {
			if (selectedSkill[0] == skills[s].name) { selectedSkill[0] = " ­ ­ ­ ­ Skill 1" }
			if (selectedSkill[1] == skills[s].name) { selectedSkill[1] = " ­ ­ ­ ­ Skill 2" }
		}
	}

	document.getElementById("dropdown_skill1").innerHTML = "<option class='gray' disabled>" + " ­ ­ ­ ­ Skill 1" + "</option>" + choices
	document.getElementById("dropdown_skill2").innerHTML = "<option class='gray' disabled>" + " ­ ­ ­ ­ Skill 2" + "</option>" + choices
	var selectedIndex = [0,0];
	for (let l = 0; l < skillList.length; l++) {
		if (skillList[l] == selectedSkill[0]) { selectedIndex[0] = l }
		if (skillList[l] == selectedSkill[1]) { selectedIndex[1] = l }
	}
	document.getElementById("dropdown_skill1").selectedIndex = selectedIndex[0]
	document.getElementById("dropdown_skill2").selectedIndex = selectedIndex[1]
	if (selectedSkill[0] == " ­ ­ ­ ­ Skill 1") { document.getElementById("skill1_info").innerHTML = ":"; document.getElementById("ar_skill1").innerHTML = ""; }
	if (selectedSkill[1] == " ­ ­ ­ ­ Skill 2") { document.getElementById("skill2_info").innerHTML = ":"; document.getElementById("ar_skill2").innerHTML = ""; }
}

// checkSkill - 
//	skillName: skill name displayed in dropdown
//	num: 1 or 2 (for skill1 or skill2)
// ---------------------------------
function checkSkill(skillName, num) {
	selectedSkill[num-1] = skillName
	var native_skill = 0;
	for (let s = 0; s < skills.length; s++) {
		if (skillName == skills[s].name) { native_skill = 1 }
	}
// copied from updatePrimaryStats()
	var c = character;
	var strTotal = (c.strength + c.all_attributes + (c.level-1)*c.strength_per_level);
	var dexTotal = (c.dexterity + c.all_attributes + (c.level-1)*c.dexterity_per_level);
	var vitTotal = (c.vitality + c.all_attributes + (c.level-1)*c.vitality_per_level);
	var energyTotal = Math.floor((c.energy + c.all_attributes)*(1+c.max_energy));
	var statBonus = 1;
	var statBonus_offhand = 1;
	var weaponType = equipped.weapon.type;
	var weaponType_offhand = "";
	if (offhandType == "weapon") { weaponType_offhand = equipped.offhand.type }
	if (typeof(weaponType) != 'undefined') { 
		if (weaponType == "hammer") { statBonus = (strTotal*1.1/100) }
		else if (weaponType == "bow" || weaponType == "crossbow") { statBonus = (dexTotal/100) }
		else if (typeof(equipped.weapon.only) != 'undefined') { if (weaponType == "spear" || weaponType == "javelin" || equipped.weapon.only == "amazon") { statBonus = ((strTotal*0.8/100)+(dexTotal*0.5/100)) } }
		else if (weaponType == "dagger" || weaponType == "thrown" || weaponType == "claw" || weaponType == "javelin") { statBonus = ((strTotal*0.75/100)+(dexTotal*0.75/100)) }
		else  { statBonus = (strTotal/100) }
		if (offhandType == "weapon") {
			if (weaponType_offhand == "hammer") { statBonus_offhand = (strTotal*1.1/100) }
			else if (weaponType_offhand == "dagger" || weaponType_offhand == "thrown" || weaponType_offhand == "claw" || weaponType_offhand == "javelin") { statBonus_offhand = ((strTotal*0.75/100)+(dexTotal*0.75/100)) }
			else  { statBonus_offhand = (strTotal/100) }
		}
	}
	var weapon_skillup = 0;
	var weapon_skillup_offhand = 0;
	var ar_skillup_offhand = 0;
	var cstrike_skillup_offhand = 0;
	var pierce_skillup_offhand = 0;
	if (c.class_name == "Barbarian" || c.class_name == "Assassin") {
		if (weaponType == "sword" || weaponType == "axe" || weaponType == "dagger") { weapon_skillup = c.edged_skillup[0]; c.ar_skillup = c.edged_skillup[1]; c.cstrike_skillup = c.edged_skillup[2]; }
		else if (weaponType == "polearm" || weaponType == "spear") { weapon_skillup = c.pole_skillup[0]; c.ar_skillup = c.pole_skillup[1]; c.cstrike_skillup = c.pole_skillup[2]; }
		else if (weaponType == "mace" || weaponType == "scepter" || weaponType == "staff" || weaponType == "hammer" || weaponType == "club") { weapon_skillup = c.blunt_skillup[0]; c.ar_skillup = c.blunt_skillup[1]; c.cstrike_skillup = c.blunt_skillup[2]; }
		else if (weaponType == "thrown") { weapon_skillup = c.thrown_skillup[0]; c.ar_skillup = c.thrown_skillup[1]; c.pierce_skillup = c.thrown_skillup[2]; }
		else if (weaponType == "claw") { weapon_skillup = c.claw_skillup[0]; c.ar_skillup = c.claw_skillup[1]; c.cstrike_skillup = c.claw_skillup[2]; }
		else { weapon_skillup = 0; c.ar_skillup = 0; c.cstrike_skillup = 0; c.pierce_skillup = 0; }
		if (offhandType == "weapon") {
			if (weaponType_offhand == "sword" || weaponType_offhand == "axe" || weaponType_offhand == "dagger") { weapon_skillup_offhand = c.edged_skillup[0]; ar_skillup_offhand = c.edged_skillup[1]; cstrike_skillup_offhand = c.edged_skillup[2]; }
			else if (weaponType_offhand == "mace" || weaponType_offhand == "scepter" || weaponType_offhand == "hammer" || weaponType_offhand == "club") { weapon_skillup_offhand = c.blunt_skillup[0]; ar_skillup_offhand = c.blunt_skillup[1]; cstrike_skillup_offhand = c.blunt_skillup[2]; }
			else if (weaponType_offhand == "thrown") { weapon_skillup_offhand = c.thrown_skillup[0]; ar_skillup_offhand = c.thrown_skillup[1]; pierce_skillup_offhand = c.thrown_skillup[2]; }
			else if (weaponType_offhand == "claw") { weapon_skillup_offhand = c.claw_skillup[0]; ar_skillup_offhand = c.claw_skillup[1]; cstrike_skillup_offhand = c.claw_skillup[2]; }
			else { weapon_skillup_offhand = 0; ar_skillup_offhand = 0; cstrike_skillup_offhand = 0; pierce_skillup_offhand = 0; }
		}
	}
// (some not copied)
	var ar = ((dexTotal - 7) * 5 + c.ar + c.level*c.ar_per_level + c.ar_const) * (1+(c.ar_skillup + c.ar_bonus + c.level*c.ar_bonus_per_level)/100) * (1+c.ar_shrine_bonus/100);
	var wisp = 1+~~Math.round(c.wisp/20,0)/10
	
	// combine socket affixes
	var socket_affixes = {};
	var socket_eDamage = 0;
	var socket_eDamage_offhand = 0;
	for (group in socketed) {
		for (let i = 0; i < socketed[group].items.length; i++) {
			for (affix in socketed[group].items[i]) {
				if (typeof(socket_affixes[affix]) == 'undefined') { socket_affixes[affix] = 0 }
				if (group == "weapon" && (affix == "e_damage" || affix == "damage_bonus")) { socket_eDamage += socketed[group].items[i][affix] }
				else if (group == "offhand" && (affix == "e_damage" || affix == "damage_bonus")) { socket_eDamage_offhand += socketed[group].items[i][affix] }
				socket_affixes[affix] += socketed[group].items[i][affix]
			}
		}
	}
	var socket_eDamage_offWeapon = ~~socket_affixes.e_damage + ~~socket_affixes.damage_bonus;
	if (offhandType == "weapon") { socket_eDamage_offWeapon -= socket_eDamage_offhand }
	var sup = 0;	// TODO: Remove this and add superior ED stat to character stat list (so far, no weapons are superior)
	var e_damage_offWeapon = c.e_damage - ~~equipped.weapon.e_damage;
	if (offhandType == "weapon") { e_damage_offWeapon -= ~~equipped.offhand.e_damage }
// end copied section

	var phys_min = (~~equipped.weapon.base_damage_min * (1+(~~equipped.weapon.e_damage+sup+socket_eDamage)/100) + c.damage_min + (c.level-1)*c.min_damage_per_level);
	var phys_max = (~~equipped.weapon.base_damage_max * (1+(~~equipped.weapon.e_damage+sup+socket_eDamage+(c.level*c.e_max_damage_per_level))/100) + c.damage_max + (c.level-1)*c.max_damage_per_level);
	var phys_mult = (1+statBonus+(c.damage_bonus+e_damage_offWeapon+weapon_skillup+socket_eDamage_offWeapon)/100);
	var phys_min_offhand = (~~equipped.offhand.base_damage_min * (1+(~~equipped.offhand.e_damage+sup+socket_eDamage_offhand)/100) + c.damage_min + (c.level-1)*c.min_damage_per_level);
	var phys_max_offhand = (~~equipped.offhand.base_damage_max * (1+(~~equipped.offhand.e_damage+sup+socket_eDamage_offhand)/100) + c.damage_max + (c.level-1)*c.max_damage_per_level);
	var phys_offhand_mult = (1+statBonus_offhand+(c.damage_bonus+e_damage_offWeapon+weapon_skillup_offhand+socket_eDamage_offWeapon)/100);

	var ele_min = Math.floor(wisp*(c.fDamage_min*(1+(c.fDamage+c.fDamage_skillup)/100) + c.cDamage_min*(1+(c.cDamage+c.cDamage_skillup)/100) + c.lDamage_min*(1+(c.lDamage+c.lDamage_skillup)/100) + (c.pDamage_all+c.pDamage_min)*(1+c.pDamage/100)));
	var ele_max = Math.floor(wisp*((c.fDamage_max+(c.level*c.fDamage_max_per_level))*(1+(c.fDamage+c.fDamage_skillup)/100) + (c.cDamage_max+(c.level*c.cDamage_max_per_level))*(1+(c.cDamage+c.cDamage_skillup)/100) + (c.lDamage_max+(Math.floor(energyTotal/2)*c.lDamage_max_per_2_energy))*(1+(c.lDamage+c.lDamage_skillup)/100) + (c.pDamage_all+c.pDamage_max)*(1+c.pDamage/100)));
	
	if (skillName == "Poison Javelin" || skillName == "Lightning Bolt" || skillName == "Plague Javelin" || skillName == "Lightning Fury" || skillName == "Power Throw" || skillName == "Ethereal Throw") {	// consider swapping throw damage & base damage by default
		phys_min = ((~~equipped.weapon.throw_min * (1+(~~equipped.weapon.e_damage+sup+socket_eDamage)/100) + c.damage_min + (c.level-1)*c.min_damage_per_level));
		phys_max = ((~~equipped.weapon.throw_max * (1+(~~equipped.weapon.e_damage+sup+socket_eDamage)/100) + c.damage_max + (c.level-1)*c.max_damage_per_level));
	}
	
	var skill = "";
	for (let s = 0; s < skills.length; s++) {
		if (skills[s].name == skillName) { 
			skill = skills[s]
		}
	}
	if (skillName != " ­ ­ ­ ­ Skill 1" && skillName != " ­ ­ ­ ­ Skill 2") {
		if (native_skill == 0) { character_any.updateSelectedSkill(skillName, num, ar, phys_min, phys_max, phys_mult, ele_min, ele_max, c.mDamage_min, c.mDamage_max, wisp); }
		else { c.updateSelectedSkill(skill, num, ar, phys_min, phys_max, phys_mult, ele_min, ele_max, c.mDamage_min, c.mDamage_max, wisp); }
	}
	updateSkills()
}	

// round - Rounds and returns a number
//	num: number to round
// return: rounded number (no decimals if above 33 or ending in ".0")
// ---------------------------------
function round(num) {
	// TODO: Always round damage/life numbers
	var temp = num;
	var decimals = (toString(num) + ".");
	if (num >= 33) { temp = Math.round(num) }
	else {
		decimals = decimals.split(".");
		if (decimals[1].length > 1) { temp = num.toFixed(1) }
		else { temp = (Math.round((num + Number.EPSILON) * 10) / 10) }
	}
	return temp;
}

// skillOut - Hides skill tooltip
// ---------------------------------
function skillOut() {
	document.getElementById("tooltip").style.display="none"
	checkRequirements()
}

// itemOut - hides item tooltip for Charm Inventory
// ---------------------------------
function itemOut() { document.getElementById("item_tooltip").style.display="none" }

// itemHover - Shows item tooltip on mouse-over for Charm Inventory
//	id: unique string identifier for item
// ---------------------------------
function itemHover(ev, id) {
	var type = "charm";
	var name = "";
	var index = 0;
	var stats = "";
	var style = "display: block;"
	var transfer = 0;
	for (let i = 1; i < inv.length; i++) { if (inv[i].id == id) { transfer = i } }
	var val = inv[0]["in"][transfer];
	name = val.split('_')[0];
	for (let k = 0; k < socketables.length; k++) { if (socketables[k].name == name) { type = socketables[k].type; index = k; } }
	if (type == "charm") {
		style = "display: block; color: #634db0;"
		if (name == "Annihilus" || name == "Hellfire Torch" || name == "Gheed's Fortune" || name == "Horadric Sigil") { style = "display: block; color: #928068;" }
		if (equipped["charms"][val].type != "small" && equipped["charms"][val].type != "large" && equipped["charms"][val].type != "grand") { style = "display: block; color: #ff8080;" }
		lastCharm = name
	} else {
		if (type == "rune") { style = "display: block; color: orange;" }
		else if (socketables[index].rarity == "unique") { style = "display: block; color: #928068;" }
		else if (socketables[index].rarity == "magic") { style = "display: block; color: #8080ff;" }
		else if (socketables[index].rarity == "rare") { style = "display: block; color: yellow;" }
		else { style = "display: block; color: white;" }
		lastSocketable = name
	}
	var display = name //+ "<br>" + stats
	document.getElementById("item_tooltip").innerHTML = display
	document.getElementById("item_tooltip").style = style
	
	// TODO better system:
	
	// start with cell divs at high z-index
	// on mouseover, use cell info...
	// if cell is not empty
	//	if cell is not main-cell of occupying item			// main-cell: top cell when traversing inv[].in
	//		lower z-index of cell  (pushes the item above, so it can be grabbed while all its other individual cells are surfaced)
	// then, 
	// on mouseout: raise z-level of cell 
	
}

// itemSelect - Duplicates the selected charm
//	id: unique string identifier for charm
// ---------------------------------
function itemSelect(ev) {
	var dup = 0;
	if (ev.shiftKey) { dup = 1 }
	if (ev.ctrlKey) { dup = 10 }
	if (dup > 0) {
		if (name != "Annihilus" && name != "Hellfire Torch" && name != "Gheed's Fortune") {
			for (let d = 0; d < dup; d++) {
				addCharm(lastCharm)
			}
		}
	}
}

// allowDrop - Handles placement validation for Charm Inventory
//	cell: position of item in 10x4 inventory (1-40)
//	y: height of item (1-3)
// ---------------------------------
function allowDrop(ev, cell, y) {
	if (inv[0].pickup_y + y <= 5) {
		var allow = 1
		if (inv[cell].empty == 0 && inv[0].in[cell] != inv[0].onpickup) { allow = 0 }
		if (inv[0].pickup_y > 1 && inv[cell+10].empty == 0 && inv[0].in[cell+10] != inv[0].onpickup) { allow = 0 }
		if (inv[0].pickup_y > 2 && inv[cell+20].empty == 0 && inv[0].in[cell+20] != inv[0].onpickup) { allow = 0 }
		if (allow == 1) {
			if (inv[0].in[cell] == inv[0].onpickup) {
			//	document.getElementById(inv[cell].id).style = "position: absolute; width: 29px; height: 29px; pointer-events: none;";
			}
			var inEquipment = 0;
			var val = inv[0].onpickup;
			var groups = ["helm", "armor", "weapon", "offhand"];
			for (let g = 0; g < groups.length; g++) { for (let i = 0; i < socketed[groups[g]].items.length; i++) { if (val == socketed[groups[g]].items[i].id) { inEquipment = 1; } } }
			for (group in equipped) { for (item in equipped[group]) { if (val == equipped[group][item].name) { inEquipment == 1 } } }
			if (inEquipment == 0) { ev.preventDefault(); }
		}
	}
}

// drag - Handles item dragging for Charm Inventory
// ---------------------------------
function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
	inv[0].onpickup = ev.target.id
	var height = document.getElementById(inv[0].onpickup).height;
	if (height > 80) { inv[0].pickup_y = 3 }
	else if (height > 50) { inv[0].pickup_y = 2 }
	else { inv[0].pickup_y = 1 }
	for (s = 1; s < inv[0]["in"].length; s++) {
		if (inv[0].in[s] == inv[0].onpickup) {
			document.getElementById(inv[s].id).style = "position: absolute; width: 29px; height: 29px; z-index: 5;";
		}
	}
}

// drop - Handles item dropping for Charm Inventory
//	cell: 1-40 (upper left position of item in 10x4 inventory)
// ---------------------------------
function drop(ev,cell) {
	ev.preventDefault();
	
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
	for (s = 1; s <= inv[0].in.length; s++) {
		if (inv[0].in[s] == inv[0].onpickup) { inv[s].empty = 1; inv[0].in[s] = ""; 
			inv[s].y = 1;
			document.getElementById(inv[s].id).style = "position: absolute; width: 29px; height: 29px; z-index: 3;";
		}
	}
	inv[cell].empty = 0
	inv[0].in[cell] = inv[0].onpickup
	if (inv[0].pickup_y > 1) { inv[cell+10].empty = 0; inv[0].in[cell+10] = inv[0].onpickup; inv[cell].y = 2; }
	if (inv[0].pickup_y > 2) { inv[cell+20].empty = 0; inv[0].in[cell+20] = inv[0].onpickup; inv[cell].y = 3; }
	inv[0].onpickup = "none"
}

// trash - Handles item removal for Charm Inventory
// ---------------------------------
function trash(ev) {
	var val = ev.target.id;
	var name = val.split('_')[0];
	var type = "charms"
	if (name == "+1 (each) skill") { for (let i = 0; i < skills.length; i++) { if (skills[i].level == 0 /*&& skills[i].force_levels <= 1*/) { disableEffect(i) } } }
	for (old_affix in equipped[type][val]) {
		character[old_affix] -= equipped[type][val][old_affix]
		equipped[type][val][old_affix] = unequipped[old_affix]
	}
	for (let s = 1; s <= inv[0].in.length; s++) {
		if (inv[0].in[s] == ev.target.id) {
			inv[s].empty = 1;
			inv[0].in[s] = "";
		}
	}
	ev.target.remove();
	
	// find/remove duplicates
	var dup = 0;
	if (ev.shiftKey) { dup = 9 }
	if (ev.ctrlKey) { dup = 39 }
	if (dup > 0) {
		for (let d = 0; d < inv[0].in.length; d++) {
			if (dup > 0 && name == inv[0].in[d].split('_')[0]) {
				val = inv[0].in[d];
				var size = equipped[type][val].type
				for (old_affix in equipped[type][val]) {
					character[old_affix] -= equipped[type][val][old_affix]
					equipped[type][val][old_affix] = unequipped[old_affix]
				}
				inv[0].in[d] = "";
				inv[d].empty = 1;
				if (size == "large" || size == "grand") { inv[d+10].empty = 1; inv[0].in[d+10] = ""; }
				if (size == "grand") { inv[d+20].empty = 1; inv[0].in[d+20] = ""; }
				document.getElementById(val).remove()
				dup--
			}
		}
	}
	
	updateEffectList()
	calculateSkillAmounts()
	for (let s = 0; s < skills.length; s++) { modifyEffect(skills[s]) }
	updateStats()
	updateSkills()
	if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
	if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
	document.getElementById("item_tooltip").innerHTML = ""
}

// getItemImage - gets the image filename for the specified item
//	group: item's group
//	base_name: item base
//	source: specified file name, if it has one
// return: filename of item's image
// ---------------------------------
function getItemImage(group, base_name, source) {
	var prefix = "./images/items/"
	var filename = source
	var base = base_name.split(' ').join('_'); base = base.split('-').join('_'); base = base.split("s'").join("s"); base = base.split("'s").join("s");
	if (base_name != "") {
		if (base_name == "Bolts") { prefix += group + "/" }
		else {
			prefix += (bases[base].group + "/")
			if (bases[base].group == "weapon") {
				var type = equipped[group].type;
				if (type == "hammer" || type == "club") { type = "mace" }
				prefix += (type + "/")
			}
		}
		if (source != "") {
			prefix += "special/"
		} else {
			if (base_name == "Tiara" || base_name == "Diadem" || base_name == "Bolts") {
				filename = base_name
			} else {
				if (typeof(bases[base].downgrade) != 'undefined') {
					filename = bases[base].downgrade
					base = bases[base].downgrade.split(' ').join('_'); base = base.split('-').join('_'); base = base.split("'s").join("s"); base = base.split("s'").join("s");
					if (typeof(bases[base].downgrade) != 'undefined') {
						filename = bases[base].downgrade
					}
				} else {
					filename = base_name
				}
			}
		}
	} else {
		// quest weapons, unique quiver/jewelry
		if (source != "") {
			if (group == "weapon" || (group == "offhand" && offhandType == "weapon")) {
				var type = equipped[group].type;
				if (type == "hammer" || type == "club") { type = "mace" }
				prefix += ("weapon/" + type + "/special/")
			} else {
				prefix += (group + "/")
				prefix += "special/"
			}
		// jewelry, quivers (arrows)
		} else {
			if (group == "amulet" || group == "ring1" || group == "ring2") {
				if (group == "amulet") { prefix += "amulet/"; filename = "Amulet_" + Math.ceil(Math.random() * 3); }
				else { prefix += "ring/"; filename = "Ring_" + Math.ceil(Math.random() * 5); }
			} else if (group == "offhand") {
				prefix += "offhand/"; filename = "Arrows";
			}
		}
	}
	filename = prefix + filename.split(' ').join('_') + ".png"
	return filename
}

// socketableSelect - Duplicates the selected socketable item (gem, rune, jewel)
// ---------------------------------
function socketableSelect(ev) {
	var dup = 0;
	if (ev.shiftKey) { dup = 1 }
	if (ev.ctrlKey) { dup = 10 }
	if (dup > 0) { for (let d = 0; d < dup; d++) { addSocketable(lastSocketable) } }
}

// equipmentHover - 
//	group: equipment group name
// ---------------------------------
function equipmentHover(event, group) {
	var selected = equipped[group].name;
	
	// show sockets & corruptions
	if (group == "helm" || group == "armor" || (group == "weapon" && typeof(equipped[group].base) != 'undefined') || (group == "offhand" && equipped[group].type != "quiver")) {
		var sockets = ~~corruptsEquipped[group].sockets + ~~equipped[group].sockets;
		var base = equipped[group].base.split(' ').join('_'); base = base.split('-').join('_'); base = base.split("s'").join("s"); base = base.split("'s").join("s");
		sockets = Math.min(sockets,bases[base].max_sockets)
		if (socketed[group].sockets > 0 || equipped[group].sockets > 0) { selected += " ["+sockets+"]" }
	}
	if (corruptsEquipped[group].name != "none" && corruptsEquipped[group].name !="+ Sockets") { selected += (" "+corruptsEquipped[group].name) }
	if (selected != "none") { document.getElementById("item_tooltip").innerHTML = selected } else { document.getElementById("item_tooltip").innerHTML = "" }
	
	var textColor = "white";
	if (equipped[group].rarity == "set") { textColor = "#00f000" }
	else if (equipped[group].rarity == "magic") { textColor = "#8080ff" }
	else if (equipped[group].rarity == "rare") { textColor = "yellow" }
	else if (equipped[group].rarity == "crafted") { textColor = "orange" }
	else if (equipped[group].rw == "1") { textColor = "#b2a992" }
	else if (equipped[group].rarity != "common") { textColor = "#928068" }
	document.getElementById("item_tooltip").style.color = textColor
	document.getElementById("item_tooltip").visibility = "visible"
	document.getElementById("item_tooltip").style.display = "block"
}

// equipmentOut - 
// ---------------------------------
function equipmentOut() {
	document.getElementById("item_tooltip").innerHTML = ""
	document.getElementById("item_tooltip").visibility = "hidden"
	document.getElementById("item_tooltip").style.display = "none"
}

// socket - 
//	group: item group
// ---------------------------------
function socket(event, group) {
	event.preventDefault();
	var data = event.dataTransfer.getData("text");
	// switches to the correct target if the item image is in the way
	if (event.target.id != group) { document.getElementById(group).appendChild(document.getElementById(data)); }
	else { event.target.appendChild(document.getElementById(data)); }
	
	// equipment destination
	var spaceFound = 0;
	var index = 0;
	for (let i = 0; i < socketed[group].items.length; i++) { if (socketed[group].items[i].name == "") { spaceFound = 1; index = i; } }
	if (spaceFound == 1) {
		var name = inv[0].onpickup.split('_')[0];
		// Remove previous affixes, if being moved from another equipment item
		var groups = ["helm", "armor", "weapon", "offhand"];
		for (let g = 0; g < groups.length; g++) {
			for (let i = 0; i < socketed[groups[g]].items.length; i++) {
				if (inv[0].onpickup == socketed[groups[g]].items[i].id) {
					for (affix in socketed[groups[g]].items[i]) { if (affix != "id") { character[affix] -= socketed[groups[g]].items[i][affix] } }
					socketed[groups[g]].items[i] = {id:"",name:""}
					socketed[groups[g]].socketsFilled -= 1
				}
			}
		}
		// Add affixes
		for (let k = 0; k < socketables.length; k++) { if (socketables[k].name == name) {
			socketed[group].items[index].id = inv[0].onpickup
			for (affix in socketables[k]) {
				if (affix != "type" && affix != "rarity" && affix != "img") {
					socketed[group].items[index][affix] = socketables[k][affix]
					character[affix] += socketables[k][affix]
				}
				if (affix == group || (affix == "armor" && group == "helm") || (affix == "armor" && group == "offhand" && typeof(socketables[k]["shield"]) == 'undefined') || (affix == "shield" && group == "offhand")) {
					for (groupAffix in socketables[k][affix]) {
						socketed[group].items[index][groupAffix] = socketables[k][affix][groupAffix]
						character[groupAffix] += socketables[k][affix][groupAffix]
					}
				}
			}
		} }
		socketed[group].socketsFilled += 1
		// update
		updateEffectList()
		calculateSkillAmounts()
		for (let s = 0; s < skills.length; s++) { modifyEffect(skills[s]) }
		updateStats()
		updateSkills()
		if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
		if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
	}
	// inventory destination
	for (s = 1; s <= inv[0].in.length; s++) {
		if (inv[0].in[s] == inv[0].onpickup) { inv[s].empty = 1; inv[0].in[s] = ""; 
			inv[s].y = 1;
			document.getElementById(inv[s].id).style = "position: absolute; width: 29px; height: 29px; z-index: 3;";
		}
	}
	inv[0].onpickup = "none"
}

// allowSocket - 
//	group: item group
// ---------------------------------
function allowSocket(event, group) {
	socketed[group].sockets = ~~equipped[group].sockets + ~~corruptsEquipped[group].sockets
	var allow = 0;
	if (socketed[group].sockets > 0 && socketed[group].socketsFilled < socketed[group].sockets) {
		var name = inv[0].onpickup.split('_')[0];
		for (let k = 0; k < socketables.length; k++) {
			if (socketables[k].name == name) { if (socketed[group].socketsFilled < socketed[group].sockets) { allow = 1 } }
		}
	}
	if (allow == 1) {
		var spaceAvailable = 0;
		for (let i = 0; i < socketed[group].items.length; i++) {
			if (socketed[group].items[i].name == "") { spaceAvailable = 1; }
		}
		if (spaceAvailable == 1) { event.preventDefault(); }
	}
}

// dragSocketable - Handles item dragging for socketables (gems, runes, jewels)
// ---------------------------------
function dragSocketable(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
	inv[0].onpickup = ev.target.id
	inv[0].pickup_y = 1
//	for (s = 1; s < inv[0]["in"].length; s++) {
//		if (inv[0].in[s] == inv[0].onpickup) {
//			document.getElementById(inv[s].id).style = "position: absolute; width: 28px; height: 28px; z-index: 5;";
//		}
//	}
}

// trash - Handles item removal for socketables (gems, runes, jewels)
// ---------------------------------
function trashSocketable(event) {
	var val = event.target.id;
	var nameVal = val.split('_')[0];
	// removed from equipment
	var groups = ["helm", "armor", "weapon", "offhand"];
	for (let g = 0; g < groups.length; g++) {
		for (let i = 0; i < socketed[groups[g]].items.length; i++) {
			if (val == socketed[groups[g]].items[i].id) {
				for (affix in socketed[groups[g]].items[i]) {
					if (affix != "id") { character[affix] -= socketed[groups[g]].items[i][affix] }
					//character[affix] -= socketed[groups[g]].items[i][affix]
				}
				socketed[groups[g]].items[i] = {id:"",name:""}
				socketed[groups[g]].socketsFilled -= 1
			}
		}
	}
	// removed from inventory
	for (s = 1; s <= inv[0].in.length; s++) {
		if (inv[0].in[s] == event.target.id) {
			inv[s].empty = 1;
			inv[0].in[s] = "";
		}
	}
	
	event.target.remove();
	
	// find/remove duplicates
	var dup = 0;
	if (event.shiftKey) { dup = 9 }
	if (event.ctrlKey) { dup = 39 }
	if (dup > 0) {
		for (let d = 0; d < inv[0].in.length; d++) {
			if (dup > 0 && nameVal == inv[0].in[d].split('_')[0]) {
				val = inv[0].in[d];
				inv[0].in[d] = "";
				inv[d].empty = 1;
				document.getElementById(val).remove()
				dup--
			}
		}
	}
	
	// update
	updateEffectList()
	calculateSkillAmounts()
	for (let s = 0; s < skills.length; s++) { modifyEffect(skills[s]) }
	updateStats()
	updateSkills()
	if (selectedSkill[0] != " ­ ­ ­ ­ Skill 1") { checkSkill(selectedSkill[0], 1) }
	if (selectedSkill[1] != " ­ ­ ­ ­ Skill 2") { checkSkill(selectedSkill[1], 2) }
	document.getElementById("item_tooltip").innerHTML = ""
}

// removeInvalidSockets - Handles indirect removal/validation of socketables
//	group: the item group which is socketed
// ---------------------------------
function removeInvalidSockets(group) {
//	if (socketed[group].socketsFilled > socketed[group].sockets) {
		var invalidSockets = Math.max(0, socketed[group].socketsFilled - socketed[group].sockets)
		if (socketed[group].sockets == 0) { invalidSockets = 6 }
		for (let i = socketed[group].items.length-1; i >= 0; i--) {
			if (socketed[group].items[i].name != "" && invalidSockets > 0) {
				for (affix in socketed[group].items[i]) { if (affix != "id") { character[affix] -= socketed[group].items[i][affix] } }
				document.getElementById(socketed[group].items[i].id).remove();
				socketed[group].socketsFilled -= 1
				socketed[group].items[i] = {id:"",name:""}
				invalidSockets -= 1
			}
		}
//	}
}