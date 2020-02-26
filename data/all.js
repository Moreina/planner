

character = {};
var skill_bonuses = {stamina_bonus:0, speed_bonus:0, defense_bonus:0, resistance_bonus:0, attack_bonus:0, cstrike_bonus:0, ar_bonus:0, pierce_bonus:0, damage_bonus:0, fRes_bonus:0, cRes_bonus:0, lRes_bonus:0, edged_bonus:[0,0,0], pole_bonus:[0,0,0], blunt_bonus:[0,0,0], thrown_bonus:[0,0,0], claw_bonus:[0,0,0], mana_regen_bonus:0, cPierce_bonus:0, lPierce_bonus:0, fPierce_bonus:0, cDamage_bonus:0, lDamage_bonus:0, fDamage_bonus:0};
var base_stats = {level:1, skillpoints:0, statpoints:0, quests_completed:-1, running:-1, difficulty:3, strength_added:0, dexterity_added:0, vitality_added:0, energy_added:0, fRes_penalty:100, cRes_penalty:100, lRes_penalty:100, pRes_penalty:100, mRes_penalty:100, fRes:0, cRes:0, lRes:0, pRes:0, mRes:0, fRes_max:75, cRes_max:75, lRes_max:75, pRes_max:75, mRes_max:75}
var gear = {req_level:0, req_strength:0, req_dexterity:0};
var settings = {coupling:1}
var MAX = 20;	// Highest Skill Hardpoints
var LIMIT = 60; // Highest Skill Data
var RES_CAP = 95;

