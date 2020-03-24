

character = {};
var skill_bonuses = {stamina_skillup:0, frw_skillup:0, defense_skillup:0, resistance_skillup:0, cstrike_skillup:0, ar_skillup:0, pierce_skillup:0, fRes_skillup:0, cRes_skillup:0, lRes_skillup:0, edged_skillup:[0,0,0], pole_skillup:[0,0,0], blunt_skillup:[0,0,0], thrown_skillup:[0,0,0], claw_skillup:[0,0,0], mana_regen_skillup:0, cPierce_skillup:0, lPierce_skillup:0, fPierce_skillup:0, cDamage_skillup:0, lDamage_skillup:0, fDamage_skillup:0, block_skillup:0, velocity_skillup:0};
//var buffs = {stamina_buff:0, max_life_buff:0, max_mana_buff:0, defense_buff:0, all_skills_buff:0, fhr_buff:0, frw_buff:0, ias_buff:0, ar_buff:0, damage_buff:0, all_res_buff:0, pdr_buff:0, curses_reduced_buff:0, pDamage_min_buff:0, pDamage_max_buff:0, pDamage_duration_buff:0, thorns_buff:0, life_per_hit_buff:0, life_per_ranged_hit_buff:0, enemy_pRes_buff:0, fcr_buff:0, skeleton_damage_buff:0, block_buff:0, smite_min_buff:0, smite_max_buff:0, absorb_buff:0, absorb_flat_buff:0, life_regen_buff:0, fDamage_min_buff:0, fDamage_max_buff:0, cDamage_min_buff:0, cDamage_max_buff:0, enemy_defense_buff:0, pDamage_cutoff:0, velocity_aura:0, fRes_aura:0, cRes_aura:0, lRes_aura:0, defense_aura:0, life_regen_aura:0, poison_reduced_aura:0, fRes_max_aura:0, cRes_max_aura:0, lRes_max_aura:0, stam_recovery_aura:0, mana_regen_aura:0, elemental_damage_aura:0, lDamage_min_aura:0, lDamage_max_aura:0, pierce_aura:0, cstrike_aura:0, enemy_defense_aura:0, enemy_resists_aura:0, damage_vs_undead_aura:0};
var base_stats = {level:1, skillpoints:0, statpoints:0, quests_completed:-1, running:-1, difficulty:3, strength_added:0, dexterity_added:0, vitality_added:0, energy_added:0, fRes_penalty:100, cRes_penalty:100, lRes_penalty:100, pRes_penalty:100, mRes_penalty:100, fRes:0, cRes:0, lRes:0, pRes:0, mRes:0, fRes_max_base:75, cRes_max_base:75, lRes_max_base:75, pRes_max_base:75, mRes_max_base:75, set_bonuses:[0,0,{},{},{},{},{}]}

var effects = {};
var skillList = []; var skillList1 = []; var skillList2 = []; var skill1 = {name:"", details:""}; var skill2 = {name:"", details:""};
var oskills = {basicAttack:{},basicThrow:{}};
var abilities = {basicAttack:{},basicThrow:{}};
var lastCharm = "";
var lastSelected = "";
var gear = {req_level:0, req_strength:0, req_dexterity:0};
var settings = {coupling:1, autocast:1}
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
	loadMisc()
}

