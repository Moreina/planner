

character = {class_name:"", strength:0, dexterity:0, vitality:0, energy:0, level:1, skillpoints:0, statpoints:0, life:0, mana:0, defense:0, ar:0, stamina:0, levelup_life:0, levelup_stamina:0, levelup_mana:0, gain_dexterity:[0,0], gain_vitality:[0,0], gain_energy:0, starting_strength:0, starting_dexterity:0, starting_vitality:0, starting_energy:0, quests_completed:-1, difficulty:3, fRes_max:75, cRes_max:75, lRes_max:75, pRes_max:75, mRes_max:75, fRes:0, cRes:0, lRes:0, pRes:0, mRes:0, fRes_penalty:100, cRes_penalty:100, lRes_penalty:100, pRes_penalty:100, mRes_penalty:100,
				mf:0, gf:0, cdr:0, fcr:0, fbr:0, fhr:0, frw:0, ias:0, pierce:0, cblow:0, dstrike:0, cstrike:0, owounds:0, fDamage:0, cDamage:0, lDamage:0, pDamage:0, fPierce:0, cPierce:0, lPierce:0, pPierce:0, life_leech:0, mana_leech:0, life_per_hit:0, mana_per_hit:0, pdr:0, fAbsorb:0, cAbsorb:0, lAbsorb:0, pAbsorb:0, mAbsorb:0, strength_added:0, dexterity_added:0, vitality_added:0, energy_added:0, tab1:"", tab2:"", tab3:"", stamina_bonus:0, speed_bonus:0, defense_bonus:0, resistance_bonus:0, cstrike_bonus:0, penetrate_bonus:0, pierce_bonus:0,
				all_skills:0, all_attributes:0, life_per_level:0, mana_per_level:0, life_regen:0, max_mana:0, all_res:0, defense_per_level:0, ibc:0, mana_regen:0, itd:0, knockback:0, missile_defense:0, mana_per_kill:0, damage_min:0, damage_max:0, thorns:0, slower_stam_drain:0, dstrike_per_level:0, damage_to_mana:0, heal_stam:0, light_radius:0, mDamage_reduced:0, thorns_per_level:0,
				skills_javelins:0, skills_passives:0, skills_bows:0, skills_martial:0, skills_shadow:0, skills_traps:0, skills_warcries:0, skills_masteries:0, skills_combat_barbarian:0, skills_elemental:0, skills_shapeshifting:0, skills_summoning_druid:0, skills_summoning_necromancer:0, skills_poisonBone:0, skills_curses:0, skills_offensive:0, skills_defensive:0, skills_combat_paladin:0, skills_cold:0, skills_lightning:0, skills_fire:0,
				fAbsorb_flat:0, cAbsorb_flat:0, lAbsorb_flat:0, mAbsorb_flat:0, pdr_flat:0, slow_target:0, life_per_kill:0, damage_vs_demons:0, damage_vs_undead:0, strength_per_level:0, mf_per_level:0, life_per_ranged_hit:0, mana_per_ranged_hit:0,
				skill_lightning_fury:0, skill_lightning_strike:0, skill_glacial_spike:0, fcr_per_level:0,
	updateSkill : function(skill, level, elem) {
	var result = skill.data.values[elem][level]
	return result
	}
};
gear = {req_level:0, req_strength:0, req_dexterity:0}
var MAX = 20;

//
// ---------------------------------
function startup(choice) {
	clearIconSources()
	resetSkills()
	resetEquipment()
	updateSecondaryStats()
	changeDifficulty(3)
	document.getElementById("quests").checked = 0
	character.quests_completed = -1
	character.fRes = 0
	character.cRes = 0
	character.lRes = 0
	character.pRes = 0
	document.getElementById("difficulty3").checked = 1
	character.fRes_penalty = 100
	character.cRes_penalty = 100
	character.lRes_penalty = 100
	character.pRes_penalty = 100
	character.strength_added = 0
	character.dexterity_added = 0
	character.vitality_added = 0
	character.energy_added = 0
	
	skills = skills_all[choice]
	character_setup = character_all[choice]
	for (stat in character_setup) {
		character[stat] = character_setup[stat]
	}
	setIconSources(choice)
	updateSkillIcons()
	character.skillpoints = 0
	character.statpoints = 0
	character.level = 1
	character.quests_completed = -1
	updateStats()
	document.getElementById("skill_tree").src = character_setup.skill_layout
	init()
}