// Charm Inventory
var inv = [
{onpickup:"?",pickup_x:0,pickup_y:0,empty:1,charms:[],in:["",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
{x:1,y:1,empty:1,id:"h11"},{x:1,y:1,empty:1,id:"h21"},{x:1,y:1,empty:1,id:"h31"},{x:1,y:1,empty:1,id:"h41"},{x:1,y:1,empty:1,id:"h51"},{x:1,y:1,empty:1,id:"h61"},{x:1,y:1,empty:1,id:"h71"},{x:1,y:1,empty:1,id:"h81"},{x:1,y:1,empty:1,id:"h91"},{x:1,y:1,empty:1,id:"h01"},
{x:1,y:1,empty:1,id:"h12"},{x:1,y:1,empty:1,id:"h22"},{x:1,y:1,empty:1,id:"h32"},{x:1,y:1,empty:1,id:"h42"},{x:1,y:1,empty:1,id:"h52"},{x:1,y:1,empty:1,id:"h62"},{x:1,y:1,empty:1,id:"h72"},{x:1,y:1,empty:1,id:"h82"},{x:1,y:1,empty:1,id:"h92"},{x:1,y:1,empty:1,id:"h02"},
{x:1,y:1,empty:1,id:"h13"},{x:1,y:1,empty:1,id:"h23"},{x:1,y:1,empty:1,id:"h33"},{x:1,y:1,empty:1,id:"h43"},{x:1,y:1,empty:1,id:"h53"},{x:1,y:1,empty:1,id:"h63"},{x:1,y:1,empty:1,id:"h73"},{x:1,y:1,empty:1,id:"h83"},{x:1,y:1,empty:1,id:"h93"},{x:1,y:1,empty:1,id:"h03"},
{x:1,y:1,empty:1,id:"h14"},{x:1,y:1,empty:1,id:"h24"},{x:1,y:1,empty:1,id:"h34"},{x:1,y:1,empty:1,id:"h44"},{x:1,y:1,empty:1,id:"h54"},{x:1,y:1,empty:1,id:"h64"},{x:1,y:1,empty:1,id:"h74"},{x:1,y:1,empty:1,id:"h84"},{x:1,y:1,empty:1,id:"h94"},{x:1,y:1,empty:1,id:"h04"}
];

// Loads equipment/charm info to the appropriate dropdowns
// ---------------------------------
function loadEquipment(className) {
	var equipmentTypes = ["helm", "armor", "gloves", "boots", "belt", "amulet", "ring1", "ring2", "weapon", "offhand", "charms"];
	var equipmentDropdowns = ["dropdown_helm", "dropdown_armor", "dropdown_gloves", "dropdown_boots", "dropdown_belt", "dropdown_amulet", "dropdown_ring1", "dropdown_ring2", "dropdown_weapon", "dropdown_offhand", "dropdown_charms"]
	for (let i = 0; i < equipmentTypes.length; i++) {
		loadItems(equipmentTypes[i], equipmentDropdowns[i], className)
	}
}

// Creates a dropdown menu option
// type: equipment type (string)
// dropdown: string name of the dropdown to edit
// called by: loadEquipment()
// ---------------------------------
function loadItems(type, dropdown, className) {
	if (type.length == 0) document.getElementById(dropdown).innerHTML = "<option></option>"
	else {
		var choices = "";
		for (item in equipment[type]) {
			if (typeof(equipment[type][item].only) == 'undefined' || (typeof(equipment[type][item].only) != 'undefined' && equipment[type][item].only != null && equipment[type][item].only == className)) {
				if (item > 0) {
					choices += "<option class='dropdown-option'>" + equipment[type][item].name + "</option>"
				} else {
					choices += "<option selected>" + "­ ­ ­ ­ " + equipment[type][item].name + "</option>"
				}
			}
		}
		document.getElementById(dropdown).innerHTML = choices
	}
}

// Resets everything and starts a new character
// choice: character class to use (string)
// ---------------------------------
function startup(choice) {
	loadEquipment(choice)
	clearIconSources()
	resetSkills()
	resetEquipment()
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
	updateAll()
	document.getElementById("skill_tree").src = character_setup.skill_layout
	init()
}

// Calls startup() with the specified class
// name: string class name
// ---------------------------------
function reset(name) { startup(name.toLowerCase()) }

// Initiates mouse functions
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

// Removes all active skill icons
// ---------------------------------
function clearIconSources() {
	for (let s = 0; s < skills.length; s++) {
		var iconId = "i"+skills[s].key
		document.getElementById(iconId).src = "./images/skills/none.png"
		document.getElementById(iconId).style.visibility = "hidden"
	}
}

// Sets new active skill icons based on character class
// className: character class (string)
// ---------------------------------
function setIconSources(className) {
	var prefix = "./images/skills/"+className+"/";
	for (let s = 0, len = skills.length; s < len; s++) {
		var iconId = "i"+skills[s].key;
		document.getElementById(iconId).src = prefix+skills[s].name+".png"
	}
}

// Handles whether active skill icons are hidden or shown
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

// Modifies the character's level
// input: positive or negative change (-1, 1)
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
}

// Equips an item by adding its stats to the character, or unequips it if it's already equipped		// TODO: consider renaming... switchItem()?  ...or splitting into different functions
// type: equipment type (string)
// val: string name of item
// ---------------------------------
function equip(type, val) {
	if (equipped[type].name != val) {
		if (equipped[type].name != "none") {
			for (old_affix in equipped[type]) {
				character[old_affix] -= equipped[type][old_affix]
				equipped[type][old_affix] = unequipped[old_affix]
			}
		}
		for (item in equipment[type]) {
			if (equipment[type][item].name == val) {
				for (affix in equipment[type][item]) {
					character[affix] += equipment[type][item][affix]
					equipped[type][affix] = equipment[type][item][affix]
				}
			}
		}
		calculateSkillAmounts()
		updateAll()
		checkRequirements()
	}
}

// Resets functionality for skills
// ---------------------------------
function resetSkills() {
	for (bonus in skill_bonuses) { character[bonus] = skill_bonuses[bonus] }
	for (s = 0, len = skills.length; s < len; s++) {
		skills[s].level = 0
		document.getElementById("p"+skills[s].key).innerHTML = ""
		document.getElementById("s"+skills[s].key).onmouseover = function() {mouseOut};
		document.getElementById("s"+skills[s].key).onclick = function() {mouseOut};
		document.getElementById("s"+skills[s].key).oncontextmenu = function() {mouseOut};
	}
}

// Resets all items
// ---------------------------------
function resetEquipment() {
	var equipmentTypes = ["helm", "armor", "gloves", "boots", "belt", "amulet", "ring1", "ring2", "weapon", "offhand"];
	var equipmentDropdowns = ["dropdown_helm", "dropdown_armor", "dropdown_gloves", "dropdown_boots", "dropdown_belt", "dropdown_amulet", "dropdown_ring1", "dropdown_ring2", "dropdown_weapon", "dropdown_offhand"]
	for (let e = 0; e < equipmentTypes.length; e++) {
		equip(equipmentTypes[e], "")
		document.getElementById(equipmentDropdowns[e]).selectedIndex = 0
	}
	resetCharms()
}

// Resets all charms
// called by: resetEquipment()
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

// Adds a charm to the inventory		// TODO: Too large, split
// val: the name of the charm
// ---------------------------------
function addCharm(val) {
	var charm_img = {prefix:"./images/items/", small:["charm1_paw.png","charm1_disc.png","charm1_coin.png"], large:["charm2_page.png","charm2_horn.png","charm2_lantern.png"], grand:["charm3_lace.png","charm3_eye.png","charm3_monster.png"]};
	var charmImage = "";
	var charmHeight = "";
	var charmWidth = "29";
	var type = "";
	var charm_y = 1;
	var nameVal = val;
	for (item in equipment["charms"]) {
		if (equipment["charms"][item].name == val) {
			type = equipment["charms"][item].type
		}
	}
	var r = Math.floor((Math.random() * 3));
	if (type == "grand") { charmHeight = "88"; charmImage = charm_img.prefix+charm_img.grand[r]; charm_y = 3; }
	else if (type == "large") { charmHeight = "59"; charmImage = charm_img.prefix+charm_img.large[r]; charm_y = 2; }
	else if (type == "small") { charmHeight = "29"; charmImage = charm_img.prefix+charm_img.small[r]; charm_y = 1; }
	else { charmHeight = "29"; charmImage = charm_img.prefix+"debug.png"; charm_y = 1; }
		
	var allow = 1;
	for (let c = 1; c <= inv[0].in.length; c++) {
		if (inv[0].in[c] == val) {
			if (val == "Annihilus" || val == "Hellfire Torch" || val == "Gheed's Fortune") { allow = 0 } }
	}
	if (allow == 1) {
		if (val != "Annihilus" && val != "Hellfire Torch" && val != "Gheed's Fortune") {
			var append = "" + Math.floor((Math.random() * 999) + 1);
			val = val + "_" + append
		}
		if (nameVal == "Annihilus") { charmImage = "./images/items/charm1u.png"; }
		if (nameVal == "Hellfire Torch") { charmImage = "./images/items/charm2u.png"; }
		if (nameVal == "Gheed's Fortune") { charmImage = "./images/items/charm3u.png"; }
		var charmHTML = '<img style="width: ' + charmWidth + '; height: ' + charmHeight + '; pointer-events: auto;" id="' + val + '" src="' + charmImage + '" draggable="true" ondragstart="drag(event)" width="' + charmWidth + '" height="' + charmHeight + '" oncontextmenu="trash(event)" onmouseover="itemHover(event, this.value)" onmouseout="itemOut()">';
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
			if (charm_y > 1) { inv[i+10].empty = 0; inv[0].in[i+10] = val; 
			//	document.getElementById(inv[i].id).style = "position: absolute; width: 29px; height: 58px;"; 
			}
			if (charm_y > 2) { inv[i+20].empty = 0; inv[0].in[i+20] = val; 
			//	document.getElementById(inv[i].id).style = "position: absolute; width: 29px; height: 87px;"; 
			}
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
			calculateSkillAmounts()
			updateAll()
		}
	}
	document.getElementById("dropdown_charms").selectedIndex = 0
}

