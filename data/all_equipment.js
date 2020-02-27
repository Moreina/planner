

var equipped = { helm:{name:"none"}, armor:{name:"none"}, gloves:{name:"none"}, boots:{name:"none"}, belt:{name:"none"}, amulet:{name:"none"}, ring1:{name:"none"}, ring2:{name:"none"}, weapon:{name:"none", twoHanded:0}, offhand:{name:"none"}, charms:{name:"none"} }
//var equipped_charms = { id1:{name:"none"}, id2:{name:"none"} }

var unequipped = {name:"none", strength:0, dexterity:0, vitality:0, energy:0, life:0, mana:0, defense:0, ar:0, stamina:0,
/* main stats		*/	fRes_max:75, cRes_max:75, lRes_max:75, pRes_max:75, mRes_max:75, fRes:0, cRes:0, lRes:0, pRes:0, mRes:0,
/* skill tabs		*/	skills_javelins:0, skills_passives:0, skills_bows:0, skills_martial:0, skills_shadow:0, skills_traps:0, skills_warcries:0, skills_masteries:0, skills_combat_barbarian:0, skills_elemental:0, skills_shapeshifting:0, skills_summoning_druid:0, skills_summoning_necromancer:0, skills_poisonBone:0, skills_curses:0, skills_offensive:0, skills_defensive:0, skills_combat_paladin:0, skills_cold:0, skills_lightning:0, skills_fire:0, skills_amazon:0, skills_assassin:0, skills_barbarian:0, skills_druid:0, skills_necromancer:0, skills_paladin:0, skills_sorceress:0, skills_fire_all:0, skills_cold_all:0,
/* skills		*/	skill_lightning_bolt:0, skill_lightning_fury:0, skill_lightning_strike:0, skill_glacial_spike:0, skill_battle_command:0, skill_battle_orders:0, skill_feral_rage:0, skill_summon_mastery:0, skill_flesh_offering:0, skill_fists_of_ember:0, skill_lightning_mastery:0, skill_fire_mastery:0, skill_cold_mastery:0, 
/* open skills		*/	oskill_feral_rage:0, oskill_lycanthropy:0, oskill_werewolf:0, oskill_hydra:0, oskill_multishot:0, oskill_desecrate:0, 
/* stats		*/	cdr:0, fcr:0, fbr:0, fhr:0, frw:0, ias:0, pierce:0, cblow:0, dstrike:0, cstrike:0, owounds:0, fDamage:0, cDamage:0, lDamage:0, pDamage:0, fPierce:0, cPierce:0, lPierce:0, pPierce:0, pdr:0, damage_reduced:0, mDamage_reduced:0, mf:0, gf:0, life_leech:0, mana_leech:0, life_per_hit:0, mana_per_hit:0, life_per_ranged_hit:0, mana_per_ranged_hit:0, fAbsorb:0, cAbsorb:0, lAbsorb:0, pAbsorb:0, mAbsorb:0, fAbsorb_flat:0, cAbsorb_flat:0, lAbsorb_flat:0, mAbsorb_flat:0, 
/* stats (indirect)	*/	all_skills:0, all_attributes:0, all_res:0, velocity:0, damage_bonus:0, max_life:0, max_mana:0, defense_bonus:0, 
/* stats (per level)	*/	life_per_level:0, mana_per_level:0, defense_per_level:0, ar_per_level:0, stamina_per_level:0, strength_per_level:0, dexterity_per_level:0, vitality_per_level:0, energy_per_level:0, fRes_per_level:0, cRes_per_level:0, lRes_per_level:0, pRes_per_level:0, fAbsorb_per_level:0, cAbsorb_per_level:0, lAbsorb_per_level:0, pAbsorb_per_level:0, mf_per_level:0, gf_per_level:0, fcr_per_level:0, dstrike_per_level:0, 
/* attack damage	*/	damage_min:0, damage_max:0, fDamage_min:0, fDamage_max:0, cDamage_min:0, cDamage_max:0, lDamage_min:0, lDamage_max:0, pDamage_min:0, pDamage_max:0, mDamage_min:0, mDamage_max:0, min_damage_per_level:0, max_damage_per_level:0, kick_min:0, fDamage_max_per_level:0, cDamage_max_per_level:0, lDamage_max_per_level:0, pDamage_max_per_level:0, kick_damage_per_level:0, smite_min:0, smite_max:0, 
/* other (not in-game)	*/	ibc:0, life_per_kill:0, mana_per_kill:0, damage_vs_demons:0, damage_vs_undead:0, ar_vs_demons:0, ar_vs_undead:0, damage_to_mana:0, life_regen:0, mana_regen:0, missile_defense:0, melee_defense:0, ar_vs_undead_per_level:0, damage_vs_undead_per_level:0, ar_vs_demons_per_level:0, damage_vs_demons_per_level:0, poison_length_reduced:0, thorns_lightning:0, life_per_demon_kill:0, light_radius:0, thorns:0, thorns_per_level:0, slower_stam_drain:0, heal_stam:0, heal_stam_per_level:0, ed_per_level:0, 
/* other, affects enemy	*/	enemy_fRes:0, enemy_cRes:0, enemy_lRes:0, enemy_pRes:0, slow_target:0, target_defense:0, flee_on_hit:0, blind_on_hit:0, monster_defense_per_hit:0, freezes_target:0, 
/* other, boolean	*/	itd:0, pmh:0, cbf:0, peace:0, knockback:0, half_freeze_duration:0, e_def:0,
/* item qualities	*/	indestructible:0, req_reduced:0, autorepair:0, autoreplenish:0, stack_size:0, sockets:0, twoHanded:0, 
/* sets			*/	set_IK:0, set_Mav:0, set_Gris:0, set_TO:0, set_TR:0, set_Nat:0, set_Ald:0, 
/* charges		*/	charges_poison_creeper:0, charges_oak_sage:0, charges_iron_maiden:0, charges_iron_golem:0, charges_spirit_of_barbs:0, 
/* misc			*/	bonus_corpse_explosion:0, skill_random_sorc:0, 
};

