const NoteService = {
    getAllNotes(knex){
        return knex('notes').select('*')
    },

    insertNote(knex, note) {
        return knex('notes')
            .insert(note)
            .into('notes')
            .returning('*')
            .then(rows => rows[0])
    },

    getById(knex, id){
        return knex 
            .from('notes')
            .select('*')
            .where('id', id)
            .first()
    },

    deleteNote(knex, id){
        return knex('notes')
            .where({id})
            .delete()
    },

    updateNote(knex, id, newNoteFields){
        return knex('notes')
            .where({id})
            .update(newNoteFields)
    },
}

module.exports = NoteService