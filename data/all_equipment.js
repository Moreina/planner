

var equipped = { helm:{name:"none"}, armor:{name:"none"}, gloves:{name:"none"}, boots:{name:"none"}, belt:{name:"none"}, amulet:{name:"none"}, ring1:{name:"none"}, ring2:{name:"none"}, weapon:{name:"none"}, offhand:{name:"none"}, charms:{name:"none"} }
var equipped_charms = { id1:{name:"none"}, id2:{name:"none"} }

var unequipped = {strength:0, dexterity:0, vitality:0, energy:0, life:0, mana:0, defense:0, ar:0, stamina:0,
/* main stats		*/	fRes_max:75, cRes_max:75, lRes_max:75, pRes_max:75, mRes_max:75, fRes:0, cRes:0, lRes:0, pRes:0, mRes:0,
/* skill tabs		*/	skills_javelins:0, skills_passives:0, skills_bows:0, skills_martial:0, skills_shadow:0, skills_traps:0, skills_warcries:0, skills_masteries:0, skills_combat_barbarian:0, skills_elemental:0, skills_shapeshifting:0, skills_summoning_druid:0, skills_summoning_necromancer:0, skills_poisonBone:0, skills_curses:0, skills_offensive:0, skills_defensive:0, skills_combat_paladin:0, skills_cold:0, skills_lightning:0, skills_fire:0, skills_amazon:0, skills_assassin:0, skills_barbarian:0, skills_druid:0, skills_necromancer:0, skills_paladin:0, skills_sorceress:0,
/* skills		*/	skill_lightning_fury:0, skill_lightning_strike:0, skill_glacial_spike:0,
/* stats		*/	cdr:0, fcr:0, fbr:0, fhr:0, frw:0, ias:0, pierce:0, cblow:0, dstrike:0, cstrike:0, owounds:0, fDamage:0, cDamage:0, lDamage:0, pDamage:0, fPierce:0, cPierce:0, lPierce:0, pPierce:0, pdr:0, damage_reduced:0, mDamage_reduced:0, mf:0, gf:0, life_leech:0, mana_leech:0, life_per_hit:0, mana_per_hit:0, life_per_ranged_hit:0, mana_per_ranged_hit:0, fAbsorb:0, cAbsorb:0, lAbsorb:0, pAbsorb:0, mAbsorb:0, fAbsorb_flat:0, cAbsorb_flat:0, lAbsorb_flat:0, mAbsorb_flat:0, 
/* stats (indirect)	*/	all_skills:0, all_attributes:0, all_res:0, velocity:0, damage_bonus:0, max_life:0, max_mana:0, life_per_level:0, mana_per_level:0, defense_per_level:0, strength_per_level:0, mf_per_level:0, fAbsorb_per_level:0, fcr_per_level:0, dstrike_per_level:0, stamina_per_level:0, vitality_per_level:0,
/* attack damage	*/	damage_min:0, damage_max:0, fDamage_min:0, fDamage_max:0, cDamage_min:0, cDamage_max:0, lDamage_min:0, lDamage_max:0, pDamage_min:0, pDamage_max:0, mDamage_min:0, mDamage_max:0, min_damage_per_level:0, max_damage_per_level:0, kick_min:0,
/* not displayed	*/	ibc:0, itd:0, pmh:0, cbf:0, peace:0, life_per_kill:0, mana_per_kill:0, damage_vs_demons:0, damage_vs_undead:0, ar_vs_demons:0, ar_vs_undead:0, damage_to_mana:0, slow_target:0, light_radius:0, thorns:0, thorns_per_level:0, slower_stam_drain:0, heal_stam:0, life_regen:0, mana_regen:0, knockback:0, missile_defense:0, target_defense:0, enemy_fRes:0, enemy_cRes:0, enemy_lRes:0, enemy_pRes:0, ar_vs_undead_per_level:0, damage_vs_undead_per_level:0,
/* charges		*/	charges_poison_creeper:0, charges_oak_sage:0, charges_iron_maiden:0, charges_iron_golem:0, 
};