var equipment = {
    helm: [
{name:"Helm"},
{only:"barbarian", name:"Arreat's Face", req_strength:118, req_level:42, defense:363, skills_barbarian:2, fhr:30, ar_bonus:20, life_leech:6, all_res:30, strength:20, dexterity:20, skills_combat_barbarian:2, base:"Slayer Guard"},
{only:"barbarian", name:"Wolfhowl", req_strength:129, req_level:79, defense:377, skills_warcries:3, oskill_feral_rage:6, oskill_lycanthropy:6, oskill_werewolf:6, strength:15, dexterity:15, vitality:15, charges_summon_dire_wolf:15, base:"Fury Visor"},
{only:"barbarian", name:"Demonhorn's Edge", req_strength:151, req_level:61, defense:408, ias:10, life_leech:6, thorns:77, skills_warcries:3, skills_masteries:3, skills_combat_barbarian:3, base:"Destroyer Helm"},
{only:"barbarian", name:"Halaberd's Reign", req_strength:174, req_level:77, defense:432, life_regen:23, fhr:20, skills_barbarian:2, skills_masteries:1, skill_battle_command:2, skill_battle_orders:2},
{only:"druid", name:"Jalal's Mane", req_strength:65, req_level:42, defense:297, fhr:30, ar_bonus:20, skills_druid:2, all_res:30, mana_per_kill:5, strength:20, energy:20, skills_shapeshifting:2, base:"Totemic Mask"},
{only:"druid", name:"Cerebus' Bite", req_strength:86, req_level:63, defense:350, ar_bonus:120, life_leech:10, owounds:33, skills_shapeshifting:4, skill_feral_rage:2, base:"Blood Spirit"},
{only:"druid", name:"Spirit Keeper", req_strength:104, req_level:67, defense:443, skills_druid:2, fhr:20, pRes_max:10, fRes:40, lAbsorb_flat:14, cAbsorb:25, base:"Earth Spirit"},
{only:"druid", name:"Ravenlore", req_strength:113, req_level:74, defense:390, skill_raven:7, skills_elemental:3, energy:30, enemy_fRes:-20, all_res:25, base:"Sky Spirit"},
{name:"Peasant Crown", req_strength:20, req_level:28, defense:108, all_skills:1, frw:15, life_regen:12, energy:20, vitality:20, base:"War Hat"},
{name:"Rockstopper", req_strength:43, req_level:31, defense:201, pdr:10, fhr:30, cRes:40, fRes:50, lRes:40, vitality:15, base:"Sallet"},
{name:"Vampire Gaze", req_strength:58, req_level:41, defense:252, life_leech:8, mana_leech:8, pdr:20, slower_stam_drain:15, cDamage_min:6, cDamage_max:22, mDamage_reduced:15, base:"Grim Helm"},
{name:"Harlequin Crest (Shako)", req_strength:50, req_level:62, defense:141, mf:50, all_skills:2, life_per_level:1.5, mana_per_level:1.5, pdr:10, all_attributes:2, base:"Shako"},
{name:"Andariel's Visage", req_strength:102, req_level:83, defense:387, all_skills:2, ias:20, life_leech:10, strength:30, fRes:-30, pRes:70, pRes_max:10, base:"Demonhead"},
{name:"Nightwing's Veil", req_strength:96, req_level:67, defense:352, all_skills:2, cDamage:15, dexterity:20, cAbsorb_flat:9, base:"Winged Helm"},
{name:"Kira's Guardian", req_level:77, defense:170, fhr:20, cbf:1, all_res:70, base:"Tiara"},
{name:"Griffon's Eye", req_level:76, defense:260, all_skills:1, lDamage:15, fcr:25, enemy_lRes:-20, base:"Diadem"},
{name:"Crown of Ages", req_strength:174, req_level:82, defense:399, all_skills:1, pdr:15, all_res:30, fhr:30, sockets:2, base:"Corona"},
//{set_TR:1, name:"Tal Rasha's Horadric Crest", req_strength:55, req_level:66, defense:131, life_leech:10, mana_leech:10, all_res:15, mana:30, life:60, base:"Death Mask", set_bonuses:["set_TR"]},
/*
{name:"Biggin's Bonnet", req_strength:0, req_level:0, defense:0, base:"Cap"}
{name:"Tarnhelm", req_strength:0, req_level:0, defense:0, base:"Skull Cap"}
{name:"Coif of Glory", req_strength:0, req_level:0, defense:0, base:"Helm"}
{name:"Duskdeep", req_strength:0, req_level:0, defense:0, base:"Full Helm"}
{name:"Howltusk", req_strength:0, req_level:0, defense:0, base:"Great Helm"}
{name:"The Face of Horror", req_strength:0, req_level:0, defense:0, base:"Mask"}
{name:"Undead Crown", req_strength:0, req_level:0, defense:0, base:"Crown"}
{name:"Wormskull", req_strength:0, req_level:0, defense:0, base:"Bone Helm"}
{name:"Stealskull", req_strength:0, req_level:0, defense:0, base:"Casque"}
{name:"Darksight Helm", req_strength:0, req_level:0, defense:0, base:"Basinet"}
{name:"Blackhorn's Face", req_strength:0, req_level:0, defense:0, base:"Death Mask"}
{name:"Crown of Thieves", req_strength:0, req_level:0, defense:0, base:"Grand Crown"}
{name:"Steel Shade", req_strength:0, req_level:0, defense:0, base:"Armet"}
{name:"Valkyrie Wing", req_strength:0, req_level:0, defense:0, base:"Winged Helm"}
*/
	],
    armor: [
{name:"Armor"},
{name:"Skin of the Vipermagi", req_strength:43, req_level:29, defense:279, all_skills:1, fcr:30, mDamage_reduced:13, all_res:35, base:"Serpentskin Armor"},
{name:"Shaftstop", req_strength:92, req_level:38, defense:684, velocity:-5, pdr:30, missile_defense:250, life:60, base:"Mesh Armor"},
{name:"Tyrael's Might", req_level:84, defense:1502, velocity:-5, frw:20, damage_vs_demons:100, strength:30, all_res:30, cbf:1, cdr:10, peace:1},
{name:"Naj's Light Plate", req_strength:79, req_level:71, defense:830, velocity:-10, all_skills:1, damage_to_mana:45, all_res:25, life:65},
{name:"Guardian Angel", req_strength:118, req_level:45, defense:825, velocity:-10, ibc:20, fbr:30, light_radius:4, all_res:15, fRes_max:7, cRes_max:7, lRes_max:7, pRes_max:7, ar_per_level:2.5, skills_paladin:1, base:"Templar Coat"},
{name:"Que-Hegan's Wisdom", req_strength:55, req_level:51, defense:681, all_skills:1, mana_per_kill:3, fcr:20, fhr:20, mDamage_reduced:10, energy:15, base:"Mage Plate"},
{name:"Skullder's Ire", req_strength:97, req_level:42, defense:732, autorepair:1, mf_per_level:1.25, all_skills:1, mDamage_reduced:10, e_def:200, base:"Russet Armor"},
{name:"The Gladiator's Bane", req_strength:111, req_level:85, defense:1496, cbf:1, fhr:30, poison_length_reduced:50, thorns:20, damage_reduced:20, mDamage_reduced:20, base:"Wire Fleece"},
{name:"Leviathan", req_strength:174, req_level:65, defense:1722, indestructible:1, strength:50, pdr:25, base:"Kraken Shell"},
{name:"Arkaine's Valor", req_strength:165, req_level:85, defense:1450, velocity:-5, all_skills:2, fhr:30, damage_reduced:15, vitality_per_level:0.5, base:"Balrog Skin"},
{name:"Bramble Archon Plate", req_strength:103, req_level:61, defense:824, fhr:50, pDamage:50, max_mana:5, mana_regen:15, cRes_max:5, fRes:30, pRes:100, life_per_kill:13, charges_spirit_of_barbs:13},
{name:"Enigma Archon Plate", req_strength:103, req_level:65, defense:1299, all_skills:2, frw:45, strength_per_level:0.75, max_life:5, pdr:8, life_per_kill:14, damage_to_mana:15, mf_per_level:1},
{name:"Chains of Honor Archon Plate", req_strength:103, req_level:65, defense:890, all_skills:2, strength:20, life_leech:8, pdr:8, all_res:65, life_regen:7, damage_vs_demons:200, damage_vs_undead:100, mf:25},
{set_TR:1, name:"Tal Rasha's Guardianship", req_strength:84, req_level:71, defense:941, velocity:-5, mDamage_reduced:15, cRes:40, lRes:40, fRes:40, mf:88, base:"Lacquered Plate", set_bonuses:["set_TR",0,{fcr:10}]},
//{name:"Fortitude Archon Plate", req_strength:103, req_level:59, defense:1572, fcr:25, life_per_level:1.5, life_regen:7 lRes_max:5, all_res:30, damage_to_mana:12, light_radius:1, damage_reduced:7, e_def:300},	// implement ED
//{name:"Duriel's Shell", req_strength:65, req_level:41, defense:404, defense_per_level:1.25, life_per_level:1, fRes:20, lRes:20, pRes:20, cRes:50, cbf:1, strength:15, e_def:200, base:"Cuirass"},	// defense per level is affected by ED
/*
{name:"Greyform", req_strength:0, req_level:0, defense:0, base:"Quilted Armor"}
{name:"Blinkbat's Form", req_strength:0, req_level:0, defense:0, base:"Leather Armor"}
{name:"The Centurion", req_strength:0, req_level:0, defense:0, base:"Hard Leather Armor"}
{name:"Twitchthroe", req_strength:0, req_level:0, defense:0, base:"Studded Leather"}
{name:"Darkglow", req_strength:0, req_level:0, defense:0, base:"Ring Mail"}
{name:"Hawkmail", req_strength:0, req_level:0, defense:0, base:"Scale Mail"}
{name:"Sparking Mail", req_strength:0, req_level:0, defense:0, base:"Chain Mail"}
{name:"Venom Ward", req_strength:0, req_level:0, defense:0, base:"Breast Plate"}
{name:"Iceblink", req_strength:0, req_level:0, defense:0, base:"Splint Mail"}
{name:"Boneflesh", req_strength:0, req_level:0, defense:0, base:"Plate Mail"}
{name:"Rockfleece", req_strength:0, req_level:0, defense:0, base:"Field Plate"}
{name:"Rattlecage", req_strength:0, req_level:0, defense:0, base:"Gothic Plate"}
{name:"Goldskin", req_strength:0, req_level:0, defense:0, base:"Full Plate"}
{name:"Silks of the Victor", req_strength:0, req_level:0, defense:0, base:"Ancient Armor"}
{name:"Heavenly Garb", req_strength:0, req_level:0, defense:0, base:"Light Plate"}
{name:"Spirit Forge", req_strength:0, req_level:0, defense:0, base:""},
{name:"The Spirit Shroud", req_strength:0, req_level:0, defense:0, base:"Ghost Armor"}
{name:"Skin of the Flayed One", req_strength:0, req_level:0, defense:0, base:"Demonhide Armor"}
{name:"Iron Pelt", req_strength:0, req_level:0, defense:0, base:"Trellised Armor"}
{name:"Crow Caw", req_strength:0, req_level:0, defense:0, base:"Tigulated Mail"}
{name:"Toothrow", req_strength:0, req_level:0, defense:0, base:"Sharktooth Armor"}
{name:"Atma's Wail", req_strength:0, req_level:0, defense:0, base:"Embossed Plate"}
{name:"Black Hades", req_strength:0, req_level:0, defense:0, base:""},
{name:"Steel Carapace", req_strength:0, req_level:0, defense:0, base:"Shadow Plate"}
{name:"Corpsemourn", req_strength:160, req_level:55, defense:1262, velocity:-5, fDamage_min:12, fDamage_max:36, e_def:180, strength:8, vitality:10, cRes:35, bonus_corpse_explosion:5, base:"Ornate Plate"},
{name:"Ormus' Robes", req_strength:77, req_level:75, defense:487, fcr:20, cDamage:15, fDamage:15, lDamage:15, mana_regen:15, skill_random_sorc:3, base:"Dusk Shroud"},
{name:"Templar's Might", req_strength:232, req_level:74, defense:1923, velocity:-5, e_def:220, missile_defense:300, strength:15, vitality:15, fhr:20, stamina:50, skills_offensive:2, base:""},
*/
	],
    gloves: [
{name:"Gloves"},
{name:"Chance Guards", req_strength:25, req_level:15, defense:28, ar:25, mf:40, gf:200, light_radius:2, base:"Chain Gloves"},
{name:"Magefist", req_strength:45, req_level:23, defense:25, skills_fire_all:1, fcr:20, mana_regen:25, fDamage_min:1, fDamage_max:6, base:"Light Gauntlets"},
//{name:"Frostburn", req_strength:60, req_level:29, defense:49, max_mana:35, damage_bonus:5, cDamage_min:1, cDamage_max:6, base:"Gauntlets"},
{name:"Dracul's Grasp", req_strength:50, req_level:76, defense:145, strength:15, life_per_kill:10, owounds:25, life_leech:10, base:"Vampirebone Gloves"},
{name:"Ghoulhide", req_strength:58, req_level:36, defense:130, ar_vs_undead_per_level:8, damage_vs_undead_per_level:2, mana_leech:5, life:20, base:"Heavy Bracers"},
{name:"Soul Drainer", req_strength:106, req_level:74, defense:149, pierce:7, life_leech:7, mana_leech:7, monster_defense_per_hit:-50, e_def:120, dexterity:7, base:"Vambraces"},
{name:"Laying of Hands", req_strength:50, req_level:63, defense:87, ias:20, fRes:50, damage_vs_demons:250},
{name:"Trang-Oul's Claws", req_strength:58, req_level:45, defense:74, skills_curses:2, fcr:20, cRes:30, pDamage:25},
/*
{name:"The Hand of Broc", req_strength:0, req_level:0, defense:0, base:"Leather Gloves"}
{name:"Bloodfist", req_strength:0, req_level:0, defense:0, base:"Heavy Gloves"}
{name:"Venom Grip", req_strength:0, req_level:0, defense:0, base:"Demonhide Gloves"}
{name:"Gravepalm", req_strength:0, req_level:0, defense:0, base:"Sharkskin Gloves"}
{name:"Lava Gout", req_strength:0, req_level:0, defense:0, base:"Battle Gauntlets"}
{name:"Hellmouth", req_strength:0, req_level:0, defense:0, base:"War Gauntlets"}
{name:"Steelrend", req_strength:0, req_level:0, defense:0, base:"Ogre Gauntlets"}
*/
	],
    boots: [
{name:"Boots"},
{name:"Infernostride", req_strength:20, req_level:29, defense:105, kick_min:26, frw:20, fRes:30, fRes_max:10, fire_min:12, fire_max:33, gf:70, light_radius:2, base:"Demonhide Boots"},
{name:"Waterwalk", req_strength:47, req_level:32, defense:124, kick_min:28, frw:20, dexterity:15, fRes_max:5, stamina:40, life:65, missile_defense:100, heal_stam:50, base:"Sharkskin Boots"},
{name:"Silkweave", req_strength:65, req_level:36, defense:130, kick_min:32, frw:30, mana_per_kill:5, max_mana:10, missile_defense:200, base:"Mesh Boots"},
{name:"War Traveler", req_strength:95, req_level:42, defense:139, kick_min:37, frw:25, vitality:10, strength:10, mf:50, damage_min:15, damage_max:25, thorns:10, slower_stam_drain:40, base:"Battle Boots"},
{name:"Gore Rider", req_strength:94, req_level:47, defense:162, kick_min:39, frw:30, owounds:10, cblow:15, dstrike:15, stamina:20, base:"War Boots"},
{name:"Sandstorm Trek", req_strength:91, req_level:64, defense:178, kick_min:60, frw:20, fhr:20, stamina_per_level:1, strength:15, vitality:15, slower_stam_drain:50, pRes:70, base:"Scarabshell Boots"},
{name:"Marrowwalk", req_strength:118, req_level:66, defense:204, kick_min:69, frw:20, e_def:200, skill_summon_mastery:2, skill_flesh_offering:1, strength:20, dexterity:17, mana_regen:10, heal_stam:10, half_freeze:1, base:"Boneweave Boots"},
{name:"Shadow Dancer", req_strength:167, req_level:71, defense:144, kick_min:83, skills_shadow:2, frw:30, fhr:30, dexterity:25, base:"Myrmidon Greaves"},
{name:"Aldur's Advance", req_strength:95, req_level:45, defense:47, kick_min:37, frw:40, stamina:180, damage_to_mana:10, heal_stam:32, life:50, fRes:50},
/*
{name:"Hotspur", req_strength:0, req_level:0, defense:0, kick_min:0, base:"Boots"}
{name:"Gorefoot", req_strength:0, req_level:0, defense:0, kick_min:0, base:"Heavy Boots"}
{name:"Treads of Cthon", req_strength:0, req_level:0, defense:0, kick_min:0, base:"Chain Boots"}
{name:"Goblin Toe", req_strength:0, req_level:0, defense:0, kick_min:0, base:"Light Plated Boots"}
{name:"Tearhaunch", req_strength:0, req_level:0, defense:0, kick_min:0, base:"Greaves"}
*/
	],
    belt: [
{name:"Belt"},
{name:"Goldwrap", req_strength:45, req_level:27, defense:36, ias:10, mf:30, gf:80, light_radius:2, base:"Heavy Belt"},
{name:"String of Ears", req_strength:20, req_level:29, defense:113, life_leech:8, pdr:15, mDamage_reduced:15, base:"Demonhide Sash"},
{name:"Verdungo's Hearty Cord", req_strength:106, req_level:63, defense:158, pdr:15, fhr:10, vitality:40, life_regen:13, stamina:120, base:"Mithril Coil"},
{name:"Razortail", req_strength:20, req_level:32, defense:107, damage_max:10, pierce:33, dexterity:15, thorns_per_level:1, base:"Sharkskin Belt"},
{name:"Snowclash", req_strength:88, req_level:42, defense:116, skills_cold_all:1, cAbsorb_flat:15, skill_glacial_spike:3, cRes_max:5, base:"Battle Belt"},
{name:"Thundergod's Vigor", req_strength:110, req_level:47, defense:159, lAbsorb_flat:20, lRes_max:10, strength:20, vitality:20, skill_lightning_fury:3, skill_lightning_strike:3, lDamage_min:1, lDamage_max:50, base:"War Belt"},
{name:"Arachnid Mesh", req_strength:50, req_level:80, defense:138, all_skills:1, fcr:20, max_mana:5, slow_target:10, base:"Spiderweb Sash"},
//{set_TR:1, name:"Tal Rasha's Fine-Spun Cloth", req_strength:47, req_level:53, defense:40, req_reduced:20, damage_to_mana:37, mana:30, dexterity:20, mf:15, base:"Mesh Belt", set_bonuses:["set_TR",0,{defense:60},{fcr:10}]},
/*
{name:"Lenymo", req_strength:0, req_level:0, defense:0, base:"Sash"}
{name:"Snakecord", req_strength:0, req_level:0, defense:0, base:"Light Belt"}
{name:"Nightsmoke", req_strength:0, req_level:0, defense:0, base:"Belt"}
{name:"Bladebuckle", req_strength:0, req_level:0, defense:0, base:"Plated Belt"}
{name:"Gloom's Trap", req_strength:0, req_level:0, defense:0, base:"Mesh Belt"}
{name:"Nosferatu's Coil", req_strength:0, req_level:0, defense:0, base:"Vampirefang Belt"}
*/
	],
    amulet: [
{name:"Amulet"},
{name:"Corrupted +skills #1", req_level:60, all_skills:1, skills_amazon:2, skills_martial:3, skills_warcries:3, skills_elemental:3, skills_summoning_necromancer:3, skills_defensive:3, skills_cold:3},
{name:"Corrupted +skills #2", req_level:60, all_skills:1, skills_passives:3, skills_shadow:3, skills_masteries:3, skills_shapeshifting:3, skills_poisonBone:3, skills_offensive:3, skills_lightning:3},
{name:"Corrupted +skills #3", req_level:60, all_skills:1, skills_amazon:2, skills_traps:3, skills_barbarian:2, skills_summoning_druid:3, skills_curses:3, skills_combat_paladin:3, skills_fire:3},
{name:"Mara's Kaleidoscope", req_level:67, all_skills:2, all_res:30, all_attributes:5},
{name:"Highlord's Wrath", req_level:65, all_skills:1, ias:20, dstrike_per_level:0.375, lRes:35, lDamage_min:1, lDamage_max:30, thorns:15},
{name:"Seraph's Hymn", req_level:65, all_skills:2, skills_defensive:2, damage_vs_demons:50, damage_vs_undead:50, ar_vs_demons:250, ar_vs_undead:250, light_radius:2},
{name:"The Cat's Eye", req_level:50, frw:30, ias:20, defense:100, dexterity:25, missile_defense:100},
{name:"Metalgrid", req_level:81, ar:450, all_res:35, defense:350, charges_iron_maiden:12, charges_iron_golem:22},
{name:"The Rising Sun", req_level:65, skills_fire_all:2, fAbsorb_per_level:0.75, fDamage_min:24, fDamage_max:48, life_regen:10, light_radius:4},
{name:"The Eye of Etlich", req_level:15, all_skills:1, life_leech:7, cDamage_min:2, cDamage_max:5, missile_defense:40, light_radius:5},
{name:"Telling of Beads", req_level:30, all_skills:1, pRes:50, cRes:18, thorns:10},
//{set_TR:1, name:"Tal Rasha's Adjudication", req_level:67, skills_sorceress:2, lRes:33, mana:42, life:50, lDamage_min:3, lDamage_max:32, set_bonuses:["set_TR",0,{},{},{fcr:10}]},
/*
{name:"Atma's Scarab", req_level:0, },
{name:"Crescent Moon", req_level:0, },
{name:"Nokozan Relic", req_level:0, },
{name:"Saracen's Chance", req_level:0, },
{name:"The Mahim-Oak Curio", req_level:0, },
*/
	],
    ring1: [
{name:"Ring"},
{name:"Nagelring", req_level:7, mDamage_reduced:3, ar:75, thorns:3, mf:30},
{name:"Manald Heal", req_level:15, mana_leech:7, life_regen:8, mana_regen:20, life:20},
{name:"Carrion Wind", req_level:60, life_leech:9, missile_defense:160, pRes:55, damage_to_mana:10, charges_poison_creeper:21},
{name:"Nature's Peace", req_level:69, peace:1, pmh:1, pRes:30, damage_reduced:11, charges_oak_sage:5},
{name:"Dwarf Star", req_level:45, fAbsorb:15, stamina:40, life:40, gf:100, mDamage_reduced:15, cDamage_min:15, cDamage_max:45},
{name:"Raven Frost", req_level:45, ar:250, cbf:1, dexterity:20, mana:40, cAbsorb:20},
{name:"The Stone of Jordan", req_level:29, all_skills:1, mana:20, max_mana:25, lDamage_min:1, lDamage_max:12},
{name:"Bul-Kathos' Wedding Band", req_level:58, all_skills:1, life_per_level:0.5, life_leech:5, stamina:50},
//{name:"Wisp Projector", req_level:76, lAbsorb:12, mf:20, frw:8, damage_bonus:10},	// implement damage_bonus
	],
    ring2: [
{name:"Ring"},
{name:"Nagelring", req_level:7, mDamage_reduced:3, ar:75, thorns:3, mf:30},
{name:"Manald Heal", req_level:15, mana_leech:7, life_regen:8, mana_regen:20, life:20},
{name:"Carrion Wind", req_level:60, life_leech:9, missile_defense:160, pRes:55, damage_to_mana:10, charges_poison_creeper:21},
{name:"Nature's Peace", req_level:69, peace:1, pmh:1, pRes:30, damage_reduced:11, charges_oak_sage:5},
{name:"Dwarf Star", req_level:45, fAbsorb:15, stamina:40, life:40, gf:100, mDamage_reduced:15, cDamage_min:15, cDamage_max:45},
{name:"Raven Frost", req_level:45, ar:250, cbf:1, dexterity:20, mana:40, cAbsorb:20},
{name:"The Stone of Jordan", req_level:29, all_skills:1, mana:20, max_mana:25, lDamage_min:1, lDamage_max:12},
{name:"Bul-Kathos' Wedding Band", req_level:58, all_skills:1, life_per_level:0.5, life_leech:5, stamina:50},
//{name:"Wisp Projector", req_level:76, lAbsorb:12, mf:20, frw:8, damage_bonus:10},	// implement damage_bonus
	],
    weapon: [
{name:"Weapon"},
{only:"amazon", name:"Titan's Revenge", req_strength:25, req_dexterity:109, req_level:42, e_damage:200, damage_min:79, damage_max:155, skills_amazon:2, life_leech:9, frw:30, strength:20, dexterity:20, autoreplenish:1, skills_javelins:2},
{only:"amazon", name:"Thunderstroke", req_strength:107, req_dexterity:151, req_level:69, e_damage:200, lDamage_min:1, lDamage_max:511, ias:15, enemy_lRes:-15, skills_javelins:4, skill_lightning_bolt:3},
{only:"amazon", name:"Blood Raven's Charge", twoHanded:1, req_strength:87, req_dexterity:187, req_level:71, e_damage:230, ar_bonus:300, skills_bows:4, charges_revive:5},	// conflict with skill ar bonus
{only:"amazon", name:"Lycander's Aim", twoHanded:1, req_strength:73, req_dexterity:110, req_level:42, e_damage:200, damage_min:82, damage_max:173, ias:20, skills_amazon:2, mana_leech:8, energy:20, dexterity:20, defense_bonus:20, skills_bows:2},	// bonus defense on weapon
{only:"amazon", name:"Lycander's Flank", twoHanded:1, req_strength:115, req_dexterity:98, req_level:42, e_damage:200, damage_min:151, damage_max:353, skills_amazon:2, ias:30, life_leech:9, strength:20, vitality:20, defense_bonus:20, skills_javelins:2},	// bonus defense on weapon
{only:"amazon", name:"Stoneraven", twoHanded:1, req_strength:114, req_dexterity:142, req_level:64, e_damage:280, mDamage_min:101, mDamage_max:187, damage_min:247, damage_max:361, defense:600, all_res:50, skills_javelins:3},
{only:"assassin", name:"Bartuc's Cut-Throat", type:"claw", req_strength:79, req_dexterity:79, req_level:42, e_damage:200, damage_min:88, damage_max:155, fhr:30, bonus_ar:20, life_leech:9, strength:20, dexterity:20, skills_assassin:2, skills_martial:1, base:"Greater Talons"},
{only:"assassin", name:"Jade Talon", type:"claw", req_strength:105, req_dexterity:105, req_level:66, e_damage:240, damage_min:115, damage_max:153, skills_martial:2, skills_shadow:2, fhr:30, mana_leech:15, all_res:50, base:"Wrist Sword"},
{only:"assassin", name:"Shadow Killer", type:"claw", req_strength:100, req_dexterity:100, req_level:78, e_damage:220, damage_min:172, damage_max:201, target_defense:-25, freezes_target:2, mana_per_kill:15, indestructible:1, ethereal:1, base:"Battle Cestus"},
{only:"assassin", name:"Firelizard's Talons", type:"claw", req_strength:113, req_dexterity:113, req_level:67, e_damage:270, damage_min:81, damage_max:196, fDamage_min:236, fDamage_max:480, ias:15, skills_martial:3, skills_fire_all:2, skill_fists_of_ember:2, fRes:70, base:"Feral Claws"},
{only:"sorceress", name:"The Oculus", req_level:42, skills_sorceress:3, mana_per_kill:5, all_res:20, fcr:30, vitality:20, energy:20, defense_bonus:20, mf:50, damage_min:18, damage_max:42},
{only:"sorceress", name:"Eschuta's Temper", req_level:72, skills_sorceress:3, fcr:40, fDamage:20, lDamage:20, energy:30, damage_min:18, damage_max:50},
{only:"sorceress", name:"Death's Fathom", req_level:73, skills_sorceress:3, fcr:20, cDamage:30, lRes:40, fRes:40, damage_min:30, damage_max:53},
//{only:"sorceress", set_TR:1, name:"Tal Rasha's Lidless Eye", req_level:65, damage_min:18, damage_max:42, fcr:20, mana:77, life:57, energy:10, skill_lightning_mastery:2, skill_fire_mastery:2, skill_cold_mastery:2, base:"Swirling Crystal", set_bonuses:["set_TR",0,{skills_sorceress:1},{enemy_fRes:-15},{enemy_lRes:-15},{cDamage:15}]},
{name:"Khalim's Will", type:"mace", ias:50, ar:40, life_leech:6, mana_leech:6, damage_vs_undead:50, damage_min:1, damage_max:15, lDamage_min:1, lDamage_max:40, base:"Flail"},
{name:"Spirit Crystal Sword", req_strength:43, req_level:25, type:"sword", all_skills:2, fcr_per_level:0.375, fhr:55, life_leech:7, mana_per_level:1, missile_defense:75, mAbsorb_flat:8, damage_min:5, damage_max:15, pDamage_min:75, pDamage_max:75, lDamage_min:1, lDamage_max:50, cDamage_min:3, cDamage_max:14},
{name:"Heart of the Oak Flail", req_dexterity:35, req_strength:41, req_level:55, type:"mace", all_skills:3, fcr:40, mana_leech:7, dexterity:10, life_regen:20, max_mana:15, all_res:40, max_life:8, damage_min:1, damage_max:24, cDamage_min:3, cDamage_max:14},
{name:"Lightsabre", req_dexterity:136, req_strength:25, req_level:58, type:"sword", mana_leech:7, ias:20, itd:1, lAbsorb:15, light_radius:7, damage_min:103, damage_max:135, mDamage_min:60, mDamage_max:120, lDamage_min:1, lDamage_max:200, base:"Phase Blade"},
{name:"Grief Phase Blade", req_dexterity:136, req_strength:25, req_level:59, type:"sword", ias:40, itd:1, target_defense:-25, enemy_pRes:-25, dstrike:20, pmh:1, mana_per_kill:2, life_per_kill:15, fDamage_min:5, fDamage_max:30, min_damage_per_level:3.375, max_damage_per_level:3.625, damage_min:31, damage_max:35},
{name:"Death Cleaver", req_dexterity:59, req_strength:138, req_level:70, type:"axe", ias:40, damage_min:91, damage_max:269, target_defense:-33, dstrike:66, life_per_kill:9, base:"Berserker Axe"},
{name:"Warshrike", req_strength:45, req_dexterity:142, req_level:75, type:"thrown", e_damage:250, damage_min:80, damage_max:136, dstrike:50, ias:30, autoreplenish:1, lDamage_min:1, lDamage_max:80, base:"Winged Knife"},
{name:"Boneshade", req_strength:25, req_level:79, damage_vs_undead:50, fcr:25, skills_necromancer:2, skill_bone_spirit:2, skill_bone_spear:3, skill_bone_wall:3, skill_bone_armor:5, skill_teeth:5, damage_min:10, damage_max:31, base:"Lich Wand"},
{name:"Death's Web", req_strength:25, req_level:66, damage_vs_undead:50, enemy_pRes:-50, mana_per_kill:12, life_per_kill:12, all_skills:2, skills_poisonBone:2, damage_min:22, damage_max:28, base:"Unearthed Wand"},
{name:"Astreon's Iron Ward", req_strength:97, req_dexterity:70, req_level:66, e_damage:290, damage_vs_undead:50, damage_min:144, damage_max:167, mDamage_min:80, mDamage_max:240, cblow:33, slow_target:25, damage_reduced:7, skills_combat_paladin:4, ias:10, bonus_ar:200, base:"Caduceus"},
{name:"The Cranium Basher", req_strength:253, req_level:87, type:"mace", cblow:75, ias:20, all_res:25, strength:25, damage_min:132, damage_max:652, damage_vs_undead:50},
{name:"Windforce", twoHanded:1, req_dexterity:167, req_strength:134, req_level:73, type:"bow", ias:20, mana_leech:8, strength:10, dexterity:5, knockback:1, damage_min:35, damage_max:241, damage_max_per_level:3.125, heal_stam:30},
/*

*/
	],
    offhand: [
{name:"Offhand"},
{only:"necromancer", name:"Homunculus", req_strength:58, req_level:42, defense:213, block:72, e_def:200, mana_per_kill:5, ibc:40, fbr:30, skills_necromancer:2, energy:20, mana_regen:33, all_res:40, skills_curses:2, base:"Heirophant Trophy"},
{only:"necromancer", name:"Darkforce Spawn", req_strength:106, req_level:65, defense:417, block:32, e_def:180, skills_summoning_necromancer:3, skills_poisonBone:3, skills_ccurses:3, fcr:30, max_mana:10, base:"Bloodlord Skull"},
{only:"necromancer", name:"Boneflame", req_strength:95, req_level:72, defense:367, block:30, e_def:150, frw:20, skills_necromancer:3, all_res:30, base:"Succubae Skull"},
{only:"paladin", name:"Herald of Zakarum", req_strength:89, req_level:42, defense:507, block:82, e_def:200, ibc:30, fbr:30, ar_bonus:20, strength:20, vitality:20, all_res:50, skills_paladin:2, skills_combat_paladin:2, smite_min:20, smite_max:28, base:"Gilded Shield"},
{only:"paladin", name:"Alma Negra", req_strength:109, req_level:77, defense:511, block:78, e_def:210, cdr:30, skills_paladin:2, ibc:20, fbr:30, e_damage:75, are_bonus:75, mDamage_reduced:9, smite_min:35, smite_max:58, base:"Sacred Rondache"},
{only:"paladin", name:"Dragonscale", req_strength:142, req_level:80, defense:582, block:52, e_damage:200, fDamage_min:211, fDamage_max:371, fDamage:15, oskill_hydra:10, fRes_max:5, strength:25, fAbsorb:20, smite_min:46, smite_max:46, base:"Zakarum Shield"},
{name:"Stormshield", req_strength:156, req_level:73, defense:519, pdr:30, fbr:35, cRes:60, lRes:25, strength:30, defense_per_level:3.75, ibc:25, thorns:10, base:"Monarch"},
{name:"Spirit Monarch", req_strength:156, req_level:54, defense:148, all_skills:2, fcr:35, fhr:55, vitality:22, mana:112, cRes:35, lRes:35, pRes:35, missile_defense:250, thorns:14, mAbsorb_flat:8},
{name:"Lidless Wall", req_strength:58, req_level:41, defense:347, all_skills:1, max_mana:10, fcr:20, mana_per_kill:5, energy:10, light_radius:1, base:"Grim Shield"},
/*
{name:"Pelta Lunata", req_strength:0, req_level:0, defense:0, block:0, base:"Buckler"}
{name:"Umbral Disk", req_strength:0, req_level:0, defense:0, block:0, base:"Small Shield"}
{name:"Stormguild", req_strength:0, req_level:0, defense:0, block:0, base:"Large Shield"}
{name:"Swordback Hold", req_strength:0, req_level:0, defense:0, block:0, base:"Spiked Shield"}
{name:"Steelclash", req_strength:0, req_level:0, defense:0, block:0, base:"Kite Shield"}
{name:"Wall of the Eyeless", req_strength:0, req_level:0, defense:0, block:0, base:"Bone Shield"}
{name:"Bverrit Keep", req_strength:0, req_level:0, defense:0, block:0, base:"Tower Shield"}
{name:"The Ward", req_strength:0, req_level:0, defense:0, block:0, base:"Gothic Shield"}
{name:"Visceratuant", req_strength:0, req_level:0, defense:0, block:0, base:"Defender"}
{name:"Moser's Blessed Circle", req_level:, defense:, block:0, base:""},
{name:"Stormchaser", req_strength:0, req_level:0, defense:0, block:0, base:"Scutum"}
{name:"Lance Guard", req_strength:0, req_level:0, defense:0, block:0, base:"Barbed Shield"}
{name:"Tiamat's Rebuke", req_strength:0, req_level:0, defense:0, block:0, base:"Dragon Shield"}
{name:"Gerke's Sanctuary", req_strength:0, req_level:0, defense:0, block:0, base:"Pavise"}
{name:"Radament's Sphere", req_strength:0, req_level:0, defense:0, block:0, base:"Ancient Shield"}
{name:"Blackoak Shield", req_strength:0, req_level:0, defense:0, block:0, base:"Luna"}
{name:"Spike Thorn", req_level:, defense:, block:0, base:""},
{name:"Head Hunter's Glory", req_level:, defense:, block:0, base:""},
{name:"Medusa's Gaze", req_strength:0, req_level:0, defense:0, block:0, base:"Aegis"}
{name:"Spirit Ward", req_strength:0, req_level:0, defense:0, block:0, base:"Ward"}
*/
	],
    charms: [
{name:"Charms"},
{name:"Annihilus", type:"small", req_level:80, all_skills:1, all_res:20, all_attributes:20},
{name:"Hellfire Torch", type:"large", req_level:75, all_skills:3, all_res:20, all_attributes:20, light_radius:8},
{name:"Gheed's Fortune", type:"grand", req_level:62, gf:160, mf:40},
{name:"Skill Grand Charm #1", type:"grand", req_level:42, skills_javelins:1, skills_martial:1, skills_warcries:1, skills_elemental:1, skills_summoning_necromancer:1, skills_defensive:1, skills_cold:1},
{name:"Skill Grand Charm #2", type:"grand", req_level:42, skills_passives:1, skills_shadow:1, skills_masteries:1, skills_shapeshifting:1, skills_poisonBone:1, skills_offensive:1, skills_lightning:1},
{name:"Skill Grand Charm #3", type:"grand", req_level:42, skills_bows:1, skills_traps:1, skills_combat_barbarian:1, skills_summoning_druid:1, skills_curses:1, skills_combat_paladin:1, skills_fire:1},
{name:"Life,Mana Small Charm", type:"small", req_level:40, life:20, mana:17},
{name:"Res,MF Small Charm", type:"small", req_level:33, all_res:5, mf:7},
{name:"Res,FRW Small Charm", type:"small", req_level:33, all_res:5, frw:3},
{name:"FHR,AR,Damage Small Charm", type:"small", req_level:39, life:20, fhr:5},
{name:"Life,AR,Damage Small Charm", type:"small", req_level:39, life:20, ar:20, damage_max:3},
{name:"Life,AR,Damage Large Charm", type:"large", req_level:66, life:35, ar:48, damage_max:6},
{name:"Life,AR,Damage Grand Charm", type:"grand", req_level:83, life:45, ar:76, damage_max:10},
{name:"+20 skills", req_level:100, all_skills:20},
	]
}