// Toggles the completion of all quests and their rewards
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
		updateStats()
	}
}

// Toggles whether the character is running or walking/standing
// ---------------------------------
function toggleRunning(running) {
	if (running.checked) { character.running = 1 } else { character.running = 0 }
	updateAll()
}

// Changes the game difficulty
// diff: game difficulty (1-3)
// ---------------------------------
function changeDifficulty(diff) {
	character.difficulty = diff
	var penalties = ["fRes_penalty", "cRes_penalty", "lRes_penalty", "pRes_penalty", "mRes_penalty"]
	for (let p = 0; p < penalties.length; p++) {
		if (diff == 1) { character[penalties[p]] = 0 }
		else if (diff == 2) { character[penalties[p]] = 40 }
		else if (diff == 3) { character[penalties[p]] = 100 }
	}
	updateStats()
}

// Changes whether adding/removing skill points can affect character level
// ---------------------------------
function toggleCoupling(coupling) {
	if (coupling.checked) { settings.coupling = 1 } else { settings.coupling = 0 }
}

// Updates all stats
// ---------------------------------
function updateAll() { updateStats(); updateSecondaryStats(); }

// Updates stats shown by the default (original D2) stat page
// ---------------------------------
function updateStats() {
	var c = character;
	var phys_min = ((1+((c.strength+c.all_attributes+c.level*c.strength_per_level)/100))*(c.level*c.min_damage_per_level+c.damage_min));
	var phys_max = ((1+((c.strength+c.all_attributes+c.level*c.strength_per_level)/100))*(c.level*c.max_damage_per_level+c.damage_max));
	var weapon_bonus = 0;
	if (c.class_name == "Barbarian" || c.class_name == "Assassin") {
		if (equipped.weapon.type == "sword" || equipped.weapon.type == "axe" || equipped.weapon.type == "dagger") {
			weapon_bonus = c.edged_bonus[0]
			c.ar_bonus = c.edged_bonus[1]
			c.cstrike_bonus = c.edged_bonus[2]
		} else if (equipped.weapon.type == "polearm" || equipped.weapon.type == "spear") {
			weapon_bonus = c.pole_bonus[0]
			c.ar_bonus = c.pole_bonus[1]
			c.cstrike_bonus = c.pole_bonus[2]
		} else if (equipped.weapon.type == "mace" || equipped.weapon.type == "scepter" || equipped.weapon.type == "staff") {
			weapon_bonus = c.blunt_bonus[0]
			c.ar_bonus = c.blunt_bonus[1]
			c.cstrike_bonus = c.blunt_bonus[2]
		} else if (equipped.weapon.type == "thrown") {
			weapon_bonus = c.thrown_bonus[0]
			c.ar_bonus = c.thrown_bonus[1]
			c.pierce_bonus = c.thrown_bonus[2]
		} else if (equipped.weapon.type == "claw") {
			weapon_bonus = c.claw_bonus[0]
			c.ar_bonus = c.claw_bonus[1]
			c.cstrike_bonus = c.claw_bonus[2]
		} else {
			weapon_bonus = 0
			c.ar_bonus = 0
			c.cstrike_bonus = 0
			c.pierce_bonus = 0
		}
	}
	
	var ar_addon = ((c.dexterity + c.all_attributes + c.level*c.dexterity_per_level)-c.starting_dexterity)*c.ar_per_dexterity;
	var defense_addon = ((c.dexterity + c.all_attributes + c.level*c.dexterity_per_level)-c.starting_dexterity)*c.defense_per_dexterity;
	var life_addon = ((c.vitality + c.all_attributes + c.level*c.vitality_per_level)-c.starting_vitality)*c.life_per_vitality;
	var stamina_addon = ((c.vitality + c.all_attributes + c.level*c.vitality_per_level)-c.starting_vitality)*c.stamina_per_vitality;
	var mana_addon = ((c.energy + c.all_attributes + c.level*c.energy_per_level)-c.starting_energy)*c.mana_per_energy;

	document.getElementById("basic_attack").innerHTML = Math.floor((1+c.damage_bonus/100)*(1+weapon_bonus/100)*(phys_min + c.fDamage_min + c.cDamage_min + c.lDamage_min + c.pDamage_min + c.mDamage_min)) + "-" + Math.floor((1+c.damage_bonus/100)*(1+weapon_bonus/100)*(phys_max + c.fDamage_max + c.cDamage_max + c.lDamage_max + c.pDamage_max + c.mDamage_max));
	document.getElementById("strength").innerHTML = c.strength + c.all_attributes + Math.floor(c.level*c.strength_per_level)
	document.getElementById("dexterity").innerHTML = c.dexterity + c.all_attributes + Math.floor(c.level*c.dexterity_per_level)
	document.getElementById("vitality").innerHTML = c.vitality + c.all_attributes + Math.floor(c.level*c.vitality_per_level)
	document.getElementById("energy").innerHTML = c.energy + c.all_attributes + Math.floor(c.level*c.energy_per_level)
	if (c.running > 0) { document.getElementById("defense").innerHTML = "N/A" }
	else { document.getElementById("defense").innerHTML = Math.floor((c.defense + c.level*c.defense_per_level + defense_addon) * (1 + c.defense_bonus/100)) }
	document.getElementById("ar").innerHTML = Math.floor((c.ar + c.level*c.ar_per_level + ar_addon) * (1 + c.ar_bonus/100))
	document.getElementById("stamina").innerHTML = Math.floor((c.stamina + c.level*c.stamina_per_level + stamina_addon) * (1+c.stamina_bonus/100))
	document.getElementById("life").innerHTML = Math.floor((c.life + c.level*c.life_per_level + life_addon) * (1 + c.max_life/100))
	document.getElementById("mana").innerHTML = Math.floor((c.mana + c.level*c.mana_per_level + mana_addon) * (1 + c.max_mana/100))
	document.getElementById("level").innerHTML = c.level
	document.getElementById("class_name").innerHTML = c.class_name
	document.getElementById("remainingstats").innerHTML = c.statpoints
	document.getElementById("remainingskills").innerHTML = c.skillpoints
	document.getElementById("fres").innerHTML = (c.fRes + c.all_res - c.fRes_penalty + c.resistance_bonus) + " / " + Math.min(RES_CAP,(c.fRes_max + c.fRes_bonus))
	document.getElementById("cres").innerHTML = (c.cRes + c.all_res - c.cRes_penalty + c.resistance_bonus) + " / " + Math.min(RES_CAP,(c.cRes_max + c.cRes_bonus))
	document.getElementById("lres").innerHTML = (c.lRes + c.all_res - c.lRes_penalty + c.resistance_bonus) + " / " + Math.min(RES_CAP,(c.lRes_max + c.lRes_bonus))
	document.getElementById("pres").innerHTML = (c.pRes + c.all_res - c.pRes_penalty + c.resistance_bonus) + " / " + Math.min(RES_CAP,(c.pRes_max))
	document.getElementById("mres").innerHTML = (c.mRes - c.mRes_penalty) + "%  +" + c.mDamage_reduced
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
}

