

character = {class_name:"", strength:0, dexterity:0, vitality:0, energy:0, level:1, skillpoints:0, statpoints:0, life:0, mana:0, defense:0, ar:0, stamina:0, levelup_life:0, levelup_stamina:0, levelup_mana:0, gain_dexterity:0, gain_vitality:[0,0], gain_energy:0, starting_strength:0, starting_dexterity:0, starting_vitality:0, starting_energy:0, quests_completed:-1, difficulty:3, fRes_max:75, cRes_max:75, lRes_max:75, pRes_max:75, mRes_max:75, fRes:0, cRes:0, lRes:0, pRes:0, mRes:0, fRes_penalty:100, cRes_penalty:100, lRes_penalty:100, pRes_penalty:100, mRes_penalty:100,
				mf:0, gf:0, cdr:0, fcr:0, fbr:0, fhr:0, frw:0, ias:0, pierce:0, cblow:0, dstrike:0, cstrike:0, owounds:0, fDamage:0, cDamage:0, lDamage:0, pDamage:0, fPierce:0, cPierce:0, lPierce:0, pPierce:0, life_leech:0, mana_leech:0, life_per_hit:0, mana_per_hit:0, pdr:0, fAbsorb:0, cAbsorb:0, lAbsorb:0, pAbsorb:0, mAbsorb:0,
				all_skills:0, all_attributes:0, life_per_level:0, mana_per_level:0, life_regen:0, max_mana:0, all_res:0, defense_per_level:0, ibc:0, mana_regen:0, itd:0, knockback:0, missile_defense:0, mana_per_kill:0, damage_min:0, damage_max:0, thorns:0, slower_stam_drain:0, dstrike_per_level:0, damage_to_mana:0, heal_stam:0, light_radius:0, mDamage_reduced:0, thorns_per_level:0,
				skills_javelins:0, skills_passives:0, skills_bows:0, skills_martial:0, skills_shadow:0, skills_traps:0, skills_warcries:0, skills_masteries:0, skills_combat_barbarian:0, skills_elemental:0, skills_shapeshifting:0, skills_summoning_druid:0, skills_summoning_necromancer:0, skills_poisonBone:0, skills_curses:0, skills_offensive:0, skills_defensive:0, skills_combat_paladin:0, skills_cold:0, skills_lightning:0, skills_fire:0,
				fAbsorb_flat:0, cAbsorb_flat:0, lAbsorb_flat:0, mAbsorb_flat:0, pdr_flat:0, slow_target:0, life_per_kill:0, damage_vs_demons:0, damage_vs_undead:0, strength_per_level:0, mf_per_level:0, life_per_ranged_hit:0, mana_per_ranged_hit:0,
				skill_lightning_fury:0, skill_lightning_strike:0,
	updateSkill : function(skill, level, elem) {
	var result = skill.data.values[elem][level]
	return result
	}
};
var MAX = 20;

//
// ---------------------------------
function startup(choice) {
	resetSkills()
	resetEquipment()
	
	skills = skills_all[choice]
	character_setup = character_all[choice]
	for (stat in character_setup) {
		character[stat] = character_setup[stat]
	}
	character.skillpoints = 0
	character.statpoints = 0
	character.level = 1
	character.quests_completed = -1
	updateStats()
	document.getElementById("skill_tree").src = character_setup.skill_layout
	init()
}