// Creates a dropdown menu option
// type: equipment type (string)
// dropdown: string name of the dropdown to edit
// called by: loadEquipment()
// ---------------------------------
function loadItems(type, dropdown, className) {
	if (type.length == 0) { document.getElementById(dropdown).innerHTML = "<option></option>" }
	else {
		var choices = "";
		for (item in equipment[type]) {
			if (typeof(equipment[type][item].only) == 'undefined' || equipment[type][item].only == className) {
			if (typeof(equipment[type][item].not) == 'undefined' || (typeof(equipment[type][item].not) == String && equipment[type][item].not != className)) {
			var halt = 0;
			if (typeof(equipment[type][item].limit) != 'undefined') {
				for (let l = 0; l < equipment[type][item].limit.length; l++) {
					if (equipment[type][item].limit[l] == className) { halt = 1 }
				}
			}
		// unneeded
		//	if (typeof(equipment[type][item].valid) != 'undefined') {
		//		var halt = 1;
		//		for (let l = 0; l < equipment[type][item].valid.length; l++) {
		//			if (equipment[type][item].valid[l] == className) { halt = 0 }
		//		}
		//	}
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
		}
		document.getElementById(dropdown).innerHTML = choices
	}
}

// Loads non-item effects
// ---------------------------------
function loadMisc() {
	var choices = "<option class='gray' disabled selected>­ ­ ­ ­ Miscellaneous</option>";
	for (let m = 1; m < non_items.length; m++) { choices += "<option>" + non_items[m].name + "</option>" }
	document.getElementById("dropdown_misc").innerHTML = choices
}

// Resets everything and starts a new character
// choice: character class to use (string)
// ---------------------------------
function startup(choice) {
	loadEquipment(choice)
	clearIconSources()
	resetSkills()
	resetEquipment()
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
	updateAll()
	document.getElementById("skill_tree").src = character_setup.skill_layout
	init()
}

// Calls startup() with the specified class
// name: string class name
// ---------------------------------
function reset(name) { startup(name.toLowerCase()); }

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
	//var selected = document.getElementById("dropdown_"+type).selectedIndex;	// consider using if unequipping weapon/offhand due to equipping a new incompatible item
	var old_set_bonuses = "";
	var old_set = "";
	var old_set_before = 0;
	var old_set_after = 0;
	var set_bonuses = "";
	var set = "";
	var set_before = 0;
	var set_after = 0;
	for (old_affix in equipped[type]) { if (old_affix == "set_bonuses") { old_set_bonuses = equipped[type].set_bonuses } }
	for (item in equipment[type]) { if (equipment[type][item].name == val) { if (typeof(equipment[type][item].set_bonuses) != 'undefined') { set_bonuses = equipment[type][item].set_bonuses } } }
	if (set_bonuses != "") { set = set_bonuses[0]; set_before = character[set]; }
	if (old_set_bonuses != "") { old_set = old_set_bonuses[0]; old_set_before = character[old_set]; }
	// remove effects
	for (old_affix in equipped[type]) {
		for (let s = 0; s < skills.length; s++) {
			if (skills[s].level == 0 && skills[s].force_levels > 0) {
				disableEffect(s)
			}
		}
	}
	// if replacing an item, previous item's affixes are removed from character
	for (old_affix in equipped[type]) {
		character[old_affix] -= equipped[type][old_affix]
		if (old_affix != "set_bonuses") { equipped[type][old_affix] = unequipped[old_affix] }
		if (old_affix == "aura") {
			removeAura(equipment[type][item][old_affix], equipment[type][item].aura_lvl)
		}
	}
	// remove set bonuses from previous item
	if (old_set_bonuses != "") {
		old_set_after = character[old_set];
		if (old_set_before > old_set_after) {
			var before = Math.round(old_set_before,0)
			var after = Math.round(old_set_after,0)
			// remove set bonuses for old item
			for (let i = 1; i <= before; i++) {
				for (affix in equipped[type]["set_bonuses"][i]) {
					character[affix] -= equipped[type]["set_bonuses"][i][affix]
				}
			}
			equipped[type]["set_bonuses"][1] = 0	// save "state" for invalid/outdated set info
			if (before > after) {
				// remove old set bonus for other equipped items in the set (only if the removed set item wasn't a duplicate of another set item, i.e. ring)
				for (set_type in equipped) {
					if (set_type != type && equipped[set_type]["set_bonuses"] != null) {
						if (equipped[set_type]["set_bonuses"][0] == old_set && equipped[set_type]["set_bonuses"][1] == 1) {	// same set as removed item & set info is valid
							for (affix in equipped[set_type]["set_bonuses"][before]) {
								character[affix] -= equipped[set_type]["set_bonuses"][before][affix]
							}
						}
					}
				}
				// TODO: what is this doing? Isn't it the same as the above code for removing other set bonuses?
				for (affix in sets[old_set][before]) {
					character[affix] -= sets[old_set][before][affix]
				}
			}
		}
	}
	
	// two-handed weapon verification
	var allow = 1;
	var twoHanded = 0;
	var itemType = "";
	for (item in equipment[type]) { if (equipment[type][item].name == val) { twoHanded = equipment[type][item].twoHanded; if (typeof(equipment[type][item].type) != 'undefined') itemType = equipment[type][item].type } }
	if (type == "weapon" && equipped["offhand"].name != "none" && equipped["offhand"].name != "Offhand") {
		if ((twoHanded == 1 || equipped["offhand"].type == "quiver") && !(equipped["offhand"].type == "quiver" && (itemType == "bow" || itemType == "crossbow"))) {
			allow = 0; document.getElementById("dropdown_weapon").selectedIndex = 0; }
	}
	if (type == "offhand" && equipped["weapon"].name != "none") {
		if ((equipped["weapon"].twoHanded == 1 || (equipped["weapon"].type != "bow" && itemType == "quiver")) && !((equipped["weapon"].type == "bow" || equipped["weapon"].type == "crossbow") && itemType == "quiver")) {
			allow = 0; document.getElementById("dropdown_offhand").selectedIndex = 0; }
	}
	
	// add affixes to character
	if (allow == 1) { for (item in equipment[type]) {
		if (equipment[type][item].name == val) {
			// add regular affixes
			for (affix in equipment[type][item]) {
				character[affix] += equipment[type][item][affix]
				equipped[type][affix] = equipment[type][item][affix]
				if (affix == "aura") {
					document.getElementById("find3").innerHTML = "aura: " + equipment[type][item][affix] + "("+equipment[type][item].aura_lvl+")"
					addAura(equipment[type][item][affix], equipment[type][item].aura_lvl)
				}
			}
			// add affixes from base item
			if (typeof(equipment[type][item]["base"]) != 'undefined') { if (equipment[type][item]["base"] != "") {
				var base = equipment[type][item].base; base = base.split(' ').join('_'); base = base.split('-').join('_'); base = base.split("'s").join("s");	// spaces, hypens, and apostrophes converted to match named entry in bases{}
				if (typeof(bases[base]) != 'undefined') { for (affix in bases[base]) { if (affix == "base_damage_min" || affix == "base_damage_max" || affix == "base_defense" || affix == "req_strength" || affix == "req_dexterity") {			// if (~~bases[base][affix] != 0) {	...use to check undefined?
					var multEth = 1;
					var multED = 1;
					var multReq = 1;
					if (typeof(equipment[type][item]["ethereal"]) != 'undefined') { if (equipment[type][item]["ethereal"] == 1) { multEth = 1.5; } }
					if (affix == "base_defense") { if (typeof(equipment[type][item]["e_def"]) != 'undefined') { multED += (equipment[type][item]["e_def"]/100) } }
					if (affix == "base_damage_min" || affix == "base_damage_max") { if (typeof(equipment[type][item]["e_damage"]) != 'undefined') { multED += (equipment[type][item]["e_damage"]/100) } }
					if (affix == "req_strength" || affix == "req_dexterity") { if (typeof(equipment[type][item]["req"]) != 'undefined') { multReq += (equipment[type][item]["req"]/100) } }
					
					if (typeof(equipped[type][affix]) == 'undefined') { equipped[type][affix] = 0 }	// undefined (new) affixes get initialized to zero
					if (affix == "base_damage_min" || affix == "base_damage_max" || affix == "base_defense") {
						equipped[type][affix] = Math.floor(multEth*multED*bases[base][affix])
						character[affix] += Math.floor(multEth*multED*bases[base][affix])
					}
					if (affix == "req_strength" || affix == "req_dexterity") {
						equipped[type][affix] += Math.floor(multReq*bases[base][affix])
						character[affix] += Math.floor(multReq*bases[base][affix])
					}
				} } }
			} }
		}
	} }
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
			equipped[type]["set_bonuses"][1] = 1	// valid set info
			if (before < after) {
				// add new set bonus for other equipped items in the set
				for (set_type in equipped) {
					if (set_type != type && equipped[set_type]["set_bonuses"] != null) {
						if (equipped[set_type]["set_bonuses"][0] == set && equipped[set_type]["set_bonuses"][1] == 1) {
							for (affix in equipped[set_type]["set_bonuses"][after]) {
								character[affix] += equipped[set_type]["set_bonuses"][after][affix]
							}
						}
					}
				}
				// TODO: what is this doing? Isn't it the same as the above code for adding other set bonuses?
				for (affix in sets[set][after]) {
					character[affix] += sets[set][after][affix]
				}
			}
		}
	}
	if (type == val) { document.getElementById(("dropdown_"+type)).selectedIndex = 0 }
	calculateSkillAmounts()
	updateEffectList()
	updateAll()
	checkRequirements()
}

// 
// ---------------------------------
function addAura(aura, aura_lvl) {
	name = aura
	i = aura_lvl
	if (document.getElementById(name) == null) {
		var newEffect = document.createElement("img")
		var effectIcon = "./images/more"+"/"+name+".png"
		
		var eClass = document.createAttribute("class");	eClass.value = "effect";	newEffect.setAttributeNode(eClass);
		var eId = document.createAttribute("id");	eId.value = name;		newEffect.setAttributeNode(eId);
		var eSrc = document.createAttribute("src");	eSrc.value = effectIcon;	newEffect.setAttributeNode(eSrc);
		
		var eToggle = document.createAttribute("onclick");		eToggle.value = "toggleAura("+name+", "+i+")";	newEffect.setAttributeNode(eToggle);
		var eRemove = document.createAttribute("oncontextmenu");	eRemove.value = "removeAura("+name+", "+i+")";	newEffect.setAttributeNode(eRemove);
		
		var effectGUI = document.getElementById("side");
		effectGUI.appendChild(newEffect);
		
		if (typeof(effects[name]) == 'undefined') { effects[name] = {} }
		effects[name]["enabled"] = 0
		if (settings.autocast == 1) {
			toggleAura(name, i)
		}
	}
	calculateSkillAmounts()
	updateAll()
}

// 
// ---------------------------------
function removeAura(name, i) {
	// TODO
	// var data = getAuraData(name, i)
	// for (affix in data) {
	//	character[affix] -= data[affix]	
	// }
	if (i > 0) { name = non_items[i].effect } else { i = non_items[i].i }
	if (typeof(effects[name]) != 'undefined') {
		if (document.getElementById(name) != null) { document.getElementById(name).remove(); }
		for (affix in effects[name]) {
			character[affix] -= effects[name][affix]
			effects[name][affix] = 0
		}
		calculateSkillAmounts()
		updateAll()
	}
}

// Resets functionality for skills
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
}

// Resets all items
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
			var append = "" + Math.floor((Math.random() * 999) + 1);	// generate "unique" ID for charm
			val = val + "_" + append
		}
		if (nameVal == "Annihilus") { charmImage = "./images/items/charm1u.png"; }
		if (nameVal == "Hellfire Torch") { charmImage = "./images/items/charm2u.png"; }
		if (nameVal == "Gheed's Fortune") { charmImage = "./images/items/charm3u.png"; }
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

// Adds miscellaneous effect
// val: the chosen effect
// ---------------------------------
function addMisc(val) {
	document.getElementById("dropdown_misc").selectedIndex = 0
	for (let m = 1; m < non_items.length; m++) {
		if (val == non_items[m].name) {
			if (typeof(effects[non_items[m].effect]) == 'undefined') { effects[non_items[m].effect] = {} }
			initiateMiscEffect(non_items[m].effect, m)
			calculateSkillAmounts()
			updateAll()
		}
	}
}