// Updates stats shown on the secondary (Path of Diablo) stat page
// ---------------------------------
function updateSecondaryStats() {
	document.getElementById("pdr").innerHTML = character.pdr + "%  +" + character.damage_reduced
	document.getElementById("fabsorb").innerHTML = character.fAbsorb + "%  +" + (character.fAbsorb_flat + (character.level*character.fAbsorb_per_level))
	document.getElementById("cabsorb").innerHTML = character.cAbsorb + "%  +" + character.cAbsorb_flat
	document.getElementById("labsorb").innerHTML = character.lAbsorb + "%  +" + character.lAbsorb_flat
	document.getElementById("mabsorb").innerHTML = character.mAbsorb + "%  +" + character.mAbsorb_flat	
	
	document.getElementById("cdr").innerHTML = character.cdr
	document.getElementById("fcr").innerHTML = character.fcr + Math.floor(character.level*character.fcr_per_level)
	document.getElementById("fbr").innerHTML = character.fbr
	document.getElementById("fhr").innerHTML = character.fhr
	document.getElementById("frw").innerHTML = Math.floor((character.frw + character.speed_bonus) * (1+character.velocity/100))
	document.getElementById("ias").innerHTML = character.ias
	
	document.getElementById("life_leech").innerHTML = character.life_leech
	document.getElementById("mana_leech").innerHTML = character.mana_leech
	document.getElementById("life_per_hit").innerHTML = character.life_per_hit + "m , " + character.life_per_ranged_hit + "r"
	document.getElementById("mana_per_hit").innerHTML = character.mana_per_hit + "m , " + character.mana_per_ranged_hit + "r"
	
	document.getElementById("fdamage").innerHTML = character.fDamage + character.fDamage_bonus
	document.getElementById("cdamage").innerHTML = character.cDamage + character.cDamage_bonus
	document.getElementById("ldamage").innerHTML = character.lDamage + character.lDamage_bonus
	document.getElementById("pdamage").innerHTML = character.pDamage
	document.getElementById("fpierce").innerHTML = character.fPierce + character.fPierce_bonus
	document.getElementById("cpierce").innerHTML = character.cPierce + character.cPierce_bonus
	document.getElementById("lpierce").innerHTML = character.lPierce + character.lPierce_bonus
	document.getElementById("ppierce").innerHTML = character.pPierce
	
	document.getElementById("pierce").innerHTML = character.pierce + character.pierce_bonus
	document.getElementById("cblow").innerHTML = character.cblow
	document.getElementById("dstrike").innerHTML = character.dstrike + Math.floor(character.level*character.dstrike_per_level)
	document.getElementById("cstrike").innerHTML = character.cstrike + character.cstrike_bonus
	document.getElementById("owounds").innerHTML = character.owounds
	
	document.getElementById("mf").innerHTML = (character.mf + character.level*character.mf_per_level)
	document.getElementById("gf").innerHTML = character.gf
	
	document.getElementById("damage_vs_demons").innerHTML = character.damage_vs_demons
	document.getElementById("damage_vs_undead").innerHTML = Math.floor(character.damage_vs_undead + character.level*character.damage_vs_undead_per_level)
	document.getElementById("ar_vs_demons").innerHTML = character.ar_vs_demons
	document.getElementById("ar_vs_undead").innerHTML = Math.floor(character.ar_vs_undead + character.level*character.ar_vs_undead_per_level)
	
	document.getElementById("life_per_kill").innerHTML = character.life_per_kill
	document.getElementById("mana_per_kill").innerHTML = character.mana_per_kill
	document.getElementById("life_regen").innerHTML = character.life_regen
	document.getElementById("mana_regen").innerHTML = character.mana_regen + character.mana_regen_bonus
	
	document.getElementById("damage_to_mana").innerHTML = character.damage_to_mana
	if (character.running > 0) { document.getElementById("missile_defense").innerHTML = "N/A" }
	else { document.getElementById("missile_defense").innerHTML = character.missile_defense }
	
	document.getElementById("enemy_fres").innerHTML = character.enemy_fRes
	document.getElementById("enemy_cres").innerHTML = character.enemy_cRes
	document.getElementById("enemy_lres").innerHTML = character.enemy_lRes
	document.getElementById("enemy_pres").innerHTML = character.enemy_pRes
}