// init - initiates mouse functions
// ---------------------------------
function init() {

	var stats = ["btn_strength", "btn_dexterity", "btn_vitality", "btn_energy"];
	document.getElementById("skillmap").onmouseout = function() {mouseOut()};
	for (let s = 0, len = skills.length; s < len; s++) {
		document.getElementById(skills[s].data.icon).onmouseover = function() {mouseOver(skills[s])};
		document.getElementById(skills[s].data.icon).onclick = function() {click(event, skills[s])};
		document.getElementById(skills[s].data.icon).oncontextmenu = function() {clickRight(event, skills[s])};
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
function loadItems(type, dropdown) {
	if (type.length == 0) document.getElementById(dropdown).innerHTML = "<option></option>"
	else {
		var choices = "";
		var empty = 1;
		for (item in equipment[type]) {
			if (item > 0) {
				choices += "<option>" + equipment[type][item].name + "</option>"
			} else {
				choices += "<option selected>" + "­ ­ ­ ­ " + equipment[type][item].name + "</option>"
			}
			if (empty) {
		//		choices += "<option>" + "" + "</option>"
				empty = 0
			} 
		}
		document.getElementById(dropdown).innerHTML = choices
	}
}

//
// ---------------------------------
function equip(type, val) {
	if (equipped[type].name == val) {
		// same item?  TODO: add full comparison
	} else {
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
		updateSkillAmounts()
		updateStats()
		updateSecondaryStats()
	}
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
}

//
// ---------------------------------
function resetSkills() {
	for (s = 0, len = skills.length; s < len; s++) {
		skills[s].level = 0
		document.getElementById(skills[s].data.point).innerHTML = ""
		document.getElementById(skills[s].data.icon).onmouseover = function() {mouseOut};
		document.getElementById(skills[s].data.icon).onclick = function() {mouseOut};
		document.getElementById(skills[s].data.icon).oncontextmenu = function() {mouseOut};
	}
}

//
// ---------------------------------
function loadEquipment() {

var equipmentTypes = ["helm", "armor", "gloves", "boots", "belt", "amulet", "ring1", "ring2", "weapon", "offhand"];
	var equipmentDropdowns = ["dropdown_helm", "dropdown_armor", "dropdown_gloves", "dropdown_boots", "dropdown_belt", "dropdown_amulet", "dropdown_ring1", "dropdown_ring2", "dropdown_weapon", "dropdown_offhand"]
	for (let i = 0; i < equipmentTypes.length; i++) {
		loadItems(equipmentTypes[i], equipmentDropdowns[i])
	}
}

//
// ---------------------------------
function reset(name) { startup(name.toLowerCase()) }

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
function checkTwoHanders(value) {
	// TODO: disable offhand dropdown, or otherwise make sure equipment is valid
}

//
// ---------------------------------
function toggleQuests() {
	var quests = document.getElementById("quests")
	var okay = true
	if (!(quests.checked)) {
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
function updateStats() {
	document.getElementById("strength").innerHTML = character.strength + character.all_attributes
	document.getElementById("dexterity").innerHTML = character.dexterity + character.all_attributes
	document.getElementById("vitality").innerHTML = character.vitality + character.all_attributes
	document.getElementById("energy").innerHTML = character.energy + character.all_attributes
	document.getElementById("defense").innerHTML = Math.round(character.defense + character.level*character.defense_per_level)
	document.getElementById("ar").innerHTML = character.ar
	document.getElementById("stamina").innerHTML = Math.round(character.stamina)
	document.getElementById("life").innerHTML = Math.round(character.life + character.level*character.life_per_level)
	document.getElementById("mana").innerHTML = Math.round((character.mana + character.level*character.mana_per_level) * (1 + (character.max_mana/100)))
	document.getElementById("level").innerHTML = character.level
	document.getElementById("class_name").innerHTML = character.class_name
	document.getElementById("remainingstats").innerHTML = character.statpoints
	document.getElementById("remainingskills").innerHTML = character.skillpoints
	document.getElementById("fres").innerHTML = character.fRes + character.all_res - character.fRes_penalty
	document.getElementById("cres").innerHTML = character.cRes + character.all_res - character.cRes_penalty
	document.getElementById("lres").innerHTML = character.lRes + character.all_res - character.lRes_penalty
	document.getElementById("pres").innerHTML = character.pRes + character.all_res - character.pRes_penalty
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
}

//
// ---------------------------------
function updateSecondaryStats() {
	document.getElementById("pdr").innerHTML = character.pdr
	document.getElementById("cdr").innerHTML = character.cdr
	document.getElementById("fcr").innerHTML = character.fcr
	document.getElementById("fbr").innerHTML = character.fbr
	document.getElementById("fhr").innerHTML = character.fhr
	document.getElementById("frw").innerHTML = character.frw
	document.getElementById("ias").innerHTML = character.ias
	document.getElementById("life_leech").innerHTML = character.life_leech
	document.getElementById("mana_leech").innerHTML = character.mana_leech
	document.getElementById("life_per_hit").innerHTML = character.life_per_hit
	document.getElementById("mana_per_hit").innerHTML = character.mana_per_hit
	document.getElementById("fdamage").innerHTML = character.fDamage
	document.getElementById("cdamage").innerHTML = character.cDamage
	document.getElementById("ldamage").innerHTML = character.lDamage
	document.getElementById("pdamage").innerHTML = character.pDamage
	document.getElementById("fpierce").innerHTML = character.fPierce
	document.getElementById("cpierce").innerHTML = character.cPierce
	document.getElementById("lpierce").innerHTML = character.lPierce
	document.getElementById("ppierce").innerHTML = character.pPierce
	document.getElementById("pierce").innerHTML = character.pierce
	document.getElementById("cblow").innerHTML = character.cblow
	document.getElementById("dstrike").innerHTML = character.dstrike
	document.getElementById("cstrike").innerHTML = character.cstrike
	document.getElementById("owounds").innerHTML = character.owounds
	document.getElementById("fabsorb").innerHTML = character.fAbsorb
	document.getElementById("cabsorb").innerHTML = character.cAbsorb
	document.getElementById("labsorb").innerHTML = character.lAbsorb
	document.getElementById("mabsorb").innerHTML = character.mAbsorb
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
			} else if (s > 21) { skills[s].extra_levels = character.skills_fire
			} else { skills[s].extra_levels = character.skills_lightning }
		}
		skills[s].extra_levels += character.all_skills
		display += skills[s].extra_levels
		//display += character.all_skills
		if (skills[s].level > 0) {
			document.getElementById(skills[s].data.point).innerHTML = display
		}
	}
}

//
// ---------------------------------
function click(event, skill) {
	var display = 0
	var old_level = skill.level;
	var levels = 1;
	if (event.shiftKey) {
		levels = 10
	}
	if (event.ctrlKey) {
		levels = 100
	}
	if (old_level <= (MAX-levels)) {
		skill.level += levels
		display += skill.level
		display += skill.extra_levels
	//	display += character.all_skills
		document.getElementById(skill.data.point).innerHTML = display
		mouseOver(skill)
	} else if ((MAX-old_level) > 0) {
		levels = (MAX-old_level)
		skill.level += levels
		display += skill.level
		display += skill.extra_levels
	//	display += character.all_skills
		document.getElementById(skill.data.point).innerHTML = display
		mouseOver(skill)
	}
	if (skill.level > old_level) {
		character.level += levels
		character.statpoints += (5*levels)
		character.life += (character.levelup_life*levels)
		character.stamina += (character.levelup_stamina*levels)
		character.mana += (character.levelup_mana*levels)
		updateStats()
	}
	//if (character.level > 99) { document.getElementById("level").class="redpoint" }
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
		} else if (stat == "btn_dexterity") {
			character.dexterity += points
			character.ap += (points*character.gain_dexterity)
		} else if (stat == "btn_vitality") {
			character.vitality += points
			character.life += (points*character.gain_vitality[0])
			character.stamina += (points*character.gain_vitality[1])
		} else if (stat == "btn_energy") {
			character.energy += points
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
	if (event.shiftKey) {
		points = 10
	}
	if (event.ctrlKey) {
		points = 100
	}
	if ((stat == "btn_strength")) {
		if (points > character.strength-character.starting_strength) {
			points = character.strength-character.starting_strength
		}
		if (points <= character.strength-character.starting_strength) {
			character.strength -= points
		}
	} else if ((stat == "btn_dexterity")) {
		if (points > character.dexterity-character.starting_dexterity) {
			points = character.dexterity-character.starting_dexterity
		}
		if (points <= character.dexterity-character.starting_dexterity) {
			character.dexterity -= points
			character.ap -= (points*character.gain_dexterity)
		}
	} else if ((stat == "btn_vitality")) {
		if (points > character.vitality-character.starting_vitality) {
			points = character.vitality-character.starting_vitality
		}
		if (points <= character.vitality-character.starting_vitality) {
			character.vitality -= points
			character.life -= (points*character.gain_vitality[0])
			character.stamina -= (points*character.gain_vitality[1])
		}
	} else if ((stat == "btn_energy")) {
		if (points > character.energy-character.starting_energy) {
			points = character.energy-character.starting_energy
		}
		if (points <= character.energy-character.starting_energy) {
			character.energy -= points
			character.mana -= (points*character.gain_energy)
		}
	} else {
		points = 0
	}
	character.statpoints += points
	updateStats()
}

//
// ---------------------------------
function clickRight(event, skill) {
	var old_level = skill.level
	var levels = 1
	var display = 0
	if (event.shiftKey) {
		levels = 10
	}
	if (event.ctrlKey) {
		levels = 100
	}
	if (old_level >= levels && (character.statpoints >= (5*levels))) {
		skill.level -= levels
		display += skill.level
		display += skill.extra_levels
	//	display += character.all_skills
		if (skill.level == 0) {
			document.getElementById(skill.data.point).innerHTML = ""
		} else {
			document.getElementById(skill.data.point).innerHTML = display
		}
		mouseOver(skill)
	} else if ((old_level < levels) && (old_level > 0)) {
		levels = old_level
		if (character.statpoints >= (5*levels)) {
			skill.level -= levels
			display += skill.level
			display += skill.extra_levels
	//		display += character.all_skills
			if (skill.level == 0) {
				document.getElementById(skill.data.point).innerHTML = ""
			} else {
				document.getElementById(skill.data.point).innerHTML = display
			}
			mouseOver(skill)
		}
	}
	if (skill.level < old_level) {
		character.level -= levels
		character.statpoints -= (5*levels)
		character.life -= (character.levelup_life*levels)
		character.stamina -= (character.levelup_stamina*levels)
		character.mana -= (character.levelup_mana*levels)
		updateStats()
	}
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
}