//
// ---------------------------------
function reset(name) { startup(name.toLowerCase()) }

// init - initiates mouse functions
// ---------------------------------
function init() {

	var stats = ["btn_strength", "btn_dexterity", "btn_vitality", "btn_energy"];
	document.getElementById("skillmap").onmouseout = function() {mouseOut()};
	for (let s = 0, len = skills.length; s < len; s++) {
		document.getElementById("s"+skills[s].key).onmouseover = function() {mouseOver(skills[s])};
		document.getElementById("s"+skills[s].key).onclick = function() {click(event, skills[s])};
		document.getElementById("s"+skills[s].key).oncontextmenu = function() {clickRight(event, skills[s])};
	}
	for (let t = 0; t < stats.length; t++) {
		document.getElementById(stats[t]).onclick = function() {addStat(event, stats[t])};
		document.getElementById(stats[t]).oncontextmenu = function() {removeStat(event, stats[t])};
	}
	document.getElementById("dropdown_item").onchange = function() {selectItem()};	// keep
	document.getElementById("quests").onchange = function() {toggleQuests()};
}

// keep
// ---------------------------------
function selectItem() {
	var selected  = document.getElementById("dropdown_item").selectedIndex
}

//
// ---------------------------------
function levelup(input) {
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
	updateStats()
	updateSecondaryStats()
}

//
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

//
// ---------------------------------
function setIconSources(className) {
	var prefix = "./images/skills/"+className+"/";
	for (let s = 0, len = skills.length; s < len; s++) {
			var iconId = "i"+skills[s].key;
			document.getElementById(iconId).src = prefix+skills[s].name+".png"
		}
}

//
// ---------------------------------
function clearIconSources() {
	for (let s = 0; s < skills.length; s++) {
		var iconId = "i"+skills[s].key
		document.getElementById(iconId).src = "./images/skills/none.png"
		document.getElementById(iconId).style.visibility = "hidden"
	}
}

//
// ---------------------------------
function loadItems(type, dropdown) {
	if (type.length == 0) document.getElementById(dropdown).innerHTML = "<option></option>"
	else {
		var choices = "";
		for (item in equipment[type]) {
			if (item > 0) {
				choices += "<option>" + equipment[type][item].name + "</option>"
			} else {
				choices += "<option selected>" + "­ ­ ­ ­ " + equipment[type][item].name + "</option>"
			}
		}
		document.getElementById(dropdown).innerHTML = choices
	}
}

//
// ---------------------------------
function equip(type, val) {
	if (equipped[type].name != val) {
		if (equipped[type].name != "none") {
			for (old_affix in equipped[type]) {
				if (old_affix == "all_attributes" || old_affix == "strength" || old_affix == "dexterity" || old_affix == "vitality" || old_affix == "energy") { adjustAttributes(old_affix, equipped[type][old_affix], -1) }
				character[old_affix] -= equipped[type][old_affix]
				equipped[type][old_affix] = unequipped[old_affix]
			}
		}
		for (item in equipment[type]) {
			if (equipment[type][item].name == val) {
				for (affix in equipment[type][item]) {
					if (affix == "all_attributes" || affix == "strength" || affix == "dexterity" || affix == "vitality" || affix == "energy") { adjustAttributes(affix, equipment[type][item][affix], 1) }
					character[affix] += equipment[type][item][affix]
					equipped[type][affix] = equipment[type][item][affix]
				}
			}
		}
		updateSkillAmounts()
		updateStats()
		updateSecondaryStats()
		checkRequirements()
	}
}