// Updates skill levels
// ---------------------------------
function calculateSkillAmounts() {
	for (s = 0; s < skills.length; s++) {
		skills[s].extra_levels = 0
		skills[s].extra_levels += character.all_skills
		var display = skills[s].level
		if (character.class_name == "Amazon") {
			skills[s].extra_levels += character.skills_amazon
			if (s < 10) { skills[s].extra_levels += character.skills_javelins
				if (s == 8) { skills[s].extra_levels += character.skill_lightning_strike }
				if (s == 9) { skills[s].extra_levels += character.skill_lightning_fury }
				if (s == 4) { skills[s].extra_levels += character.skill_lightning_bolt }
			} else if (s > 19) { skills[s].extra_levels += character.skills_bows
			} else { skills[s].extra_levels += character.skills_passives 
				if (s == 23 || s == 26 || s == 28) { skills[s].extra_levels += character.skills_fire_all }
				if (s == 20 || s == 24 || s == 29) { skills[s].extra_levels += character.skills_cold_all }
			}
		} else if (character.class_name == "Assassin") {
			skills[s].extra_levels += character.skills_assassin
			if (s == 1 || s == 6 || s == 20 || s == 24 || s == 27) { skills[s].extra_levels += character.skills_fire_all }
			if (s < 9) { skills[s].extra_levels += character.skills_martial
				if (s == 1) { skills[s].extra_levels += character.skill_fists_of_ember }
				if (s == 3 || s == 8) { skills[s].extra_levels += character.skills_cold_all }
			} else if (s > 19) { skills[s].extra_levels += character.skills_traps
			} else { skills[s].extra_levels += character.skills_shadow }
		} else if (character.class_name == "Barbarian") {
			skills[s].extra_levels += character.skills_barbarian
			if (s < 10) { skills[s].extra_levels += character.skills_warcries
				if (s == 6) { skills[s].extra_levels += character.skill_battle_orders }
				if (s == 9) { skills[s].extra_levels += character.skill_battle_command }
			} else if (s > 17) { skills[s].extra_levels += character.skills_combat_barbarian
			} else { skills[s].extra_levels += character.skills_masteries }
		} else if (character.class_name == "Druid") {
			skills[s].extra_levels += character.skills_druid
			if (s == 0 || s == 1 || s == 2 || s == 4 || s == 7 || s == 9 || s == 17) { skills[s].extra_levels += character.skills_fire_all }
			if (s < 11) { skills[s].extra_levels += character.skills_elemental
				if (s == 3 || s == 10) { skills[s].extra_levels += character.skills_cold_all }
			} else if (s > 20) { skills[s].extra_levels += character.skills_summoning_druid
			} else { skills[s].extra_levels += character.skills_shapeshifting 
				if (s == 14) { skills[s].extra_levels += character.skill_feral_rage }
			}
		} else if (character.class_name == "Necromancer") {
			skills[s].extra_levels += character.skills_necromancer
			if (s < 11) { skills[s].extra_levels += character.skills_summoning_necromancer
				if (s == 0) { skills[s].extra_levels += character.skill_summon_mastery }
				if (s == 4) { skills[s].extra_levels += character.skill_flesh_offering }
				if (s == 9) { skills[s].extra_levels += character.skills_fire_all }
			} else if (s > 19) { skills[s].extra_levels += character.skills_curses
			} else { skills[s].extra_levels += character.skills_poisonBone }
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
				if (s == 5) { skills[s].extra_levels += character.skill_glacial_spike }
			} else if (s > 21) { skills[s].extra_levels += character.skills_fire
				skills[s].extra_levels += character.skills_fire_all
			} else { skills[s].extra_levels += character.skills_lightning }
		}
		display += skills[s].extra_levels
		if (skills[s].level > 0) {
			document.getElementById("p"+skills[s].key).innerHTML = display
		}
	}
	calculateSkillPassives(character.class_name)
}

