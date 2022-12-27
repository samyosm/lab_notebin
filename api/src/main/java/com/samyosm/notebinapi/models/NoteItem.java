package com.samyosm.notebinapi.models;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("notes")
@RequiredArgsConstructor
@Getter
@Setter
public class NoteItem {
    @Id
    private final String id;
    private final String title;
    private final String content;
}
