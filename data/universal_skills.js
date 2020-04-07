
var character_any = {
	
	// getSkillData - gets skill info from the appropriate skills data table
	//	skill: skill object for the skill in question
	//	lvl: level of the skill
	//	elem: which element of the skill to return
	// result: value of the skill element at the specified level
	// ---------------------------------
	getSkillData : function(skillName, lvl, elem) {
		var skills = "";
		var nameMod = "oskill_"+skillName.split(" ").join("_");
		var natClass = oskills_info[nameMod].native_class;
		if (natClass != "none") { skills = skills_all[natClass] }
		var skill = skills[oskills_info[nameMod].i];
		
		var sk_Ball_Lightning = {data:{values:[
				["lightning min",6.6,6.9,7.2,7.5,7.8,8.1,8.4,8.7,9,9.3,9.6,9.9,10.2,10.5,10.8,11.1,11.4,11.7,12,12.3,12.6,12.9,13.2,13.5,13.8,14.1,14.4,14.7,15,15.3,15.6,15.9,16.2,16.5,16.8,17.1,17.4,17.7,18,18.3,18.6,18.9,19.2,19.5,19.8,20.1,20.4,20.7,21,21.3,21.6,21.9,22.2,22.5,22.8,23.1,23.4,23.7,24,24.3], 
				["lightning max",44,64,84,104,124,144,176,208,240,272,304,351,398,445,492,539,601,663,725,787,849,943,1038,1132,1211,1308,1402,1496,1590,1684,1779,1873,1967,2061,2155,2249,2343,2437,2531,2625,2720,2814,2908,3002,3096,3190,3284,3378,3472,3566,3661,3755,3849,3943,4037,4131,4225,4319,4413,4507], 
				["mana cost",2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25.5,26,26.5,27,27.5,28,28.5,29,29.5,30,30.5,31,31.5,32]]}};
		if (skillName == "Ball Lightning") { skill = sk_Ball_Lightning }

		var result = skill.data.values[elem][lvl];
		var wisp = (1+Math.round(character.wisp/20,0)/10);
		var lycan_lvl = ~~character["oskill_lycanthropy"] + character.all_skills;
		var phys_min = ((1+(character.e_damage+character.damage_bonus)/100)*((character.level-1)*character.min_damage_per_level+character.base_damage_min))+character.damage_min;
		var phys_max = ((1+(character.e_damage+character.damage_bonus)/100)*((character.level-1)*character.max_damage_per_level+character.base_damage_max))+character.damage_max;
	
	// Universal
		if (skillName == "Ball Lightning" && elem < 2) {		result *= ((1 + (character.lDamage+character.lDamage_skillup)/100 + 0.01*(character.energy + character.all_attributes + character.level*character.energy_per_level)/3) * wisp) }
	// Barbarian
		if (skillName == "Battle Command" && elem == 0) {		result = 1 }
	// Druid
		if (skillName == "Flame Dash" && elem == 0) {			result = 8 }
		if (skillName == "Flame Dash" && elem < 3 && elem > 0) {	result *= ((1 + 0.01*(character.energy + character.all_attributes + character.level*character.energy_per_level)) * (1+character.fDamage/100) * wisp) }
		//if (skillName == "Arctic Blast" && elem < 2) { 		result *= ((1+character.cDamage/100) * wisp) }
		if (skillName == "Werewolf" && elem == 0) {			result = (15 + skills[12].data.values[1][lycan_lvl]) }
		if (skillName == "Werewolf" && elem == 3) {			result = (skills[12].data.values[0][lycan_lvl]) }
		if (skillName == "Werebear" && elem == 0) {			result = (25 + skills[12].data.values[1][lycan_lvl]) }
		if (skillName == "Werebear" && elem == 1) {			result += (skills[12].data.values[0][lycan_lvl]) }
		if (skillName == "Summon Dire Wolf" && elem == 3) {		result = ((1 + (skill.data.values[6][lvl] / 100)) * skill.data.values[elem][character.difficulty]) }
	// Necromancer
		if (skillName == "Desecrate" && elem > 0 && elem < 3) { 	result *= ((1+character.pDamage/100) * wisp) }
	// Paladin
		if (skillName == "Vengeance" && elem == 2) {			result = Math.floor(phys_min * (1+(skill.data.values[8][lvl])/100)) }
		if (skillName == "Vengeance" && elem == 3) {			result = Math.floor(phys_max * (1+(skill.data.values[8][lvl])/100)) }
		if (skillName == "Vengeance" && elem == 4) {			result = Math.floor(phys_min * (1+(skill.data.values[9][lvl])/100)) }
		if (skillName == "Vengeance" && elem == 5) {			result = Math.floor(phys_max * (1+(skill.data.values[9][lvl])/100)) }
		if (skillName == "Vengeance" && elem == 6) {			result = Math.floor(phys_min * (1+(skill.data.values[10][lvl])/100)) }
		if (skillName == "Vengeance" && elem == 7) {			result = Math.floor(phys_max * (1+(skill.data.values[10][lvl])/100)) }
	// Sorceress
		//if (skillName == "Frigerate" && elem < 2) { 			result *= ((1 + (character.cDamage+character.cDamage_skillup)/100) * wisp) }
		//if (skillName == "Shiver Armor" && elem < 4 && elem > 1) { 	result *= ((1 + (character.cDamage+character.cDamage_skillup)/100) * wisp) }
		if (skillName == "Fire Ball" && elem < 2) { 			result *= ((1 + (character.fDamage+character.fDamage_skillup)/100) * wisp) }
		if (skillName == "Fire Wall" && elem < 2) { 			result *= ((1 + (character.fDamage+character.fDamage_skillup)/100) * wisp) }
		//if (skillName == "Enflame" && elem < 3 && elem > 0) { 	result *= ((1 + (character.fDamage+character.fDamage_skillup)/100) * wisp) }
		if (skillName == "Meteor" && elem < 2) { 			result *= ((1 + (character.fDamage+character.fDamage_skillup)/100) * wisp) }
		if (skillName == "Meteor" && elem < 4 && elem > 1) { 		result *= ((1 + (character.fDamage+character.fDamage_skillup)/100) * wisp) }
		if (skillName == "Hydra" && elem < 3 && elem > 0) { 		result *= ((1 + (character.fDamage+character.fDamage_skillup)/100) * wisp) }

	return result
	},

	// (UNIMPLEMENTED)
	// getBuffData - gets a list of stats corresponding to a persisting buff
	//	effect: array element object for the buff
	// result: indexed array including stats affected and their values
	// ---------------------------------
	getBuffData : function(effect) {
		var skill = skills[effect.skill]
		var lvl = skill.level + skill.extra_levels;
		var result = {};
		var lycan_damage = ~~(skills[12].data.values[0][skills[12].level+skills[12].extra_levels]);
		var lycan_life = ~~(skills[12].data.values[1][skills[12].level+skills[12].extra_levels]);
		
		if (skillName == "Battle Command") { result.all_skills = Math.floor(1+(skill.level / 10)); }
		if (skillName == "Shout") { result.defense_bonus = skill.data.values[0][lvl]; }
		if (skillName == "Battle Orders") {
			result.max_stamina = skill.data.values[1][lvl];
			result.max_life = skill.data.values[2][lvl];
			result.max_mana = skill.data.values[3][lvl];
		}
		if (skillName == "Werewolf") {
			if (document.getElementById("e"+skills[13].key) != null) { if (effects["e"+skills[13].key].enabled == 1) { disableEffect(13); } }	// disables Werebear
			result.max_life = (15 + lycan_life);
			result.max_stamina = 40;
			result.ar_bonus = skill.data.values[1][lvl];
			result.ias = skill.data.values[2][lvl];
			result.damage_bonus = lycan_damage;
		}
		if (skillName == "Werebear") {
			if (document.getElementById("e"+skills[11].key) != null) { if (effects["e"+skills[11].key].enabled == 1) { disableEffect(11); } }	// disables Werewolf
			result.max_life = (25 + lycan_life);
			result.damage_bonus = skill.data.values[1][lvl] + lycan_damage;
			result.defense_bonus = skill.data.values[2][lvl];
		}
		if (skillName == "Shiver Armor") {
			if (document.getElementById("e"+skills[8].key) != null) { if (effects["e"+skills[8].key].enabled == 1) { disableEffect(8) } }	// disables Shiver Armor
			result.defense_bonus = skill.data.values[1][lvl];
		}
		if (skillName == "Frigerate") {
			result.cDamage_min = skill.data.values[0][lvl] * (1 + (0.15*skills[4].level)) * (1 + (~~skills[10].data.values[1][skills[10].level+skills[10].extra_levels])/100);
			result.cDamage_max = skill.data.values[1][lvl] * (1 + (0.15*skills[4].level)) * (1 + (~~skills[10].data.values[1][skills[10].level+skills[10].extra_levels])/100);
			result.enemy_defense = skill.data.values[2][lvl];
		}
		if (skillName == "Enflame") {
			result.fDamage_min = skill.data.values[1][lvl] * (1 + (0.12*skills[23].level)) * (1 + (~~skills[30].data.values[1][skills[30].level+skills[30].extra_levels])/100);
			result.fDamage_max = skill.data.values[2][lvl] * (1 + (0.12*skills[23].level)) * (1 + (~~skills[30].data.values[1][skills[30].level+skills[30].extra_levels])/100);
			result.ar_bonus = skill.data.values[3][lvl];
		}
		
	return result
	},

	// updateSelectedSkill - updates and displays the damage and attack rating for the selected skill
	//	skillName: name of selected skill
	//	num: 1 or 2 (skill1 or skill2)
	//	ar: base attack rating
	//	min/max parameters: base damage of different types
	//	wisp: multiplier for Wisp Projector (Lifted Spirit aura)
	// ---------------------------------
	updateSelectedSkill : function(skillName, num, ar, phys_min, phys_max, ele_min, ele_max, mag_min, mag_max, wisp) {
		var nameMod = "oskill_"+skillName.split(" ").join("_");
		var lvl = ~~character[nameMod] + character.all_skills;
		var ar_bonus = 0; var damage_bonus = 0; var weapon_damage = 100;
		var damage_min = 0; var damage_max = 0;
		var fDamage_min = 0; var fDamage_max = 0;
		var cDamage_min = 0; var cDamage_max = 0;
		var lDamage_min = 0; var lDamage_max = 0;
		var pDamage_min = 0; var pDamage_max = 0; var pDamage_duration = 0;
		var mDamage_min = 0; var mDamage_max = 0;
		var skillMin = ""; var skillMax = ""; var skillAr = "";
		var attack = 1;	// 0 = no basic damage, 1 = includes basic attack damage, 2 = includes basic throw damage
		var spell = 1;	// 0 = uses attack rating, 1 = no attack rating, 2 = non-damaging
		
		if (skillName == "Ball Lightning") {		attack = 0; spell = 1; lDamage_min = character_any.getSkillData(skillName, lvl, 0); lDamage_max = character_any.getSkillData(skillName, lvl, 1); }
		// else if (skillName == "Valkyrie") {		attack = 0; spell = 1; }
		else if (skillName == "Magic Arrow") {		attack = 1; spell = 0; mDamage_min = character_any.getSkillData(skillName, lvl, 1); mDamage_max = character_any.getSkillData(skillName, lvl, 2); }
		else if (skillName == "Multiple Shot") {	attack = 1; spell = 0; damage_min = character_any.getSkillData(skillName, lvl, 0); damage_max = character_any.getSkillData(skillName, lvl, 1); }
		else if (skillName == "Guided Arrow") {		attack = 1; spell = 1; weapon_damage = 150; damage_bonus = character_any.getSkillData(skillName, lvl, 0); }
		else if (skillName == "Bash") { 		attack = 1; spell = 0; weapon_damage = 110; ar_bonus = character_any.getSkillData(skillName, lvl, 2); damage_bonus = character_any.getSkillData(skillName, lvl, 3); }
		else if (skillName == "Flame Dash") { 		attack = 0; spell = 1; lvl += character.skills_fire_all; fDamage_min = character_any.getSkillData(skillName, lvl, 1); fDamage_max = character_any.getSkillData(skillName, lvl, 2); }
		//else if (skillName == "Arctic Blast") { 	attack = 0; spell = 1; lvl += character.skills_cold_all; cDamage_min = character_any.getSkillData(skillName, lvl, 0); cDamage_max = character_any.getSkillData(skillName, lvl, 1); }	// TODO: confirm whether Frostwind was changed from Arctic Blast to Frigerate
		else if (skillName == "Feral Rage") {		attack = 1; spell = 0; ar_bonus = character_any.getSkillData(skillName, lvl, 5); damage_bonus = character_any.getSkillData(skillName, lvl, 4); }
		else if (skillName == "Summon Dire Wolf") {	attack = 0; spell = 1; damage_min = character_any.getSkillData(skillName, lvl, 4); damage_max = character_any.getSkillData(skillName, lvl, 5); ar_bonus = character_any.getSkillData(skillName, lvl, 1); }
		else if (skillName == "Desecrate") {		attack = 0; spell = 1; lvl += character.skills_poison_all; pDamage_min = character_any.getSkillData(skillName, lvl, 1); pDamage_max = character_any.getSkillData(skillName, lvl, 2); pDamage_duration = 2; }
		else if (skillName == "Zeal") {			attack = 1; spell = 0; ar_bonus = character_any.getSkillData(skillName, lvl, 0); damage_bonus = character_any.getSkillData(skillName, lvl, 1); }
		else if (skillName == "Vengeance") {		attack = 1; spell = 0; fDamage_min = character_any.getSkillData(skillName, lvl, 2); fDamage_max = character_any.getSkillData(skillName, lvl, 3); cDamage_min = character_any.getSkillData(skillName, lvl, 4); cDamage_max = character_any.getSkillData(skillName, lvl, 5); lDamage_min = character_any.getSkillData(skillName, lvl, 6); lDamage_max = character_any.getSkillData(skillName, lvl, 7); ar_bonus = character_any.getSkillData(skillName, lvl, 11); }
		else if (skillName == "Fire Ball") {		attack = 0; spell = 1; lvl += character.skills_fire_all; fDamage_min = character_any.getSkillData(skillName, lvl, 0); fDamage_max = character_any.getSkillData(skillName, lvl, 1); }
		else if (skillName == "Fire Wall") {		attack = 0; spell = 1; lvl += character.skills_fire_all; fDamage_min = character_any.getSkillData(skillName, lvl, 0); fDamage_max = character_any.getSkillData(skillName, lvl, 1); }
		else if (skillName == "Meteor") {		attack = 0; spell = 1; lvl += character.skills_fire_all; fDamage_min = character_any.getSkillData(skillName, lvl, 0); fDamage_max = character_any.getSkillData(skillName, lvl, 1); }
		else if (skillName == "Hydra") {		attack = 0; spell = 1; lvl += character.skills_fire_all; fDamage_min = character_any.getSkillData(skillName, lvl, 1); fDamage_max = character_any.getSkillData(skillName, lvl, 2); }
		else { attack = 0; spell = 2; }

	//	TODO: check weapon requirements & werewolf/werebear requirements

		if (attack == 0) { phys_min = 0; phys_max = 0; ele_min = 0; ele_max = 0; mag_min = 0; mag_max = 0; }
		ele_min += Math.floor(fDamage_min + cDamage_min + lDamage_min);
		ele_max += Math.floor(fDamage_max + cDamage_max + lDamage_max + pDamage_max);
		phys_min = Math.floor((phys_min*weapon_damage/100 + damage_min) * 1+damage_bonus/100);
		phys_max = Math.floor((phys_max*weapon_damage/100 + damage_max) * 1+damage_bonus/100);
		if (spell == 0) { skillMin = Math.floor(mag_min+mDamage_min+ele_min+phys_min); skillMax = Math.floor(mag_max+mDamage_max+ele_max+phys_max); skillAr = Math.floor(ar*(1+ar_bonus/100));
		} else if (spell == 1) { skillMin = Math.floor(mag_min+mDamage_min+ele_min+phys_min); skillMax = Math.floor(mag_max+mDamage_max+ele_max+phys_max); skillAr = "";
		} else if (spell == 2) { skillMin = ""; skillMax = ""; skillAr = ""; }
		
		var output = ": " + skillMin + " - " + skillMax;
		if (num == 1) {
			if (output != ": 0 - 0" && output != ":  - ") { document.getElementById("skill1_info").innerHTML = output } else { document.getElementById("skill1_info").innerHTML = ":" }
			if (skillAr != "") { document.getElementById("ar_skill1").innerHTML = "AR: " + skillAr } else { document.getElementById("ar_skill1").innerHTML = "" }
		} else if (num == 2) {
			if (output != ": 0 - 0" && output != ":  - ") { document.getElementById("skill2_info").innerHTML = output } else { document.getElementById("skill2_info").innerHTML = ":" }
			if (skillAr != "") { document.getElementById("ar_skill2").innerHTML = "AR: " + skillAr } else { document.getElementById("ar_skill2").innerHTML = "" }
		}
	}
};