// Updates passive skills
// className: the character class
// ---------------------------------
function calculateSkillPassives(className) {
	if (className == "Amazon") {
		if (skills[11].level > 0) { character.cstrike_bonus = ~~skills[11].data.values[0][skills[11].level+skills[11].extra_levels]; } else { character.cstrike_bonus = 0 }
		if (skills[15].level > 0) { character.ar_bonus = ~~skills[15].data.values[0][skills[15].level+skills[15].extra_levels]; } else { character.ar_bonus = 0 }
		if (skills[19].level > 0) { character.pierce_bonus = ~~skills[19].data.values[0][skills[19].level+skills[19].extra_levels]; } else { character.pierce_bonus = 0 }
		//if (skills[13].level > 0) { character.dodge_bonus = ~~skills[13].data.values[0][skills[13].level+skills[13].extra_levels]; } else { character.dodge_bonus = 0 }
		//if (skills[14].level > 0) { character.avoid_bonus = ~~skills[14].data.values[0][skills[14].level+skills[14].extra_levels]; } else { character.avoid_bonus = 0 }
		//if (skills[16].level > 0) { character.evade_bonus = ~~skills[16].data.values[0][skills[16].level+skills[16].extra_levels]; } else { character.evade_bonus = 0 }
	} else if (className == "Assassin") {
		if (skills[9].level > 0) {
			character.claw_bonus[0] = ~~skills[9].data.values[0][skills[9].level+skills[9].extra_levels];
			character.claw_bonus[1] = ~~skills[9].data.values[1][skills[9].level+skills[9].extra_levels];
			character.claw_bonus[2] = ~~skills[9].data.values[2][skills[9].level+skills[9].extra_levels];
		} else { character.claw_bonus = [0,0,0] }
	} else if (className == "Barbarian") {
		if (skills[10].level > 0) {
			character.edged_bonus[0] = ~~skills[10].data.values[0][skills[10].level+skills[10].extra_levels];
			character.edged_bonus[1] = ~~skills[10].data.values[1][skills[10].level+skills[10].extra_levels];
			character.edged_bonus[2] = ~~skills[10].data.values[2][skills[10].level+skills[10].extra_levels];
		} else { character.edged_bonus = [0,0,0] }
		if (skills[11].level > 0) {
			character.pole_bonus[0] = ~~skills[11].data.values[0][skills[11].level+skills[11].extra_levels];
			character.pole_bonus[1] = ~~skills[11].data.values[1][skills[11].level+skills[11].extra_levels];
			character.pole_bonus[2] = ~~skills[11].data.values[2][skills[11].level+skills[11].extra_levels];
		} else { character.pole_bonus = [0,0,0] }
		if (skills[12].level > 0) {
			character.blunt_bonus[0] = ~~skills[12].data.values[0][skills[12].level+skills[12].extra_levels];
			character.blunt_bonus[1] = ~~skills[12].data.values[1][skills[12].level+skills[12].extra_levels];
			character.blunt_bonus[2] = ~~skills[12].data.values[2][skills[12].level+skills[12].extra_levels];
		} else { character.blunt_bonus = [0,0,0] }
		if (skills[13].level > 0) {
			character.thrown_bonus[0] = ~~skills[13].data.values[0][skills[13].level+skills[13].extra_levels];
			character.thrown_bonus[1] = ~~skills[13].data.values[1][skills[13].level+skills[13].extra_levels];
			character.thrown_bonus[2] = ~~skills[13].data.values[2][skills[13].level+skills[13].extra_levels];
		} else { character.thrown_bonus = [0,0,0] }
		if (skills[14].level > 0) { character.stamina_bonus = ~~skills[14].data.values[0][skills[14].level+skills[14].extra_levels]; } else { character.stamina_bonus = 0 }
		if (skills[15].level > 0) { character.defense_bonus = ~~skills[15].data.values[0][skills[15].level+skills[15].extra_levels]; } else { character.defense_bonus = 0 }
		if (skills[16].level > 0) { character.speed_bonus = ~~skills[16].data.values[0][skills[16].level+skills[16].extra_levels]; } else { character.speed_bonus = 0 }
		if (skills[17].level > 0) { character.resistance_bonus = ~~skills[17].data.values[0][skills[17].level+skills[17].extra_levels]; } else { character.resistance_bonus = 0 }
	} else if (className == "Sorceress") {
		if (skills[23].level > 0 || skills[28].level > 0) { character.ar_bonus = ~~skills[23].data.values[0][skills[23].level+skills[23].extra_levels] + ~~skills[28].data.values[3][skills[28].level+skills[28].extra_levels]; } else { character.ar_bonus = 0; }
		if (skills[23].level > 0) { character.mana_regen_bonus = ~~skills[23].data.values[1][skills[23].level+skills[23].extra_levels]; } else { character.mana_regen_bonus = 0; }
		if (skills[10].level > 0) {
			character.cPierce_bonus = ~~skills[10].data.values[0][skills[10].level+skills[10].extra_levels];
			character.cDamage_bonus = ~~skills[10].data.values[1][skills[10].level+skills[10].extra_levels];
		} else { character.cPierce_bonus = 0; character.cDamage_bonus = 0; }
		if (skills[20].level > 0) {
			character.lPierce_bonus = ~~skills[20].data.values[0][skills[20].level+skills[20].extra_levels];
			character.lDamage_bonus = ~~skills[20].data.values[1][skills[20].level+skills[20].extra_levels];
		} else { character.lPierce_bonus = 0; character.lDamage_bonus = 0; }
		if (skills[30].level > 0) {
			character.fPierce_bonus = ~~skills[30].data.values[0][skills[30].level+skills[30].extra_levels];
			character.fDamage_bonus = ~~skills[30].data.values[1][skills[30].level+skills[30].extra_levels];
		} else { character.fPierce_bonus = 0; character.fDamage_bonus = 0; }
	}
}