// 
// ---------------------------------
function initiateMiscEffect(name, i) {
	if (document.getElementById(name) == null) {

	//	// TODO: Change getBuffData to work with other classes
	//	var auraLevel = 0;
	//	var auraEffects = {};
	//	var selfbuff = 0;
	//	if (non_items[i].name == "Mercenary: "+name.split('_').join(' ')) { auraLevel = getMercenaryAuraLevel(character.level-1) }
	//	auraEffects = character_paladin.getBuffData(effects[name], selfbuff)
	//	//skills_all["paladin"]
		character.heal =  100

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

// 
// ---------------------------------
function removeMiscEffect(name, i) {
	if (i > 0) { name = non_items[i].effect } else { i = non_items[i].i }
	if (typeof(effects[name]) != 'undefined') {
		if (document.getElementById(name) != null) { document.getElementById(name).remove(); }
		for (affix in effects[name]) {
			character[affix] -= effects[name][affix]
			effects[name][affix] = 0
		}
		calculateSkillAmounts()
		updateAll()
	}
}

// 
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
	calculateSkillAmounts()
	updateAll()
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
		updateMisc()
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
	updateMisc()
}

// Changes whether adding/removing skill points can affect character level
// ---------------------------------
function toggleCoupling(coupling) {
	if (coupling.checked) { settings.coupling = 1 } else { settings.coupling = 0 }
}

// 
// ---------------------------------
function toggleAutocast(autocast) {
	if (autocast.checked) { settings.autocast = 1 } else { settings.autocast = 0 }
}

// Updates all stats
// ---------------------------------
function updateAll() { updateStats(); updateMisc(); updateSecondaryStats(); }

// Updates stats shown by the default (original D2) stat page
// ---------------------------------
function updateStats() {
	var c = character;
	var strTotal = (c.strength + c.all_attributes + (c.level-1)*c.strength_per_level);
	var dexTotal = (c.dexterity + c.all_attributes + (c.level-1)*c.dexterity_per_level);
	var vitTotal = (c.vitality + c.all_attributes + (c.level-1)*c.vitality_per_level);
	var energyTotal = (c.energy + c.all_attributes + (c.level-1)*c.energy_per_level);
	var statBonus = 1;
	var weaponType = equipped.weapon.type;
	if (typeof(weaponType) != 'undefined') { 
		if (weaponType == "hammer") { statBonus = (strTotal*1.1/100) }
		else if (weaponType == "bow" || weaponType == "crossbow") { statBonus = (dexTotal/100) }
		else if (typeof(equipped.weapon.only) != 'undefined') { if (weaponType == "spear" || weaponType == "javelin" || equipped.weapon.only == "amazon") { statBonus = ((strTotal*0.8/100)+(dexTotal*0.5/100)) } }
		else if (weaponType == "dagger" || weaponType == "thrown" || weaponType == "claw" || weaponType == "javelin") { statBonus = ((strTotal*0.75/100)+(dexTotal*0.75/100)) }
		else  { statBonus = (strTotal/100) }
	}
	var weapon_skillup = 0;
	if (c.class_name == "Barbarian" || c.class_name == "Assassin") {
		if (weaponType == "sword" || weaponType == "axe" || weaponType == "dagger") { weapon_skillup = c.edged_skillup[0]; c.ar_skillup = c.edged_skillup[1]; c.cstrike_skillup = c.edged_skillup[2]; }
		else if (weaponType == "polearm" || weaponType == "spear") { weapon_skillup = c.pole_skillup[0]; c.ar_skillup = c.pole_skillup[1]; c.cstrike_skillup = c.pole_skillup[2]; }
		else if (weaponType == "mace" || weaponType == "scepter" || weaponType == "staff" || weaponType == "hammer" || weaponType == "club") { weapon_skillup = c.blunt_skillup[0]; c.ar_skillup = c.blunt_skillup[1]; c.cstrike_skillup = c.blunt_skillup[2]; }
		else if (weaponType == "thrown") { weapon_skillup = c.thrown_skillup[0]; c.ar_skillup = c.thrown_skillup[1]; c.pierce_skillup = c.thrown_skillup[2]; }
		else if (weaponType == "claw") { weapon_skillup = c.claw_skillup[0]; c.ar_skillup = c.claw_skillup[1]; c.cstrike_skillup = c.claw_skillup[2]; }
		else { weapon_skillup = 0; c.ar_skillup = 0; c.cstrike_skillup = 0; c.pierce_skillup = 0; }
	}
	var ar_addon = (dexTotal-c.starting_dexterity)*c.ar_per_dexterity;
	var defense_addon = (dexTotal-c.starting_dexterity)*c.defense_per_dexterity;	// it may be easier to use: dexTotal/4
	var life_addon = (vitTotal-c.starting_vitality)*c.life_per_vitality;
	var stamina_addon = (vitTotal-c.starting_vitality)*c.stamina_per_vitality;
	var mana_addon = (energyTotal-c.starting_energy)*c.mana_per_energy;
	
	var def_items = 0;
	for (type in equipped) { def_items += Math.floor(~~equipped[type]["base_defense"] + ~~equipped[type]["defense"]) }	// e_def left out here, calculated elsewhere
	var def = Math.floor((def_items + dexTotal/4) * (1 + (c.defense_bonus + c.defense_skillup)/100) + (c.level-1)*c.defense_per_level);
	
	//var _ar = Math.floor((c.ar + (c.level-1)*c.ar_per_level + ar_addon) * (1 + (c.ar_skillup + c.ar_bonus + c.level*c.ar_bonus_per_level)/100));			// OLD
	var ar = Math.floor((((dexTotal - 7) * 5 + c.ar + (c.level-1)*c.ar_per_level + c.ar_const)/2) * (1+(c.ar_skillup + c.ar_bonus + c.level*c.ar_bonus_per_level)/100) * (1+c.ar_shrine_bonus/100));
	
	var wisp = 1+Math.round(c.wisp/20,0)/10
	var phys_min = ((1+statBonus+(c.e_damage+c.damage_bonus+weapon_skillup)/100)*((c.level-1)*c.min_damage_per_level+c.base_damage_min))+c.damage_min;
	var phys_max = ((1+statBonus+(c.e_damage+c.damage_bonus+weapon_skillup)/100)*((c.level-1)*c.max_damage_per_level+c.base_damage_max))+c.damage_max;
	
	var basic_min = Math.floor(wisp*(phys_min + c.fDamage_min + c.cDamage_min + c.lDamage_min) + c.mDamage_min);
	var basic_max = Math.floor(wisp*(phys_max + c.fDamage_max + c.cDamage_max + c.lDamage_max) + c.mDamage_max + wisp*(c.pDamage_all+c.pDamage_max));
	if (basic_min > 0 || basic_max > 0) { document.getElementById("basic_attack").innerHTML = basic_min + "-" + basic_max }
	else { document.getElementById("basic_attack").innerHTML = "" }

	//testing
	//document.getElementById("skill1").innerHTML = wisp +" * "+ phys_max +" "+ c.fDamage_max +" "+ c.cDamage_max +" "+ c.lDamage_max +" "+ c.pDamage_max +" "+ c.pDamage_all +" "+ c.mDamage_max
	//document.getElementById("skill2").innerHTML = "( "+ 1 +" + "+ statBonus +" + "+ c.e_damage/100 +" + "+ c.damage_bonus/100 +" + "+ weapon_skillup/100 +" ) * ( "+ ((c.level-1)*c.max_damage_per_level) +" + "+ c.base_damage_max +" ) + "+ c.damage_max
	/*
	TODO: DPS calculations
/**/
	var block = c.block;
	if (c.class_name != "Paladin") { block -= 5; if (c.class_name == "Druid" || c.class_name == "Necromancer" || c.class_name == "Sorceress") { block -= 5 } }
	block = (block + c.block_skillup)*(dexTotal-15)/(c.level*2)
	if (c.running > 0) { block = block / 3 }
	if (c.block > 0) { document.getElementById("block").innerHTML = Math.floor(Math.min(75,c.block,block))+"%" }
	else { document.getElementById("block").innerHTML = "" }
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
	if (c.running > 0) { document.getElementById("defense").innerHTML = "" }
	else { document.getElementById("defense").innerHTML = def }
	document.getElementById("ar").innerHTML = ar
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
	document.getElementById("pres").innerHTML = (c.pRes + c.all_res - c.pRes_penalty + c.resistance_skillup) + " / " + Math.min(RES_CAP,(c.pRes_max_base + c.pRes_max))
	document.getElementById("mres").innerHTML = (c.mRes - c.mRes_penalty) + "%  +" + c.mDamage_reduced

	var bmin1 = (1+~~skill1.details.damage_bonus/100);
	var bmax1 = (1+~~skill1.details.damage_bonus/100);
	var dmin1 = (~~skill1.details.damage_min);
	var dmax1 = (~~skill1.details.damage_max);
	var fmin1 = (~~skill1.details.fDamage_min);
	var fmax1 = (~~skill1.details.fDamage_max);
	var cmin1 = (~~skill1.details.cDamage_min);
	var cmax1 = (~~skill1.details.cDamage_max);
	var lmin1 = (~~skill1.details.lDamage_min);
	var lmax1 = (~~skill1.details.lDamage_max);
	var pmin1 = (~~skill1.details.pDamage_min);
	var pmax1 = (~~skill1.details.pDamage_max+skill1.details.pDamage_all);
	var mmin1 = (~~skill1.details.mDamage_min);
	var mmax1 = (~~skill1.details.mDamage_max);
	var bmin2 = (1+~~skill2.details.damage_bonus/100);
	var bmax2 = (1+~~skill2.details.damage_bonus/100);
	var dmin2 = (~~skill1.details.damage_min);
	var dmax2 = (~~skill1.details.damage_max);
	var fmin2 = (~~skill2.details.fDamage_min);
	var fmax2 = (~~skill2.details.fDamage_max);
	var cmin2 = (~~skill2.details.cDamage_min);
	var cmax2 = (~~skill2.details.cDamage_max);
	var lmin2 = (~~skill2.details.lDamage_min);
	var lmax2 = (~~skill2.details.lDamage_max);
	var pmin2 = (~~skill2.details.pDamage_min);
	var pmax2 = (~~skill2.details.pDamage_max+skill2.details.pDamage_all);
	var mmin2 = (~~skill2.details.mDamage_min);
	var mmax2 = (~~skill2.details.mDamage_max);
	var basic_min1 = Math.floor(wisp*((phys_min+dmin1)*bmin1 + c.fDamage_min+fmin1 + c.cDamage_min+cmin1 + c.lDamage_min+lmin1) + c.mDamage_min+mmin1);
	var basic_max1 = Math.floor(wisp*((phys_max+dmax1)*bmax1 + c.fDamage_max+fmax1 + c.cDamage_max+cmax1 + c.lDamage_max+lmax1) + c.mDamage_max+mmax1 + wisp*(c.pDamage_all+c.pDamage_max+pmax1));
	var basic_min2 = Math.floor(wisp*((phys_min+dmin2)*bmin2 + c.fDamage_min+fmin2 + c.cDamage_min+cmin2 + c.lDamage_min+lmin2) + c.mDamage_min+mmin2);
	var basic_max2 = Math.floor(wisp*((phys_max+dmax2)*bmax2 + c.fDamage_max+fmax2 + c.cDamage_max+cmax2 + c.lDamage_max+lmax2) + c.mDamage_max+mmax2 + wisp*(c.pDamage_all+c.pDamage_max+pmax2));

	if (basic_min1 > 0 || basic_max1 > 0) { document.getElementById("skill1_info").innerHTML = ": " + basic_min1 + "-" + basic_max1 } else { document.getElementById("ar_skill1").innerHTML = ":" }
	if (basic_min2 > 0 || basic_max2 > 0) { document.getElementById("skill2_info").innerHTML = ": " + basic_min1 + "-" + basic_max2 } else { document.getElementById("ar_skill2").innerHTML = ":" }
	if (document.getElementById("dropdown_skill1").innerHTML == skill1.name) { document.getElementById("ar_skill1").innerHTML = "AR: " + ar * (1+~~skill1.details.ar_bonus/100) } else { document.getElementById("ar_skill1").innerHTML = "" }
	if (document.getElementById("dropdown_skill2").innerHTML == skill2.name) { document.getElementById("ar_skill2").innerHTML = "AR: " + ar * (1+~~skill2.details.ar_bonus/100) } else { document.getElementById("ar_skill2").innerHTML = "" }
//	if (typeof(skill1.details.ar_bonus) != 'undefined') { document.getElementById("ar_skill1").innerHTML = ar * (1+~~skill1.details.ar_bonus/100) } else { document.getElementById("ar_skill1").innerHTML = "" }
//	if (typeof(skill2.details.ar_bonus) != 'undefined') { document.getElementById("ar_skill2").innerHTML = ar * (1+~~skill2.details.ar_bonus/100) } else { document.getElementById("ar_skill2").innerHTML = "" }
//	document.getElementById("ar_skill1").innerHTML = ar * character.skillFocus(skill1)
//	document.getElementById("ar_skill2").innerHTML = ar * character.skillFocus(skill2)
}

// Updates stats shown on the secondary (Path of Diablo) stat page
// ---------------------------------
function updateSecondaryStats() {
	var c = character;
	document.getElementById("pdr").innerHTML = c.pdr + "%  +" + c.damage_reduced
	document.getElementById("fabsorb").innerHTML = c.fAbsorb + "%  +" + Math.floor(c.fAbsorb_flat + (c.level*c.fAbsorb_flat_per_level))
	document.getElementById("cabsorb").innerHTML = c.cAbsorb + "%  +" + Math.floor(c.cAbsorb_flat + (c.level*c.cAbsorb_flat_per_level))
	document.getElementById("labsorb").innerHTML = c.lAbsorb + "%  +" + Math.floor(c.lAbsorb_flat + (c.level*c.lAbsorb_flat_per_level))
	document.getElementById("mabsorb").innerHTML = c.mAbsorb + "%  +" + Math.floor(c.mAbsorb_flat + (c.level*c.mAbsorb_flat_per_level))	
	
	document.getElementById("cdr").innerHTML = c.cdr
	document.getElementById("fcr").innerHTML = c.fcr + Math.floor(c.level*c.fcr_per_level)
	document.getElementById("fbr").innerHTML = c.fbr
	document.getElementById("fhr").innerHTML = c.fhr
	
	// effective movespeed (includes penalties from armor & diminishing returns)
	//var movespeed = ((c.frw+c.frw_skillup)*150/(c.frw+c.frw_skillup+150))
	//movespeed = (100 + c.velocity_skillup + movespeed + c.velocity /* - holy freeze, cold, decrep... */)
	document.getElementById("frw").innerHTML = Math.floor(c.frw + c.frw_skillup) //+ " ­ (" + Math.floor(movespeed) + "%)"

//	var weapon_speed = Math.ceil(256 * (charWpnSpeed + 1) / Math.floor(256 * (100 + wpnIAS + Math.floor(charIAS /(1 + charIAS/120)))/100)) - 1
	document.getElementById("ias").innerHTML = c.ias
	
	document.getElementById("life_leech").innerHTML = c.life_leech
	document.getElementById("mana_leech").innerHTML = c.mana_leech
	document.getElementById("life_per_hit").innerHTML = c.life_per_hit + "m , " + c.life_per_ranged_hit + "r"
	document.getElementById("mana_per_hit").innerHTML = c.mana_per_hit + "m , " + c.mana_per_ranged_hit + "r"
	
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
	
	document.getElementById("life_per_kill").innerHTML = c.life_per_kill
	document.getElementById("mana_per_kill").innerHTML = c.mana_per_kill
	document.getElementById("life_replenish").innerHTML = c.life_replenish
	document.getElementById("mana_regen").innerHTML = c.mana_regen + c.mana_regen_skillup
	
	document.getElementById("damage_to_mana").innerHTML = c.damage_to_mana
	if (c.running > 0) { document.getElementById("missile_defense").innerHTML = "" }
	else { document.getElementById("missile_defense").innerHTML = c.missile_defense }
	
	document.getElementById("enemy_fres").innerHTML = c.enemy_fRes
	document.getElementById("enemy_cres").innerHTML = c.enemy_cRes
	document.getElementById("enemy_lres").innerHTML = c.enemy_lRes
	document.getElementById("enemy_pres").innerHTML = c.enemy_pRes
}

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
}

