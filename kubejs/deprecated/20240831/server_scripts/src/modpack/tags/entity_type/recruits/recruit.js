ServerEvents.tags('entity_type', event => {
    const EntityTypeTag$recruits_recruit = 'recruits:recruit';
    /**@type {Array<Special.EntityType>} */
    const recruits_recruit = [
        'recruits:bowman',
        'recruits:captain',
        'recruits:crossbowman',
        'recruits:horseman',
        'recruits:messenger',
        'recruits:nomad',
        'recruits:patrol_leader',
        'recruits:recruit',
        'recruits:recruit_shieldman'
    ];
    for (const recruit of recruits_recruit) {
        event.add(EntityTypeTag$recruits_recruit, recruit);
    }   
})