var charm_img = {prefix:"./images/items/", small:["charm1_paw.png","charm1_disc.png","charm1_coin.png"], large:["charm2_page.png","charm2_horn.png","charm2_lantern.png"], grand:["charm3_lace.png","charm3_eye.png","charm3_monster.png"]}

//
// ---------------------------------
function addCharm(val) {
	
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
	if (type == "large") { charmHeight = "59"; charmImage = charm_img.prefix+charm_img.large[r]; charm_y = 2; }
	if (type == "small") { charmHeight = "29"; charmImage = charm_img.prefix+charm_img.small[r]; charm_y = 1; }
	
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
		var charmHTML = '<img id="' + val + '" src="' + charmImage + '" draggable="true" ondragstart="drag(event)" width="' + charmWidth + '" height="' + charmHeight + '" oncontextmenu="trash(event)" onmouseover="itemHover(event, this.value)" onmouseout="itemOut()">';
		var insertion = "";
		var space_found = 0;
		var empty = 1;
		var i = 0;
		for (let x = 1; x <= 10; x++) {
			for (let y = 0; y < 4; y++) {
				i = y*10 + x
				empty = 1
				if (space_found == 0 && charm_y + inv[i].y <= 5) {
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
						if (affix == "all_attributes" || affix == "strength" || affix == "dexterity" || affix == "vitality" || affix == "energy") { adjustAttributes(affix, equipment[ch][item][affix], 1) }
						character[affix] += equipment[ch][item][affix]
						equipped[ch][val][affix] = equipment[ch][item][affix]
					}
				}
			}
			updateSkillAmounts()
			updateStats()
			updateSecondaryStats()
		}
	}
	document.getElementById("dropdown_charms").selectedIndex = 0
}


//
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

//
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

//
// ---------------------------------
function resetSkills() {
	for (s = 0, len = skills.length; s < len; s++) {
		skills[s].level = 0
		document.getElementById("p"+skills[s].key).innerHTML = ""
		document.getElementById("s"+skills[s].key).onmouseover = function() {mouseOut};
		document.getElementById("s"+skills[s].key).onclick = function() {mouseOut};
		document.getElementById("s"+skills[s].key).oncontextmenu = function() {mouseOut};
	}
}

//
// ---------------------------------
function loadEquipment() {

var equipmentTypes = ["helm", "armor", "gloves", "boots", "belt", "amulet", "ring1", "ring2", "weapon", "offhand", "charms"];
	var equipmentDropdowns = ["dropdown_helm", "dropdown_armor", "dropdown_gloves", "dropdown_boots", "dropdown_belt", "dropdown_amulet", "dropdown_ring1", "dropdown_ring2", "dropdown_weapon", "dropdown_offhand", "dropdown_charms"]
	for (let i = 0; i < equipmentTypes.length; i++) {
		loadItems(equipmentTypes[i], equipmentDropdowns[i])
	}
}

//
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