var equipment = {
    helm: [
{name:"Helm"},
{name:"Peasant Crown", req_strength:20, req_level:28, defense:108, all_skills:1, frw:15, life_regen:12, energy:20, vitality:20},
{name:"Rockstopper", req_strength:43, req_level:31, defense:201, pdr:10, fhr:30, cRes:40, fRes:50, lRes:40, vitality:15},
{name:"Vampire Gaze", req_strength:58, req_level:41, defense:252, life_leech:8, mana_leech:8, pdr:20, slower_stam_drain:15, cDamage_min:6, cDamage_max:22, mDamage_reduced:15},
{name:"Harlequin Crest (Shako)", req_strength:50, req_level:62, defense:141, mf:50, all_skills:2, life_per_level:1.5, mana_per_level:1.5, pdr:10, all_attributes:2},
{name:"Andariel's Visage", req_strength:102, req_level:83, defense:387, all_skills:2, ias:20, life_leech:10, strength:30, fRes:-30, pRes:70, pRes_max:10 },
{name:"Nightwing's Veil", req_strength:96, req_level:67, defense:352, all_skills:2, cDamage:15, dexterity:20, cAbsorb_flat:9},
//{name:"Griffon's Eye", req_level:76, defense:260, all_skills:1, lDamage:15, fcr:25, enemy_lRes:-20},
//{name:"Crown of Ages", req_strength:174, req_level:82, defense:399, all_skills:1, pdr:15, all_res:30, fhr:30, sockets:2},
//{name:"Tarnhelm", },
//{name:"Steel Shade", },
	],
    armor: [
{name:"Armor"},
{name:"Skin of the Vipermagi", req_strength:43, req_level:29, defense:279, all_skills:1, fcr:30, mDamage_reduced:13, all_res:35},
{name:"Shaftstop", req_strength:92, req_level:38, defense:684, velocity:-5, pdr:30, missile_defense:250, life:60},
{name:"Tyrael's Might", req_level:84, defense:1502, velocity:-5, frw:20, damage_vs_demons:100, strength:30, all_res:30, cbf:1, cdr:10, peace:1},
{name:"Naj's Light Plate", req_strength:79, req_level:71, defense:830, velocity:-10, all_skills:1, damage_to_mana:45, all_res:25, life:65},
{name:"Guardian Angel", req_strength:118, req_level:45, defense:825, velocity:-10, ibc:20, fbr:30, light_radius:4, all_res:15, fRes_max:7, cRes_max:7, lRes_max:7, pRes_max:7, ar_per_level:2.5, skills_offensive:1, skills_defensive:1, skills_combat_paladin:1}, // implement skills_paladin etc
{name:"Tal Rasha's Guardianship", req_strength:84, req_level:71, defense:941, velocity:-5, mDamage_reduced:15, cRes:40, lRes:40, fRes:40, mf:88},
{name:"Enigma Archon Plate", req_strength:103, req_level:65, defense:1299, all_skills:2, frw:45, strength_per_level:0.75, max_life:5, pdr:8, life_per_kill:14, damage_to_mana:15, mf_per_level:1},
{name:"Chains of Honor Archon Plate", req_strength:103, req_level:65, defense:890, all_skills:2, strength:20, life_leech:8, pdr:8, all_res:65, life_regen:7, damage_vs_demons:200, damage_vs_undead:100, mf:25},
//{name:"Arkaine's Valor", req_strength:165, req_level:85, defense:1450, all_skills:2, fhr:30, damage_reduced:15, vitality_per_level:0.5}, // implement vitality per level
//{name:"Fortitude Archon Plate", req_strength:103, req_level:59, defense:1572, fcr:25, life_per_level:1.5, life_regen:7 lRes_max:5, all_res:30, damage_to_mana:12, light_radius:1, damage_reduced:7, ed:300},	// implement ED
//{name:"Que-Hegan's Wisdom", },
//{name:"Duriel's Shell", },
//{name:"Skullder's Ire", },
//{name:"Corpsemourn", },
//{name:"Ormus Robes", },
//{name:"The Gladiator's Bane", },
//{name:"Leviathan", },
//{name:"Templar's Might", },
//{name:"The Spirit Shroud", },
//{name:"Bramble", },
//{name:"Rain", },
//{name:"Stealth", },
//{name:"Arkaine's Valor", },
	],
    gloves: [
{name:"Gloves"},
{name:"Chance Guards", req_strength:25, req_level:15, defense:28, ar:25, mf:40, gf:200, light_radius:2},
{name:"Magefist", req_strength:45, req_level:23, defense:25, skills_fire:1, fcr:20, mana_regen:25, fDamage_min:1, fDamage_max:6},
//{name:"Frostburn", req_strength:60, req_level:29, defense:49, max_mana:35, damage_bonus:5, cDamage_min:1, cDamage_max:6},
{name:"Dracul's Grasp", req_strength:50, req_level:76, defense:145, strength:15, life_per_kill:10, owounds:25, life_leech:10},
{name:"Laying of Hands", req_strength:50, req_level:63, defense:87, ias:20, fRes:50, damage_vs_demons:250},
{name:"Ghoulhide", req_strength:58, req_level:36, defense:130, ar_vs_undead_per_level:8, damage_vs_undead_per_level:2, mana_leech:5, life:20},
{name:"Trang-Oul's Claws", req_strength:58, req_level:45, defense:74, skills_curses:2, fcr:20, cRes:30, pDamage:25},
	],
    boots: [
{name:"Boots"},
{name:"Infernostride", req_strength:20, req_level:29, defense:105, kick_min:26, frw:20, fRes:30, fRes_max:10, fire_min:12, fire_max:33, gf:70, light_radius:2},
{name:"Waterwalk", req_strength:47, req_level:32, defense:124, kick_min:28, frw:20, dexterity:15, fRes_max:5, stamina:40, life:65, missile_defense:100, heal_stam:50},
{name:"Silkweave", req_strength:65, req_level:36, defense:130, kick_min:32, frw:30, mana_per_kill:5, max_mana:10, missile_defense:200},
{name:"War Traveler", req_strength:95, req_level:42, defense:139, kick_min:37, frw:25, vitality:10, strength:10, mf:50, damage_min:15, damage_max:25, thorns:10, slower_stam_drain:40},
{name:"Gore Rider", req_strength:94, req_level:47, defense:162, kick_min:39, frw:30, owounds:10, cblow:15, dstrike:15, stamina:20},
{name:"Sandstorm Trek", req_strength:91, req_level:64, defense:178, kick_min:60, frw:20, fhr:20, stamina_per_level:1, strength:15, vitality:15, slower_stam_drain:50, pRes:70},
{name:"Shadow Dancer", req_strength:167, req_level:71, defense:144, kick_min:83, skills_shadow:2, frw:30, fhr:30, dexterity:25},
{name:"Aldur's Advance", req_strength:95, req_level:45, defense:47, kick_min:37, frw:40, stamina:180, damage_to_mana:10, heal_stam:32, life:50, fRes:50},
//{name:"Marrowwalk", },
	],
    belt: [
{name:"Belt"},
{name:"Goldwrap", req_strength:45, req_level:27, defense:36, ias:10, mf:30, gf:80, light_radius:2},
{name:"String of Ears", req_strength:20, req_level:29, defense:113, life_leech:8, pdr:15, mDamage_reduced:15},
{name:"Verdungo's Hearty Cord", req_strength:106, req_level:63, defense:158, pdr:15, fhr:10, vitality:40, life_regen:13, stamina:120},
{name:"Razortail", req_strength:20, req_level:32, defense:107, damage_max:10, pierce:33, dexterity:15, thorns_per_level:1},
{name:"Snowclash", req_strength:88, req_level:42, defense:116, skills_cold:1, cAbsorb_flat:15, skill_glacial_spike:3, cRes_max:5},
{name:"Thundergod's Vigor", req_strength:110, req_level:47, defense:159, lAbsorb_flat:20, lRes_max:10, strength:20, vitality:20, skill_lightning_fury:3, skill_lightning_strike:3, lDamage_min:1, lDamage_max:50},
{name:"Arachnid Mesh", req_strength:50, req_level:80, defense:138, all_skills:1, fcr:20, max_mana:5, slow_target:10},
	],
    amulet: [
{name:"Amulet"},
//{name:"Corrupted +4 skills #1", req_level:60, all_skills:1, skills_martial:3, skills_warcries:3, skills_elemental:3, skills_summoning_necromancer:3, skills_defensive:3, skills_cold:3},
//{name:"Corrupted +4 skills #2", req_level:60, all_skills:1, skills_passives:3, skills_shadow:3, skills_masteries:3, skills_shapeshifting:3, skills_poisonBone:3, skills_offensive:3, skills_lightning:3},
//{name:"Corrupted +4 skills #3", req_level:60, all_skills:1, skills_traps:3, skills_summoning_druid:3, skills_curses:3, skills_combat_paladin:3, skills_fire:3},
{name:"Mara's Kaleidoscope", req_level:67, all_skills:2, all_res:30, all_attributes:5},
{name:"Highlord's Wrath", req_level:65, all_skills:1, ias:20, dstrike_per_level:0.375, lRes:35, lDamage_min:1, lDamage_max:30, thorns:15},
{name:"Seraph's Hymn", req_level:65, all_skills:2, skills_defensive:2, damage_vs_demons:50, damage_vs_undead:50, ar_vs_demons:250, ar_vs_undead:250, light_radius:2},
{name:"The Cat's Eye", req_level:50, frw:30, ias:20, defense:100, dexterity:25, missile_defense:100},
{name:"Metalgrid", req_level:81, ar:450, all_res:35, defense:350, charges_iron_maiden:12, charges_iron_golem:22},
{name:"The Rising Sun", req_level:65, skills_fire:2, fAbsorb_per_level:0.75, fDamage_min:24, fDamage_max:48, life_regen:10, light_radius:4},
{name:"The Eye of Etlich", req_level:15, all_skills:1, life_leech:7, cDamage_min:2, cDamage_max:5, missile_defense:40, light_radius:5},
{name:"Telling of Beads", req_level:30, all_skills:1, pRes:50, cRes:18, thorns:10},
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
//{name:"Wisp Projector", req_level:76, lAbsorb:12, mf:20, frw:8, damage_bonus:10},
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
//{name:"Wisp Projector", req_level:76, lAbsorb:12, mf:20, frw:8, damage_bonus:10},
	],
    weapon: [
{name:"Weapon"},
{name:"Khalim's Will", type:"mace", ias:50, ar:40, life_leech:6, mana_leech:6, damage_vs_undead:50, damage_min:1, damage_max:15, lDamage_min:1, lDamage_max:40},
{name:"Spirit Crystal Sword", req_strength:43, req_level:25, type:"sword", all_skills:2, fcr_per_level:0.375, fhr:55, life_leech:7, mana_per_level:1, missile_defense:75, mAbsorb_flat:8, damage_min:5, damage_max:15, pDamage_min:75, pDamage_max:75, lDamage_min:1, lDamage_max:50, cDamage_min:3, cDamage_max:14},
{name:"Heart of the Oak Flail", req_dexterity:35, req_strength:41, req_level:55, type:"mace", all_skills:3, fcr:40, mana_leech:7, dexterity:10, life_regen:20, max_mana:15, all_res:40, max_life:8, damage_min:1, damage_max:24, cDamage_min:3, cDamage_max:14},
{name:"Lightsabre", req_dexterity:136, req_strength:25, req_level:58, type:"sword", mana_leech:7, ias:20, itd:1, lAbsorb:15, light_radius:7, damage_min:103, damage_max:135, mDamage_min:60, mDamage_max:120, lDamage_min:1, lDamage_max:200},
{name:"Grief Phase Blade", req_dexterity:136, req_strength:25, req_level:59, type:"sword", ias:40, itd:1, target_defense:-25, enemy_pRes:-25, dstrike:20, pmh:1, mana_per_kill:2, life_per_kill:15, fDamage_min:5, fDamage_max:30, min_damage_per_level:3.375, max_damage_per_level:3.625, damage_min:31, damage_max:35},
//{name:"The Cranium Basher", req_strength:253, req_level:87, type:"mace", cblow:75, ias:20, all_res:25, strength:25, damage_min:132, damage_max:652, damage_vs_undead:50},
//{name:"Windforce", req_dexterity:167, req_strength:134, req_level:73, type:"bow", ias:20, mana_leech:8, strength:10, dexterity:5, knockback:1, damage_min:35, damage_max:241, damage_max_per_level:3.125, heal_stam:30},
//{name:"Death Cleaver", req_dexterity:59, req_strength:138, req_level:70, type:"axe", ias:40, damage_min:91, damage_max:269, target_defense:-33, dstrike:66, life_per_kill:9},
//
	],
    offhand: [
{name:"Offhand"},
{name:"Stormshield", req_strength:156, req_level:73, defense:519, pdr:30, fbr:35, cRes:60, lRes:25, strength:30, defense_per_level:3.75, ibc:25, thorns:10},
{name:"Spirit Monarch", req_strength:156, req_level:54, defense:148, all_skills:2, fcr:35, fhr:55, vitality:22, mana:112, cRes:35, lRes:35, pRes:35, missile_defense:250, thorns:14, mAbsorb_flat:8},
{name:"Lidless Wall", req_strength:58, req_level:41, defense:347, all_skills:1, max_mana:10, fcr:20, mana_per_kill:5, energy:10, light_radius:1},
//{name:"Spike Thorn", },
//{name:"Radament's Sphere", },
//{name:"Medusa's Gaze", },
//{name:"Head Hunter's Glory", },
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
