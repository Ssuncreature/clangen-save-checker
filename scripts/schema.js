var clandev = {
    "save_id": "string",
    "displayname": "string",
    "clanage": "number",
    "biome": biomes,
    "camp_bg": background,
    "clan_symbol": "string",
    "gamemode": gamemodes,
    "cruel_cards": ["string"],
    "used_group_IDs": {
        "1": "player_clan",
        "2": "starclan",
        "3": "unknown_residence",
        "4": "dark_forest"
    },
    "last_focus_change": "string",
    "clans_in_focus": ["string"],
    "instructor": "string",
    "reputation": "number",
    "mediated": ["string"],
    "starting_season": season,
    "temperament": [
        "string"
    ],
    "just_died": ["string"],
    "dead_cats_to_grieve": ["string"],
    "grief_to_assign": {},
    "version_name": "number",
    "version_commit": "string",
    "source_build": "booleen",
    "custom_pronouns": {},
    "leader": "string",
    "leader_lives": "number",
    "leader_predecessors": "number",
    "deputy": "string",
    "deputy_predecessors": "number",
    "med_cat": "string",
    "med_cat_number": "number",
    "med_cat_predecessors": "number",
    "clan_cats": "string",
    "faded_cats": "string",
    "patrolled_cats": [
        "string"
    ],
    "other_clans": [
        {
            "group_ID": "string",
            "name": "string",
            "relations": "number",
            "temperament": [
                "string"
            ],
            "chosen_symbol": "string"
        }
    ],
    "war": {
        "at_war": "booleen",
        "enemy": "string",
        "duration": 0
    },
    "poi": {
        "gathering": [
            "string"
        ],
        "moonplace": [
            "string"
        ],
        "terrain": [
            "string"
        ]
    }
}
const biomes = [
    "Forest",
    "Plains",
    "Mountainous",
    "Beach"
]
const background = [
    "camp1",
    "camp2",
    "camp3",
    "camp4"
]
const gamemodes = [
    "classic",
    "expanded",
    "cruel_season"
]
const season = [
    "Newleaf",
    "Greenleaf",
    "Leafbare",
    "Leaffall"
]