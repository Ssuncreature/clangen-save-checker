function IDcompare(){
  event.preventDefault()
  /**
       * @typedef CatsID
       * @type {object}
       * @property {string} ID
       */
  /**
   * @typedef ClanID
   * @type {object}
   * @property {string} IDs
   */

    /** READ THE FILES GOES HERE */

  const memberByID = {}
    for (const member of clanCats) {
      memberByID[member.ID] = member;
    }
  missing_cats = {}

    if (member.ID (not in clan.clan_cats)) {
      missing_cats.append(member.ID)
    }
}