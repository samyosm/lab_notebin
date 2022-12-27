package com.samyosm.notebinapi.repositories;

import com.samyosm.notebinapi.models.NoteItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface NoteRepository extends MongoRepository<NoteItem, String> {
    @Query("{_id:'?0'}")
    NoteItem findItemById(String id);

    public long count();
}