// Updates skill levels
// ---------------------------------
function calculateSkillAmounts() {
	for (s = 0; s < skills.length; s++) {
		skills[s].extra_levels = 0
		skills[s].extra_levels += character.all_skills
		var display = skills[s].level
		var temp = 0;
		if (character.class_name == "Amazon") {
			skills[s].extra_levels += character.skills_amazon
			if (s < 10) { skills[s].extra_levels += character.skills_javelins
				if (s == 8) { skills[s].force_levels = character.skill_Lightning_Strike }
				if (s == 9) { skills[s].force_levels = character.skill_Lightning_Fury }
				if (s == 4) { skills[s].force_levels = character.skill_Lightning_Bolt }
			} else if (s > 19) { skills[s].extra_levels += character.skills_bows
				if (s == 22) { skills[s].force_levels = character.oskill_Multiple_Shot }	
				if (s == 28) { skills[s].force_levels = character.skill_Immolation_Arrow }	
				if (s == 23 || s == 26 || s == 28) { skills[s].extra_levels += character.skills_fire_all }
				if (s == 20 || s == 24 || s == 29) { skills[s].extra_levels += character.skills_cold_all }
			} else { skills[s].extra_levels += character.skills_passives
				if (s == 10) { skills[s].force_levels = character.oskill_Inner_Sight }
				if (s == 11) { temp = 0; if (character.oskill_Lethal_Strike > 0) { temp = Math.min(3, character.oskill_Lethal_Strike) }
					skills[s].force_levels = character.skill_Lethal_Strike + temp }
				if (s == 12) { skills[s].force_levels = character.skill_Phase_Run }
				if (s == 13) { skills[s].force_levels = character.skill_Dodge }
				if (s == 18) { temp = 0; if (character.oskill_Valkyrie > 0) { temp = Math.min(3, character.oskill_Valkyrie) }
					skills[s].force_levels = temp }
			}
		} else if (character.class_name == "Assassin") {
			skills[s].extra_levels += character.skills_assassin
			if (s == 1 || s == 6 || s == 20 || s == 24 || s == 27) { skills[s].extra_levels += character.skills_fire_all }
			if (s < 9) { skills[s].extra_levels += character.skills_martial
				if (s == 1) { skills[s].force_levels = character.skill_Fists_of_Ember }
				if (s == 3 || s == 8) { skills[s].extra_levels += character.skills_cold_all }
			} else if (s > 19) { skills[s].extra_levels += character.skills_traps
				if (s == 24) { skills[s].force_levels = character.skill_Wake_of_Fire }
				if (s == 25) { skills[s].force_levels = character.skill_Blade_Fury }
				if (s == 29) { skills[s].force_levels = character.skill_Blade_Shield }
			} else { skills[s].extra_levels += character.skills_shadow 
				if (s == 15) { skills[s].force_levels = character.skill_Fade }
			}
		} else if (character.class_name == "Barbarian") {
			skills[s].extra_levels += character.skills_barbarian
			if (s < 10) { skills[s].extra_levels += character.skills_warcries
				if (s == 3) { skills[s].force_levels = character.skill_Shout }
				if (s == 6) { skills[s].force_levels = character.skill_Battle_Orders }
				if (s == 7) { skills[s].force_levels = character.skill_Grim_Ward }
				if (s == 8) { skills[s].force_levels = character.skill_War_Cry }
				if (s == 9) { skills[s].force_levels = character.skill_Battle_Command }
			} else if (s > 17) { skills[s].extra_levels += character.skills_combat_barbarian
				if (s == 18) { skills[s].force_levels = character.skill_Frenzy }
				if (s == 22) { skills[s].force_levels = character.skill_Leap }
				if (s == 24) { skills[s].force_levels = character.oskill_Bash }
			} else { skills[s].extra_levels += character.skills_masteries
				if (s == 10) { skills[s].force_levels = character.oskill_Edged_Weapon_Mastery }
				if (s == 15) { skills[s].force_levels = character.skill_Iron_Skin }
			}
		} else if (character.class_name == "Druid") {
			skills[s].extra_levels += character.skills_druid
			if (s == 0 || s == 1 || s == 2 || s == 4 || s == 7 || s == 9 || s == 17) { skills[s].extra_levels += character.skills_fire_all }
			if (s < 11) { skills[s].extra_levels += character.skills_elemental
				if (s == 2) { skills[s].force_levels = character.oskill_Flame_Dash }
				if (s == 3 || s == 10) { skills[s].extra_levels += character.skills_cold_all }
				if (s == 5) { skills[s].force_levels = character.skill_Cyclone_Armor }
				if (s == 9) { skills[s].force_levels = character.skill_Armageddon }
				if (s == 10) { skills[s].force_levels = character.skill_Hurricane }
			} else if (s > 20) { skills[s].extra_levels += character.skills_summoning_druid
				if (s == 21) { skills[s].force_levels = character.skill_Raven }
				if (s == 23) { skills[s].force_levels = character.skill_Heart_of_Wolverine }
				if (s == 24) { skills[s].force_levels = character.skill_Spirit_Wolf }
				if (s == 26) { skills[s].force_levels = character.skill_Oak_Sage }
				if (s == 27) { skills[s].force_levels = character.skill_Dire_Wolf }
				if (s == 30) { skills[s].force_levels = character.skill_Grizzly }
			} else { skills[s].extra_levels += character.skills_shapeshifting
				if (s == 11) { skills[s].force_levels = character.skill_Werewolf }	// oskill_Werewolf only obtainable by Barbarian?
				if (s == 12) { skills[s].force_levels = character.oskill_Lycanthropy }
				if (s == 13) { skills[s].force_levels = character.oskill_Werebear }
				if (s == 14) { skills[s].force_levels = character.skill_Feral_Rage }
				if (s == 15) { skills[s].force_levels = character.skill_Maul }
			}
		} else if (character.class_name == "Necromancer") {
			skills[s].extra_levels += character.skills_necromancer
			if (s < 11) { skills[s].extra_levels += character.skills_summoning_necromancer
				if (s == 0) { skills[s].force_levels = character.skill_Summon_Mastery }
				if (s == 4) { skills[s].force_levels = character.skill_Flesh_Offering }
				if (s == 9) { skills[s].extra_levels += character.skills_fire_all }
			} else if (s > 19) { skills[s].extra_levels += character.skills_curses
			} else { skills[s].extra_levels += character.skills_poisonBone
				if (s == 11) { skills[s].force_levels = character.skill_Deadly_Poison }
				if (s == 13) { skills[s].force_levels = character.skill_Bone_Armor }
				if (s == 15) { skills[s].force_levels = character.oskill_Desecrate + character.skill_Desecrate }
				if (s == 16) { skills[s].force_levels = character.skill_Bone_Spear }
			}
		} else if (character.class_name == "Paladin") {
			skills[s].extra_levels += character.skills_paladin
			if (s < 10) { skills[s].extra_levels += character.skills_defensive
				if (s == 6) { skills[s].force_levels = character.skill_Vigor }
			} else if (s > 19) { skills[s].extra_levels += character.skills_combat_paladin
				if (s == 23) { skills[s].force_levels = character.oskill_Zeal }
				if (s == 25) { skills[s].force_levels = character.oskill_Vengeance }
				if (s == 29) { skills[s].force_levels = character.skill_Fist_of_the_Heavens }
			} else { skills[s].extra_levels += character.skills_offensive
				if (s == 11) { skills[s].extra_levels += character.skills_fire_all }
				if (s == 15) { skills[s].extra_levels += character.skills_cold_all }
				if (s == 16) { skills[s].force_levels = character.skill_Holy_Shock }
			}
		} else if (character.class_name == "Sorceress") {
			skills[s].extra_levels += character.skills_sorceress
			if (s < 11) { skills[s].extra_levels += character.skills_cold
				skills[s].extra_levels += character.skills_cold_all
				if (s == 1) { skills[s].force_levels = character.oskill_Frigerate }
				if (s == 4) { skills[s].force_levels = character.oskill_Shiver_Armor }
				if (s == 5) { skills[s].force_levels = character.skill_Glacial_Spike }
				if (s == 9) { skills[s].force_levels = character.skill_Frozen_Orb }
				if (s == 10) { skills[s].force_levels = character.skill_Cold_Mastery + character.oskill_Cold_Mastery}
			} else if (s > 21) { skills[s].extra_levels += character.skills_fire
				skills[s].extra_levels += character.skills_fire_all
				if (s == 22) { skills[s].force_levels = character.skill_Fire_Bolt }
				if (s == 23) { skills[s].force_levels = character.skill_Warmth }
				if (s == 24) { skills[s].force_levels = character.skill_Blaze }
				if (s == 26) { temp = 0; if (character.oskill_Fire_Ball > 0) { temp = Math.min(3, character.oskill_Fire_Ball) }
					skills[s].force_levels = /*character.skill_Fire_Ball*/ + temp }
				if (s == 27) { temp = 0; if (character.oskill_Fire_Wall > 0) { temp = Math.min(3, character.oskill_Fire_Wall) }
					skills[s].force_levels = /*character.skill_Fire_Wall*/ + temp }
				if (s == 29) { temp = 0; if (character.oskill_Meteor > 0) { temp = Math.min(3, character.oskill_Meteor) }
					skills[s].force_levels = /*character.skill_Meteor*/ + temp }
				if (s == 30) { temp = 0; if (character.oskill_Fire_Mastery > 0) { temp = Math.min(3, character.oskill_Fire_Mastery) }
					skills[s].force_levels = character.skill_Fire_Mastery + temp }
				if (s == 31) { skills[s].force_levels = character.skill_Hydra }
			} else { skills[s].extra_levels += character.skills_lightning 
				if (s == 12) { skills[s].force_levels = character.skill_Static_Field }
				if (s == 15) { skills[s].force_levels = character.skill_Lightning_Surge }
				if (s == 19) { skills[s].force_levels = character.skill_Energy_Shield }
				if (s == 20) { skills[s].force_levels = character.skill_Lightning_Mastery }
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
//	for (let os = 0; os < oskills.length; os++) {
//		if (oskills[os].level > 0 || oskills[os].force_levels > 0) { skillChoices += '<option class="gray">'+oskills[os].name+'</option>' }
//	}
	for (let s = 0; s < skills.length; s++) {
		if (skills[s].level > 0 || skills[s].force_levels > 0) { skillChoices += '<option class="gray">'+skills[s].name+'</option>' }
	}

	// document.getElementById("dropdown_item").onchange = function() {var selected = document.getElementById("dropdown_item").selectedIndex};
/*
	if (skillChoices != "") {
		document.getElementById("dropdown_skill1").innerHTML = '<option class="gray" disabled> ­ ­ ­ ­ Skill 1</option>' + skillChoices;
		lastSelected = document.getElementById("dropdown_skill1").selectedIndex;
	}
	else { document.getElementById("dropdown_skill1").innerHTML = "<option class='gray' disabled selected> ­ ­ ­ ­ Skill 1</option>" + skillChoices }
	if (skillChoices != "") {
		document.getElementById("dropdown_skill2").innerHTML = '<option class="gray" disabled> ­ ­ ­ ­ Skill 2</option>' + skillChoices;
		lastSelected = document.getElementById("dropdown_skill2").selectedIndex;
	}
	else { document.getElementById("dropdown_skill2").innerHTML = "<option class='gray' disabled selected> ­ ­ ­ ­ Skill 2</option>" + skillChoices }
*/
}

// Updates passive skills
// className: the character class
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

// does updateEffect() for each skill
// ---------------------------------
function updateEffectList() { for (let s = 0; s < skills.length; s++) { updateEffect(skills[s]); } }

//function checkEffectSkill(skill) { var valid = 0; if (typeof(skill.effect) != 'undefined') { if (skill.effect > 3) { valid = 1 } } return valid }
//function checkEffectItem(type) { var valid = 0; if (typeof(skill.effect) != 'undefined') { if (skill.effect > 3) { valid = 1 } } return valid }

// 
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
				var eId = document.createAttribute("id");	eId.value = eff;	newEffect.setAttributeNode(eId);
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
				// if () ... calculate passive effects here instead of passing them forward (if they are shown as effects)
				
				if (settings.autocast == 1) { enableEffect(skill.i) }
			}
		} else {
			if (effectElem != null) {	// && effects[eff].enabled == 1
				effects[eff].enabled = 0
				effectElem.remove();
			}
			if (typeof(effects[eff]) != 'undefined') { if (effects[eff]["enabled"] == 1) {
				disableEffect(skill.i)
			} }
		}
	} }
}