// SET ITEMS
	/*
{set_IK:1, name:"Immortal King's Stone Crusher", req_strength:225, req_level:76, e_damage:200, damage_vs_demons:200, damage_vs_undead:200, ias:40, indestuctible:1, cblow:40, sockets:2, base:"Ogre Maul", set_bonuses:[0,0,{fDamage_min:211, fDamage_max:397},{lDamage_min:7, lDamage_max:477},{cDamage_min:127, cDamage_max:364},{pDamage_max:204},{mDamage_min:250, mDamage_max:361}]},
{set_IK:1, name:"Immortal King's Soul Cage", req_strength:232, req_level:76, defense:1000, pRes:50, skills_combat_barbarian:2, base:"Sacred Armor"},
{set_IK:1, name:"Immortal King's Will", req_strength:65, req_level:47, defense:175, light_radius:4, gf:37, mf:40, skills_warcries:2, sockets:2, base:"Avenger Guard"},
{set_IK:1, name:"Immortal King's Forge", req_strength:110, req_level:30, defense:118, dexterity:20, strength:20, base:"War Gauntlets"},
{set_IK:1, name:"Immortal King's Detail", req_strength:110, req_level:29, defense:89, lRes:31, fRes:28, strength:25, base:"War Belt"},
{set_IK:1, name:"Immortal King's Pillar", req_strength:125, req_level:31, defense:128, frw:40, ar:110, life:44, base:"War Boots"},

{set_Mav:1, name:"M'avina's Caster", req_strength:108, req_dexterity:152 req_level:70, damage_min:40, damage_max:207 e_damage:188, ias:40, ar:50, base:"Grand Matron Bow"},
{set_Mav:1, name:"M'avina's Embrace", req_strength:122, req_level:70, defense:771, defense_per_level:4, mDamage_reduced:12, skills_passives, base:"Kraken Shell"},
{set_Mav:1, name:"M'avina's True Sight", req_level:64, defense:210, life_regen:10, mana:25, ias:30, base:"Diadem"},
{set_Mav:1, name:"M'avina's Icy Clutch", req_strength:88, req_level:32, defense:97, cDamage_min:6, cDamage_max:18, half_freeze:1, gf:56, strength:10, dexterity:10, base:"Battle Gauntlets"},
{set_Mav:1, name:"M'avina's Tenet", req_strength:20, req_level:45, defense:86, frw:20, light_radius:5, mana_leech:5, base:"Sharkskin Belt"},

{set_Ald:1, name:"Aldur's Rhythm", req_strength:74, req_level:42, damage_min:60, damage_max:83, damage_vs_demons:200, damage_vs_undead:50, lDamage_min:50, lDamage_max:75, ias:30, life_leech:10, mana_leech:5, sockets:3, base:"Jagged Star"},
{set_Ald:1, name:"Aldur's Deception", req_strength:115, req_level:76, defense:857, req_reduced:50, lRes:50, dexterity:15, strength:20, skills_elemental:1, skills_shapeshifting:1, base:"Shadow Plate"},
{set_Ald:1, name:"Aldur's Stony Gaze", req_strength:0, req_level:0, defense:0, base:"Hunter's Guise"}
{set_Ald:1, name:"Aldur's Advance", req_strength:95, req_level:45, defense:47, kick_min:37, frw:40, stamina:180, damage_to_mana:10, heal_stam:32, life:50, fRes:50, base:"Battle Boots"},

{set_TO:1, name:"Trang-Oul's Guise", req_strength:0, req_level:0, defense:0, base:"Bone Visage"}
{set_TO:1, name:"Trang-Oul's Scales", req_strength:0, req_level:0, defense:0, base:"Chaos Armor"}
{set_TO:1, name:"Trang-Oul's Wing", req_strength:0, req_level:0, defense:0, base:"Cantor Trophy"}
{set_TO:1, name:"Trang-Oul's Girth", req_strength:0, req_level:0, defense:0, base:"Troll Belt"}
{set_TO:1, name:"Trang-Oul's Claws", req_strength:58, req_level:45, defense:74, skills_curses:2, fcr:20, cRes:30, pDamage:25, base:"Heavy Bracers"},

{set_Gris:1, name:"Griswold's Heart", req_strength:0, req_level:0, defense:0, base:"Ornate Plate"}
{set_Gris:1, name:"Griswold's Valor", req_strength:0, req_level:0, defense:0, base:"Corona"}
{set_Gris:1, name:"Griswold's Redemption", req_strength:0, req_level:0, defense:0, base:"Caduceus"}
{set_Gris:1, name:"Griswold's Honor", req_strength:0, req_level:0, defense:0, base:"Vortex Shield"}

{set_Nat:1, name:"Natalya's Totem", req_strength:0, req_level:0, defense:0, base:"Grim Helm"}
{set_Nat:1, name:"Natalya's Mark", req_strength:0, req_level:0, defense:0, base:"Scissors Suwayyah"}
{set_Nat:1, name:"Natalya's Shadow", req_strength:0, req_level:0, defense:0, base:"Loricated Mail"}
{set_Nat:1, name:"Natalya's Soul", req_strength:0, req_level:0, defense:0, base:"Mesh Boots"}

//{set_TR:1, name:"Tal Rasha's Lidless Eye", req_level:65, damage_min:18, damage_max:42, fcr:20, mana:77, life:57, energy:10, skill_lightning_mastery:2, skill_fire_mastery:2, skill_cold_mastery:2, base:"Swirling Crystal", set_bonuses:[0,0,{skills_sorceress:1},{enemy_fRes:-15},{enemy_lRes:-15},{cDamage:15}]},
//{set_TR:1, name:"Tal Rasha's Guardianship", req_strength:84, req_level:71, defense:941, velocity:-5, mDamage_reduced:15, cRes:40, lRes:40, fRes:40, mf:88, base:"Lacquered Plate", set_bonuses:[0,0,{fcr:10}]},
//{set_TR:1, name:"Tal Rasha's Horadric Crest", req_strength:55, req_level:66, defense:131, life_leech:10, mana_leech:10, all_res:15, mana:30, life:60, base:"Death Mask"},
//{set_TR:1, name:"Tal Rasha's Fine-Spun Cloth", req_strength:47, req_level:53, defense:40, req_reduced:20, damage_to_mana:37, mana:30, dexterity:20, mf:15, base:"Mesh Belt", set_bonuses:[0,0,{defense:60},{fcr:10}]},
//{set_TR:1, name:"Tal Rasha's Adjudication", req_level:67, skills_sorceress:2, lRes:33, mana:42, life:50, lDamage_min:3, lDamage_max:32, set_bonuses:[0,0,{},{},{fcr:10}]},

{set_:1, name:"Angelic Mantle", req_strength:0, req_level:0, defense:0, base:"Ring Mail"},
{set_:1, name:"Angelic Sickle", req_strength:0, req_level:0, base:"Saber"},
{set_:1, name:"Arcanna's Head", req_strength:0, req_level:0, defense:0, base:"Skull Cap"},
{set_:1, name:"Arcanna's Flesh", req_strength:0, req_level:0, defense:0, base:"Light Plate"},
{set_:1, name:"Arcanna's Deathwand", req_strength:0, req_level:0, base:"War Staff"},
{set_:1, name:"Arctic Furs", req_strength:0, req_level:0, defense:0, base:"Quilted Armor"},
{set_:1, name:"Arctic Binding", req_strength:0, req_level:0, defense:0, base:"Light Belt"},
{set_:1, name:"Arctic Horn", req_strength:0, req_level:0, base:"Short War Bow"},
{set_:1, name:"Arctic ...", req_strength:0, req_level:0, defense:0, base:"Light Gauntlets"},
{set_:1, name:"Berserker's Headgear", req_strength:0, req_level:0, defense:0, base:"Helm"},
{set_:1, name:"Berserker's Hauberk", req_strength:0, req_level:0, defense:0, base:"Splint Mail"},
{set_:1, name:"Berserker's Hatchet", req_strength:0, req_level:0, base:"Double Axe"},
{set_:1, name:"Cathan's Visage", req_strength:0, req_level:0, defense:0, base:"Mask"},
{set_:1, name:"Cathan's Mesh", req_strength:0, req_level:0, defense:0, base:"Chain Mail"},
{set_:1, name:"Cathan's Rule", req_strength:0, req_level:0, base:"Battle Staff"},
{set_:1, name:"Cathan's Seal", req_strength:0, req_level:0},
{set_:1, name:"Cathan's Sigil", req_strength:0, req_level:0},
{set_:1, name:"Civerb's Cudgel", req_strength:0, req_level:0, base:"Grand Scepter"},
{set_:1, name:"Civerb's Ward", req_strength:0, req_level:0, defense:0, base:"Large Shield"},
{set_:1, name:"Civerb's Icon", req_strength:0, req_level:0},
{set_:1, name:"Cleglaw's Tooth", req_strength:0, req_level:0, base:"Long Sword"},
{set_:1, name:"Cleglaw's Pincers", req_strength:0, req_level:0, base:"Chain Gloves"},
{set_:1, name:"Cleglaw's Claw", req_strength:0, req_level:0, defense:0, base:"Small Shield"},
{set_:1, name:"Death's Touch", req_strength:0, req_level:0, base:"War Sword"},
{set_:1, name:"Death's Hand", req_strength:0, req_level:0, defense:0, base:"Leather Gloves"},
{set_:1, name:"Death's Guard", req_strength:0, req_level:0, defense:0, base:"Sash"},
{set_:1, name:"Hsarus' Iron Fist", req_strength:0, req_level:0, defense:0, base:"Buckler"},
{set_:1, name:"Hsarus' Iron Heel", req_strength:0, req_level:0, defense:0, base:"Chain Boots"},
{set_:1, name:"Hsarus' Iron Stay", req_strength:0, req_level:0, defense:0, base="Belt"},
{set_:1, name:"Infernal Torch", req_strength:0, req_level:0, base:"Grim Wand"},
{set_:1, name:"Infernal Cranium", req_strength:0, req_level:0, defense:0, base="Cap"},
{set_:1, name:"Infernal Sign", req_strength:0, req_level:0, defense:0, base="Heavy Belt"},
{set_:1, name:"Iratha's Coil", req_strength:0, req_level:0, defense:0, base="Crown"},
{set_:1, name:"Irath's Cuff", req_strength:0, req_level:0, defense:0, base="Light Gauntlets"},
{set_:1, name:"Iratha's Cord", req_strength:0, req_level:0, defense:0, base="Heavy Belt"},
{set_:1, name:"Iratha's Collar", req_strength:0, req_level:0},
{set_:1, name:"Isenhart's Lightbrand", req_strength:0, req_level:0, base:"Broad Sword"},
{set_:1, name:"Isenhart's Horns", req_strength:0, req_level:0, defense:0, base:"Full Helm"},
{set_:1, name:"Isenhart's Case", req_strength:0, req_level:0, defense:0, base:"Breast Plate"},
{set_:1, name:"Isenhart's Parry", req_strength:0, req_level:0, defense:0, base:"Gothic Shield"},
{set_:1, name:"Milabrega's Robe", req_strength:0, req_level:0, defense:0, base:"Ancient Armor"},
{set_:1, name:"Milabrega's Orb", req_strength:0, req_level:0, defense:0, base:"Kite Shield"},
{set_:1, name:"Milabrega's Rod", req_strength:0, req_level:0, base:"War Scepter"},
{set_:1, name:"Milabrega's Diadem", req_strength:0, req_level:0, defense:0, base="Crown"},
{set_:1, name:"Sigon's Visor", req_strength:0, req_level:0, defense:0, base:"Great Helm"},
{set_:1, name:"Sigon's Shelter", req_strength:0, req_level:0, defense:0, base:"Gothic Plate"},
{set_:1, name:"Sigon's Sabot", req_strength:0, req_level:0, defense:0, base:"Greaves"},
{set_:1, name:"Sigon's Guard", req_strength:0, req_level:0, defense:0, base:"Tower Shield"},
{set_:1, name:"Sigon's Wrap", req_strength:0, req_level:0, defense:0, base:"Plated Belt"},
{set_:1, name:"Sigon's Gage", req_strength:0, req_level:0, defense:0, base:"Gauntlets"},
{set_:1, name:"Tancred's Skull", req_strength:0, req_level:0, defense:0, base:"Bone Helm"},
{set_:1, name:"Tancred's Spine", req_strength:0, req_level:0, defense:0, base:"Full Plate"},
{set_:1, name:"Tancred's Hobnails", req_strength:0, req_level:0, defense:0, base:"Boots"},
{set_:1, name:"Tancred's Crowbill", req_strength:0, req_level:0, base:"Military Pick"},
{set_:1, name:"Tancred's Weird", req_strength:0, req_level:0},
{set_:1, name:"Vidala's Barb", req_strength:0, req_level:0, base:"Long Battle Bow"},
{set_:1, name:"Vidala's Ambush", req_strength:0, req_level:0, defense:0, base:"Leather Armor"},
{set_:1, name:"Vidala's Fetlock", req_strength:0, req_level:0, defense:0, base:"Light Plated Boots"},
{set_:1, name:"Vidala's Snare", req_strength:0, req_level:0},
{set_:1, name:"Sander's Superstition", req_strength:0, req_level:0, base:"Bone Wand"},
{set_:1, name:"Sander's Taboo", req_strength:0, req_level:0, defense:0, base:"Heavy Gloves"},
{set_:1, name:"Sander's Paragon", req_strength:0, req_level:0, defense:0, base="Cap"},
{set_:1, name:"Sander's Riprap", req_strength:0, req_level:0, defense:0, base="Heavy Boots"},
{set_:1, name:"Cow King's Horns", req_strength:0, req_level:0, defense:0, base:"War Hat"},
{set_:1, name:"Cow King's Hide", req_strength:0, req_level:0, defense:0, base:"Studded Leather"},
{set_:1, name:"Cow King's Hooves", req_strength:0, req_level:0, defense:0, base="Heavy Boots"},
{set_:1, name:"Hwanin's Splendor", req_strength:0, req_level:0, defense:0, base:"Grand Crown"},
{set_:1, name:"Hwanin's Justice", req_strength:0, req_level:0, base:"Bill"},
{set_:1, name:"Hwanin's Refuge", req_strength:0, req_level:0, defense:0, base:"Tigulated Mail"},
{set_:1, name:"Hwanin's Blessing", req_strength:0, req_level:0, defense:0, base="Belt"},
{set_:1, name:"Sazabi's Mental Sheath", req_strength:0, req_level:0, defense:0, base:"Basinet"},
{set_:1, name:"Sazabi's Cobalt Redeemer", req_strength:0, req_level:0, base:"Cryptic Sword"},
{set_:1, name:"Sazabi's Ghost Liberator", req_strength:0, req_level:0, defense:0, base:"Balrog Skin"},
{set_:1, name:"Naj's Circlet", req_strength:0, req_level:0, defense:0, base:"Circlet"},
{set_:1, name:"Naj's Light Plate", req_strength:0, req_level:0, defense:0, base:"Hellforge Plate"},
{set_:1, name:"Naj's Puzzler", req_strength:0, req_level:0, base:"Elder Staff"},
{set_:1, name:"Bul-Kathos' Sacred Charge", req_strength:0, req_level:0, base:"Colossus Blade"},
{set_:1, name:"Bul-Kathos' Tribal Guardian", req_strength:0, req_level:0, base:"Mythical Sword"},
{set_:1, name:"Haemosu's Adamant", req_strength:0, req_level:0, defense:0, base:"Cuirass"},
{set_:1, name:"Dangoon's Teaching", req_strength:0, req_level:0, base:"Reinforced Mace"},
{set_:1, name:"Taebaek's Glory", req_strength:0, req_level:0, defense:0, base:"Ward"},
{set_:1, name:"Ondal's Almighty", req_strength:0, req_level:0, defense:0, base:"Spired Helm"},
{set_:1, name:"Guillaume's Face", req_strength:0, req_level:0, defense:0, base:"Winged Helm"},
{set_:1, name:"Whitstan's Guard", req_strength:0, req_level:0, defense:0, base:"Round Shield"},
{set_:1, name:"Magnus' Skin", req_strength:0, req_level:0, defense:0, base:"Sharkskin Gloves"},
{set_:1, name:"Wilhelm's Pride", req_strength:0, req_level:0, defense:0, base:"Battle Belt"},
{set_:1, name:"Laying of Hands", req_strength:0, req_level:0, defense:0, base:"Bramble Mitts"},
{set_:1, name:"Dark Adherent", req_strength:0, req_level:0, defense:0, base:"Dusk Shroud"},
{set_:1, name:"Rite of Passage", req_strength:0, req_level:0, defense:0, base:"Demonhide Boots"},
{set_:1, name:"Credendum", req_strength:0, req_level:0, defense:0, base:"Mithril Coil"},
{set_:1, name:"Telling of Beads", req_level:30, all_skills:1, pRes:50, cRes:18, thorns:10},

{name:"", req_strength:0, req_level:0, e_damage:0, damage_min:0, damage_max:0, base=""},
{name:"", req_strength:0, req_level:0, defense:0, base=""},

	*/