// Recolors stats/skills based on unmet item/skill/level requirements
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
		if (skills[s].level > character.level - skills[s].reqlvl + 1) { req_met = 0 }
		if (skills[s].req.length > 0 && req_met == 1) { for (let r = 0; r < skills[s].req.length; r++) {
			if (skills[skills[s].req[r]].level == 0) { req_met = 0 }
		} }
		if (req_met == 0) {
			document.getElementById("p"+skills[s].key).style.color = "#ff8080"; }
		else if (skills[s].extra_levels > 0) {
			document.getElementById("p"+skills[s].key).style.color = "#8080ff"; }
		else { document.getElementById("p"+skills[s].key).style.color = "white"; }
		if (skills[s].level > 0) { document.getElementById("p"+skills[s].key).innerHTML = (skills[s].level + skills[s].extra_levels); }
	}
}

// Raises the selected stat
// stat: button identifier (string) for corresponding stat
// ---------------------------------
function addStat(event, stat) {
	var points = 1
	if (event.shiftKey) { points = 10 }
	if (event.ctrlKey) { points = 100 }
	if (character.statpoints < points) { points = character.statpoints }
	if (character.statpoints >= points) {
		if (stat == "btn_strength") {
			character.strength += points
			character.strength_added += points
		} else if (stat == "btn_dexterity") {
			character.dexterity += points
			character.dexterity_added += points
		} else if (stat == "btn_vitality") {
			character.vitality += points
			character.vitality_added += points
		} else if (stat == "btn_energy") {
			character.energy += points
			character.energy_added += points
		}
		character.statpoints -= points
		updateStats()
	}
}

// Lowers the selected stat
// stat: button identifier (string) for corresponding stat
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
	updateStats()
}

// Raises the skill level
// skill: the skill to modify
// ---------------------------------
function skillUp(event, skill) {
	var display = 0
	var old_level = skill.level;
	var levels = 1;
	if (event.shiftKey) { levels = 10 }
	if (event.ctrlKey) { levels = 20 }
	if (old_level+levels > MAX) { levels = MAX-old_level }
	if (levels > (99-character.level) + character.skillpoints) { levels = (99-(character.level) + character.skillpoints) }
	if (settings.coupling == 0 && levels > character.skillpoints) { levels = character.skillpoints }
	if (character.level <= 99-levels || character.skillpoints >= levels) {
		skill.level += levels
		display += skill.level
		display += skill.extra_levels
		if (skill.level > 0) { document.getElementById("p"+skill.key).innerHTML = display }
		skillHover(skill)
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
			updateAll()
		}
	}
	showBaseLevels(skill)
}

// Lowers the skill level
// skill: the skill to modify
// ---------------------------------
function skillDown(event, skill) {
	var old_level = skill.level
	var levels = 1
	var display = 0
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
	display += skill.level
	display += skill.extra_levels
	if (skill.level == 0) {
		document.getElementById("p"+skill.key).innerHTML = ""
	} else {
		document.getElementById("p"+skill.key).innerHTML = display
	}
	updateAll()
	skillHover(skill)
	showBaseLevels(skill)
}

// Shows skill description tooltip on mouse-over
// skill: the mouse-over'ed skill
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
		if (skill.level == 0) {
			next_value = character.updateSkill(skill, skill.level+1, i)
		} else {
			next_value = character.updateSkill(skill, (skill.level+skill.extra_levels+1), i)
		}
		next_value = round(next_value)
		next_display += next_value
		
		current_display += skill.text[i]
		//if (skill.level+skill.extra_levels <= LIMIT) { levels = skill.level+skill.extra_levels } else { levels = LIMIT }
		levels = skill.level+skill.extra_levels
		current_value = character.updateSkill(skill, (levels), i)
		current_value = round(current_value)
		current_display += current_value
		
		if (skill.data.index[0] == (i+1)) {
			if (skill.level > 0) { pre_display += current_display } else { pre_display += next_display }
			current_display = ""
			next_display = ""
		}
	}
	pre_display += skill.data.index[1]
	if (skill.level > 0) {
		document.getElementById("next_level_text").innerHTML = "<br>Next Level"
		current_display += skill.text[skill.data.values.length] + "<br>"
		pre_display += "<br><br>Current Skill Level: " + (levels) + "<br>"
		if (skill.data.index[0] > 0) { pre_display = "<br>" + pre_display }
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
	calculateSkillAmounts(character.class_name)
	updateAll()
	showBaseLevels(skill)
}