// 
// ---------------------------------
function hoverEffect(s) {}

// 
// ---------------------------------
function effectOut(s) {}

// 
// ---------------------------------
function disableEffect(s) {
	var eff = "e"+skills[s].key;
	if (typeof(effects[eff]) != 'undefined') {
	if (effects[eff]["enabled"] == 1) {
		effects[eff]["enabled"] = 0
		document.getElementById(eff).src = "./images/skills/"+character.class_name.toLowerCase()+"/dark/"+skills[s].name+" dark.png";
		removeEffect(effects[eff])
	//	if (document.getElementById(eff) != null) { document.getElementById(eff).remove(); }
		calculateSkillAmounts()
		updateAll()
	}
	}
}

// 
// ---------------------------------
function enableEffect(s) {
	var eff = "e"+skills[s].key;
	if (typeof(effects[eff]) != 'undefined') {
	if (effects[eff]["enabled"] == 0) {
		effects[eff]["enabled"] = 1
		document.getElementById(eff).src = "./images/skills/"+character.class_name.toLowerCase()+"/"+skills[s].name+".png";	
		addEffect(effects[eff])
		calculateSkillAmounts()
		updateAll()
	}
	}
}

// 
// effect: the effects[] element being removed
// ---------------------------------
function removeEffect(effect) {
	for (affix in effect) {
		character[affix] -= effect[affix]
		if (affix != "enabled" && affix != "skill") { effect[affix] = 0 }
	}
}

