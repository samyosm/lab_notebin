package com.samyosm.notebinapi.models;

import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("notes")
@RequiredArgsConstructor
public class NoteItem {
    @Id
    private final String id;
    private final String title;
    private final String content;
}