//var set_all_TR = [{},{},{life_regen:10},{mf:65},{fhr:25},{skills_sorceress:3, life:150, all_res:50, missile_defense:50, defense:150}];

// UNIQUE WEAPONS
/*

{name:"The Gnasher", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Hand Axe"}
{name:"Deathspade", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Axe"}
{name:"Bladebone", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Double Axe"}
{name:"Skull Splitter", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Military Pick"}
{name:"Rakescar", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"War Axe"}
{name:"Axe of Fechmar", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Large Axe"}
{name:"Goreshovel", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Broad Axe"}
{name:"The Chieftain", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Battle Axe"}
{name:"Brainhew", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Great Axe"}
{name:"Humongous", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Giant Axe"}
{name:"Coldkill", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Hatchet"}
{name:"Butcher's Pupil", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Cleaver"}
{name:"Islestrike", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Twin Axe"}
{name:"Pompeii's Wrath", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Crowbill"}
{name:"Guardian Naga", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Naga"}
{name:"Warlord's Trust", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Military Axe"}
{name:"Spellsteel", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Bearded Axe"}
{name:"Stormrider", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Tabar"}
{name:"Boneslayer Blade", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Gothic Axe"}
{name:"The Minotaur", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Ancient Axe"}
{name:"Razor's Edge", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Tomahawk"}
{name:"Rune Master", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Ettin Axe"}
{name:"Cranebeak", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"War Spike"}
{name:"Death Cleaver", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Berserker Axe"}
{name:"Ethereal Edge", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Silver-Edged Axe"}
{name:"Hellslayer", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Decapitator"}
{name:"Messerschmidt's Reaver", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Champion Axe"}
{name:"Executioner's Justice", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Glorious Axe"}
{name:"Felloak", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Club"}
{name:"Stoutnail", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Spiked Club"}
{name:"Crushflange", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Mace"}
{name:"Bloodrise", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Morning Star"}
{name:"The General's Tan Do Li Ga", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Flail"}
{name:"Ironstone", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"War Hammer"}
{name:"Bonesnap", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Maul"}
{name:"Steeldriver", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Great Maul"}
{name:"Dark Clan Crusher", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Cudgel"}
{name:"Fleshrender", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Barbed Club"}
{name:"Sureshrill Frost", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Flanged Mace"}
{name:"Moonfall", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Jagged Star"}
{name:"Baezil's Vortex", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Knout"}
{name:"Earthshaker", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Battle Hammer"}
{name:"Bloodtree Stump", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"War Club"}
{name:"The Gavel of Pain", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Martel de Fer"}
{name:"Nord's Tenderizer", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Truncheon"}
{name:"Demon Limb", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Tyrant Club"}
{name:"Baranar's Star", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Devil Star"}
{name:"Horizon's Tornado"}
{name:"Stone Crusher"}
{name:"Windhammer", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Ogre Maul"}
{name:"Earth Shifter"}
{name:"Knell Striker", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Scepter"}
{name:"Rusthandle", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Grand Scepter"}
{name:"Stormeye", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"War Scepter"}
{name:"Zakarum's Hand", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Rune Scepter"}
{name:"The Fetid Sprinkler", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Holy Water Sprinkler"}
{name:"Hand of Blessed Light", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Divine Scepter"}
{name:"Heaven's Light"}
{name:"Astreon's Iron Ward", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Caduceus"}
{name:"Rixot's Keen", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Short Sword"}
{name:"Blood Crescent", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Scimitar"}
{name:"Skewer of Krintiz", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Saber"}
{name:"Gleamscythe", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Falchion"}
{name:"Griswold's Edge", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Broad Sword"}
{name:"Hellplague", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Long Sword"}
{name:"Culwen's Point", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"War Sword"}
{name:"Shadowfang", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Two-handed Sword"}
{name:"Soulflay", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Claymore"}
{name:"Kinemil's Awl", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Giant Sword"}
{name:"Blacktongue", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Bastard Sword"}
{name:"Ripsaw", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Flamberge"}
{name:"The Patriarch", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Great Sword"}
{name:"Bloodletter", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Gladius"}
{name:"Coldsteel Eye", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Cutlass"}
{name:"Hexfire", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Shamshir"}
{name:"Blade of Ali Baba"}
{name:"Ginther's Rift", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Dimensional Blade"}
{name:"Headstriker", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Battle Sword"}
{name:"Plague Bearer", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Rune Sword"}
{name:"The Atlantean", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Ancient Sword"}
{name:"Crainte Vomir", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Espandon"}
{name:"Bing Sz Wang", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Dacian Falx"}
{name:"The Vile Husk", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Tusk Sword"}
{name:"Cloudcrack", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Gothic Sword"}
{name:"Todesfaelle Flamme", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Zweihander"}
{name:"Swordguard", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Executioner Sword"}
{name:"Djinn Slayer"}
{name:"Bloodmoon", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Elegant Blade"}
{name:"Lightsabre"}
{name:"Frostwind", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Cryptic Sword"}
{name:"Flamebellow", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Balrog Blade"}
{name:"Doombringer", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Champion Sword"}
{name:"The Grandfather", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Colossus Blade"}
{name:"Gull", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Dagger"}
{name:"The Diggler", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Dirk"}
{name:"The Jade Tan Do", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Kriss"}
{name:"Spectral Shard", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Blade"}
{name:"Spineripper", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Poignard"}
{name:"Heart Carver", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Rondel"}
{name:"Blackbog's Sharp", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Cinquedeas"}
{name:"Stormspike", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Stilleto"}
{name:"Wizardspike", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Bone Knife"}
{name:"Fleshripper", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Fanged Knife"}
{name:"Ghostflame", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Legend Spike"}
{name:"Dimoak's Hew", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Bardiche"}
{name:"Steelgoad", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Voulge"}
{name:"Soul Harvest", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Scythe"}
{name:"The Battlebranch", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Poleaxe"}
{name:"Woestave", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Halberd"}
{name:"The Grim Reaper", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"War Scythe"}
{name:"The Meat Scraper", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Lochaber Axe"}
{name:"Blackleach Blade", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Bill"}
{name:"Athena's Wrath", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Battle Scythe"}
{name:"Pierre Tombale Couant", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Partizan"}
{name:"Husoldal Evo", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Bec-de-Corbin"}
{name:"Grim's Burning Dead", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Grim Scythe"}
{name:"Bonehew"}
{name:"The Reaper's Toll", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Thresher"}
{name:"Tomb Reaver"}
{name:"Stormspire", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Giant Thresher"}
{name:"The Dragon Chang", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Spear"}
{name:"Razortine", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Trident"}
{name:"Bloodthief", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Brandistock"}
{name:"Lance of Yaggai", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Spetum"}
{name:"The Tannr Gorerod", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Pike"}
{name:"The Impaler", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"War Spear"}
{name:"Kelpie Snare", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Fuscina"}
{name:"Soulfeast Time", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"War Fork"}
{name:"Hone Sundan"}
{name:"Spire of Honor", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Lance"}
{name:"Arioc's Needle", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Hyperion Spear"}
{name:"Viperfork", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Mancatcher"}
{name:"Steel Pillar", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"War Pike"}
{name:"Demon's Arch", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Balrog Spear"}
{name:"Wraith Flight", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Ghost Glaive"}
{name:"Gargoyle's Bite", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Winged Harpoon"}
{name:"The Scalper", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Francisca"}
{name:"Deathbit", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Battle Dart"}
{name:"Gimmershred", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Flying Axe"}
{name:"Warshrike", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Winged Knife"}
{name:"Lacerator", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Winged Axe"}
{name:"Pluckeye", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Short Bow"}
{name:"Witherstring", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Hunter's Bow"}
{name:"Raven Claw", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Long Bow"}
{name:"Rogue's Bow", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Composite Bow"}
{name:"Stormstrike", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Short Battle Bow"}
{name:"Wizendraw", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Long Battle Bow"}
{name:"Hellclap", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Short War Bow"}
{name:"Blastbark", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Long War Bow"}
{name:"Skystrike", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Edge Bow"}
{name:"Riphook", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Razor Bow"}
{name:"Kuko Shakaku", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Cedar Bow"}
{name:"Endlesshail", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Double Bow"}
{name:"Witchwild String"}
{name:"Cliffkiller", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Long Siege Bow"}
{name:"Magewrath", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Rune Bow"}
{name:"Goldstrike Arch", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Gothic Bow"}
{name:"Eaglehorn", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Crusader Bow"}
{name:"Widowmaker", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Ward Bow"}
{name:"Windforce", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Hydra Bow"}
{name:"Leadcrow", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Light Crossbow"}
{name:"Ichorsting", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Crossbow"}
{name:"Hellcast", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Heavy Crossbow"}
{name:"Doomslinger", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Repeating Crossbow"}
{name:"Langer Briser", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Arbalest"}
{name:"Pus Spitter", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Siege Crossbow"}
{name:"Buriza-Do Kyanon", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Ballista"}
{name:"Demon Machine", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Chu-Ko-Nu"}
{name:"Hellrack"}
{name:"Gut Siphon", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Demon Crossbow"}
{name:"Bane Ash", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Short Staff"}
{name:"Serpent Lord", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Long Staff"}
{name:"Spire of Lazarus", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Gnarled Staff"}
{name:"The Salamander", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Battle Staff"}
{name:"The Iron Jang Bong", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"War Staff"}
{name:"Razorswitch", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Jo Staff"}
{name:"Ribcracker", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Quarterstaff"}
{name:"Chromatic Ire", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Cedar Staff"}
{name:"Warpspear", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Gothic Staff"}
{name:"Skull Collector", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Rune Staff"}
{name:"Ondal's Wisdom", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Elder Staff"}
{name:"Mang Song's Lesson", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Archon Staff"}
{name:"Torch of Iro", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Wand"}
{name:"Maelstrom", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Yew Wand"}
{name:"Gravenspine", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Bone Wand"}
{name:"Ume's Lament", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Grim Wand"}
{name:"Suicide Branch", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Burnt Wand"}
{name:"Carin Shard", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Petrified Wand"}
{name:"Arm of King Leoric", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Tomb Wand"}
{name:"Blackhand Key", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Grave Wand"}
{name:"Boneshade", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Lich Wand"}
{name:"Death's Web", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Unearthed Wand"}
{name:"Bartuc's Cut-Throat", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Greater Talons"}
{name:"Jade Talon", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Wrist Sword"}
{name:"Shadow Killer", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Battle Cestus"}
{name:"Firelizard's Talons", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Feral Claws"}
{name:"The Oculus", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Swirling Crystal"}
{name:"Eschuta's Temper", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Eldritch Orb"}
{name:"Death's Fathom", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Dimensional Shard"}
{name:"Titan's Revenge", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Ceremonial Javelin"}
{name:"Thunderstroke", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Matriarchal Javelin"}
{name:"Lycander's Aim", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Ceremonial Bow"}
{name:"Blood Raven's Charge", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Matriarchal Bow"}
{name:"Lycander's Flank", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Ceremonial Pike"}
{name:"Stoneraven", req_strength:0, req_level:0, damage_min:0, damage_max:0, e_damage:0, base:"Matriarchal Spear"}

*/