// Shows base levels for a skill
// skill: the skill to use
// called by: skillHover()
// ---------------------------------
function showBaseLevels (skill) {
	if (skill.extra_levels > 0 && skill.level > 0) {
		document.getElementById("p"+skill.key).style.color = "#999999";
		document.getElementById("p"+skill.key).innerHTML = skill.level;
	}
}

// num: number to round
// return: rounded number (no decimals if above 33 or ending in ".0")
// ---------------------------------
function round(num) {
	// TODO: Always round damage/life numbers
	var temp = num;
	var decimals = (toString(num) + ".");
	if (num >= 33) { 
		temp = Math.round(num)
	} else {
		decimals = decimals.split(".");
		if (decimals[1].length > 1) {
			temp = num.toFixed(1)
		} else {
			temp = (Math.round((num + Number.EPSILON) * 10) / 10)
		}
	}
	return temp;
}

// Hides skill tooltip
// ---------------------------------
function skillOut() {
	document.getElementById("tooltip").style.display="none"
	checkRequirements()
}

// hides item tooltip for Charm Inventory
// ---------------------------------
function itemOut() { document.getElementById("item_tooltip").style.display="none" }

// Shows item tooltip on mouse-over for Charm Inventory
// id: unique string identifier for item
// ---------------------------------
function itemHover(ev, id) {
	var name = "";
	var stats = "";
	var transfer = 0;
	for (let i = 1; i < inv.length; i++) { if (inv[i].id == id) { transfer = i } }
	var val = inv[0]["in"][transfer];
	for (affix in equipped["charms"][val]) {
		if (affix == "name") { name = equipped["charms"][val][affix] }
		else if (affix == "type") {}
		else { stats += affix + ": " + equipped["charms"][val][affix] + "<br>" }
	}
	var style = "display: block; color: #634db0;"
	var display = name //+ "<br>" + stats
	if (name == "Annihilus" || name == "Hellfire Torch" || name == "Gheed's Fortune") { style = "display: block; color: #928068;" }
	if (name == "Skill Grand Charm #1") { display = "+1 Grand Charm ("+character.tab1+")" }
	if (name == "Skill Grand Charm #2") { display = "+1 Grand Charm ("+character.tab2+")" }
	if (name == "Skill Grand Charm #3") { display = "+1 Grand Charm ("+character.tab3+")" }
	if (equipped["charms"][val].type != "small" && equipped["charms"][val].type != "large" && equipped["charms"][val].type != "grand") { style = "display: block; color: #ff8080;" }
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

// Handles placement validation for Charm Inventory
// cell: position of item in 10x4 inventory (1-40), y: height of item (1-3)
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
		ev.preventDefault();
		}
	}
}

// Handles item dragging for Charm Inventory
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

// Handles item dropping for Charm Inventory
// cell: 1-40 (upper left position of item in 10x4 inventory)
// ---------------------------------
function drop(ev,cell) {
	ev.preventDefault();
	
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
	for (s = 1; s <= inv[0].in.length; s++) {
		if (inv[0].in[s] == inv[0].onpickup) { inv[s].empty = 1; inv[0].in[s] = ""; 
		//	document.getElementById(inv[s].id).style = "position: absolute; width: 29px; height: 29px;";
			inv[s].y = 1;
			document.getElementById(inv[s].id).style = "position: absolute; width: 29px; height: 29px; z-index: 3;";
		
		}
	}
	inv[cell].empty = 0
	inv[0].in[cell] = inv[0].onpickup
	if (inv[0].pickup_y > 1) { inv[cell+10].empty = 0; inv[0].in[cell+10] = inv[0].onpickup; 
	//	document.getElementById(inv[cell].id).style = "position: absolute; width: 29px; height: 58px;";
		inv[cell].y = 2;
	}
	if (inv[0].pickup_y > 2) { inv[cell+20].empty = 0; inv[0].in[cell+20] = inv[0].onpickup; 
	//	document.getElementById(inv[cell].id).style = "position: absolute; width: 29px; height: 87px;";
		inv[cell].y = 3;
	}
	inv[0].onpickup = "none"
}

// Handles item removal for Charm Inventory
// ---------------------------------
function trash(ev) {
	var val = ev.target.id;
	var type = "charms"
	for (old_affix in equipped[type][val]) {
		character[old_affix] -= equipped[type][val][old_affix]
		equipped[type][val][old_affix] = unequipped[old_affix]
	}
	for (s = 1; s <= inv[0].in.length; s++) {
		if (inv[0].in[s] == ev.target.id) {
			inv[s].empty = 1;
			inv[0].in[s] = "";
		}
	}
	ev.target.remove();
	calculateSkillAmounts()
	updateAll()
}

// 
// ---------------------------------
function itemDrag(ev, x, y) {
/*	var cell = (y-1)*10+x
	var id = inv[0].in[cell]
	ev_new = document.getElementById(id)
	drag(ev_new)
*/	return;	
}

// 
// ---------------------------------
function itemRemove(ev, x, y) {
/*	var cell = (y-1)*10+x
	var id = inv[0].in[cell]
	ev_new = document.getElementById(id)
	trash(ev)
	trash(ev_new)
*/	return;
}