// 
// effect: the effects[] element being added
// ---------------------------------
function addEffect(effect) {
	var selfbuff = 1;
	buffData = character.getBuffData(effect, selfbuff)
	for (affix in buffData) {
		character[affix] += buffData[affix]
		if (effect[affix] != "enabled" && affix != "skill") { effect[affix] = buffData[affix] }
	}
}

// 
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


// Get highest mercenary aura level
// hlvl: level of mercenary (maximum is clvl - 1)
// ---------------------------------
function getMercenaryAuraLevel(hlvl) {
	result = 0;
	if (hlvl > 9 && hlvl < 31) { result = (3+((hlvl-9)*10/32)) }
	else if (hlvl > 30 && hlvl < 55) { result = (10+((hlvl-31)*10/32)) }
	else if (hlvl > 54) { result = 18 }
	return result;
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

// Raises the selected stat
// stat: button identifier (string) for corresponding stat
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
		updateStats()
		updateMisc()
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
	updateMisc()
}

// Raises the skill level
// skill: the skill to modify
// ---------------------------------
function skillUp(event, skill) {
    if (event.altKey) {
	focusSkill(skill, 1)
    } else {
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
    }
//    checkSkill(skill)
//    refreshSkills()
    updateSkillList(skill, 1)
}

// Lowers the skill level
// skill: the skill to modify
// ---------------------------------
function skillDown(event, skill) {
    if (event.altKey) {
	focusSkill(skill, 2)
    } else {
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
//	if (skill.level == 0 && skill.force_levels == 0) {	//&& document.getElementById("skill3").innerHTML == skill.name
//		document.getElementById("skill1_info").innerHTML = character.getFocusData(skill)
//		document.getElementById("skill2_info").innerHTML = character.getFocusData(skill)
//	}
    }
//    checkSkill(skill)
//    refreshSkills()
    updateSkillList(skill, 2)
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
		if (skill.level == 0 && skill.force_levels == 0) {
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
	updateAll()
	showBaseLevels(skill)
}

// Shows base levels for a skill
// skill: the skill to use
// called by: skillHover()
// ---------------------------------
function showBaseLevels(skill) {
	if ((skill.extra_levels > 0 && skill.level > 0) || skill.force_levels > 0) {
		document.getElementById("p"+skill.key).style.color = "#999999";
		document.getElementById("p"+skill.key).innerHTML = skill.level;
	}
}

// 
// ---------------------------------
function focusSkill(skill, num) {
	var choices = "";
	if (num == 1) {
		for (let k = 0; k < skillList1.length; k++) {
			var s = k;
			skillList1[k] = "<option>" + skills[s].name + "</option>"
			if (skills[s].name == skill.name) { skillList1[k] = "<option selected>" + skills[s].name + "</option>" }
			choices += skillList1[k];
			skill1.name = skills[s].name;
			skill1.details = character.getFocusData(skill);
		}
		document.getElementById("dropdown_skill1").innerHTML = choices
	}
	if (num == 2) {
		for (let k = 0; k < skillList2.length; k++) {
			var s = k;
			skillList2[k] = "<option>" + skills[s].name + "</option>"
			if (skills[s].name == skill.name) { skillList2[k] = "<option selected>" + skills[s].name + "</option>" }
			choices += skillList2[k];
			skill2.name = skills[s].name;
			skill2.details = character.getFocusData(skill);
		}
		document.getElementById("dropdown_skill1").innerHTML = choices
	}
	updateStats()
	
//	for (let i = 0; i < skillList.length; i++) {
//		if (num == 1) { skill1 = skills[s].name }
//		if (num == 2) { skill2 = skills[s].name }
//	}
/*	if (skill.level > 0 || skill.force_levels > 0) {
		if (document.getElementById("skill"+num+"_info").innerHTML == character.getFocusData(skill)) {
			if (num == 1) { skill1 = skill; document.getElementById("dropdown_skill1").innerHTML = "<option class='gray' disabled selected>" + skill.name + "</option>" }
			if (num == 2) { skill2 = skill; document.getElementById("dropdown_skill2").innerHTML = "<option class='gray' disabled selected>" + skill.name + "</option>" }
		}
	} else {
		
	}
*/
}

// 
// ---------------------------------
function updateSkillList(skill, num) {
	var choices = "";
	var k = 0;
	for (let s = 0; s < skills.length; s++) {
		if (skills[s].bindable > 0 && (skills[s].level > 0 || skills[s].force_levels > 0)) {
			skillList1[k] = "<option>" + skills[s].name + "</option>"
			skillList2[k] = "<option>" + skills[s].name + "</option>"
			if (num == 1 && skill.name == skills[s].name) {
				skill1.name = skills[s].name
				skillList1[k] = "<option selected>" + skills[s].name + "</option>"
			}
			if (num == 2 && skill.name == skills[s].name) {
				skill2.name = skills[s].name
				skillList2[k] = "<option selected>" + skills[s].name + "</option>"
			}
			if (num == 1) { choices += skillList1[k] }
			if (num == 2) { choices += skillList2[k] }
			k++
		}
	}
	
	if (num == 1) {
		document.getElementById("dropdown_skill1").innerHTML = "<option class='gray' disabled>" + " ­ ­ ­ ­ Skill 1" + "</option>" + choices
		if (skill1.name == "") {skill1.name = skill.name}
//		var d = skill1.details;
//		document.getElementById("ar_skill1").innerHTML = document.getElementById("ar").innerHTML * d.ar_bonus
	}
	if (num == 2) {
		document.getElementById("dropdown_skill2").innerHTML = "<option class='gray' disabled>" + " ­ ­ ­ ­ Skill 2" + "</option>" + choices
		if (skill2.name == "") {skill2.name = skill.name}
//		var d = skill2.details;
//		document.getElementById("ar_skill2").innerHTML = document.getElementById("ar").innerHTML * d.ar_bonus
	}
	
	// TODO: only unselect selected skill when it's zero IF it was already selected
	
	if (skill.level == 0 && skill.force_levels == 0 && skill.name == skill1.name) {
		document.getElementById("dropdown_skill1").innerHTML = "<option class='gray' selected disabled>" + " ­ ­ ­ ­ Skill 1" + "</option>" + choices
	}
	if (skill.level == 0 && skill.force_levels == 0 && skill.name == skill2.name) {
		document.getElementById("dropdown_skill2").innerHTML = "<option class='gray' selected disabled>" + " ­ ­ ­ ­ Skill 2" + "</option>" + choices
	}

	// TODO: don't refresh if a skill is selected?
//	if (skill1 != "") { document.getElementById("dropdown_skill1").innerHTML = "<option class='gray' disabled>" + skill1.name + "</option>" + choices }
//	else { document.getElementById("dropdown_skill1").innerHTML = "<option class='gray' disabled> ­ ­ ­ ­ Skill 1</option>" + choices }
//	if (skill2 != "") { document.getElementById("dropdown_skill2").innerHTML = "<option class='gray' disabled>" + skill2.name + "</option>" + choices }
//	else { document.getElementById("dropdown_skill2").innerHTML = "<option class='gray' disabled> ­ ­ ­ ­ Skill 2</option>" + choices }
	updateStats()

}

// 
// ---------------------------------
function checkSkill(skill) {
	var display1 = "";
	var display2 = "";
/*	var num = 1;
	lastSelected = document.getElementById("dropdown_skill"+num).selectedIndex
	
	if (typeof(active[skill.name]) != 'undefined' || active[skill.name] == "") {
		if (skill.level == 0 && skill.force_levels == 0) {
			active[skill.name] = ""
		}
	} else {
		if (skill.level > 0 || skill.force_levels > 0) {
			active[skill.name] = skill.level
			focusSkill(skill, num)
		}
	}
	document.getElementById("skill1_info").innerHTML = character.getFocusData(skill)
	document.getElementById("skill2_info").innerHTML = character.getFocusData(skill)
*/
/*
	var sum1 = "";
	var sum2 = "";
	var affixes1 = character.getFocusData(skill)
	var affixes2 = character.getFocusData(skill)
	for (affix in affixes1) {
		sum1 += affixes1[affix] + " "
	}
	for (affix in affixes2) {
		sum2 += affixes2[affix] + " "
	}
	var skill1 = document.getElementById("dropdown_skill1").innerHTML;
	var skill2 = document.getElementById("dropdown_skill2").innerHTML;
	document.getElementById("skill1_info").innerHTML = sum1
	document.getElementById("skill2_info").innerHTML = sum2
	
	
	document.getElementById("f4").innerHTML = sum1
	document.getElementById("c4").innerHTML = sum2
	document.getElementById("l4").innerHTML = skill1
	document.getElementById("p4").innerHTML = skill2
*/

// TODO: Replace with skill damage calculations
// 	1. Create functions to get this data, so it can be called from class javascript files
//	2. Modify getFocusData() to use this data when calculating the actual damage
/*
	var c = character;
	var strTotal = (c.strength + c.all_attributes + (c.level-1)*c.strength_per_level);
	var dexTotal = (c.dexterity + c.all_attributes + (c.level-1)*c.dexterity_per_level);
	var vitTotal = (c.vitality + c.all_attributes + (c.level-1)*c.vitality_per_level);
	var energyTotal = (c.energy + c.all_attributes + (c.level-1)*c.energy_per_level);
	var statBonus = 1;
	var weaponType = equipped.weapon.type;
	if (typeof(weaponType) != 'undefined') { 
		if (weaponType == "hammer") { statBonus = (strTotal*1.1/100) }
		else if (weaponType == "bow" || weaponType == "crossbow") { statBonus = (dexTotal/100) }
		else if (typeof(equipped.weapon.only) != 'undefined') { if (weaponType == "spear" || weaponType == "javelin" || equipped.weapon.only == "amazon") { statBonus = ((strTotal*0.8/100)+(dexTotal*0.5/100)) } }
		else if (weaponType == "dagger" || weaponType == "thrown" || weaponType == "claw" || weaponType == "javelin") { statBonus = ((strTotal*0.75/100)+(dexTotal*0.75/100)) }
		else  { statBonus = (strTotal/100) }
	}
	var weapon_skillup = 0;
	if (c.class_name == "Barbarian" || c.class_name == "Assassin") {
		if (weaponType == "sword" || weaponType == "axe" || weaponType == "dagger") { weapon_skillup = c.edged_skillup[0]; c.ar_skillup = c.edged_skillup[1]; c.cstrike_skillup = c.edged_skillup[2]; }
		else if (weaponType == "polearm" || weaponType == "spear") { weapon_skillup = c.pole_skillup[0]; c.ar_skillup = c.pole_skillup[1]; c.cstrike_skillup = c.pole_skillup[2]; }
		else if (weaponType == "mace" || weaponType == "scepter" || weaponType == "staff" || weaponType == "hammer" || weaponType == "club") { weapon_skillup = c.blunt_skillup[0]; c.ar_skillup = c.blunt_skillup[1]; c.cstrike_skillup = c.blunt_skillup[2]; }
		else if (weaponType == "thrown") { weapon_skillup = c.thrown_skillup[0]; c.ar_skillup = c.thrown_skillup[1]; c.pierce_skillup = c.thrown_skillup[2]; }
		else if (weaponType == "claw") { weapon_skillup = c.claw_skillup[0]; c.ar_skillup = c.claw_skillup[1]; c.cstrike_skillup = c.claw_skillup[2]; }
		else { weapon_skillup = 0; c.ar_skillup = 0; c.cstrike_skillup = 0; c.pierce_skillup = 0; }
	}
	var ar_addon = (dexTotal-c.starting_dexterity)*c.ar_per_dexterity;
	var defense_addon = (dexTotal-c.starting_dexterity)*c.defense_per_dexterity;
	var life_addon = (vitTotal-c.starting_vitality)*c.life_per_vitality;
	var stamina_addon = (vitTotal-c.starting_vitality)*c.stamina_per_vitality;
	var mana_addon = (energyTotal-c.starting_energy)*c.mana_per_energy;
	
	var def_items = 0;
	for (type in equipped) { def_items += Math.floor(~~equipped[type]["base_defense"] + ~~equipped[type]["defense"]) }
	var def = Math.floor((def_items + dexTotal/4) * (1 + (c.defense_bonus + c.defense_skillup)/100) + (c.level-1)*c.defense_per_level);
	
	var ar = Math.floor((((dexTotal - 7) * 5 + c.ar + (c.level-1)*c.ar_per_level + c.ar_const)/2) * (1+(c.ar_skillup + c.ar_bonus + c.level*c.ar_bonus_per_level)/100) * (1+c.ar_shrine_bonus/100));
	
	var wisp = 1+Math.round(c.wisp/20,0)/10
	var phys_min = ((1+statBonus+(c.e_damage+c.damage_bonus+weapon_skillup)/100)*((c.level-1)*c.min_damage_per_level+c.base_damage_min))+c.damage_min;
	var phys_max = ((1+statBonus+(c.e_damage+c.damage_bonus+weapon_skillup)/100)*((c.level-1)*c.max_damage_per_level+c.base_damage_max))+c.damage_max;
	
	var basic_min = Math.floor(wisp*(phys_min + c.fDamage_min + c.cDamage_min + c.lDamage_min) + c.mDamage_min);
	var basic_max = Math.floor(wisp*(phys_max + c.fDamage_max + c.cDamage_max + c.lDamage_max) + c.mDamage_max + wisp*(c.pDamage_all+c.pDamage_max));
	if (basic_min > 0 || basic_max > 0) {
		document.getElementById("basic_attack").innerHTML = basic_min + "-" + basic_max //}
	//	else { document.getElementById("basic_attack").innerHTML = "" }
		document.getElementById("skill1_info").innerHTML = ": " + character.getFocusData(skill)
		document.getElementById("skill2_info").innerHTML = ": " + character.getFocusData(skill)
	}
*/
}

// Refreshes the list of skills available from the dropdown menus
// Called by SkillUp() and SkillDown()
// ---------------------------------
function refreshSkills() {
/*	var choices = "";
	for (s = 0; s < skills.length; s++) {
		if (skills[s].level > 0 || skills[s].force_levels > 0) {
			choices += "<option>" + skills[s].name + "</option>" 
		}
	}
	// TODO: don't refresh if a skill is selected?
	if (skill1 != "") { document.getElementById("dropdown_skill1").innerHTML = "<option class='gray' disabled selected>" + skill1.name + "</option>" + choices }
	else { document.getElementById("dropdown_skill1").innerHTML = "<option class='gray' disabled selected> ­ ­ ­ ­ Skill 1</option>" + choices }
	if (skill2 != "") { document.getElementById("dropdown_skill2").innerHTML = "<option class='gray' disabled selected>" + skill2.name + "</option>" + choices }
	else { document.getElementById("dropdown_skill2").innerHTML = "<option class='gray' disabled selected> ­ ­ ­ ­ Skill 2</option>" + choices }
*/
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
	if (equipped["charms"][val].type != "small" && equipped["charms"][val].type != "large" && equipped["charms"][val].type != "grand") { style = "display: block; color: #ff8080;" }
	document.getElementById("item_tooltip").innerHTML = display
	document.getElementById("item_tooltip").style = style
	lastCharm = name
	
	// TODO better system:
	
	// start with cell divs at high z-index
	// on mouseover, use cell info...
	// if cell is not empty
	//	if cell is not main-cell of occupying item			// main-cell: top cell when traversing inv[].in
	//		lower z-index of cell  (pushes the item above, so it can be grabbed while all its other individual cells are surfaced)
	// then, 
	// on mouseout: raise z-level of cell 
	
}

// Duplicates the selected charm
// id: unique string identifier for charm
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
			inv[s].y = 1;
			document.getElementById(inv[s].id).style = "position: absolute; width: 29px; height: 29px; z-index: 3;";
		}
	}
	inv[cell].empty = 0
	inv[0].in[cell] = inv[0].onpickup
	if (inv[0].pickup_y > 1) { inv[cell+10].empty = 0; inv[0].in[cell+10] = inv[0].onpickup; 
		inv[cell].y = 2;
	}
	if (inv[0].pickup_y > 2) { inv[cell+20].empty = 0; inv[0].in[cell+20] = inv[0].onpickup; 
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
	document.getElementById("item_tooltip").innerHTML = ""
	
/* TODO: Make ctrl+click remove more copies of the removed charm
	var dup = 0;
	if (ev.ctrlKey) { dup = 10 }
	if (dup > 0) {
		for (let d = 0; d < dup; d++) {
			addCharm(lastCharm)
		}
	}
*/
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