//
// ---------------------------------
function toggleQuests() {
	var quests = document.getElementById("quests")
	var okay = true
	if (quests.checked == false) {
		if (character.skillpoints < 12 || character.statpoints < 15) {
			okay = false
			quests.checked = true
		}
	}
	if (okay) {
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

//
// ---------------------------------
function adjustAttributes(attribute, value, input) {
	//value = value.value
	var points = value*input
	if (attribute == "strength" || attribute == "all_attributes") {
		// TODO: add to damage
	}
	if (attribute == "dexterity" || attribute == "all_attributes") {
		character.ar += (points*character.gain_dexterity[0])
		character.defense += (points*character.gain_dexterity[1])
	}
	if (attribute == "vitality" || attribute == "all_attributes") {
		character.life += (points*character.gain_vitality[0])
		character.stamina += (points*character.gain_vitality[1])
	}
	if (attribute == "energy" || attribute == "all_attributes") {
		character.mana += (points*character.gain_energy)
	}
}



//
// ---------------------------------
function updateStats() {
	document.getElementById("strength").innerHTML = character.strength + character.all_attributes + Math.floor(character.level*character.strength_per_level)
	document.getElementById("dexterity").innerHTML = character.dexterity + character.all_attributes
	document.getElementById("vitality").innerHTML = character.vitality + character.all_attributes
	document.getElementById("energy").innerHTML = character.energy + character.all_attributes
	document.getElementById("defense").innerHTML = Math.floor((character.defense + character.level*character.defense_per_level) * (1 + character.defense_bonus/100))
	document.getElementById("ar").innerHTML = Math.floor(character.ar * (1 + character.penetrate_bonus/100))
	document.getElementById("stamina").innerHTML = Math.floor(character.stamina * (1+character.stamina_bonus/100))
	document.getElementById("life").innerHTML = Math.floor(character.life + character.level*character.life_per_level)
	document.getElementById("mana").innerHTML = Math.floor((character.mana + character.level*character.mana_per_level) * (1 + character.max_mana/100))
	document.getElementById("level").innerHTML = character.level
	document.getElementById("class_name").innerHTML = character.class_name
	document.getElementById("remainingstats").innerHTML = character.statpoints
	document.getElementById("remainingskills").innerHTML = character.skillpoints
	document.getElementById("fres").innerHTML = character.fRes + character.all_res - character.fRes_penalty + character.resistance_bonus
	document.getElementById("cres").innerHTML = character.cRes + character.all_res - character.cRes_penalty + character.resistance_bonus
	document.getElementById("lres").innerHTML = character.lRes + character.all_res - character.lRes_penalty + character.resistance_bonus
	document.getElementById("pres").innerHTML = character.pRes + character.all_res - character.pRes_penalty + character.resistance_bonus
	document.getElementById("mres").innerHTML = character.mRes - character.mRes_penalty
	if (character.statpoints == 0) {
		document.getElementById("remainingstats").innerHTML = ""
		document.getElementById("hide_statpoints").style.visibility = "visible"
	} else {
		document.getElementById("hide_statpoints").style.visibility = "hidden"
	}
	if (character.skillpoints == 0) {
		document.getElementById("remainingskills").innerHTML = ""
		document.getElementById("hide_skillpoints").style.visibility = "visible"
	} else {
		document.getElementById("hide_skillpoints").style.visibility = "hidden"
	}
	if (character.level == 1 && character.statpoints == 0 && character.quests_completed < 0) {
		document.getElementById("hide_stats").style.visibility = "visible"
	} else {
		document.getElementById("hide_stats").style.visibility = "hidden"
	}
	updateSkillIcons()
	checkRequirements()
}

//
// ---------------------------------
function updateSecondaryStats() {
	document.getElementById("pdr").innerHTML = character.pdr + "%  +" + character.mDamage_reduced
	document.getElementById("cdr").innerHTML = character.cdr
	document.getElementById("fcr").innerHTML = character.fcr + Math.floor(character.level*character.fcr_per_level)
	document.getElementById("fbr").innerHTML = character.fbr
	document.getElementById("fhr").innerHTML = character.fhr
	document.getElementById("frw").innerHTML = character.frw + character.speed_bonus
	document.getElementById("ias").innerHTML = character.ias
	document.getElementById("life_leech").innerHTML = character.life_leech
	document.getElementById("mana_leech").innerHTML = character.mana_leech
	document.getElementById("life_per_hit").innerHTML = character.life_per_hit + "m , " + character.life_per_ranged_hit + "r"
	document.getElementById("mana_per_hit").innerHTML = character.mana_per_hit + "m , " + character.mana_per_ranged_hit + "r"
	document.getElementById("fdamage").innerHTML = character.fDamage
	document.getElementById("cdamage").innerHTML = character.cDamage
	document.getElementById("ldamage").innerHTML = character.lDamage
	document.getElementById("pdamage").innerHTML = character.pDamage
	document.getElementById("fpierce").innerHTML = character.fPierce
	document.getElementById("cpierce").innerHTML = character.cPierce
	document.getElementById("lpierce").innerHTML = character.lPierce
	document.getElementById("ppierce").innerHTML = character.pPierce
	document.getElementById("pierce").innerHTML = character.pierce + character.pierce_bonus
	document.getElementById("cblow").innerHTML = character.cblow
	document.getElementById("dstrike").innerHTML = character.dstrike + Math.floor(character.level*character.dstrike_per_level)
	document.getElementById("cstrike").innerHTML = character.cstrike + character.cstrike_bonus
	document.getElementById("owounds").innerHTML = character.owounds
	document.getElementById("fabsorb").innerHTML = character.fAbsorb + "%  +" + character.fAbsorb_flat
	document.getElementById("cabsorb").innerHTML = character.cAbsorb + "%  +" + character.cAbsorb_flat
	document.getElementById("labsorb").innerHTML = character.lAbsorb + "%  +" + character.lAbsorb_flat
	document.getElementById("mabsorb").innerHTML = character.mAbsorb + "%  +" + character.mAbsorb_flat
	document.getElementById("mf").innerHTML = character.mf
	document.getElementById("gf").innerHTML = character.gf
}

//
// ---------------------------------
function updateSkillAmounts() {
	for (s = 0; s < skills.length; s++) {
		var display = skills[s].level
		if (character.class_name == "Amazon") {
			if (s < 10) { skills[s].extra_levels = character.skills_javelins
				if (s == 8) {skills[s].extra_levels += character.skill_lightning_strike }
				if (s == 9) {skills[s].extra_levels += character.skill_lightning_fury }
			} else if (s > 19) { skills[s].extra_levels = character.skills_bows
			} else { skills[s].extra_levels = character.skills_passives }
		} else if (character.class_name == "Assassin") {
			if (s < 9) { skills[s].extra_levels = character.skills_martial
			} else if (s > 19) { skills[s].extra_levels = character.skills_traps
			} else { skills[s].extra_levels = character.skills_shadow }
		} else if (character.class_name == "Barbarian") {
			if (s < 10) { skills[s].extra_levels = character.skills_warcries
			} else if (s > 17) { skills[s].extra_levels = character.skills_combat_barbarian
			} else { skills[s].extra_levels = character.skills_masteries }
		} else if (character.class_name == "Druid") {
			if (s < 11) { skills[s].extra_levels = character.skills_elemental
			} else if (s > 20) { skills[s].extra_levels = character.skills_summoning_druid
			} else { skills[s].extra_levels = character.skills_shapeshifting }
		} else if (character.class_name == "Necromancer") {
			if (s < 11) { skills[s].extra_levels = character.skills_summoning_necromancer
			} else if (s > 19) { skills[s].extra_levels = character.skills_curses
			} else { skills[s].extra_levels = character.skills_poisonBone }
		} else if (character.class_name == "Paladin") {
			if (s < 10) { skills[s].extra_levels = character.skills_defensive
			} else if (s > 19) { skills[s].extra_levels = character.skills_combat_paladin
			} else { skills[s].extra_levels = character.skills_offensive }
		} else if (character.class_name == "Sorceress") {
			if (s < 11) { skills[s].extra_levels = character.skills_cold
				if (s == 5) {skills[s].extra_levels += character.skill_glacial_spike }
			} else if (s > 21) { skills[s].extra_levels = character.skills_fire
			} else { skills[s].extra_levels = character.skills_lightning }
		}
		skills[s].extra_levels += character.all_skills
		display += skills[s].extra_levels
		if (skills[s].level > 0) {
			document.getElementById("p"+skills[s].key).innerHTML = display
		}
	}
}

//
// ---------------------------------
function checkRequirements() {
	var highest_level = 1; var highest_str = 1; var highest_dex = 1;
	for (type in equipped) {
		if (type == "charms") { for (item in equipped[type]) {}
			if (equipped[type][item].req_level > highest_level) { highest_level = equipped[type][item].req_level }
			if (equipped[type][item].req_strength > highest_str) { highest_str = equipped[type][item].req_strength }
			if (equipped[type][item].req_dexterity > highest_dex) { highest_dex = equipped[type][item].req_dexterity }
		}
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
		if (skills[s].reqlvl > character.level) { req_met = 0 }
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

//
// ---------------------------------
function click(event, skill) {
	var display = 0
	var old_level = skill.level;
	var levels = 1;
	if (event.shiftKey) { levels = 10 }
	if (event.ctrlKey) { levels = 20 }
	if (old_level+levels > MAX) { levels = MAX-old_level }
	if (levels > (99-character.level) + character.skillpoints) { levels = (99-(character.level) + character.skillpoints) }
	if (character.level <= 99-levels || character.skillpoints >= levels) {
		skill.level += levels
		display += skill.level
		display += skill.extra_levels
		if (skill.level > 0) { document.getElementById("p"+skill.key).innerHTML = display }
		mouseOver(skill)
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
			updateStats()
			updateSecondaryStats()
		}
	}
	showBaseLevels(skill)
}

//
// ---------------------------------
function addStat(event, stat) {
	var points = 1
	if (event.shiftKey) {
		points = 10
	}
	if (event.ctrlKey) {
		points = 100
	}
	if (character.statpoints < points) {
		points = character.statpoints
	}
	if (character.statpoints >= points) {
		if (stat == "btn_strength") {
			character.strength += points
			character.strength_added += points
		} else if (stat == "btn_dexterity") {
			character.dexterity += points
			character.dexterity_added += points
			character.ar += (points*character.gain_dexterity[0])
			character.defense += (points*character.gain_dexterity[1])
		} else if (stat == "btn_vitality") {
			character.vitality += points
			character.vitality_added += points
			character.life += (points*character.gain_vitality[0])
			character.stamina += (points*character.gain_vitality[1])
		} else if (stat == "btn_energy") {
			character.energy += points
			character.energy_added += points
			character.mana += (points*character.gain_energy)
		}
		character.statpoints -= points
		updateStats()
	}
}

//
// ---------------------------------
function removeStat(event, stat) {
	var points = 1
	if (event.shiftKey) { points = 10 }
	if (event.ctrlKey) { points = 100 }
	if ((stat == "btn_strength")) {
		min_str = Math.min()
		if (points > character.strength_added) { points = character.strength_added }
		character.strength -= points
		character.strength_added -= points
	} else if ((stat == "btn_dexterity")) {
		if (points > character.dexterity_added) { points = character.dexterity_added }
		character.dexterity -= points
		character.dexterity_added -= points
		character.ar -= (points*character.gain_dexterity[0])
		character.defense -= (points*character.gain_dexterity[1])
	} else if ((stat == "btn_vitality")) {
		if (points > character.vitality_added) { points = character.vitality_added }
		character.vitality -= points
		character.vitality_added -= points
		character.life -= (points*character.gain_vitality[0])
		character.stamina -= (points*character.gain_vitality[1])
	} else if ((stat == "btn_energy")) {
		if (points > character.energy_added) { points = character.energy_added }
		character.energy -= points
		character.energy_added -= points
		character.mana -= (points*character.gain_energy)
	} else { points = 0 }
	character.statpoints += points
	updateStats()
}

//
// ---------------------------------
function clickRight(event, skill) {
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
	if (levels <= maxdown && 5*levels <= maxstatdown) {
		if (character.quests_completed > 0 && character.skillpoints < 12) {
			if (levels_temp > levels) { levels_temp = levels }
			skill.level -= levels_temp
			character.skillpoints += levels_temp
			levels -= levels_temp
		}
		skill.level -= levels
		display += skill.level
		display += skill.extra_levels
		if (skill.level == 0) {
			document.getElementById("p"+skill.key).innerHTML = ""
		} else {
			document.getElementById("p"+skill.key).innerHTML = display
		}
		mouseOver(skill)
		if (skill.level < old_level) {
			character.level -= levels
			character.statpoints -= 5*levels
			character.life -= (character.levelup_life*levels)
			character.stamina -= (character.levelup_stamina*levels)
			character.mana -= (character.levelup_mana*levels)
			updateStats()
			updateSecondaryStats()
		}
	}
	showBaseLevels(skill)
}

//
// ---------------------------------
function mouseOver(skill) {
	document.getElementById("title").innerHTML = skill.name
	document.getElementById("description").innerHTML = skill.description
	document.getElementById("graytext").innerHTML = skill.graytext
	document.getElementById("syn_title").innerHTML = skill.syn_title
	document.getElementById("syn_text").innerHTML = skill.syn_text
	document.getElementById("tooltip").style = skill.style
	var next_display = "";
	var current_display = "";
	var pre_display = "";
	var next_value = 0;
	var current_value = 0;
	for (let i = 0, len = skill.data.values.length; i < len; i++) {
		var mod_synergy = 1;
		if (skill.data.synergies.length > 0) {
			for (let n = 0, num = skill.data.synergies[i].length; n < num; n=n+2) {
				mod_synergy = mod_synergy + (skill.data.synergies[i][n] * skills[skill.data.synergies[i][n+1]].level)
			}
		}
		next_display += skill.text[i]
		next_value = mod_synergy * skill.data.values[i][(skill.level+skill.extra_levels+1)]
		if (skill.level == 0) {
			if (mod_synergy == 1) { next_value = character.updateSkill(skill, skill.level+1, i) }
		} else {
			if (mod_synergy == 1) { next_value = character.updateSkill(skill, (skill.level+skill.extra_levels+1), i) }
		}
		next_value = round(next_value)
		next_display += next_value
		
		current_display += skill.text[i]
		current_value = mod_synergy * skill.data.values[i][(skill.level+skill.extra_levels)]
		if (mod_synergy == 1) { current_value = character.updateSkill(skill, (skill.level+skill.extra_levels), i) }
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
		pre_display += "<br><br>Current Skill Level: " + (skill.level+skill.extra_levels) + "<br>"
		if (skill.data.index[0] > 0) { pre_display = "<br>" + pre_display }
	} else {
		document.getElementById("next_level_text").innerHTML = "<br>First Level"
		current_display = ""
		if (skill.data.index[0] > 0) { pre_display = "<br>" + pre_display + "<br>" }
	}
	if (skill.level < MAX) { next_display += skill.text[skill.data.values.length] } else { next_display = "(maximum level reached)" }
	document.getElementById("next").innerHTML = next_display
	document.getElementById("current").innerHTML = current_display
	document.getElementById("pretext").innerHTML = pre_display
	
	if (skill.level == 0 || (skill.level > 0 && skill.data.index[0] > 0)) {
		document.getElementById("description").innerHTML = skill.description + "<br>"
	}
	showBaseLevels(skill)
}

//
// ---------------------------------
function showBaseLevels (skill) {
	if (skill.extra_levels > 0 && skill.level > 0) {
		document.getElementById("p"+skill.key).style.color = "#999999";
		document.getElementById("p"+skill.key).innerHTML = skill.level;
	}
}

//
// ---------------------------------
function round(num) {
	// TODO: Always round damage numbers
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

//
// ---------------------------------
function mouseOut() {
	document.getElementById("tooltip").style.display="none"
	checkRequirements()
}

//
// ---------------------------------
function itemOut() {
	document.getElementById("item_stats").style.display="none"
}

//
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
	document.getElementById("item_stats").innerHTML = display
	document.getElementById("item_stats").style = style
}

//
// ---------------------------------
function allowDrop(ev, cell, y) {
	if (inv[0].pickup_y + y <= 5) {
		var allow = 1
		if (inv[cell].empty == 0) { allow = 0 
			if (inv[0].in[cell] == inv[0].onpickup) { allow = 1 } }
		if (inv[0].pickup_y > 1 && inv[cell+10].empty == 0) { allow = 0 //}
			if (inv[0].in[cell+10] == inv[0].onpickup) { allow = 1 } }
		if (inv[0].pickup_y > 2 && inv[cell+20].empty == 0) { allow = 0 //}
			if (inv[0].in[cell+20] == inv[0].onpickup) { allow = 1 } }
		if (allow == 1) {
			ev.preventDefault();
		}
	}
}

//
// ---------------------------------
function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
	inv[0].onpickup = ev.target.id
	var height = document.getElementById(inv[0].onpickup).height;
	if (height > 80) { inv[0].pickup_y = 3 }
	else if (height > 50) { inv[0].pickup_y = 2 }
	else { inv[0].pickup_y = 1 }
}

//
// ---------------------------------
function drop(ev,cell) {
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
	for (s = 1; s <= inv[0].in.length; s++) {
		if (inv[0].in[s] == inv[0].onpickup) { inv[s].empty = 1; inv[0].in[s] = ""; }
	}
	inv[cell].empty = 0
	inv[0].in[cell] = inv[0].onpickup
	if (inv[0].pickup_y > 1) { inv[cell+10].empty = 0; inv[0].in[cell+10] = inv[0].onpickup; }
	if (inv[0].pickup_y > 2) { inv[cell+20].empty = 0; inv[0].in[cell+20] = inv[0].onpickup; }
	inv[0].onpickup = "none"
}

//
// ---------------------------------
function trash(ev) {
	var val = ev.target.id;
	var type = "charms"
	for (old_affix in equipped[type][val]) {
		if (old_affix == "all_attributes" || old_affix == "strength" || old_affix == "dexterity" || old_affix == "vitality" || old_affix == "energy") { adjustAttributes(old_affix, equipped[type][val][old_affix], -1) }
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
	updateSkillAmounts()
	updateStats()
	updateSecondaryStats()
}

// charm inventory
var inv = [
{onpickup:"?",pickup_x:0,pickup_y:0,empty:1,stored:"",charms:[],in:["",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
{x:1,y:1,empty:1,id:"h11"},
{x:2,y:1,empty:1,id:"h21"},
{x:3,y:1,empty:1,id:"h31"},
{x:4,y:1,empty:1,id:"h41"},
{x:5,y:1,empty:1,id:"h51"},
{x:6,y:1,empty:1,id:"h61"},
{x:7,y:1,empty:1,id:"h71"},
{x:8,y:1,empty:1,id:"h81"},
{x:9,y:1,empty:1,id:"h91"},
{x:10,y:1,empty:1,id:"h01"},

{x:1,y:2,empty:1,id:"h12"},
{x:2,y:2,empty:1,id:"h22"},
{x:3,y:2,empty:1,id:"h32"},
{x:4,y:2,empty:1,id:"h42"},
{x:5,y:2,empty:1,id:"h52"},
{x:6,y:2,empty:1,id:"h62"},
{x:7,y:2,empty:1,id:"h72"},
{x:8,y:2,empty:1,id:"h82"},
{x:9,y:2,empty:1,id:"h92"},
{x:10,y:2,empty:1,id:"h02"},

{x:1,y:3,empty:1,id:"h13"},
{x:2,y:3,empty:1,id:"h23"},
{x:3,y:3,empty:1,id:"h33"},
{x:4,y:3,empty:1,id:"h43"},
{x:5,y:3,empty:1,id:"h53"},
{x:6,y:3,empty:1,id:"h63"},
{x:7,y:3,empty:1,id:"h73"},
{x:8,y:3,empty:1,id:"h83"},
{x:9,y:3,empty:1,id:"h93"},
{x:10,y:3,empty:1,id:"h03"},

{x:1,y:4,empty:1,id:"h14"},
{x:2,y:4,empty:1,id:"h24"},
{x:3,y:4,empty:1,id:"h34"},
{x:4,y:4,empty:1,id:"h44"},
{x:5,y:4,empty:1,id:"h54"},
{x:6,y:4,empty:1,id:"h64"},
{x:7,y:4,empty:1,id:"h74"},
{x:8,y:4,empty:1,id:"h84"},
{x:9,y:4,empty:1,id:"h94"},
{x:10,y:4,empty:1,id:"h04"}
];
