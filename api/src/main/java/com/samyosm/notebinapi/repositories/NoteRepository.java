package com.samyosm.notebinapi.repositories;

import com.samyosm.notebinapi.models.NoteItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NoteRepository extends MongoRepository<NoteItem, String> {

}
